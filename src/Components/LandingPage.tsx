import React, { useState, useEffect, useRef } from "react";
import { useScrollYPosition } from "react-use-scroll-position";
import { scrollTo } from "react-scroll/modules/mixins/scroller";
import { Header } from "./Header/Header";
import { Products } from "./Products/Products";
import '../main.css'

export const LandingPage = () => {

    //sets the active class for visible section on initial page load
    useEffect(() => {
        const sections = document.querySelectorAll('.section') as NodeListOf<HTMLElement>
        const section_details = document.querySelectorAll('.details') as NodeListOf<HTMLElement>

        sections.forEach((section, i) => {
            if (window.scrollY === section.offsetTop) {

                section_details[i].classList.add('active')

            }
            else {
                section_details[i].classList.remove('active')
            }
        })
    }, [])

    //sets the active class for sections on scroll
    const onScrollChange = () => {

        const sections = document.querySelectorAll('.section') as NodeListOf<HTMLElement>
        const sections_details = document.querySelectorAll('.details') as NodeListOf<HTMLElement>

        sections.forEach((section, i) => {
            //
            if (window.scrollY === section.offsetTop) {

                sections_details[i].classList.add('active')

            }
            else {
                sections_details[i].classList.remove('active')
            }
        })

    }

    window.addEventListener('scroll', onScrollChange)

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
                    desktopBgImage={require('../Images/Model-3/Homepage-M3-Desktop.jfif')}
                    mobileBgImage={require('../Images/Model-3/Homepage-M3-Mobile.jfif')}
                />

                <Products
                    title="Model Y"
                    description="Order Online for "
                    descriptionText="Touchless Delivery"
                    descriptionLink="#"
                    twoButton
                    firstButtonText="Custom Order"
                    secondButtonText="Existing Inventory"
                    desktopBgImage={require('../Images/Model-Y/Homepage-MY-Desktop.jfif')}
                    mobileBgImage={require('../Images/Model-Y/Homepage-MY-Mobile.jfif')}
                />

                <Products
                    title="Model S"
                    description="Order Online for "
                    descriptionText="Touchless Delivery"
                    descriptionLink="#"
                    twoButton
                    firstButtonText="Custom Order"
                    secondButtonText="Existing Inventory"
                    desktopBgImage={require('../Images/Model-S/Homepage-MS-Desktop.jfif')}
                    mobileBgImage={require('../Images/Model-S/Homepage-MS-Mobile.jfif')}
                />

                <Products
                    title="Model X"
                    description="Order Online for "
                    descriptionText="Touchless Delivery"
                    descriptionLink="#"
                    twoButton
                    firstButtonText="Custom Order"
                    secondButtonText="Existing Inventory"
                    desktopBgImage={require('../Images/Model-X/Homepage-MX-Desktop.jfif')}
                    mobileBgImage={require('../Images/Model-X/Homepage-MX-Mobile.jfif')}
                />

                <Products
                    title="Solar Panels"
                    description="Lowest Cost Solar Panels in America"
                    twoButton
                    firstButtonText="Custom Order"
                    secondButtonText="Existing Inventory"
                    desktopBgImage={require('../Images/Solar-Panels/Homepage-SolarPanels-Desktop.jfif')}
                    mobileBgImage={require('../Images/Solar-Panels/Homepage-SolarPanels-Mobile.jfif')}
                />

                <Products
                    title="Solar Roof"
                    description="Produce Clean Energy From Your Roof"
                    descriptionLink="#"
                    twoButton
                    firstButtonText="Custom Order"
                    secondButtonText="Learn More"
                    desktopBgImage={require('../Images/Solar-Roof/Homepage-SolarRoof-Desktop.jfif')}
                    mobileBgImage={require('../Images/Solar-Roof/Homepage-SolarRoof-Mobile.jfif')}
                />

                <Products
                    title="Accessories"
                    description=""
                    firstButtonText="Shop Now"
                    desktopBgImage={require('../Images/Accessories/Homepage-Accessories-Desktop.jfif')}
                    mobileBgImage={require('../Images/Accessories/Homepage-Accessories-Mobile.jfif')}
                />

            </div>

        </>
    )
}