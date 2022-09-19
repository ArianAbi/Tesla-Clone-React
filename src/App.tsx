import React from "react";
import { Header } from "./Components/Header/Header";
import { Products } from "./Components/Products/Products";
import './main.css'

export const App = () => {
    return (

        <>


            <Header />

            <div className="container">
                <Products
                    title="Model 3"
                    description="Order Online for "
                    descriptionText="Touchless Delivery"
                    descriptionLink="#"
                    twoButton
                    firstButtonText="Custom Order"
                    secondButtonText="Existing Inventory"
                    backgroundImage={require('./Images/1.jfif')}
                />

                <Products
                    title="Solar Panels"
                    description="Lowest Cost Solar Panels in America"
                    twoButton
                    firstButtonText="Custom Order"
                    secondButtonText="Existing Inventory"
                    backgroundImage={require('./Images/2.jfif')}
                />

                <Products
                    title="Model X"
                    description="Order Online for "
                    descriptionText="Touchless Delivery"
                    descriptionLink="#"
                    twoButton
                    firstButtonText="Custom Order"
                    secondButtonText="Existing Inventory"
                    backgroundImage={require('./Images/3.jfif')}
                />

                <Products
                    title="Accessories"
                    description=""
                    firstButtonText="Custom Order"
                    backgroundImage={require('./Images/4.jfif')}
                />
            </div>

        </>
    )
}