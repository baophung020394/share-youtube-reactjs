import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ListParams, ListResponse, Youtube } from 'models';

export interface YoutubeState {
  loading: boolean;
  list: Youtube[];
}

const initialState: YoutubeState = {
  loading: false,
  list: [],
};

const youtubeSlide = createSlice({
  name: 'youtube',
  initialState,
  reducers: {
    fetchYoutubeList(state) {
      state.loading = true;
    },
    fetchYoutubeListSuccess(state, action: PayloadAction<ListResponse<Youtube>>) {
      console.log('action.payload',action);
      state.list = action.payload.data;
      state.loading = false;
    },
    fetchYoutubeListFailed(state) {
      state.loading = false;
    },
  },
});

// Actions
export const youtubeActions = youtubeSlide.actions;
// Selectors
export const selectYoutubeList = (state: RootState) => state.youtube.list;
export const selectYoutubeLoading = (state: RootState) => state.youtube.loading;
// Reducer

const youtubeReducer = youtubeSlide.reducer;
export default youtubeReducer;
