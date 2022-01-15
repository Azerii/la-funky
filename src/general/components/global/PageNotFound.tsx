import Footer from "./Footer";
import Navbar from "./Navbar";

function PageNotFound(): JSX.Element {
  return (
    <>
      <Navbar />
      <div className="section">
        <div className="error_wrap">
          <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-10 order-lg-first">
                  <div className="text-center">
                      <div className="error_txt">404</div>
                      <h5 className="mb-2 mb-sm-3">oops! The page you requested was not found!</h5> 
                      <p>The page you are looking for was moved, removed, renamed or might never existed.</p>
                      <a href="/" className="btn btn-fill-out">Back To Home</a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PageNotFound
