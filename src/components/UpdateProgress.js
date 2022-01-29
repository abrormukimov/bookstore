import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { saveProgress, openModal, closeModal } from '../redux/books/books';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '5%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const UpdateProgress = (props) => {
  const dispatch = useDispatch();
  const { id, progress } = props;
  const modalIsOpen = useSelector((state) => state.books.modal);
  useEffect(() => { Modal.setAppElement('#root'); }, []);

  const [data, setData] = useState({ id, progressValue: progress });
  const { progressValue } = data;

  const handleInput = (e) => {
    const { value } = e.target;
    setData({ ...data, progressValue: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(saveProgress(data));
    dispatch(closeModal);
  };

  return (
    <div>
      <button className="chapter-button" type="button" onClick={() => dispatch(openModal)}> Update Progress </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => dispatch(closeModal)}
        style={customStyles}
        contentLabel="Update Progress"
      >
        <form id="update-progress-form" onSubmit={submitForm}>
          <h2> Reading Progress</h2>
          {` ${progressValue}%`}
          <input
            name="progress"
            type="range"
            min="0"
            max="100"
            value={progressValue}
            rangeValue={progressValue}
            onChange={handleInput}
          />
          <button id="update-progress-button" type="submit">Update</button>
        </form>
      </Modal>
    </div>
  );
};

UpdateProgress.propTypes = {
  id: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
};

export default UpdateProgress;
