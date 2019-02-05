import React, { Component } from 'react';
import Bacon from './Bacon/Bacon';
import Cheese from './Cheese/Cheese';
import Meat from './Meat/Meat';
import Salad from './Salad/Salad';

function Burger(props) {
  // распаковка ключей props.ingredients в 4 переменных: salad, meat, cheese, bacon
  // props.ingredients приходит из state.ingredients компонента App.js
  const {salad, meat, cheese, bacon} = props.ingredients;

  // создаём массивы из компонентов Salad, Meat, Cheese и Bacon,
  // используя количество, указанное в свойстве count каждого ингредиента.
  // на самом деле здесь можно обойтись одним массивом
  // и добавлять все новые элементы в один и тот же массив ingredients.
  let ingredients = [];

  for (let i = 0; i < salad.count; i++) ingredients.push(<Salad/>);
  let meats = [];
  for (let i = 0; i < meat.count; i++) ingredients.push(<Meat/>);
  let cheeses = [];
  for (let i = 0; i < cheese.count; i++) ingredients.push(<Cheese/>);
  let bacons = [];
  for (let i = 0; i < bacon.count; i++) ingredients.push(<Bacon/>);

  // возвращаем разметку с заданными компоненами бургера:
  // <Salad/>, <Meat/>, <Cheese/>, <Bacon/> в нужном количестве
  return <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"/>
          <div className="Seeds2"/>
        </div>
        {ingredients} 
        <div className="BreadBottom"/>
    </div>
};

export default Burger;