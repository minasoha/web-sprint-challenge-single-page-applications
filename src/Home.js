import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";









export default function Home(){


    const history = useHistory();



    const routeToHomePage = () => {

    }



    return (
        <div className="home-wrapper">
            <div className="mainPicture">
                <h1>your favorite food, delivered while coding</h1>
                <Link
                to="/pizza"
                id='order-pizza'>
                    Pizza?</Link>
            </div>
            <div className='food-options'>
                <h3>Food Delivery in Gotham City</h3>
                <div></div>

            </div>




        </div>



    )

}