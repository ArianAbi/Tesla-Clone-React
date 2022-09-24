import { useState, useRef, useEffect } from "react";
import { Stack, Grid, useMediaQuery } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import './Header.css'
import { Drawer } from "./Drawer";

export const Header = () => {

    const isMd = useMediaQuery('(max-width:1200px)')
    const [open, setOpen] = useState(false)

    const openDrawer = () => {
        setOpen(true)
    }

    return (
        !isMd ? (
            <Grid container className="header">
                <Grid
                    component={"div"}
                    alignItems="center"
                    justifyContent="flex-start"
                    item
                    xs={1}
                >
                    Logo
                </Grid>

                <Grid
                    component={"div"}
                    justifyContent="center"
                    item
                    xs={10}
                >
                    <Stack
                        component={"ol"}
                        direction="row"
                        alignItems="center"
                        spacing={2}
                    >
                        <li>
                            <a href="#">
                                Model S
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Model 3
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Model X
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Model Y
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Solar Roof
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Solar Panels
                            </a>
                        </li>
                    </Stack>
                </Grid>

                <Grid
                    justifyContent="flex-end"
                    component={"div"}
                    item
                    xs={1}
                >
                    <Stack
                        component="ol"
                        direction="row"
                        alignItems="center"
                    >
                        <li>
                            <a href="#">
                                Shop
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Account
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Menu
                            </a>
                        </li>
                    </Stack>
                </Grid>
            </Grid >
        ) : (

            <>
                <Stack
                    className="header"
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >

                    <a href="/">
                        Logo
                    </a>

                    <button className="menu-button" onClick={openDrawer}>
                        Menu
                    </button>

                </Stack>

                <Drawer
                    open={open}
                    setOpen={setOpen}
                >
                    <ol>
                        <li>
                            <a href="#">
                                Model S
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Model 3
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Model X
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Model Y
                            </a>
                        </li>
                    </ol>
                </Drawer>

            </>

        )
    )
}