/* eslint-disable */
import React from 'react';
/*just for a merge test */
class Header extends React.Component {
    render() {

        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">TIQA shared <i className="fa fa-handshake-o" aria-hidden="true" style={{color:'green'}}></i>confidence</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="/">Home</a></li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1
      <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Page 1-1</a></li>
                                <li><a href="#">Page 1-2</a></li>
                                <li><a href="#">Page 1-3</a></li>
                            </ul>
                        </li>
                        <li><a href="dev">Developers</a></li>
                        <li><a href="jobs">Jobs</a></li>
                    </ul>
                </div>
            </nav>)
    }
}
export default Header;