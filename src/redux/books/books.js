const ADD = 'bookStore/books/ADD';
const REMOVE = 'bookStore/books/REMOVE';
const INITIAL_STATE = [];

const addBook = (book) => ({
  type: ADD,
  payload: book,
});

const removeBook = (id) => ({
  type: REMOVE,
  payload: id,
});

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === ADD) {
    return [...state, action.payload];
  }

  if (action.type === REMOVE) {
    return state.filter((book) => book.id !== action.payload);
  }
  return state;
}

export { addBook, removeBook };
