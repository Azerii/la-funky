import { Route, Routes } from 'react-router-dom';
import Breadcrumb from '../../general/components/global/Breadcrumb';
import Footer from '../../general/components/global/Footer';
import Navbar from '../../general/components/global/Navbar';
import AccountDetails from '../components/AccountDetails';
import ChangePassword from '../components/ChangePassword';
import Dashboard from '../components/Dashboard';
import DeliveryAddress from '../components/DeliveryAddress';
import Orders from '../components/Orders';
import TabMenu from '../components/TabMenu';

function MyAccount() {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <div className="section">
        <div className="container">
          <div className="row">
            <TabMenu />
            <div className="col-lg-9 col-md-8">
              <div className="tab-content dashboard_content">
                <Routes>
                  <Route path="" element={<Dashboard />} />
                  <Route path="orders" element={<Orders />} />
                  <Route
                    path="delivery-address"
                    element={<DeliveryAddress />}
                  />
                  <Route path="details" element={<AccountDetails />} />
                  <Route path="change-password" element={<ChangePassword />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyAccount;
