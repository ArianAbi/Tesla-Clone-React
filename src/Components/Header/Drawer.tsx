import { FC, useState, useEffect } from 'react';
import { Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Drawer {
    open: boolean,
    setOpen: CallableFunction
    children: JSX.Element
}

export const Drawer: FC<Drawer> = ({ open, setOpen, children }) => {

    useEffect(() => {
        const drawerElm = document.querySelector('#drawer')
        const backdropElm = document.querySelector('#backdrop')

        if (open) {
            drawerElm?.classList.add('open')
            backdropElm?.classList.add('open')
        }
        else {
            drawerElm?.classList.remove('open')
            backdropElm?.classList.remove('open')
        }
    }, [open])

    const closeDrawer = () => {
        setOpen(false)
    }

    return (
        <>
            <div onClick={closeDrawer} id="backdrop"></div>

            <div id="drawer">
                <Stack
                    className="close-button-container"
                    alignItems="flex-end"
                >
                    <button onClick={closeDrawer} ><CloseIcon fontSize="medium" /></button>
                </Stack>
                {children}
            </div>
        </>
    )
}