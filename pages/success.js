import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';

function ModalCustom() {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Rigistration Successfull!</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Link href='/login'>
          <Button variant="primary">Login</Button>
        </Link>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default ModalCustom;