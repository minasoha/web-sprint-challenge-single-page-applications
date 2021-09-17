import React from "react";
import './Form.css';


export default function Form(props){
    const {
        values,
        submit,
        change,
        disabled,
        errors
    }= props



    const onSubmit = e =>{
        e.preventDefault()
        submit();
    }

    const onChange = e => {
        const { name, value, checked, type } = e.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name,valueToUse)
    }

    return (
        <form id="pizza-form" className="form container" onSubmit={onSubmit}>
            <div className="build-pizza">
                <div id="size" className="content">
                    <h3>Build Your Own Pizza</h3>
                    <h4>Choice of Size</h4>
                    <p>Required.</p>
                    <select
                        id="size-dropdown"
                        onChange={onChange}
                        value="Size"
                        name="size">
                            <option value= ''>Select</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                            <option value='xlarge'>Extra Large</option>
                        </select>
                </div>
                <div id="sauce" className="content">
                    <h4>Choice of Sauce</h4>
                    <p>Required.</p>
                    <label>Original Red
                        <input 
                            type="radio"
                            name="sauce"
                            value="Original Red"
                            onChange={onChange}
                            checked="Original Red"/>
                    </label>
                    <label>Garlic Ranch
                        <input 
                            type="radio"
                            name="sauce"
                            value="Garlic Ranch"
                            onChange={onChange}
                            checked="Garlic Ranch"/>
                    </label>
                    <label>BBQ Sauce
                        <input 
                            type="radio"
                            name="sauce"
                            value="BBQ Sauce"
                            onChange={onChange}
                            checked="BBQ Sauce"/>
                    </label>
                    <label>Spinach Alfredo
                        <input 
                            type="radio"
                            name="sauce"
                            value="Spinach Alfredo"
                            onChange={onChange}
                            checked="Spinach Alfredo"/>
                    </label>
                </div>
                <div id="toppings" className="content">
                    <h4>Add Toppings</h4>
                    <p>Choose up to 10.</p>
                    <div id='left-toppings'>
                    <label>Pepperoni
                        <input 
                            type="checkbox"
                            name="pepperoni"
                            checked=""
                            onChange={onChange} />
                    </label>
                    <label>Sausage
                        <input 
                            type="checkbox"
                            name="sausage"
                            checked="sausage"
                            onChange={onChange} />
                    </label>
                    <label>Canadian Bacon
                        <input 
                            type="checkbox"
                            name="canadian-bacon"
                            checked="canadian-bacon"
                            onChange={onChange} />
                    </label>
                    <label>Spicy Italian Sausage
                        <input 
                            type="checkbox"
                            name="Spicy Italian Sausage"
                            checked="Spicy Italian Sausage"
                            onChange={onChange} />
                    </label>
                    <label>Grilled Chicken
                        <input 
                            type="checkbox"
                            name="Grilled Chicken"
                            checked="Grilled Chicken"
                            onChange={onChange} />
                    </label>
                    <label>Onions
                        <input 
                            type="checkbox"
                            name="Onions"
                            checked="Onions"
                            onChange={onChange} />
                    </label>
                    <label>Green Peppers
                        <input 
                            type="checkbox"
                            name="Green Peppers"
                            checked="Green Peppers"
                            onChange={onChange} />
                    </label>
                    </div>
                    <div id="right-topping">
                    <label>Diced Tomato
                        <input 
                            type="checkbox"
                            name="Diced tomato"
                            checked="Diced tomato"
                            onChange={onChange} />
                    </label>
                    <label>Black Olives
                        <input 
                            type="checkbox"
                            name="Black Olives"
                            checked="Black Olives"
                            onChange={onChange} />
                    </label>
                    <label>Roasted Garlic
                        <input 
                            type="checkbox"
                            name="Roasted Garlic"
                            checked="Roasted Garlic"
                            onChange={onChange} />
                    </label>
                    <label>Artichoke Hearts
                        <input 
                            type="checkbox"
                            name="Artichoke Hearts"
                            checked="Artichoke Hearts"
                            onChange={onChange} />
                    </label>
                    <label>Three Cheese
                        <input 
                            type="checkbox"
                            name="Three Cheese"
                            checked="Three Cheese"
                            onChange={onChange} />
                    </label>
                    <label>Pineapple
                        <input 
                            type="checkbox"
                            name="Pineapple"
                            checked="Pineapple"
                            onChange={onChange} />
                    </label>
                    <label>Extra Cheese
                        <input 
                            type="checkbox"
                            name="Extra Cheese"
                            checked="Extra Cheese"
                            onChange={onChange} />
                    </label>
                    </div>
                    
                </div>
                <div id="subs" className="content">
                    <h4>Choice of substitute</h4>
                    <p>Choose up to 1.</p>
                    <label>Gluten Free Crust (+ $1.00)
                        <input
                            type="checkbox"
                            name="glutenfree"
                            checked="glutenfree"
                            onChange={onChange} />
                    </label>
                </div>
                <div id="instructions" className="content">
                    <h4>Special Instructions</h4>
                    <input
                        type="text"
                        name="instructions"
                        placeholder="Anything else you'd like to add?"
                        id="special-text"
                        />
                </div>
                    <input
                        type='number'
                        id='orders'
                        name='orders'
                        value='1'
                        min="1"
                        max="5"

                        />
                    <input 
                        type='text'
                        id='name-input'
                        name='name'
                        placeholder='Please Enter Your Name'
                        />

                    <button> Add to Order $17.99</button>
            </div>


        </form>
    )
    










}