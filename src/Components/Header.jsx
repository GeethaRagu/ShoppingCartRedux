import React from "react";
import { Container, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Header = () => {
  const ProductsList = useSelector((state) => state.proreducer); // get products from state and store in ProductsList
  const totalPrice = ProductsList.reduce(
    (total, data) => total + data.price * (data.quantity || 1),
    0
  );
  //Total quantity
  const totalQuantity = ProductsList.reduce(
    (total, data) => total + (data.quantity || 1),
    0
  );
  return (
    
      <Container className="bg-primary total_main_container">
        <div>
          <div className="total_container">
            <div className="left">
              <strong>TOTAL QUANTITY:</strong>
            </div>
            <div>
              <strong>{totalQuantity}</strong>
            </div>
          </div>
          <div className="total_container">
            <div className="left">
              <strong>SUBTOTAL:</strong>
            </div>
            <div>
              <strong>{totalPrice}</strong>
            </div>
          </div>
          <div className="total_container">
            <div className="left">
              <strong>SHIPPING:</strong>
            </div>
            <div>
              <strong>FREE</strong>
            </div>
          </div>

          <div className="total_container">
            <div className="left">
              <strong>TOTAL:</strong>
            </div>
            <div>
             <h4> <strong>{totalPrice}</strong></h4>
            </div>
          </div>
        </div>
      </Container>
    
  );
};

export default Header;
