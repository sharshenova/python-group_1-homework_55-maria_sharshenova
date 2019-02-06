import React, { Component } from 'react';
import './App.css';
import Burger from './Components/Burger/Burger';
import BurgerForm from './Components/BurgerForm/BurgerForm';


const availableIngredients = [
  {name: 'salad', price: 5, label: 'Салат'},
  {name: 'cheese', price: 20, label: 'Сыр'},
  {name: 'meat', price: 30, label: 'Мясо'},
  {name: 'bacon', price: 20, label: 'Бекон'}
];

const basePrice = 20;

class App extends Component {
  state = {
    ingredients: [
      {name: 'salad', count: 0, total: 0, disable: true},
      {name: 'cheese', count: 0, total: 0, disable: true},
      {name: 'meat', count: 0, total: 0, disable: true},
      {name: 'bacon', count: 0, total: 0, disable: true}
    ],
    totalPrice: basePrice
  };


  addIngredient = (name) => {
    this.updateIngredient(name, 1);
  };

  removeIngredient = (name) => {
    this.updateIngredient(name, -1);
  };

  // функция, отвечающая за добавление или удаление ингредиента
  // в зависимости от переданного модификатора (1 или -1 соответственно)
  updateIngredient = (name, modifier) => {
    
    // find - метод массива, который работает аналогично findIndex,
    // но находит не индекс элемента в массиве, а возвращает сам элемент
    let price = availableIngredients.find(item => item.name === name).price;

    // копируем состояние (state) компонента App.js
    let state = {...this.state};

    // находим нужный ингредиент по имени в скопированном "state"
    let ingredient = state.ingredients.find(item => item.name === name);

    // увеличиваем/уменьшаем количество игредиента на 1 
    ingredient.count += modifier;
    // задаем ingredient.disable=True, когда количество игредиента становится < 1
    ingredient.disable = ingredient.count < 1;
    // находим стоимость ингредиента
    ingredient.total = ingredient.count * price;

    // вычисляем стоимость бургера: базовая цена +
    // сумма всех значений "total" в state.ingredients:
    state.totalPrice = basePrice + state.ingredients.reduce((sum, item) => sum + item.total, 0);

    // задаем новый state с перерисовкой компонентов на странице:
    this.setState(state);
  }

  // возврашаем label ингредиента из const availableIngredients
  ingredientLabel = (name) => {
    let label = availableIngredients.find(item => item.name === name).label;
    return label;
  }


render() {
        return (
            <div className="App">
                <Burger ingredients={this.state.ingredients}/>
                <BurgerForm ingredientLabel={this.ingredientLabel} removeIngredient={this.removeIngredient} addIngredient={this.addIngredient} totalPrice={this.state.totalPrice} ingredients={this.state.ingredients} />
            </div>
        );
    }
};




export default App;
