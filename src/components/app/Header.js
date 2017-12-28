/* eslint-disable */
import React from 'react';
import style from '../style.css'
import {Link,NavLink} from 'react-router-dom'
/*just for a merge test */
class Header extends React.Component {
    render() {

        return (
            <nav className="navbar navbar-inverse top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">TIQA shared <i className="fa fa-handshake-o shared" aria-hidden="true" ></i>Trust</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><NavLink exact={true} activeClassName="isactive" to="/">Home</NavLink></li>
                        
                        <li><NavLink activeClassName="isactive" to="/dev">Developers</NavLink></li>
                        <li><Link to="/jobs">Jobs</Link></li>
                    </ul>
                </div>
            </nav>)
    }
}
export default Header;