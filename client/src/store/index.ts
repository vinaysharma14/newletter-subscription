import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';

import { createLogger } from 'redux-logger';

import { themeReducer, subscribersReducer, subscriptionReducer } from './features';

export const store = configureStore({
  reducer: {
    themeReducer,
    subscribersReducer,
    subscriptionReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    ...process.env.NODE_ENV === 'development' ? [ // actions should be logged only during development
      createLogger({
        // * all the logs would be collapsed so as to prevent console from being cluttered
        // * you can uncomment the below line or completely line it as per your requirement
        collapsed: true,
        // * you can prevent actions to be logged by specifying their action type
        // predicate: (_, action) => !action.type.includes('action-type'),
      }),
    ] : [],
  ],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
