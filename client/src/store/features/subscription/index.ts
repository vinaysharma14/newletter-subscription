import { createSlice } from '@reduxjs/toolkit';

interface SubscriptionState {
}

const initialState: SubscriptionState = {
};

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {},
});

export const subscriptionReducer = subscriptionSlice.reducer;