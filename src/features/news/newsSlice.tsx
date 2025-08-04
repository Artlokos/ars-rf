// features/news/newsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
}

interface NewsState {
  items: NewsItem[];
}

const initialState: NewsState = {
  items: [
    {
      id: '1',
      title: 'Первая новость',
      content: 'Содержание первой новости',
      date: '2023-05-01',
    },
  ],
};

const newsSlice = createSlice(
    {
  name: 'news',
  initialState,
  reducers: {
    addNews: (state, action: PayloadAction<Omit<NewsItem, 'id'>>) => {
      const newItem = {
        ...action.payload,
        id: Date.now().toString(),
      };
      state.items.push(newItem);
    },
    deleteNews: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateNews: (state, action: PayloadAction<NewsItem>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
// extraReducers: builder => {
//   builder.addCase(fetchNews.fulfilled, (state, action) => {
//     state.items = action.payload;
//   }

// )}
  },
}
);

// export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
//   const response = await fetch('/api/news');
//   return (await response.json()) as NewsItem[];
// });

export const { addNews, deleteNews, updateNews } = newsSlice.actions;
export default newsSlice.reducer;