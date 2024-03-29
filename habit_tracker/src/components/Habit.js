// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Habit extends React.Component {
  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <article>
        <div className="post-header">
            <h1>{this.props.postData.description}</h1>
            <h1>{this.props.postData.habit} </h1>
        </div>
        <div className="post-body">
            {this.props.postData.comments}
        </div>
        <div className="post-options">
            <ul>
                <li onClick={()=> {this.props.handleView('editPost', this.props.postData)}}>edit post</li>
                <li onClick={()=> {this.props.handleDelete(this.props.postDate.id)}}>delete post</li>
            </ul>
        </div>
      </article>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Habit
