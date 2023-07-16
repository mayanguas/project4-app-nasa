import './Modal.css';

const Modal = ({ modal, setModal, apod }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div>
          <img src={apod.data?.url} alt="Image from NASA" />
        </div>

        <button className="button-close" onClick={() => setModal(!modal)}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
