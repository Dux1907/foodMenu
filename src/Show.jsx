import React, { useEffect } from "react";
import { useState } from "react";
import "./index.css";
import Menu from "./Menu";
const Show = (props) => {
  const [prev, final] = useState(Menu);
  // console.log(props.event);
  useEffect(() => {
    if (props.event !== "all") {
      final(
        Menu.filter((val) => {
          return val.category === props.event;
        })
      );
      // console.log(prev);
    } else {
      final(Menu);
      // console.log(prev);
    }
  }, [props]);
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row justify-content-center">
          <div className="col-11">
            <div className="row justify-content-around">
              {prev.map((val) => {
                const { id, price, description, img, name } = val;
                return (
                  <div
                    className="col-xl-5 col-md-5 m-2 my-3 rounded"
                    key={id}
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    }}
                  >
                    <div className="row">
                      <div className="col-4">
                        <img src={img} alt={name} className="img-fluid"></img>
                      </div>
                      <div
                        className="col-8"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <h3 >{name}</h3>
                        <h5 >{description}</h5>
                        <h4 className="my-md-2 md-2">
                          {price}
                          <button
                            type="button"
                            className="btn btn-success ms-lg-5 ms-md-4 ms-2"
                          >
                            Order Now
                          </button>
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Show;
