import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import UpdateProgress from './UpdateProgress';
import { removeBook } from '../redux/books/books';

import 'react-circular-progressbar/dist/styles.css';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  let chapter = Math.floor((book.progress / 100) * 20);
  chapter = chapter === 0 ? 1 : chapter;
  return (
    <li key={book.item_id} className="book-item">
      <div className="left-section">
        <div className="text-info">
          <span className="book-category">
            {`${book.category}`}
          </span>
          <span className="book-title">
            {`${book.title}`}
          </span>
          <span className="book-author">
            {`${book.author}`}
          </span>
        </div>
        <div className="book-actions">
          <button type="button"> Comments </button>
          <button type="button" onClick={() => dispatch(removeBook(book.item_id))}>
            Remove
          </button>
          <button type="button"> Edit</button>
        </div>
      </div>
      <div className="progress-bar">
        <CircularProgressbar value={book.progress} text={`${book.progress}%`} />
      </div>
      <div className="chapters">
        <span className="current-chapter">CURRENT CHAPTER</span>
        <span className="chapter-value">{`Chapter ${chapter}`}</span>
        <UpdateProgress key={book.item_id} id={book.item_id} progress={book.progress} />
      </div>
    </li>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    author: PropTypes.string,
    progress: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};
