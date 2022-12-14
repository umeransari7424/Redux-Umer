import React from 'react'
import {BsFillCartPlusFill} from "react-icons/bs"

function Header(props) {
  return (
    <div>
        <div className="redux">
      <div className="container text-center py-5 mt-5">
        <div className="row ">
          <div className="d-flex justify-content-between">
            <div>
              <h1>React Redux</h1>
            </div>
            <div>
                <span className="cart-count">{props.data.length}</span>
              <BsFillCartPlusFill size={"70px"} />
            </div>
          </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Header