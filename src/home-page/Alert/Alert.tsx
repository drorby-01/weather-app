import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalError = (props: any) => {
  return (
    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={true}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{textTransform:"capitalize"}} >you must enter only english letter</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalError;
