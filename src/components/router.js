import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './auth/login'
import Register from './auth/register'
import Blog from './blog';

const CustomRouter = () => {
    return (
        <Router>
            <Route path='/' component={Blog}></Route>
            <Route path='/login/' component={Login}></Route>
            <Route path='/signup/' component={Register}></Route>
        </Router>
    )
}

export default CustomRouter
