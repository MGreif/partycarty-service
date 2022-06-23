import * as express from 'express'
import * as ShoppingListController from '../controller/shoppingList.controller'
const router = express.Router()

router.get('/', ShoppingListController.getShoppingLists)
router.get('/:id', ShoppingListController.getShoppingList)
router.post('/', ShoppingListController.createShoppingList)
router.delete('/:id', ShoppingListController.deleteShoppingList)
router.patch('/:id', ShoppingListController.updateShoppingList)

export default router
