import ListItemModel from '../models/listItem.model'

const createListItem = async (data = {}) => {
  const result = await ListItemModel.create(data)
  return result
}

const getListItems = async (filter = {}) => {
  const result = await ListItemModel.find(filter)
  return result
}

const getListItem = async (filter = {}) => {
  const result = await ListItemModel.findOne(filter)
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
}
