import React from "react";


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
    }

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className="build-pizza">
                <div className="content">
                    <h4>Choice of Size</h4>
                    <p>Required</p>
                    <select
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
                <div className="content">
                    <h4>Choice of Sauce</h4>
                    <p>Required</p>
                    <input 
                        type="radio"
                        name="sauce"
                </div>
            </div>


        </form>
    )
    










}