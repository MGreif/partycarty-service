import * as express from 'express'
import * as cookieParser from 'cookie-parser'
import * as cors from 'cors'
import indexRouter from './routes/index'
import shoppingListRouter from './routes/shoppingList.route'
import listItemRouter from './routes/listItem.route'
import foodItemRouter from './routes/buyableItem.route'
import { errorHandler } from './errorHandler'
import { loggerMiddleware } from './config/logger'

const app = express()

app.use(express.json())
const corsOptions = {
  //origin: 'http://frontend.greif.me',
  origin: '*',
}

app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(loggerMiddleware)

app.use('/', indexRouter)
app.use('/shopping-list', shoppingListRouter)
app.use('/buyable-item', foodItemRouter)
app.use('/list-item', listItemRouter)

app.use(errorHandler)

export default app
