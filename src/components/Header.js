import React, { useState } from 'react'

const Header = ({ title }) => {
    return (
        <header className="bg-alert " >
            <h1> {title} </h1>
        </header>
    );
}

export default Header;