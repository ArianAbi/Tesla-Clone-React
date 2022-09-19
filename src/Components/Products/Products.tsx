import { FC } from 'react'
import './Products.css'

interface Products {
    title: string,
    description: string,
    backgroundImage: string,
    twoButton?: boolean,
    firstButtonText: string,
    secondButtonText?: string,
    descriptionText?: string,
    descriptionLink?: string,
}

export const Products: FC<Products> = ({ title, description, backgroundImage, twoButton, firstButtonText, secondButtonText, descriptionText, descriptionLink }) => {
    return (
        // <div style="background-image:url(./images/1.jfif)" className="product">
        <div
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className="product"
        >
            <div className="product-container">
                <div>
                    <h2>
                        {title}
                    </h2>
                    <p>
                        {description}
                        <a href={`${descriptionLink}`} className="description-link">
                            {descriptionText}
                        </a>
                    </p>
                </div>

                <div className="button-group">
                    {twoButton && (
                        <>
                            <button className="button-dark">
                                <h3>{firstButtonText}</h3>
                            </button>

                            <button className="button-light">
                                <h3>{secondButtonText}</h3>
                            </button>
                        </>
                    )}

                    {!twoButton && (
                        <>
                            <button className="button-dark" style={{ backgroundColor: "black" }}>
                                <h3>{firstButtonText}</h3>
                            </button>
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}