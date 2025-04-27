import mongoose from 'mongoose';

const MenuItemSchema = new mongoose.Schema({
  name:      { type: String, required: true },
  description:{ type: String, required: true },
  price:     { type: Number, required: true },
  category:  { type: String, required: true },
  image:     { type: String, required: true },  // store a URL or path
}, { timestamps: true });

const MenuItem = mongoose.model('MenuItem', MenuItemSchema);
export default MenuItem;
