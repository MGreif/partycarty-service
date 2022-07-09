import { NotFoundError } from '../errorHandler'
import * as BuyableItemService from '../services/buyableItem.service '

const createBuyableItem = async (req, res, next) => {
  try {
    const { body } = req
    const result = await BuyableItemService.createBuyableItem({
      ...body,
      verified: false,
    })
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const getBuyableItems = async (req, res, next) => {
  try {
    const { query } = req
    const { searchTerm } = query
    const result = await BuyableItemService.getBuyableItems({
      name: new RegExp(searchTerm, 'ig'),
      verified: true,
    })
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const deleteBuyableItem = async (req, res, next) => {
  try {
    const { id } = req.params

    if (!id) throw new NotFoundError(id)

    const result = await BuyableItemService.deleteBuyableItem(id)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const updateBuyableItem = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req

    if (!id) throw new NotFoundError(id)

    const result = await BuyableItemService.updateBuyableItem(id, body)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

export {
  createBuyableItem,
  getBuyableItems,
  deleteBuyableItem,
  updateBuyableItem,
}
