import ListItemModel from '../models/listItem.model'
import ShoppingListModel from '../models/shoppingList.model'

const createListItem = async (data = {}) => {
  const result = await ListItemModel.create(data)

  return result
}

const getListItems = async (filter = {}) => {
  const result = await ListItemModel.find(filter).populate('buyableItem')

  return result
}

const appendToShoppingList = async (id: string, body) => {
  console.log(id, body)
  const listItem = await ListItemModel.create(body)
  const result = await ShoppingListModel.updateOne(
    { _id: id },
    { $push: { items: listItem._id } }
  )
  return result
}

const getListItem = async (filter = {}) => {
  const result = await ListItemModel.findOne(filter).populate('buyableItem')

  return result
}

const deleteListItem = async (id) => {
  const result = await ListItemModel.deleteOne({ _id: id })
  return result
}

const updateListItem = async (id, updateData = {}) => {
  const result = await ListItemModel.updateOne(
    { _id: id },
    { $set: updateData }
  )
  return result
}

export {
  createListItem,
  getListItems,
  deleteListItem,
  updateListItem,
  getListItem,
  appendToShoppingList,
}
