import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";

function Home(props) {
  
  return (
    <div className="redux">
      <div className="container text-center ">
        <div className="row">
          <div className="col-md-10">
            <div className="d-flex">
              <div>
                <img src="Assets/mobile.png" alt="mobile" />
              </div>
              <div className="m-3 text-start">
                <h2> Name : VIVO Y15</h2>
                <br />
                <h2>Price : $100</h2> <br />
                <button className="btn btn-success" 
                onClick={()=>props.addToCartHandler({price:"$100",Name:"VIVO Y15"})}> Add to Cart </button>  &nbsp;&nbsp;
                <button className="btn btn-danger"
                onClick={()=>props.removeToCartHandler()}> Remove to Cart </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
