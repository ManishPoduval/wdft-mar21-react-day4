import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class MyNavBar extends Component {
    render() {
        return (
            <nav>
                <span>
                    <Link to={"/about"} >About</Link>
                </span>
                <span>
                    <Link to={"/"} >Home</Link>
                </span>
                <span>
                    <Link to={"/profile"} >Profile</Link>
                </span>
            </nav>
        )
    }
}

export default MyNavBar