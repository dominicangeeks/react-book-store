import React, { useContext, useEffect } from 'react'
import {HomeScreen} from '../components/Home/HomeScreen'
import { UserContext } from '../context/UserContext'

export const Home = () => {

    const userContext = useContext(UserContext)

    return (
        <div className="page">
            <HomeScreen/>
        </div>
    )
}
