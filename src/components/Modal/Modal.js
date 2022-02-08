import { Component, useState } from 'react';
import { createPortal } from 'react-dom';

import s from './Modal.module.css';
import sprite from '../../images/icons/sprite.svg';

const modalRoot = document.querySelector('#modal-root');



export default class Modal extends Component {
// ===============Возможно нужно будет перенести
    state = {
        showModal:false,
    }
// ===========
    
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown)
    }
    
    handleKeydown = e => {
        if (e.code === 'Escape') {
                this.props.closeModal()
            }
    }

    handleOverlay = event => {
        if (event.currentTarget === event.target) {
            this.props.closeModal()
        }
    }

    // ===============Возможно нужно будет перенести
    toggleModal =() => {
        this.setState({ showModal: !this.state.showModal })
    }
    // ===========

    handleClose = e => {
            if (e.currentTarget === e.target) {
              this.toggleModal();
            }
        };

        

           render() {
        return createPortal(
            <div className={s.Overlay} onClick={this.handleOverlay}>
            <div className={s.Modal}>
              <p className={s.text}>Вы действительно хотите выйти?</p>
              <div className={s.buttonWrapper}>
                <button className={s.confirmButton}>Да</button>
                <button className={s.declineButton}>Нет</button>
              </div>
              <button className={s.closeButton} onClick={this.toggleModal}>
                <svg width="14" height="14" className={s.closeButtonIcon}>
                <use href={`${sprite}#icon-close`}></use>
                </svg>
              </button>
            </div>
          </div>,
            modalRoot
        )
    }
}