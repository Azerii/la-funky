import Layout from '../components/global/Layout';

function OrderCompleted(): JSX.Element {
  return (
    <Layout>
      <div className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="text-center order_complete">
                <i className="fas fa-check-circle"></i>
                <div className="heading_s1">
                  <h3>Your order is completed!</h3>
                </div>
                <p>
                  Thank you for your order! Your order is being processed and
                  will be completed within 3-6 hours. You will receive an email
                  confirmation when your order is completed.
                </p>
                <a href="/shop" className="btn btn-fill-out">
                  Continue Shopping
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default OrderCompleted;
