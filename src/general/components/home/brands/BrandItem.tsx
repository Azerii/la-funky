interface Props {
  logo: string
}

function BrandItem(props: Props): JSX.Element {
  const {logo} = props
  
  return (
    <div className="item">
        <div className="cl_logo">
          <img src={logo} alt="cl_logo"/>
        </div>
    </div>
  )
}

export default BrandItem
