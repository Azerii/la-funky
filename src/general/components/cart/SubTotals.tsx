import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';
import { base_url, formatNumber } from '../../../utils/utils';

const Wrapper = styled.div`
  .cart_total_amount {
    text-align: right;
  }
`;

function SubTotals(): JSX.Element {
  const [promoAmount, setPromoAmount] = useState(0);
  const [promoCode, setPromoCode] = useState('');
  const [checkingCode, setCheckingCode] = useState(false);
  const [checkResponse, setCheckResponse] = useState('');

  const cartSubTotal = useAppSelector((state) => state.cart.subTotal);

  const checkCode = async (e: any): Promise<void> => {
    e.preventDefault();

    setCheckingCode(true);
    try {
      const res = await axios.get(`${base_url}/shop/vouchers/${promoCode}`);

      if (res.data.status === 'success') {
        const rate = res.data.data.rate;
        const amount = (cartSubTotal * rate) / 100;
        setPromoAmount(amount);
        setPromoCode('');
        setCheckResponse('Promo applied');
      }

      setCheckingCode(false);
    } catch (e: any) {
      setCheckResponse(e.response.data.message);
      setCheckingCode(false);
      console.log(e);
    }
  };

  return (
    <Wrapper className="row mt-4">
      <div className="col-12">
        <div className="border p-3 p-md-4">
          <div className="heading_s1 mb-3">
            <h6>Cart Totals</h6>
          </div>
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td colSpan={6} className="px-0">
                    <div className="row g-0 align-items-center">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <form
                          className="coupon field_form input-group"
                          onSubmit={checkCode}
                        >
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Enter Promo Code.."
                            value={promoCode}
                            onChange={(e: any) => setPromoCode(e.target.value)}
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-fill-out btn-sm"
                              type="submit"
                              disabled={checkingCode}
                            >
                              {checkingCode ? 'Checking...' : 'Apply Promo'}
                            </button>
                          </div>
                        </form>
                        <p className="">{checkResponse}</p>
                      </div>
                      {/* <div className="col-lg-8 col-md-6 text-start text-md-end">
                      <button
                        className="btn btn-line-fill btn-sm"
                        type="submit"
                      >
                        Update Cart
                      </button>
                    </div> */}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="cart_total_label">Cart Subtotal</td>
                  <td className="cart_total_amount">
                    <del>N</del>
                    {formatNumber(cartSubTotal.toFixed(2))}
                  </td>
                </tr>
                <tr>
                  <td className="cart_total_label">Promo</td>
                  <td className="cart_total_amount">
                    - <del>N</del>
                    {formatNumber(promoAmount.toFixed(2))}
                  </td>
                </tr>
                <tr>
                  <td className="cart_total_label">Total</td>
                  <td className="cart_total_amount">
                    <strong>
                      <del>N</del>
                      {formatNumber((cartSubTotal - promoAmount).toFixed(2))}
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a href="/checkout" className="btn btn-fill-out">
            Proceed To CheckOut
          </a>
        </div>
      </div>
    </Wrapper>
  );
}

export default SubTotals;
