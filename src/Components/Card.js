import React from 'react'

export const Card = (props) => {
    return (
        <div className="col"  >
        <div className="card" style={{minHeight:"500px"}}>
            <img src={props.imgsrc} className="card-img-top" alt="..."style={{height:"300px",backgroundSize:"cover" }} />
            <div className="card-body">
                <h2 className="card-title"style={{color:"#42d113"}}>{props.heading}</h2>
                <p className="card-text" style={{fontSize:"20px"}}>{props.para}</p>
            </div>
        </div>
    </div>
    )}