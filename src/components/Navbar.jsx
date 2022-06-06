import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-custom">
    <button className="button-menu-mobile open-left">
      <i className="mdi mdi-menu"></i>
    </button>

    <ul className="list-unstyled topbar-menu float-end mb-0">
      <li className="dropdown notification-list">
        <a className="nav-link dropdown-toggle nav-user arrow-none me-0" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="false" aria-expanded="false">
          <span className="account-user-avatar">
            <img src="assets/images/users/avatar-1.jpg" alt="user-image1" className="rounded-circle" />
          </span>
          <span>
            <span className="account-user-name">Soeng Souy</span>
            <span className="account-position">Founder</span>
          </span>
        </a>
        <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
          <Link to="userprofile" className="dropdown-item notify-item">
            <i className="mdi mdi-account-circle me-1"></i>
            <span>My Account</span>
          </Link>
          <a href="/" className="dropdown-item notify-item">
            <i className="mdi mdi-account-edit me-1"></i>
            <span>Settings</span>
          </a>
          <a href="/" className="dropdown-item notify-item">
            <i className="mdi mdi-lifebuoy me-1"></i>
            <span>Support</span>
          </a>
          <a href="/" className="dropdown-item notify-item">
            <i className="mdi mdi-lock-outline me-1"></i>
            <span>Lock Screen</span>
          </a>
          <a href="/" className="dropdown-item notify-item">
            <i className="mdi mdi-logout me-1"></i>
            <span>Logout</span>
          </a>
        </div>
      </li>
    </ul>
  </div>
  )
}

export default Navbar