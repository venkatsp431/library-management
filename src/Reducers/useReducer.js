import { createSlice } from "@reduxjs/toolkit";
import React, { useContext } from "react";
import { act } from "react-dom/test-utils";
import { Bookcontext } from "../App";

// const [books] = useContext(Bookcontext);
const initialState = {
  bookInfo: {
    // Add a nested object for books
    books: [],
    selectedObj: {},
  },
};

const bookSlice = createSlice({
  name: "bookInfo",
  initialState,
  reducers: {
    addUser: (state, action) => {
      let lastid = state?.books[state.books.length - 1]?.id;
      let data = { ...action.payload, id: lastid ? lastid + 1 : 1 };
      state.bookInfo.books.push(data);
    },
    fetchBooks: (state, action) => {
      state.bookInfo.books = action.payload;
    },
    deleteBook: (state, action) => {
      console.log(action.payload);
      state.bookInfo.books = JSON.parse(
        JSON.stringify(
          state.bookInfo.books.filter(
            (book) => book.id !== action.payload.bookId.id
          )
        )
      );

      console.log(state.bookInfo.books);
    },
    selected: (state, action) => {
      console.log(action.payload);
      state.bookInfo.selectedObj = JSON.parse(JSON.stringify(action.payload));
      console.log(state.selectedObj);
    },
    editBook: (state, action) => {
      console.log(action.payload);
      const { id, authorname, available, bookname, genre } = action.payload;
      const index = state.bookInfo.books.findIndex((book) => book.id === id);
      console.log(index, id);
      if (index !== -1) {
        state.bookInfo.books[index] = {
          id,
          authorname,
          available,
          bookname,
          genre,
        };
      }
    },
  },
});
export const { addUser, fetchBooks, deleteBook, selected, editBook } =
  bookSlice.actions;
export default bookSlice.reducer;
