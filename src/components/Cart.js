import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCart,addtoCart } from "../redux/action/index";
import { NavLink } from "react-router-dom";
const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  console.log(state, "state in cart");
  const dispath = useDispatch();



  // function to increase quantity product
  const addProduct = (product)=>{
      dispath(addtoCart(product))
  }
  const handleClose = (item) => {
    console.log("deleted")
    dispath(deleteCart(item));
  };

  return (
    <div>
    <div>
      {state.length !== 0 ? (
       state.map((item) => (
          <div className="container py-4">
            <button
              className="btn-close float-end"
              onClick={() => handleClose(item)}
            ></button>

            <div className="row justify-content-center">
              <div className="col-md-4">
                <img src={item.image} alt="" height="200px" width="200px" />
              </div>
              <div className="col-md-4">
                <h3>{item.title}</h3>
                <div>
                    <i className="fa fa-minus" style={{border:"2px solid",marginRight:"2px"}} onClick={()=>handleClose(item)}></i>
                    <span>{item.qty}</span>
                    <i className="fa fa-plus" style={{border:"2px solid",marginLeft:"3px"}} onClick={()=>addProduct(item)}></i>

                </div>
                <p className="lead fw-bold">${Math.round((item.price)*(item.qty))}</p>
              </div>
            </div>
          </div>
        ))
       
        
      ) : (
        <div className="d-flex justify-content-center align-item-center h-100">
          No Item in the Cart
        </div>
      )}
    </div>
    {state.length!==0 &&
    <>
    <hr />
    <div className="row">
     <p className="fw-bold mx-3">Total Price:$ {state.length!==0 && state.map((item)=>Math.round((item.price)*(item.qty))).reduce((total,num)=>total+Math.round(num))}</p>
     <div className="d-flex align-item-center justify-content-center">
     <NavLink className="btn btn-outline-dark  align-item-center" to="/checkout">Checkout</NavLink>
        
     </div>
    </div>
    </>
    }
    </div>
  );
};

export default Cart;
