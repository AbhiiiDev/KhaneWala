import React from "react";

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{ maxHeight: "450px" , minHeight:"450px"}}>
          <div className="carousel-item active" data-bs-interval="3000">
            <img
              src="https://source.unsplash.com/random/900×700/?burger"
              className="d-block w-100"
              alt="..." 
              style={{ filter: "brightness(30%)" }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="https://source.unsplash.com/random/900×700/?pizza"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(30%)" }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="https://source.unsplash.com/random/900×700/?sandwhich"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(30%)" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
