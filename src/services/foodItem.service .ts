import FoodItemModel from '../models/foodItem.model'

const createFoodItem = async (data = {}) => {
  const result = await FoodItemModel.create(data)
  return result
}

const getFoodItems = async (filter = {}) => {
  const result = await FoodItemModel.find(filter)
  return result
}

const getFoodItem = async (filter = {}) => {
  const result = await FoodItemModel.findOne(filter)
  return result
}

const deleteFoodItem = async (id) => {
  const result = await FoodItemModel.deleteOne({ _id: id })
  return result
}

const updateFoodItem = async (id, updateData = {}) => {
  const result = await FoodItemModel.updateOne(
    { _id: id },
    { $set: updateData }
  )
  return result
}

export {
  createFoodItem,
  getFoodItems,
  deleteFoodItem,
  updateFoodItem,
  getFoodItem,
}
