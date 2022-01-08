import React from 'react'

function Loader() {
  return (
    <div className="preloader">
      <div className="lds-ellipsis">
          <span></span>
          <span></span>
          <span></span>
      </div>
    </div>
  )
}

export default Loader
