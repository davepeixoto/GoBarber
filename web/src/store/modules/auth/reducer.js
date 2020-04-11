const INITIAL_STATE = {};

export default function auth(state = INITIAL_STATE, action) {
  console.tron.log(`reducer ${action.type}`);
  switch (action.type) {
    default:
      return state;
  }
}
