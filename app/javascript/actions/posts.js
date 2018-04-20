export const FETCH_POSTS_START = 'FETCH_POSTS_START'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'

export const fetchPosts = () => (dispatch) => {
  dispatch({ type: FETCH_POSTS_START })
  return fetch('/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query {
          posts {
            title
            content
            id
          }
        }
      `
    })
  }).then(response => {
    return response.json()
  }).then(response => {
    dispatch({ type: FETCH_POSTS_SUCCESS, records: response.data.posts })
  })
}
