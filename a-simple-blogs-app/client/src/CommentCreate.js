import axios from 'axios';
import { useState } from 'react';

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>New comment</label>
          <input
            className='form-control'
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className='btn  btn-primary'>Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
