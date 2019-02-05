import React from 'react';
import './IngredientControl.css';

const IngredientControl = (props) => {

    return (
        <div className='IngredientControl '>
        	<div className='Label float-left'>{props.label}</div>
        	<div className='float-right'>
        		<button disabled={props.disable} className="btn btn-secondary" onClick={props.removeIngredient}>Less</button>
        		<button className='btn btn-primary ml-2' onClick={props.addIngredient}>More</button>   
        	</div>
        </div>
       )
}

export default IngredientControl;


