const SendConfirmedModal = ({ setSendModal }) => {
  return (
    <div className="modal">
      <div onClick={() => setSendModal(false)} className="overlay"></div>
      <div className="modal-content send">
        <p>Email sent! I'll answer you as soon as possible.</p>
        <button className="close" onClick={() => setSendModal(false)}>
          X
        </button>
      </div>
    </div>
  );
};

export default SendConfirmedModal;
