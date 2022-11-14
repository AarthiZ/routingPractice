import React from 'react';
import classes from "./Header.module.css";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className={classes.header}>
            <ul>
                <li>
                    <NavLink activeClassName={classes.active} to="/welcome">Welcome</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to="/antdesign">AntDesign</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to="/products">Products</NavLink>
                </li>
            </ul>
        </div>
    )
}
export default Header;