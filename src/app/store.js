import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { gamesReducer } from "../features/games/gamesSlice";
import { postsReducer } from "../features/posts/postsSlice";

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
