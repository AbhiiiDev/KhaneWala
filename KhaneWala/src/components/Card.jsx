import React from 'react'

export default function Card(props) {

let options=props.options;
let priceOptions=Object.keys(options);


  return (
  <div>
        <div className="card m-3" style={{ width: "18rem" }}>
          <img src={props.imgSrc} className="card-img-top" alt="..." style={{height:"150px",objectFit:"fill"}} />
          <div className="card-body">
            <h5 className="card-title">{props.foodName}</h5>
           

            <div className="container w-100">
              <select className="m-2 h-100 bg-dark rounded ">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-dark rounded ">
           {
            priceOptions.map(
              (data)=>{
                return <option key={data} value={data}>
                  {data}
                </option>
              }
            )
           }
              </select>

              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
  )
}
