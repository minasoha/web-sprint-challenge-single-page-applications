import React from "react";
import { useHistory } from "react-router-dom";









export default function Home(){


    const history = useHistory();



    const routeToHomePage = () => {

    }



    return (
        <div className="home-wrapper">
            <header>
                <div>
                    <h3>LAMBDA EATS</h3>
                    <button
                    onClick={routeToHomePage}
                    className='top-button'
                        >Home</button>
                    <button>Help</button>
                </div>
            </header>
            <div className="mainPicture">
                <h1>your favorite food, delivered while coding</h1>
                <button 
                onClick={routeToHomePage}
                id='order-pizza'>
                    Pizza?</button>
            </div>
            <div className='food-options'>
                <h3>Food Delivery in Gotham City</h3>
                <div></div>

            </div>




        </div>



    )

}