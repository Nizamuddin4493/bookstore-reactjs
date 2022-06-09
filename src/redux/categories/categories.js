const STATUS = 'bookStore/categories/STATUS';
const INITIAL_STATE = [];

export const status = () => ({
  type: STATUS,
});

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === STATUS) {
    return 'under construction...';
  }
  return state;
};

export default reducer;
