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


class App extends Component {
  state = {
    ingredients: [
      {name: 'salad', count: 1, total: 0, disable: true, label: 'Салат'},
      {name: 'cheese', count: 1, total: 0, disable: true, label: 'Сыр'},
      {name: 'meat', count: 2, total: 0, disable: true, label: 'Мясо'},
      {name: 'bacon', count: 1, total: 0, disable: true, label: 'Бекон'}
    ],
    totalPrice: 10,
  };


  addIngredient = (name) => {
      // скопировать объект "ингредиент" (находим по ключу)
      let ingredient = {...this.state.ingredients[name]};

      // find - метод массива, который работает аналогично findIndex,
      // но находит не индекс элемента в массиве,
      // а возвращает сам элемент.
      let price = availableIngredients.find(item => item.name === name).price;

      // поменять свойства в копии ингредиента
      ingredient.count += 1;
      ingredient.total = ingredient.count * price;


      // скопипровать объект "ингредиенты"
      let ingredients = {...this.state.ingredients};

      // поменять ингредиент в копии объекта "ингредиенты"
      ingredients[name] = ingredient;


      // скопировать состояние (state) компонента App.js
      let state = {...this.state};

      // поменять объект "игредиенты" в копии состояния (state)
      state.ingredients = ingredients;

      // задать новый state с перерисовкой компонентов на странице
      this.setState(state);
  };

  removeIngredient = (name) => {
      // всё то же самое, что и в addIngredient
      // только количество уменьшается на 1, а не увеличивается
      // и есть проверка, что нельзя уменьшить количество ингредиента меньше 0

      let ingredient = {...this.state.ingredients[name]};

      let price = availableIngredients.find(item => item.name === name).price;

      if (ingredient.count > 0) {
          ingredient.count -= 1;
      }
      ingredient.total = ingredient.count * price;

      let ingredients = {...this.state.ingredients};
      ingredients[name] = ingredient;

      let state = {...this.state};
      state.ingredients = ingredients;

      this.setState(state);
  };


render() {
        return (
            <div className="App">
                <Burger ingredients={this.state.ingredients}/>
                <BurgerForm removeIngredient={this.removeIngredient} addIngredient={this.addIngredient} totalPrice={this.state.totalPrice} ingredients={this.state.ingredients} />
          
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
