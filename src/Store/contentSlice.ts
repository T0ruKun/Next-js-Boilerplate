import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type Content = {
  id: number;
  title: string;
  link: string;
  author: string;
  tags: string[];
  updatedAt: string;
};

type ContentState = {
  items: Content[];
  loading: boolean;
};

const initialState: ContentState = {
  items: [],
  loading: false,
};

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<Content[]>) => {
      state.items.push(...action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { addItems, setLoading } = contentSlice.actions;

export default contentSlice.reducer;
