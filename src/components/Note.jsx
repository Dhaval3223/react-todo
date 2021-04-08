import React from 'react';
import { connect } from 'react-redux';
import { deleteToDo } from '../actions/index';

function Note(props) {
  
  return (
    <div className='notes'>
    {
      props.todos.map((todo, index) => (
      <div className="note" key={index}>
        <h1>{todo.message.title}</h1>
        <p>{todo.message.content}</p>
        <button onClick={() => props.dispatch(deleteToDo(todo.id))}>Delete</button>
      </div> ))
    }
    </div>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todos.data
})

export default connect(mapStateToProps)(Note);