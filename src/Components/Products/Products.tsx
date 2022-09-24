import { FC } from 'react'
import { useMediaQuery, Stack } from '@mui/material'
import './Products.css'

interface Products {
    title: string,
    description: string,
    desktopBgImage: string,
    mobileBgImage: string,
    twoButton?: boolean,
    firstButtonText: string,
    secondButtonText?: string,
    descriptionText?: string,
    descriptionLink?: string,
    fade?: boolean
}

export const Products: FC<Products> = ({ title, description, desktopBgImage, mobileBgImage, twoButton, firstButtonText, secondButtonText, descriptionText, descriptionLink, fade }) => {

    const isXs = useMediaQuery('(max-width:600px)')
    const backgroundImage = isXs ? mobileBgImage : desktopBgImage

    return (
        <div
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className="section"
        >
            <div className="details">
                <Stack spacing={1}>
                    <h2>
                        {title}
                    </h2>
                    <p >
                        {description}
                        <a href={`${descriptionLink}`} className="description-link">
                            {descriptionText}
                        </a>
                    </p>
                </Stack>

                <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 2, sm: 0, md: 1 }}
                    className="button-group"
                >
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
                            <button className="button-dark" style={{ backgroundColor: "#171A20" }}>
                                <h3>{firstButtonText}</h3>
                            </button>
                        </>
                    )}

                </Stack>
            </div>
        </div >
    )
}