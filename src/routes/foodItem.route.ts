import * as express from 'express'
import * as FoodItemController from '../controller/foodItem.controller'
const router = express.Router()

router.get('/', FoodItemController.getFoodItems)
router.post('/', FoodItemController.createFoodItem)
router.delete('/:id', FoodItemController.deleteFoodItem)
router.patch('/:id', FoodItemController.updateFoodItem)

export default router
