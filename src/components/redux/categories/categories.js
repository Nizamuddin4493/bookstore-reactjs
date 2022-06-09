const initialState = [];

export function status() {
  return {
    type: "STATUS",
  }
}

export default function reducer(state = initialState, action){
  if (action.type === "STATUS") {
    return "under construction..."
  }
  return state;
}
