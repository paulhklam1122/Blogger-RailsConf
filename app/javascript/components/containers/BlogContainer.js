import React, { Component } from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'
import Form from '../Form'
import PostRow from '../PostRow'

import { fetchPosts } from '../actions/posts'

class BlogContainer extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    this.getAllPosts()
  }

  getAllPosts = () => {
    const { dispatch } = this.props
    dispatch(fetchPosts())
  }

  render () {
    return (
      <div>
        <h1>Blogger</h1>
        <br/>

        <Form getAllPosts={this.getAllPosts} />
        <br/>

        {this.props.posts.map((post, index) => (
          <PostRow
            post={post}
            key={index}
            getAllPosts={this.getAllPosts}
          />
        ))}
      </div>
    )
  }
}

BlogContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.objects)
}

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts || []
})

export default connect(mapStateToProps)(BlogContainer)
