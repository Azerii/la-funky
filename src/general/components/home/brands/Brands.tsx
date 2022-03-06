import axios from 'axios';
import { useEffect, useState } from 'react';
import cl_logo1 from '../../../../assets/images/cl_logo1.png';
import cl_logo2 from '../../../../assets/images/cl_logo2.png';
import cl_logo3 from '../../../../assets/images/cl_logo3.png';
import cl_logo4 from '../../../../assets/images/cl_logo4.png';
import cl_logo5 from '../../../../assets/images/cl_logo5.png';
import cl_logo6 from '../../../../assets/images/cl_logo6.png';
import { base_url } from '../../../../utils/utils';
import Loader from '../../global/Loader';
import BrandItem from './BrandItem';

function Brands(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [brands, setBrands] = useState([]);

  const getProducts = async (): Promise<void> => {
    try {
      setLoading(true);
      const res = await axios.get(`${base_url}/shop/brands`);

      if (res?.data?.status === 'success') {
        setBrands(res.data.data.products);
      }

      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="section small_pt">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading_tab_header">
              <div className="heading_s2">
                <h2>Our Brands</h2>
              </div>
            </div>
          </div>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="row">
            <div className="col-12">
              <div
                className="client_logo carousel_slider owl-carousel owl-theme nav_style3"
                data-dots="false"
                data-nav="true"
                data-margin="30"
                data-loop="true"
                data-autoplay="true"
                data-responsive='{"0":{"items": "2"}, "480":{"items": "3"}, "767":{"items": "4"}, "991":{"items": "5"}}'
              >
                <BrandItem logo={cl_logo1} />
                <BrandItem logo={cl_logo2} />
                <BrandItem logo={cl_logo3} />
                <BrandItem logo={cl_logo4} />
                <BrandItem logo={cl_logo5} />
                <BrandItem logo={cl_logo6} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Brands;
