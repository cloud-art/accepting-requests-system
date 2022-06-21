import React from "react";
import "./ModalAddRequest.scss"

const ModalAddRequest = ({active, setActive, children}) => {

    const closeModal = () => {
        setActive(false)
    }
    const openModal = () => {
        setActive(true)
    }

    return (
        <div className={active? `modal modal-active ` : `modal`} onClick={closeModal}>
            <div className={active? `modal-content modal-content-active ` : `modal-content`} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default ModalAddRequest