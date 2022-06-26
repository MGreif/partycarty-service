import ShoppingListModel from '../models/shoppingList.model'

const createShoppingList = async (data = {}) => {
  const result = await ShoppingListModel.create(data)
  return result
}

const getShoppingLists = async (filter = {}) => {
  const result = await ShoppingListModel.find(filter)
  return result
}

const getShoppingList = async (filter = {}) => {
  const result = await ShoppingListModel.findOne(filter).populate({
    path: 'items',
    populate: {
      path: 'buyableItem',
    },
  })
  return result
}

const deleteShoppingList = async (id) => {
  const result = await ShoppingListModel.deleteOne({ _id: id })
  return result
}

const updateShoppingList = async (id, updateData = {}) => {
  const result = await ShoppingListModel.updateOne(
    { _id: id },
    { $set: updateData }
  )
  return result
}

export {
  createShoppingList,
  getShoppingLists,
  deleteShoppingList,
  updateShoppingList,
  getShoppingList,
}
