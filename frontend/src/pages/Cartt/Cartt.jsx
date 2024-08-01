import React, { useContext } from "react";
import "./Cartt.css";
import StoreContext from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cartt = () => {
  const { carttItems, food_list, removeFromCartt, getTotalCarttAmount} = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cartt">
      <div className="cartt-items">
        <div className="cartt-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (carttItems[item._id] > 0) {
            return (
              <div>
                <div className="cartt-items-title cartt-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>Rs. {item.price}</p>
                  <p>{carttItems[item._id]}</p>
                  <p>Rs. {item.price * carttItems[item._id]}</p>
                  <p onClick={()=>removeFromCartt(item._id)} className="cross">x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
                <div className="cart-total-details">
                    <p>Sub total</p>
                    <p>Rs.{getTotalCarttAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>{getTotalCarttAmount()===0?0:2}</p>
                </div> 
                <hr />
                <div className="cart-total-details">
                    <b>Total</b>
                    <b>Rs.{getTotalCarttAmount()===0?0:getTotalCarttAmount()+2}</b>
                </div>    
            </div>
            <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cartt-promocode">
            <div>
              <p>
                If you have a promo code, Enter if here
              </p>
              <div className="cart-promocode-input">
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
};

export default Cartt;
