import React, { useState, useEffect } from 'react';
import "./Modal.css";

//tiene que ser si o si la palabra children!
const Modal = ({children,closeModal,isopenModal}) => {

    const handleModalContainerClick = (e) => e.stopPropagation();
    
    return (
        <article className={`modal ${isopenModal && "is-open"}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModalContainerClick}>
                <button className="modal-close" onClick={closeModal}>
                X
                </button>
                {children}
            </div>
        </article>
    );
}
 
export default Modal;