import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <header>
            <nav>
                <li><Link to ='/'>About</Link></li>
                <li><Link to ='/portfolio'>Portfolio</Link></li>
                <li><Link to ='/contact'>Contact</Link></li>
            </nav>
        </header>
    )
}



export default Header;