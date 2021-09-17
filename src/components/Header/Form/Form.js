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
        e.preventDefault();
        submit();
        
    }

    const onChange = e =>{
        const { name, value, type, checked} = e.target;
        const valueToUse = type === 'checkbox' ? checked: value;
        change(name, valueToUse);
    }
    

    return (
        <form id="pizza-form" className="form container" onSubmit={onSubmit}>
            <div className="build-pizza">
                <div id="size" className="content">
                <div className='errors'>

                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.topping}</div>
                    <div>{errors.sauce}</div>
                </div>
                    <h3>Build Your Own Pizza</h3>
                    <h4>Choice of Size</h4>
                    <p>Required.</p>
                    
                    <select
                        id="size-dropdown"
                        onChange={onChange}
                        value={values.size}
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
                            value='original red'
                            onChange={onChange}
                            checked={values.sauce === 'original red'}/>
                    </label>
                    <label>Garlic Ranch
                        <input 
                            type="radio"
                            name="sauce"
                            value='garlic ranch'
                            onChange={onChange}
                            checked={values.sauce === 'garlic ranch'}/>
                    </label>
                    <label>BBQ Sauce
                        <input 
                            type="radio"
                            name="sauce"
                            value='bbq sauce'
                            onChange={onChange}
                            checked={values.sauce === 'bbq sauce'}/>
                    </label>
                    <label>Spinach Alfredo
                        <input 
                            type="radio"
                            name="sauce"
                            value='spinach alfredo'
                            onChange={onChange}
                            checked={values.sauce === 'spinach alfredo'}/>
                    </label>
                </div>
                <div id="toppings" className="content">
                    <h4>Add Toppings</h4>
                    <p>Choose up to 10.</p>
                    <div id='left-toppings'>
                    <label>Pepperoni
                        <input 
                            type="checkbox"
                            name="topping"
                            value="pepperoni"
                            
                            onChange={onChange} />
                    </label>
                    <label>Sausage
                        <input 
                            type="checkbox"
                            name="topping"
                            value="sausage"
                            
                            onChange={onChange} />
                    </label>
                    <label>Canadian Bacon
                        <input 
                            type="checkbox"
                            name="topping"
                            value="canadian bacon"
                            
                            onChange={onChange} />
                    </label>
                    <label>Spicy Italian Sausage
                        <input 
                            type="checkbox"
                            name="topping"
                            value="spicy italian sausage"
                            
                            onChange={onChange} />
                    </label>
                    <label>Grilled Chicken
                        <input 
                            type="checkbox"
                            name="topping"
                            value="grilled chicken"
                           
                            onChange={onChange} />
                    </label>
                    <label>Onions
                        <input 
                            type="checkbox"
                            name="topping"
                            value="onions"
                            
                            onChange={onChange} />
                    </label>
                    <label>Green Peppers
                        <input 
                            type="checkbox"
                            name="topping"
                            value="green peppers"
                           
                            onChange={onChange} />
                    </label>
                    </div>
                    <div id="right-topping">
                    <label>Diced Tomato
                        <input 
                            type="checkbox"
                            name="topping"
                            value="diced tomato"
                            
                            onChange={onChange} />
                    </label>
                    <label>Black Olives
                        <input 
                            type="checkbox"
                            name="topping"
                            value="black olives"
                           
                            onChange={onChange} />
                    </label>
                    <label>Roasted Garlic
                        <input 
                            type="checkbox"
                            name="topping"
                            value="roasted garlic"
                           
                            onChange={onChange} />
                    </label>
                    <label>Artichoke Hearts
                        <input 
                            type="checkbox"
                            name="topping"
                            value="artichoke hearts"
                        
                            onChange={onChange} />
                    </label>
                    <label>Three Cheese
                        <input 
                            type="checkbox"
                            name="topping"
                            value="three cheese"
                            
                            onChange={onChange} />
                    </label>
                    <label>Pineapple
                        <input 
                            type="checkbox"
                            name="topping"
                            value="pineapple"
                            
                            onChange={onChange} />
                    </label>
                    <label>Extra Cheese
                        <input 
                            type="checkbox"
                            name="topping"
                            value="extra cheese"
                            
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
                            checked={values.glutenfree}
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
                        id='order-button'
                        name='orders'
                        value='1'
                        min="1"
                        max="5"
                        onChange={onChange}


                        />
                    <input 
                        type='text'
                        id='name-input'
                        name='name'
                        value={values.name}
                        placeholder='Please Enter Your Name'
                        onChange={onChange}
                        />

                    <button> Add to Order $17.99</button>
            </div>


        </form>
    )
    










}