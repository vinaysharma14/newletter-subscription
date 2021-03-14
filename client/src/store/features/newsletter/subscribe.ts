import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from 'store';
import { MessageKey } from 'messages';
import { subscribe } from 'services/newsletter';

interface SubscriptionState {
  subscribing: boolean
  subscriptionSuccess: boolean
  submitButtonLabel: MessageKey
  subscriptionError: MessageKey | ''
}

const initialState: SubscriptionState = {
  subscribing: false,
  subscriptionError: '',
  subscriptionSuccess: false,
  submitButtonLabel: 'subscribe',
};

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    subscriptionRequest: (state: SubscriptionState) => {
      state.subscribing = true;
      state.subscriptionError = '';
      state.subscriptionSuccess = false;
      state.submitButtonLabel = 'subscribing';
    },
    subscriptionSuccess: (state: SubscriptionState) => {
      state.subscribing = false;
      state.subscriptionSuccess = true;
    },
    subscriptionFailed: (state: SubscriptionState, { payload }: PayloadAction<MessageKey>) => {
      state.subscribing = false;
      state.subscriptionError = payload;
      state.submitButtonLabel = 'tryAgain';
    },
  },
});

export const subscriptionReducer = subscriptionSlice.reducer;
const { subscriptionRequest, subscriptionSuccess, subscriptionFailed } = subscriptionSlice.actions;

const subscribeToNewsletter = (email: string): AppThunk => async (dispatch) => {
  dispatch(subscriptionRequest());

  try {
    await subscribe(email);
    dispatch(subscriptionSuccess());
  } catch ({ message }) {
    dispatch(subscriptionFailed(message));
  }
};

export { subscribeToNewsletter };
