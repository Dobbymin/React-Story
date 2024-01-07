import React from 'react';

const Button = ({ active, onClick, children }) => {
    return (
        <button className={active ? 'active' : ''} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
