import * as mongoose from 'mongoose'

export enum ECategory {
  FRUITS = 'FRUITS',
  VEGETABLES = 'VEGETABLES',
  ALCOHOL = 'ALCOHOL',
  DRINKS = 'DRINKS',
  SNACKS = 'SNACKS',
  FROZEN = 'FROZEN',
}

export type TFoodItem = {
  _id: string
  createdAt: Date
  updatedAt: Date
  name: string
  category: ECategory
  picture_url?: string
  fluid: boolean
}

export type TFoodItemDto = TFoodItem & {
  __v: number
}

const foodItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: {
      type: String,
      enum: ['FRUITS', 'VEGETABLES', 'ALCOHOL', 'DRINKS', 'SNACKS', 'FROZEN'],
      required: true,
    },
    picture_url: { type: String },
    fluid: { type: Boolean, default: false },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
)

const FoodItemModel = mongoose.model('foodItem', foodItemSchema)

export default FoodItemModel
