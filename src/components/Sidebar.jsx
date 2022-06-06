import logoimage from "../images/logo.png";
import smalllogoimage from "../images/logo_sm.png";
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div>
            <div className="leftside-menu">
                <Link to="/" className="logo text-center logo-light">
                    <span className="logo-lg">
                        <img src={logoimage} alt="" height="16" />
                    </span>
                    <span className="logo-sm">
                        <img src={smalllogoimage} alt="" height="16" />
                    </span>
                </Link>
                <div className="h-100" id="leftside-menu-container" data-simplebar="">
                    <ul className="side-nav">
                        <li className="side-nav-item">
                            <Link to="/" className="side-nav-link">
                                <i className="uil-home-alt"></i>
                                <span> Dashboard </span>
                            </Link>
                        </li>
                        <li className="side-nav-item">
                            <Link to="/users" className="side-nav-link">
                                <i className="uil-calender"></i>
                                <span> Users </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar