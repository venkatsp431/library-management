import React from "react";

import {
  addUser,
  deleteBook,
  editBook,
  fetchBooks,
} from "../Reducers/useReducer";

export const getData = () => async (dispatch) => {
  try {
    const res = await fetch(
      "https://6450da28a32219691153675b.mockapi.io/users/"
    );
    const res1 = await res.json();
    dispatch(fetchBooks(res1));
  } catch (error) {
    console.log(error);
  }
};

export const addata = (newBook) => async (dispatch) => {
  try {
    const res = await fetch(
      "https://6450da28a32219691153675b.mockapi.io/users/",
      {
        method: "POST",
        body: JSON.stringify(newBook),
        headers: { "Content-Type": "application/json" },
      }
    );
    const res1 = await res.json();
    dispatch(addUser(res1));
  } catch (error) {
    console.log(error);
  }
};

export const editata = (newBook) => async (dispatch) => {
  try {
    const res = await fetch(
      `https://6450da28a32219691153675b.mockapi.io/users/${newBook.id}`,
      {
        method: "PUT",
        body: JSON.stringify(newBook),
        headers: { "Content-Type": "application/json" },
      }
    );
    const res1 = await res.json();
    dispatch(editBook(newBook));
  } catch (error) {
    console.log(error);
  }
};

export const deletedata = (bookId) => async (dispatch) => {
  try {
    await fetch(
      `https://6450da28a32219691153675b.mockapi.io/users/${bookId.id}`,
      {
        method: "DELETE",
      }
    );
    dispatch(deleteBook({ bookId }));
  } catch (error) {
    console.log(error);
  }
};
