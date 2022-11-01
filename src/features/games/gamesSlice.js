import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { baseUrl } from "../../shared/baseUrl";
import { mapImageURL } from "../../utils/mapImageURL";

export const fetchGames = createAsyncThunk("games/fetchGames", async () => {
  const response = await fetch(baseUrl + "games");
  if (!response.ok) {
    return Promise.reject("Unable to fetch, status: " + response.status);
  }
  const data = await response.json();
  return data;
});

const initialState = {
  gamesArray: [],
  isLoading: true,
  errMsg: "",
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGames.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchGames.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = "";
      state.gamesArray = mapImageURL(action.payload);
    },
    [fetchGames.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const gamesReducer = gamesSlice.reducer;

export const selectAllGames = (state) => {
  return state.games.gamesArray;
};

// export const selectRandomGame  = () => {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// };

export const selectGameById = (id) => (state) => {
  return state.games.gamesArray.find((game) => game.id === parseInt(id));
};
export const selectFeaturedGame = (state) => {
  return {
    featuredItem: state.games.gamesArray.find((game) => game.featured),
    isLoading: state.games.isLoading,
    errMsg: state.games.errMsg,
  };
};
