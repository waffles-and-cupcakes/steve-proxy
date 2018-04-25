import React from 'react';
import Carousel from './Carousel';
import style from './Modal.css';

const Modal = (props) => {
  return props.open ? (
    <div>
      <div className={style.modal}>
        <button className={style.modalClose} onClick={props.toggleModal}>
          <svg viewBox="0 0 40 40">
            <path className={style.closeX} d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </button>
        <div className={style.modalContent}>
          <Carousel photos={props.photos} />
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;