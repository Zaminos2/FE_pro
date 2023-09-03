import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ModalError({ show, onHide }) {
  return (
    <Modal
      show={show} 
      onHide={onHide} 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Внимание!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Произошла ошибка</h4>
        <p>
          Пользователя с таким ником и почтой не существует,пожалуста введите коректные данные.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
}
