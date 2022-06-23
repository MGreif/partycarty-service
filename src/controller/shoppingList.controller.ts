import { HttpError, NotFoundError } from '../errorHandler'
import * as ShoppingListService from '../services/shoppingList.service'

const createShoppingList = async (req, res, next) => {
  try {
    const { body } = req
    const result = await ShoppingListService.createShoppingList(body)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const getShoppingLists = async (req, res, next) => {
  try {
    const { query } = req
    const result = await ShoppingListService.getShoppingLists(query)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const getShoppingList = async (req, res, next) => {
  try {
    const { params } = req
    const result = await ShoppingListService.getShoppingList({ _id: params.id })
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const deleteShoppingList = async (req, res, next) => {
  try {
    const { id } = req.params

    if (!id) throw new NotFoundError(id)

    const result = await ShoppingListService.deleteShoppingList(id)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const updateShoppingList = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req

    if (!id) throw new NotFoundError(id)

    const result = await ShoppingListService.updateShoppingList(id, body)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

export {
  createShoppingList,
  getShoppingLists,
  deleteShoppingList,
  updateShoppingList,
  getShoppingList,
}
