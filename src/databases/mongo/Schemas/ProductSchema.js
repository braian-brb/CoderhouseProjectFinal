import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      trim: true
    },
    code: {
      type: String,
      trim: true,
      required: true
      // unique: true
    },
    thumbnail: {
      type: String,
      trim: true,
      default:
        'https://cdn2.iconfinder.com/data/icons/shopping-e-commerce-3/512/full-basket-512.png'
    },
    price: {
      type: Number,
      default: 0
    },
    stock: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export default productSchema
