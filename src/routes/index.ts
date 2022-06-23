import * as express from 'express'
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res) {
  res.send('carty-service works! (version 0.1.0)')
})

export default router
