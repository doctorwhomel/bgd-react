import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";
import { mapImageURL } from "../../utils/mapImageURL";

export const fetchPosts = createAsyncThunk("posts/fetchposts", async () => {
  const response = await fetch(baseUrl + "posts");
  if (!response.ok) {
    return Promise.reject("Unable to fetch, status: " + response.status);
  }
  const data = await response.json();
  return data;
});

const initialState = {
  postsArray: [],
  isLoading: true,
  errMsg: "",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = "";
      state.postsArray = mapImageURL(action.payload);
    },
    [fetchPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const postsReducer = postsSlice.reducer;

export const selectAllPosts = (state) => {
  return state.posts.postsArray;
};

// export const selectRandompost  = () => {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// };

export const selectpostById = (id) => (state) => {
  return state.posts.postsArray.find((post) => post.id === parseInt(id));
};
export const selectFeaturedPosts = (state) => {
  return {
    featuredItem: state.posts.postsArray.find((post) => post.featured),
    isLoading: state.posts.isLoading,
    errMsg: state.posts.errMsg,
  };
};
