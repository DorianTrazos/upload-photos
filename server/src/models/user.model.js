import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    image: {
      secure_url: String,
      public_id: String
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Product', UserSchema);
