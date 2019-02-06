import React from 'react';
import './IngredientControl.css';

const IngredientControl = (props) => {

    return (
        <div className='IngredientControl'>
        	<div className='Label'>{props.ingredientLabel()}</div>
        	<div>
        		<button disabled={props.disable} className="btn Less" onClick={props.removeIngredient}>Less</button>
        		<button className='btn ml-2 More' onClick={props.addIngredient}>More</button>   
        	</div>
        </div>
       )
}

export default IngredientControl;


