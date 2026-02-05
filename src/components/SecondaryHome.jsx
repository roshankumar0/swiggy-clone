import React from 'react'
import Restaurantheader from './Restaurantheader'
import { Outlet } from 'react-router'

const SecondaryHome = () => {
    return (
        <div>
            <Restaurantheader />
            <Outlet />
        </div>
    )
}

export default SecondaryHome
