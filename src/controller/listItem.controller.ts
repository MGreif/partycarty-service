import { HttpError, NotFoundError } from '../errorHandler'
import * as ListItemService from '../services/listItem.service'
import * as bcrypt from 'bcrypt'

const createListItem = async (req, res, next) => {
  try {
    const { body } = req
    const result = await ListItemService.createListItem(body)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const getListItems = async (req, res, next) => {
  try {
    const { query } = req
    const result = await ListItemService.getListItems(query)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const deleteListItem = async (req, res, next) => {
  try {
    const { id } = req.params

    if (!id) throw new NotFoundError(id)

    const result = await ListItemService.deleteListItem(id)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const updateListItem = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req

    if (!id) throw new NotFoundError(id)

    const result = await ListItemService.updateListItem(id, body)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

export { createListItem, getListItems, deleteListItem, updateListItem }
