import BuyableItemModel from '../models/buyableItem.model'

const createBuyableItem = async (data = {}) => {
  const result = await BuyableItemModel.create(data)
  return result
}

const getBuyableItems = async (filter = {}) => {
  const result = await BuyableItemModel.find(filter)
  return result
}

const getBuyableItem = async (filter = {}) => {
  const result = await BuyableItemModel.findOne(filter)
  return result
}

const deleteBuyableItem = async (id) => {
  const result = await BuyableItemModel.deleteOne({ _id: id })
  return result
}

const updateBuyableItem = async (id, updateData = {}) => {
  const result = await BuyableItemModel.updateOne(
    { _id: id },
    { $set: updateData }
  )
  return result
}

export {
  createBuyableItem,
  getBuyableItems,
  deleteBuyableItem,
  updateBuyableItem,
  getBuyableItem,
}
