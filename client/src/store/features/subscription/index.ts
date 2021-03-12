import { createSlice } from '@reduxjs/toolkit';

interface SubscriptionState {
  subscriptionError: string
  SubscriptionSuccess: boolean
}

const initialState: SubscriptionState = {
  subscriptionError: '',
  SubscriptionSuccess: false,
};

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {},
});

export const subscriptionReducer = subscriptionSlice.reducer;
