import product_img1 from '../../../assets/images/product_img1.jpg';

function CartItem(): JSX.Element {
  return (
    <tr>
      <td className="product-thumbnail">
        <a href="#">
          <img src={product_img1} alt="product1" />
        </a>
      </td>
      <td className="product-name" data-title="Product">
        <a href="#">Blue Dress For Woman</a>
      </td>
      <td className="product-price" data-title="Price">
        $45.00
      </td>
      <td className="product-quantity" data-title="Quantity">
        <div className="quantity">
          <input type="button" value="-" className="minus" readOnly />
          <input
            type="text"
            name="quantity"
            defaultValue="1"
            title="Qty"
            className="qty"
            size={4}
          />
          <input type="button" value="+" className="plus" readOnly />
        </div>
      </td>
      <td className="product-subtotal" data-title="Total">
        $90.00
      </td>
      <td className="product-remove" data-title="Remove">
        <a href="#">
          <i className="ti-close"></i>
        </a>
      </td>
    </tr>
  );
}

export default CartItem;
