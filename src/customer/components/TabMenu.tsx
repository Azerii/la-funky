import { NavLink } from 'react-router-dom';

function TabMenu(): JSX.Element {
  return (
    <div className="col-lg-3 col-md-4">
      <div className="dashboard_menu">
        <ul className="nav nav-tabs flex-column" role="tablist">
          <li className="nav-item">
            <NavLink className="nav-link" to="/account" end>
              <i className="ti-shopping-cart-full"></i>Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/account/orders">
              <i className="ti-shopping-cart-full"></i>Orders
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/account/delivery-address">
              <i className="ti-location-pin"></i>Delivery Address
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/account/details">
              <i className="ti-id-badge"></i>Account details
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/account/change-password">
              <i className="ti-lock"></i>Change Password
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TabMenu;
