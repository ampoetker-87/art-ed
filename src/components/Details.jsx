import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'



function Detailmodal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="img-btn" onClick={handleShow}>
        {props.title}
      </button>
      <Modal className="modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-content"><img src={props.img} />{props.details}</Modal.Body>
        <Modal.Footer>
        <a href={props.source} target="blank">Source</a>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Detailmodal;