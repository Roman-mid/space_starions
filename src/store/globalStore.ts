import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { tokenApi } from '../services/getToken.service';
import { dataApi } from '../services/getData.service';

export const store = configureStore({
  reducer: {
    [tokenApi.reducerPath]: tokenApi.reducer,
    [dataApi.reducerPath]: dataApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(tokenApi.middleware)
      .concat(dataApi.middleware),
});

setupListeners(store.dispatch);
