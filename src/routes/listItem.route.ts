import * as express from 'express'
import * as ListItemController from '../controller/listItem.controller'
const router = express.Router()

router.get('/', ListItemController.getListItems)
router.post('/', ListItemController.createListItem)
router.delete('/:id', ListItemController.deleteListItem)
router.patch('/:id', ListItemController.updateListItem)

export default router
