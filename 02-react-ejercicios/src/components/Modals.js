import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { UseModal } from '../Hooks/useModal';
import ModalPortales from './ModalPortals';

const Modals = () => {

    const [isopenModal1,openModal1,closeModal1]=UseModal(false);
    const [isopenModal2,openModal2,closeModal2]=UseModal(false);
    const [isopenModalPortal,openModalPortal,closeModalPortal]=UseModal(false);

    return (
        <>
            <h2>Modales</h2>
            <button onClick={openModal1}>open</button>

            <Modal  isopenModal={isopenModal1} closeModal={closeModal1} > 
                    <p>souy un hijo del modal</p>
            </Modal>
        
            <button onClick={openModal2}>open2</button>

            <Modal  isopenModal={isopenModal2} closeModal={closeModal2} > 
                    <p>souy un hijo del modal2</p>
            </Modal>

            <button onClick={openModalPortal}>open2</button>

            <ModalPortales  isopenModal={isopenModalPortal} closeModal={closeModalPortal} > 
                    <p>souy un hijo del modal3</p>
            </ModalPortales>
        </>
      );
}
 
export default Modals;