import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
  age: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
}, {
  timestamps: {
    createdAt: 'subscribedAt',
  },
},
);

export const subscriptions = mongoose.model('subscriptions', subscriptionSchema);
