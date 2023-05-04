import React from "react";
import { connect, ConnectedProps } from "react-redux";
import "./buybanner.css";

interface RootState {
  itemReducer: {
    price: any;
    sgst: any;
    cgst: any;
    quantity: number;
    total: number;
    coursename: string;
  };
}

const mapStateToProps = (state: RootState) => {
  console.log("object++++++++++", state.itemReducer.price);
  return {
    price: state.itemReducer.price,
    sgst: state.itemReducer.sgst,
    cgst: state.itemReducer.cgst,
    courseName: state.itemReducer.coursename,
    total: state.itemReducer.total,
  };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const Banner: React.FC<PropsFromRedux> = ({
  price,
  sgst,
  cgst,
  courseName,
  total,
}) => {
  console.log("object", price);
  return (
    <>
      <div className="card-container">
        <div className="banner-container">
          <div className="banner">
            <h1>Invoice</h1>
            <div className="banner-item banner-price">
              <span>Price:</span>
              <span>{price}</span>
            </div>
            <div className="banner-item">
              <span>SGST:</span> <span>{sgst}</span>
            </div>
            <div className="banner-item">
              <span>CGST:</span> <span>{cgst}</span>
            </div>
            <div className="banner-item">
              <span>Course Name:</span> <span>{courseName}</span>
            </div>
            <div className="banner-item banner-total">
              <span>Total:</span>
              <span> {total}</span>
              
            </div>
            <div className="banner-item">
            <span>Autorized Signatory:</span>
            <span>Shashi Bhushan Jha</span>
            </div>
            
           
          </div>
        </div>
      </div>
    </>
  );
};

export default connector(Banner);
