import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Header = ()=>{
    return(
        <React.Fragment>
            <section>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
                    <div className="container">
                        <Link to='/' className="navbar-brand" style={{fontSize:35,fontWeight:400}}>Demo Streaming</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse" style={{justifyContent:'space-between'}} id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item mr-2">
                                    <NavLink activeClassName="h5" to='/series' className="nav-link ">Series</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="h5" to='/movies' className="nav-link">Movies</NavLink>
                                </li>
                            </ul>
                           <ul className="navbar-nav">
                                <li className="nav-item mr-4">
                                    <Link to='/' className="nav-link ">Log In</Link>
                                </li>
                                <li className="nav-item">
                                    <Link  to='/' className="nav-link bg-dark px-3">Start your free trial</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </React.Fragment>
    )
}

export default Header;
