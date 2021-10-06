import React from 'react';
import './Header.css';

const Header = (props: { name: string }) => {
    return(
        <div>
            <header>{props.name}</header>
        </div>
    )
}
export default Header;