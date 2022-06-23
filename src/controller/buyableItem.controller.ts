import { HttpError, NotFoundError } from '../errorHandler'
import * as BuyableItemService from '../services/buyableItem.service '
import * as bcrypt from 'bcrypt'

const createBuyableItem = async (req, res, next) => {
  try {
    const { body } = req
    const result = await BuyableItemService.createBuyableItem(body)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const getBuyableItems = async (req, res, next) => {
  try {
    const { query } = req
    const result = await BuyableItemService.getBuyableItems(query)
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
