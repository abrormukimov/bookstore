import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const initial = {
    title: '', author: '', category: '', progress: '0',
  };
  const [data, setData] = useState(initial);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(saveBook(data));
    setData(initial);
  };

  return (
    <div id="newbook">
      <h3> ADD NEW BOOK </h3>
      <form id="add-book-form" onSubmit={(e) => submitForm(e)}>
        <input id="input-title" name="title" value={data.title} onChange={handleInput} placeholder="Book Title" />
        <input id="input-author" name="author" value={data.author} onChange={handleInput} placeholder="Book Author" />
        <input id="input-category" name="category" value={data.category} onChange={handleInput} placeholder="Book Category" />
        <button id="form-button" type="submit"> Add Book </button>
      </form>
    </div>
  );
};

export default BookForm;
