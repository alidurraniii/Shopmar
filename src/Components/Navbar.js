import React from 'react'
import propTypes from 'prop-types';
import '../css/navbar.css';


export default function Navbar(props) {
    return (


        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Catogories
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Groceries</a></li>
                                <li><a className="dropdown-item" href="#">Snacks</a></li>
                                <li><a className="dropdown-item" href="#">Breakfast</a></li>
                                <li><a className="dropdown-item" href="#">Pharmacy</a></li>
                                <li><a className="dropdown-item" href="#">Nimco</a></li>
                                <li><a className="dropdown-item" href="#">Vegetables</a></li>
                                <li><a className="dropdown-item" href="#">Petcare</a></li>
                                <li><a className="dropdown-item" href="#">Personal Care</a></li>

                                <li><hr className="dropdown-divider"></hr></li>
                                <li><a className="dropdown-item" href="#">Special Offerss</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>

                   
                        
                        
                        
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    
                </div>
            </div>
        </nav>



    )
}

Navbar.propTypes = { title: propTypes.string.isRequired }

Navbar.defaultProps = {
    title: 'ShopMart'
};