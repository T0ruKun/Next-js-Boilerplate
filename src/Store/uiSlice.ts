import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type UiState = {
  isSideNavVisible: boolean;
};

const initialState: UiState = {
  isSideNavVisible: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSideNav: (state) => {
      state.isSideNavVisible = !state.isSideNavVisible;
    },
    setSideNavVisibility: (state, action: PayloadAction<boolean>) => {
      state.isSideNavVisible = action.payload;
    },
  },
});

export const { toggleSideNav, setSideNavVisibility } = uiSlice.actions;
export default uiSlice.reducer;
