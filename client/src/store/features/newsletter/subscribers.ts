import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from 'store';
import { MessageKey } from 'messages';
import { fetchSubscribers } from 'services/newsletter';

export interface Subscriber {
  email: string;
  subscribedAt: string;
}

interface SubscribersState {
  fetching: boolean,
  subscribers: Subscriber[],
  fetchError: MessageKey | '',
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
    fetchSubscribersSuccess: (
      state: SubscribersState,
      { payload }: PayloadAction<Subscriber[]>,
    ) => {
      state.fetching = false;
      state.subscribers = payload;
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
    const subscribers = await fetchSubscribers();

    if (subscribers.length === 0) {
      throw new Error('noSubscribers');
    }

    dispatch(fetchSubscribersSuccess(subscribers));
  } catch ({ message }) {
    dispatch(fetchSubscribersFailed(message));
  }
};

export { fetchSubscribersList };
