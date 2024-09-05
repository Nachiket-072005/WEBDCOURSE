// import React from 'react'
import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
        <img src="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="placeholder" />
      <h1>{ props.title }</h1>
      <p>{ props.content }</p>
    </div>
  )
}

export default Card
