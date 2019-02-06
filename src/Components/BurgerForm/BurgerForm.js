import React from 'react';
import IngredientControl from './IngredientControl/IngredientControl';
import './BurgerForm.css';

//BuildControl=IngreddientControl
//buildControls=BurgerForm

const BurgerForm = (props) => {


	return (
		<div className='BurgerForm'>
			<p className='price'>Current Price: {props.totalPrice + ' $'}</p>
			<div>
				{props.ingredients.map(item =>
					<IngredientControl
						key={item.name}
						ingredientLabel={() => props.ingredientLabel(item.name)}
						addIngredient={() => props.addIngredient(item.name)}
						removeIngredient={() => props.removeIngredient(item.name)} 
						disable={item.disable}
					/>
				)}
			</div>
		</div>
	);
};

export default BurgerForm;
