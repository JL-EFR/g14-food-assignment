import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Fullinfo from '../components/Fullinfo'

const Detail = () => {
  const { recipeId } = useParams()
  const [ingredients, setIngredients] = useState([])
  const [measures, setMeasures] = useState([])
  const [mealTitle, setMealTitle] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  useEffect(() => {
    displayMealDetail(recipeId)
  }, [])

  async function getIngredientDetail(meal) {
    for (const [key, value] of Object.entries(meal)) {
      if (key.includes('Ingredient') && value) {
        setIngredients((prev) => [...prev, value])
      }
    }
  }

  async function getMeasure(meal) {
    for (const [key, value] of Object.entries(meal)) {
      if (key.includes('Measure') && value) {
        setMeasures((prev) => [...prev, value])
      }
    }
  }

  async function displayMealDetail(id) {
    const rawData = await getFoodByIdFromApi(id)
    const meal = rawData.meals[0]
    console.log(1)
    getIngredientDetail(meal)
    getMeasure(meal)
    setMealTitle(meal.strMeal)
    setImgUrl(meal.strMealThumb)
  }
  return (
    <div className="detail">
      <Fullinfo
        title={mealTitle}
        img={imgUrl}
        ingredients={ingredients}
        measure={measures}
      />
    </div>
  )
}

async function getFoodByIdFromApi(id) {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  )
  return response.data
}

export default Detail
