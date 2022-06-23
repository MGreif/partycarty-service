import * as mongoose from 'mongoose'

export type TShoppingList = {
  _id: string
  createdAt: Date
  updatedAt: Date
  items: string[]
  editable: boolean
  description: string
}

export type TShoppingListDto = TShoppingList & {
  __v: number
}

const shoppingListSchema = new mongoose.Schema(
  {
    items: [{ type: mongoose.Types.ObjectId, ref: 'listItem', default: null }],
    editable: { type: Boolean, default: false },
    description: { type: String, required: true },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
)

const ShoppingListModel = mongoose.model('shoppingList', shoppingListSchema)

export default ShoppingListModel
