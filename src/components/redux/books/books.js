const initialState = [];

function addBook(book) {
  return {
    type: "ADD_BOOK",
    payload: book,
  }
}

function removeBook(id) {
  return {
    type: "REMOVE_BOOK",
    payload: id,
  }
}

export default function reducer(state = initialState, action) {
  if (action.type === "ADD_BOOK") {
    return [...state, action.payload]
  } else if (action.type === "REMOVE_BOOK") {
    return state.filter((book) => book.id !== action.payload);
  }
  return state;
}

export { addBook, removeBook }
