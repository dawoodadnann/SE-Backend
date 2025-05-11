import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
  items: [
    {
      menuItemId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'MenuItem', 
        required: true 
      },
      name: String,         // denormalize for faster lookup
      price: Number,
      quantity: Number,
    }
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending','Approved','Cancelled'],
    default: 'Pending',
  },
}, { timestamps: true });

export default mongoose.model('Order', OrderSchema);
