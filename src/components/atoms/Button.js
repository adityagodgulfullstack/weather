import React from 'react';
import { Link } from "react-router-dom";

const Button = ({ text, onAction, href }) => {
    if (href) {
        return <Link to={href}>{text}</Link>
    }
    return <button onClick={onAction}>{text}</button>
}

export default Button;