import shop_banner_img4 from "../../../assets/images/shop_banner_img4.jpg";

function SaleBanner(): JSX.Element {
  return (
    <div className="sale_banner">
      <a className="hover_effect1" href="#">
        <img src={shop_banner_img4} alt="shop_banner_img4" />
        </a>
    </div>
  )
}

export default SaleBanner
