import React, { useEffect, useState } from "react";
import "./cards.css";
import api from "component/app/api/hello/baseurl";
import Banner from "../Buy/Buybanner";
import { useRouter } from "next/navigation";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { incNumber, decNumber, totalcost } from "../redux/actions";

interface items {
  id: number;
  rname: string;
  imgdata: string;
  date: number;
  time: string;
  topic: string;
  Price: number;
  Quantity:number
}

const Card1 = () => {
  const [datas, setDatas] = useState<items[]>([]);

  const router = useRouter();

  const myState = useSelector((state: any) => state.changeTheNumber);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(api + "/course-details")
      .then((response) => response.json())
      .then((data) => {
        setDatas(data);
        console.log("data++++++++++++++++++",data);
      })
      .catch((error) => console.error(error));
  }, []);
  

  const handleBuyNowClick = (id: any, price: any ,coursename:string ) => {

    dispatch({ type: "CALCULATE_TOTAL", payload: { id, price,coursename } });
    // router.push("/banner")
  };
  return (
    <>
      <div className="main-card">
        {datas.map((element, id) => {
          return (
            <div key={id} className="contain">
              <div className="card1">
                <img
                  className="card-img-top1"
                  src={element.imgdata}
                  alt="website design"
                />
                <div className="card-body1">
                  <h5 className="card-title1">{element.rname}</h5>
                  <div className="quantity">
                    <span>Price: ₹{element.Price}</span>
                    <div className="add-minus__container">
                      <a
                        className="quantity_minus"
                        title="Decrement"
                        onClick={() => {
                          dispatch(decNumber());
                        }}
                      >
                        <span style={{ cursor: "pointer" }}>-</span>

                      </a>
                      <input
                        name="quantity"
                        type="text"
                        className="quantity_input"
                        value={myState}
                      />

                      <a
                        className="quantity_plus"
                        title="Increment"
                        onClick={() => {
                          dispatch(incNumber());
                        }}
                      >
                       <span style={{ cursor: "pointer" }}>+</span>

                      </a>
                    </div>
                  </div>
                  <p className="card-text1">
                    Lecturer <span style={{ color: "teal" }}>admin</span> in{" "}
                    <span style={{ color: "teal" }}>Creative Design</span>{" "}
                  </p>
                  <hr />
                </div>
                <div className="card-description1">
                  <span>
                    <img src="./images/user.png" alt="website design" />
                    {element.date}
                  </span>
                  <span>
                    <img src="./images/clock.png" alt="website design" />
                    {element.time}
                  </span>
                  <span>
                    <img src="./images/bookmark.png" alt="website design" />
                    {element.topic}
                  </span>
                </div>
                <Link
                  to="/banner"
                  className="buynow-button"
                  onClick={() => handleBuyNowClick(element.id, element.Price,element.rname)}
                >
                  Buy Now
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {/* {showBanner && <Banner price={100} sgst={14} cgst={14} courseName="React Course" total={128} />} */}
    </>
  );
};

export default Card1;
