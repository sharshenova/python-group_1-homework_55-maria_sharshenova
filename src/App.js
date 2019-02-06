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

  updateIngredient = (name, modifier) => {
    // find - метод массива, который работает аналогично findIndex,
    // но находит не индекс элемента в массиве,
    // а возвращает сам элемент.
    let price = availableIngredients.find(item => item.name === name).price;

    // скопировать состояние (state) компонента App.js
    let state = {...this.state};

    let ingredient = state.ingredients.find(item => item.name === name);

    ingredient.count += modifier;
    ingredient.disable = ingredient.count < 1;
    ingredient.total = ingredient.count * price;

    state.totalPrice = basePrice + state.ingredients.reduce((sum, item) => sum + item.total, 0);

    // задать новый state с перерисовкой компонентов на странице
    this.setState(state);
  }

  ingredientLabel = (name) => {
    let label = availableIngredients.find(item => item.name === name).label;
    console.log(label);
    return label;
  }


render() {
        return (
            <div className="App">
                <Burger ingredients={this.state.ingredients}/>
                <BurgerForm ingredientLabel={this.ingredientLabel} removeIngredient={this.removeIngredient} addIngredient={this.addIngredient} totalPrice={this.state.totalPrice} ingredients={this.state.ingredients} />
          
                {/* здесь вывести панель с общей ценой */}
                    {/* для подсчёта цены можно добавить метод в App.js */}
                    {/* и вызвать его в фигурных скобках в JSX, */}
                    {/* чтобы получить и вывести результат. */}
                {/* под ценой вывести форму BurgerForm */}
                    {/* в форме вывести IngredientControl для каждого ингредиента */}
            </div>
        );
    }


};




export default App;
