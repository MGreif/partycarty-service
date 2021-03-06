import * as mongoose from 'mongoose'

export type TListItem = {
  _id: string
  createdAt: Date
  updatedAt: Date
  foodItem: string
  quantity: number
  votings: number
  bought: boolean
  tag?: string
}

export type TListItemDto = TListItem & {
  __v: number
}

const listItemSchema = new mongoose.Schema(
  {
    buyableItem: {
      type: mongoose.Types.ObjectId,
      ref: 'buyableItem',
      required: true,
    },
    quantity: { type: Number, default: 1 },
    votes: { type: Number, default: 0 },
    bought: { type: Boolean, default: false },
    tag: { type: String },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
)

const ListItemModel = mongoose.model('listItem', listItemSchema)

export default ListItemModel
