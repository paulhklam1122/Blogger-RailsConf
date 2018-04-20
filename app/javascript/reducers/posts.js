import { FETCH_POSTS_SUCCESS } from '../actions/posts'

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_POSTS_SUCCESS:
      return [...state, ...action.records]
    default:
      return state
  }
}
