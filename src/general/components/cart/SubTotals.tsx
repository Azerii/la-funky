import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { setOrderDetails } from '../../../features/shop/shopSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { base_url, formatNumber } from '../../../utils/utils';

const Wrapper = styled.div`
  .cart_total_amount {
    text-align: right;
  }
`;

function SubTotals(): JSX.Element {
  const navigate = useNavigate();
  const [promoAmount, setPromoAmount] = useState(0);
  const [promoCode, setPromoCode] = useState('');
  const [checkingCode, setCheckingCode] = useState(false);
  const [checkResponse, setCheckResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const cartSubTotal = useAppSelector((state) => state.cart.subTotal);
  const cart = useAppSelector((state) => state.cart.items);
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();

  const checkCode = async (e: any): Promise<void> => {
    e.preventDefault();

    if (!promoCode) return;

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

  const updateCart = async (): Promise<void> => {
    if (!token) {
      navigate('/login');
      return;
    }

    setLoading(true);

    const tempCart = cart.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
      variants: {}
    }));

    try {
      const res = await axios.put(`${base_url}/cart`, tempCart, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (res.data.status === 'success') {
        dispatch(setOrderDetails(res.data.data));
        navigate('/checkout');
      }

      setLoading(false);
    } catch (e: any) {
      setLoading(false);
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
                              disabled={checkingCode || !promoCode}
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
          <button
            className="btn btn-fill-out"
            onClick={updateCart}
            disabled={!cart || !cart.length || loading}
          >
            {loading ? 'Please wait...' : 'Proceed To CheckOut'}
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default SubTotals;
