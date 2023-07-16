import './ModalRover.css';

const ModalRover = ({ modalRover, setModalRover, rover }) => {
  return (
    <div className="modal-container-rover">
      <div className="modal-rover">
        <div>
          <img src={rover?.data?.photos[0].img_src} alt="Image from NASA" />
        </div>

        <button
          className="button-close-rover"
          onClick={() => setModalRover(!modalRover)}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalRover;
