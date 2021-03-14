import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
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
