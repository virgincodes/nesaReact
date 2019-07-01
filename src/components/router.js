import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './auth/login'
import Register from './auth/register'

const CustomRouter = () => {
    return (
        <Router>
            {/* <Route path='/' component={}></Router> */}
            <Route path='/login/' component={Login}></Route>
            <Route path='/signup/' component={Register}></Route>
        </Router>
    )
}

export default CustomRouter
