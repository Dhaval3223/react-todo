import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions/index';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);


  const handleExpanded = () => {
    setExpanded(true);
  }

  const setToDefault = () => {
    setExpanded(false);
  }

  return (
    <div onDoubleClick={setToDefault}>
      <form onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const content = e.target.content.value;
        props.dispatch(addToDo({title, content}));
        e.target.title.value = ''
        e.target.content.value = ''
      }}>
        {isExpanded && (<input 
          type="text" 
          placeholder="Title"
          name="title" 
          autoComplete="off"
          />)}
        <p>
          <textarea
          onClick={handleExpanded}
          name="content" 
          placeholder="Take a note..."
          raws={isExpanded ? 3 : 1}
          ></textarea>
        </p>
        {isExpanded && <button >Add</button>}
      </form>
    </div>
  )
}

export default connect()(CreateArea);