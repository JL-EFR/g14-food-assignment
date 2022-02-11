import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MenuCard from '../components/Menucard'
import Bar from '../components/Bar'

const Recipes = () => {
  const [keyword, setKeyword] = useState('')
  const [meals, setMeals] = useState([])
  useEffect(() => {
    displayMealList(keyword)
  }, [])

  async function displayMealList(keyword) {
    const rawData = await getFoodListFromApi(keyword)
    const meals = rawData.meals
    setMeals(meals)
  }

  async function changeMealList(e, keyword) {
    e.preventDefault()
    await displayMealList(keyword)
  }

  return (
    <div className="recipes">
      <Bar
        value={keyword}
        setKeyword={setKeyword}
        onClick={(e) => changeMealList(e, keyword)}
      />
      <div className="menulist">
        {meals.map((meal) => (
          <Link key={meal.idMeal} to={`/recipes/${meal.idMeal}`}>
            <MenuCard img={meal.strMealThumb} title={meal.strMeal} />
          </Link>
        ))}
      </div>
    </div>
  )
}

async function getFoodListFromApi(keyword) {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
  )
  return response.data
}

export default Recipes
