import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className = "container">
                {/* "brand-logo" is a materializecss class */}
                <Link to="/" className="brand-logo">Notes</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    )
};

export default Navbar;