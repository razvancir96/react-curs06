import React from 'react';
import {Link} from 'react-router-dom';
// Importam logo-ul.
import Logo from '../assets/images/logo.png';
// SVG-urile se importa diferit de imagini! (Google: how to import SVG in React)
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import './Header.css';

function Header() {
    return(
        // Vrem ca headerul sa aiba un border sub el.
        <header className="border-bottom mb-3">
            {/* Continutul header-ului trebuie sa fie centrat si sa nu depaseasca dimensiunile
            minime si maxime(320px->1200px) => avem nevoie de clasele container-fluid container-min-max-width*/}
            {/* Celelalte 3 clase sunt clase de Bootstrap, echivalente propritatilor de flex. */}
            <div className="container-fluid container-min-max-width
                            d-flex justify-content-between align-items-center">
                <Link to="/" className="my-3">
                    {/* Utilizarea logo-ului */}
                    <img src={Logo} alt="Sirluggia Shop" className="logo"/>
                </Link>
                <div>
                    <Link to="/login" className="h5">Login</Link>
                    {/* ShoppingCart este un SVG! */}
                    <ShoppingCart className="ml-2"/>
                </div>
            </div>
        </header>
    );
}

export default Header;