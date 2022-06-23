import { HttpError, NotFoundError } from '../errorHandler'
import * as FoodItemService from '../services/foodItem.service '
import * as bcrypt from 'bcrypt'

const createFoodItem = async (req, res, next) => {
  try {
    const { body } = req
    const result = await FoodItemService.createFoodItem(body)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const getFoodItems = async (req, res, next) => {
  try {
    const { query } = req
    const result = await FoodItemService.getFoodItems(query)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const deleteFoodItem = async (req, res, next) => {
  try {
    const { id } = req.params

    if (!id) throw new NotFoundError(id)

    const result = await FoodItemService.deleteFoodItem(id)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const updateFoodItem = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req

    if (!id) throw new NotFoundError(id)

    const result = await FoodItemService.updateFoodItem(id, body)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

export { createFoodItem, getFoodItems, deleteFoodItem, updateFoodItem }
