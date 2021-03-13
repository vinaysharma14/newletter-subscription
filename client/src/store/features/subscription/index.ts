import { createSlice } from '@reduxjs/toolkit';

import { AppThunk } from 'store';
import { subscribe } from 'services';
import { MessageKey } from 'messages';

interface SubscriptionState {
  subscribing: boolean
  subscriptionSuccess: boolean
  subscriptionError: MessageKey | ''
}

const initialState: SubscriptionState = {
  subscribing: false,
  subscriptionError: '',
  subscriptionSuccess: false,
};

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    subscriptionRequest: (state: SubscriptionState) => {
      state.subscribing = true;
      state.subscriptionError = '';
      state.subscriptionSuccess = false;
    },
    subscriptionSuccess: (state: SubscriptionState) => {
      state.subscribing = false;
      state.subscriptionSuccess = true;
    },
    subscriptionFailed: (state: SubscriptionState) => {
      state.subscribing = false;
      state.subscriptionError = 'facingTechnicalIssues';
    },
  },
});

export const subscriptionReducer = subscriptionSlice.reducer;
const { subscriptionRequest, subscriptionSuccess, subscriptionFailed } = subscriptionSlice.actions;

const subscribeToNewsletter = (): AppThunk => async (dispatch) => {
  dispatch(subscriptionRequest());

  try {
    await subscribe();
    dispatch(subscriptionSuccess());
  } catch (error) {
    dispatch(subscriptionFailed());
  }
};

export { subscribeToNewsletter };
