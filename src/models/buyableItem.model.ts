import * as mongoose from 'mongoose'

export type TBuyableItem = {
  _id: string
  createdAt: Date
  updatedAt: Date
  name: string
  category: keyof typeof CATEGORIES
  picture_url?: string
  fluid: boolean
}

export type TBuyableItemDto = TBuyableItem & {
  __v: number
}

export const CATEGORIES = {
  BABY: { value: 'BABY', label: 'Babies' },
  BAKERY: { value: 'BAKERY', label: 'Bakery' },
  BEAUTY_PERSONAL_HYGIENE: {
    value: 'BEAUTY_PERSONAL_HYGIENE',
    label: 'Beauty and personal hygiene',
  },
  BEER_WINE_SPIRITS: {
    value: 'BEER_WINE_SPIRITS',
    label: 'Alcohol, wine and beer',
  },
  CANS_JARS: { value: 'CANS_JARS', label: 'Cans and jars' },
  CEREAL_MUESLI: { value: 'CEREAL_MUESLI', label: 'Cereal' },
  CLOTHING: { value: 'CLOTHING', label: 'Clothing' },
  COFFEE_TEA: { value: 'COFFEE_TEA', label: 'Coffee and tea' },
  DAIRY_EGGS: { value: 'DAIRY_EGGS', label: 'Dairy and eggs' },
  ELECTRONICS_OFFICE: {
    value: 'ELECTRONICS_OFFICE',
    label: 'Electronics and office',
  },
  FISH_SEAFOOD: { value: 'FISH_SEAFOOD', label: 'Fish and seafood' },
  FROZEN: { value: 'FROZEN', label: 'Frozen Food' },
  FRUITS_VEGETABLES: {
    value: 'FRUITS_VEGETABLES',
    label: 'Fruits and vegetables',
  },
  'HOUSE-CLEANING_PRODUCTS': {
    value: 'HOUSE-CLEANING_PRODUCTS',
    label: 'Cleaning',
  },
  MEAT_POULTRY: { value: 'MEAT_POULTRY', label: 'Meat and poultry' },
  OTHER: { value: 'OTHER', label: 'Other' },
  READY_MEALS: { value: 'READY_MEALS', label: 'Instant meals' },
  SNACKS_SWEETS: { value: 'SNACKS_SWEETS', label: 'Snacks' },
  SAUCES: { value: 'SAUCES', label: 'Sauces' },
  STATIONARY: { value: 'STATIONARY', label: 'Stationary' },
  SPICES: { value: 'SPICES', label: 'Spices' },
  PASTRY: { value: 'PASTRY', label: 'Pastry' },
  DRINKS: { value: 'DRINKS', label: 'Drinks' },
  KITCHEN_UTENSILS: { value: 'KITCHEN_UTENSILS', label: 'Kitchen utensils' },
}

const buyableItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: {
      type: String,
      enum: [
        'BABY',
        'BAKERY',
        'BEAUTY_PERSONAL_HYGIENE',
        'BEER_WINE_SPIRITS',
        'CANS_JARS',
        'CEREAL_MUESLI',
        'CLOTHING',
        'COFFEE_TEA',
        'DAIRY_EGGS',
        'DRINKS',
        'ELECTRONICS_OFFICE',
        'FISH_SEAFOOD',
        'FROZEN',
        'FRUITS_VEGETABLES',
        'HOUSE-CLEANING_PRODUCTS',
        'KITCHEN_UTENSILS',
        'MEAT_POULTRY',
        'OTHER',
        'READY_MEALS',
        'SNACKS_SWEETS',
        'SAUCES',
        'STATIONARY',
        'SPICES',
        'PASTRY',
      ],
      required: true,
    },
    picture_url: { type: String },
    fluid: { type: Boolean, default: false },
    verified: { type: Boolean, default: false },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
)

const BuyableItemModel = mongoose.model('buyableItem', buyableItemSchema)

export default BuyableItemModel
