import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from 'store';
import { MessageKey } from 'messages';
import { fetchSubscribers } from 'services/newsletter';

interface SubscribersState {
  subscribers: [],
  fetching: boolean,
  fetchError: MessageKey | ''
}

const initialState: SubscribersState = {
  fetching: true,
  fetchError: '',
  subscribers: [],
};

const subscribersSlice = createSlice({
  name: 'subscribers',
  initialState,
  reducers: {
    fetchSubscribersRequest: (state: SubscribersState) => {
      state.fetching = true;
      state.subscribers = [];
      state.fetchError = '';
    },
    fetchSubscribersSuccess: (state: SubscribersState) => {
      state.fetching = false;
      state.subscribers = [];
    },
    fetchSubscribersFailed: (state: SubscribersState, { payload }: PayloadAction<MessageKey>) => {
      state.fetching = false;
      state.fetchError = payload;
    },
  },
});

export const subscribersReducer = subscribersSlice.reducer;

const {
  fetchSubscribersRequest,
  fetchSubscribersSuccess,
  fetchSubscribersFailed,
} = subscribersSlice.actions;

const fetchSubscribersList = (): AppThunk => async (dispatch) => {
  dispatch(fetchSubscribersRequest());

  try {
    await fetchSubscribers();
    dispatch(fetchSubscribersSuccess());
  } catch ({ message }) {
    dispatch(fetchSubscribersFailed(message));
  }
};

export { fetchSubscribersList };
