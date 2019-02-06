import React from 'react';
import Bacon from './Bacon/Bacon';
import Cheese from './Cheese/Cheese';
import Meat from './Meat/Meat';
import Salad from './Salad/Salad';

function Burger(props) {
  // распаковка ключей props.ingredients в 4 переменных: salad, meat, cheese, bacon
  // props.ingredients приходит из state.ingredients компонента App.js
  //const {salad, meat, cheese, bacon} = props.ingredients;

  const salad = props.ingredients[0];
  console.log(salad)
  const meat = props.ingredients[1];
  console.log(meat)
  const cheese = props.ingredients[2];
  console.log(cheese)
  const bacon = props.ingredients[3];
  console.log(bacon)

  // создаём массивы из компонентов Salad, Meat, Cheese и Bacon,
  // используя количество, указанное в свойстве count каждого ингредиента.
  // на самом деле здесь можно обойтись одним массивом
  // и добавлять все новые элементы в один и тот же массив ingredients.
  let ingredients = [];

  for (let i = 0; i < salad.count; i++) ingredients.push(<Salad key={'salad' + i}/>);
  for (let i = 0; i < meat.count; i++) ingredients.push(<Meat key={'meat' + i}/>);
  for (let i = 0; i < cheese.count; i++) ingredients.push(<Cheese key={'cheese' + i}/>);
  for (let i = 0; i < bacon.count; i++) ingredients.push(<Bacon key={'bacon' + i}/>);

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

