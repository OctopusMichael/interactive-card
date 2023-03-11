import React, { useState } from "react";
import cardLogo from "../images/card-logo.svg";
import Form from "./Form";
import Thanks from "./Thanks";

const Card = () => {
  const [data, setData] = useState({
    nameCard: "JANE APPLESEED",
    numberCard: "0000 0000 0000 0000 ",
    mm: "00",
    yy: "00",
    cvc: "000",
  });
  console.log(data);

  return (
    <>
      <div className="container-fluid section-container-main">
        <div className="row">
          <div className="col-12 col-lg-4 section-left">
            <div className="back-card">
              <h5>{data.cvc}</h5>
            </div>
            <div className="front-card">
              <img src={cardLogo} />
              <h3>{data.numberCard}</h3>
              <div className="d-flex">
                <h4>{data.nameCard.toUpperCase()}</h4>
                <h5>
                  {data.mm}/{data.yy}
                </h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8 section-right">
            {data.mm !== "00" ? <Thanks /> : <Form setData={setData} />}
          </div>
        </div>

      </div>
        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Michael Diaz</a>.
        </div>
    </>
  );
};

export default Card;
