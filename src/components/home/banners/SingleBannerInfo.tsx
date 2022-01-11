import shop_banner_img1 from "../../../assets/images/shop_banner_img1.jpg";

function SingleBannerInfo(): JSX.Element {
  return (
    <div className="single_banner">
      <img src={shop_banner_img1} alt="shop_banner_img1"/>
      <div className="single_banner_info">
          <h5 className="single_bn_title1">Super Sale</h5>
          <h3 className="single_bn_title">New Collection</h3>
          <a href="shop-left-sidebar.html" className="single_bn_link">Shop Now</a>
      </div>
    </div>
  )
}

export default SingleBannerInfo
