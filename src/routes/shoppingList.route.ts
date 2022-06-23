import * as express from 'express'
import * as UserController from '../controller/shoppingList.controller'
const router = express.Router()

router.get('/', UserController.getShoppingLists)
router.post('/', UserController.createShoppingList)
router.delete('/:id', UserController.deleteShoppingList)
router.patch('/:id', UserController.updateShoppingList)

export default router
