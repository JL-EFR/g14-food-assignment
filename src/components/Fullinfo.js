import React from 'react'

const Fullinfo = (food) => {
  return (
    <div className="fullinfo">
      <div className="fullpic">
        <img src={food.img} alt={food.title}></img>
      </div>
      <div className="ingredients">
        <h5>{food.title}</h5>
        <h6>Ingredients</h6>
        <ul>
          {food.ingredients.map((ing, idx) => (
            <li>
              <p>
                {food.measure[idx]} {ing}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Fullinfo
