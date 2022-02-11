import React from 'react'

const FoodCard = (meal) => {
  return (
    <div className="menu">
      <div className="pic">
        <img src={meal.img} alt={meal.title}></img>
      </div>
      <div className="menuname">
        <h5>{meal.title}</h5>
      </div>
    </div>
  )
}

export default FoodCard
