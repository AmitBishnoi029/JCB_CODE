import React from 'react'

const Card = ({card}) => {
  return (
    <div>
      <div className="card">
      <div className="details" >
        <h3>Name : </h3>
        <p>{card.name}</p>
      </div>
      <div className="details" >
        <h3>Vehicle : </h3>
        <p>{card.vehicle}</p>
      </div>
      <div className="details" >
        <h3>Payment : </h3>
        <p>{card.payment}</p>
      </div>
      <div className="details" >
        <h3> Date : </h3>
        <p>{card.date}</p>
      </div>
      <div className="details" >
        <h3> Address : </h3>
        <p>{card.address}</p>
      </div>
    </div>
    </div>
  
  )
}

export default Card