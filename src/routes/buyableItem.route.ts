import * as express from 'express'
import * as BuyableItemController from '../controller/buyableItem.controller'
const router = express.Router()

router.get('/', BuyableItemController.getBuyableItems)
router.post('/', BuyableItemController.createBuyableItem)
router.delete('/:id', BuyableItemController.deleteBuyableItem)
router.patch('/:id', BuyableItemController.updateBuyableItem)

export default router
