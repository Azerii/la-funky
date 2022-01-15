import { Link } from 'react-router-dom';

function Dashboard(): JSX.Element {
  return (
    <div
      className="tab-pane fade active show"
      id="dashboard"
      role="tabpanel"
      aria-labelledby="dashboard-tab"
    >
      <div className="card">
        <div className="card-header">
          <h3>Dashboard</h3>
        </div>
        <div className="card-body">
          <p>
            From your account dashboard. you can easily check &amp; view your{' '}
            <Link to="/account/orders">recent orders</Link>, manage your{' '}
            <Link to="/account/delivery-address">
              shipping and billing addresses
            </Link>{' '}
            and{' '}
            <Link to="/account/details">
              edit your password and account details.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
