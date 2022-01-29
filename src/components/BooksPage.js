import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import Book from './Book';
import BookForm from './BookForm';
import { fetchBooks } from '../redux/books/books';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const BooksPage = () => {
  const bookList = useSelector((state) => state.books.value);
  const loading = useSelector((state) => state.books.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks);
  }, []);

  return (
    <div>
      <ul id="book-list">
        <Loader type="ThreeDots" visible={loading} color="#0290ff" />
        <span id="loading">{loading ? 'Loading' : ''}</span>
        {bookList.map((book) => <Book key={book.item_id} book={book} />)}
      </ul>
      <BookForm />
    </div>
  );
};

export default BooksPage;
