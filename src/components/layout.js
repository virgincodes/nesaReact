import React from 'react'

export default function Layout(props) {
    return (
        <div className='layout'>
            
            <nav className='nav'>
            <h1><a href='/'>King's blog</a></h1>
                <ul>
                    <li> <a  href='/login' >Login</a> </li>
                    <li> <a href='/signup'>Signup</a> </li>
                    <li> <a  href = '/blog' >Blog</a> </li>
                </ul>
            </nav>
            {props.children}
        </div>
    )
}
