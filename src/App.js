import React, { Component } from 'react';
import './App.css';
import Burger from './Components/Burger/Burger';


const availableIngredients = {
  salad: {price: 5, label: 'Салат'},
  cheese: {price: 20, label: 'Сыр'},
  meat: {price: 30, label: 'Мясо'},
  bacon: {price: 20, label: 'Bacon'}
};


class App extends Component {
  state = {
    ingredients: {
      salad: {count: 1, total: 0},
      cheese: {count: 2, total: 0},
      meat: {count: 2, total: 0},
      bacon: {count: 1, total: 0}
    }
  };

render() {
        return (
            <div className="App">
                <Burger ingredients={this.state.ingredients}/>
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
