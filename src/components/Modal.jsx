import { useState } from "react";
export default function Modal({ handleClick, state, handleConfirm }) {

  const [subject, setSubject] = useState(state.subject);
  const [color, setColor] = useState(state.color);


  function handleSubmit(e) {
    e.preventDefault();
    handleConfirm({ timeSlot: state.timeSlot, subject, color: color || state.color });
    handleClick();
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <form onSubmit={handleSubmit}>
          <h2>Slot  {state.timeSlot}</h2>
          <div>
            <input
              type="text"
              placeholder="Subject"
              className="input-subject"
              value={subject || ''}
              onChange={(e) => setSubject(e.target.value)}
            />
            <input
              type="color"
              className="input-color"
              value={color || state.color || '#03a9f4'}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>

          <button type="submit" className="btn-confirm" >Confirm</button>
          <button type="reset" className="btn-cancel" onClick={handleClick}>Close</button>
          <button type="button" className="btn-delete" onClick={() => {
            handleConfirm({ timeSlot: state.timeSlot, delete: true });
            handleClick();
          }}>Delete</button>
        </form>
      </div>
      <style jsx="true">{`
        .modal {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,0.5);
          justify-content: center;
          align-items: center;
          display:  ${state.isOpen ? "flex" : "none"};
        }
        .modal__content {
          background-color: whitesmoke;
          width: 40%;
          height: 50%;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        input{
          margin: 10px;
        }
        .input-subject {
          border: none;
          border-bottom: 1px solid black;
          background-color: whitesmoke;
        }
        .input-subject:focus {
          outline: none;
        }
        .input-color::-webkit-color-swatch-wrapper {
          padding: 0;
        }
        .input-color:hover {
          cursor: pointer;
        }
        button{
          color: white;
          border: none;
          border-radius: 5px;
          padding: 10px;
          margin: 10px;
        }
        button:hover {
          cursor: pointer;
        }
        .btn-confirm {
          background-color: green;
        }
        .btn-cancel {
          background-color: grey;
        }
        .btn-delete {
          background-color: red;
        }
      `}</style>
    </div>
  )
}