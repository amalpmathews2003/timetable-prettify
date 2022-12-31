import { useState } from "react";
import { timeTable1, timeTable2, timeSlots } from "../config";
import Box from "./Box";
import Modal from "./Modal";

const days = ["MON", "TUE", "WED", "THU", "FRI"];
const colors = [
  "#03a9f4",
  "#e91e63",
  "#9c27b0",
  "#009688",
  "#4caf50",
  "#ffc107",
  "#795548",
  "#34568B",
  "#FF6F61",
  "#92A8D1",
  "#955251",
  "#009B77"
];
let c = 0;
const hasPlus = ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2", "E1", "E2", "F"];

export default function TimeTable() {
  const [slotSystem, setSlotSystem] = useState(timeTable1);
  const [timeTable, setTimeTable] = useState({});
  const [modal, setModal] = useState({
    isOpen: false,
    timeSlot: null,
    subject: null,
    color: null,
  });

  function getRandomColor() {
    return colors[c++ % colors.length];
  }

  const handleBoxClick = (timeSlot) => {

    const { subject, color } = timeTable[timeSlot] || { subject: '', color: getRandomColor() };
    setModal({
      isOpen: true,
      timeSlot,
      subject,
      color,
    });
  }
  function handleModal() {
    setModal({ ...modal, isOpen: false });
  }
  function handleConfirm({ timeSlot, subject, color, delete: deleteSlot, timeTableTemp }) {
    const newTimeTable = timeTableTemp || { ...timeTable };
    if (deleteSlot) {
      delete newTimeTable[timeSlot];
    }
    else {
      newTimeTable[timeSlot] = {
        subject,
        color,
      };
    }
    if (hasPlus.includes(timeSlot))
      handleConfirm({ timeSlot: `${timeSlot}+`, subject, color, delete: deleteSlot, timeTableTemp: newTimeTable });
    else
      setTimeTable(newTimeTable);

  }

  return (
    <div>
      <Modal handleClick={handleModal} state={modal} handleConfirm={handleConfirm} />
      <div className="table__right">
        <select
          onChange={(e) => {
            setSlotSystem(e.target.value === "1" ? timeTable1 : timeTable2);
          }}
        >
          <option value={"1"}>Slot 1</option>
          <option value={"2"}>Slot 2</option>
        </select>
        <button onClick={() => window.print()} style={{
          backgroundColor: "#424242",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "5px",
          marginLeft: "10px",
          cursor: "pointer",
        }}>
          Print
        </button>
      </div>
      <table
        style={{
          border: "1px solid black",
          textAlign: "center",
          borderRadius: "5px",
        }}
      >
        <thead
          style={{
            height: "70px",
          }}
        >
          <tr
            style={{
              backgroundColor: "#212121",
              color: "white",
            }}
          >
            <th rowSpan={2}>Day</th>
            {timeSlots.map((timeSlot) => (
              <th key={timeSlot.value}>{timeSlot.time}</th>
            ))}
          </tr>
          <tr
            style={{
              backgroundColor: "#424242",
              color: "white",
            }}>
            {timeSlots.map((timeSlot) => (
              <th key={timeSlot.value}>{timeSlot.value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((day) => (
            <tr key={day}>
              <td
                style={{
                  backgroundColor: "#424242",
                  color: "white",
                  width: "70px",
                }}
              >{day}</td>
              {slotSystem[day].map((timeSlot, idx) => (
                <td key={`${day}-${timeSlot}-${idx}`}>
                  {timeTable[timeSlot] ? (
                    <Box
                      slot={timeSlot}
                      subject={timeTable[timeSlot].subject}
                      color={timeTable[timeSlot].color}
                      handleClick={handleBoxClick}
                    />)
                    : <Box slot={timeSlot} subject={""} color={"white"} handleClick={handleBoxClick} />
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx="true">{`
        .table__right{
          margin: 10px;
          display: flex;
          flex-direction: column;
          padding: 10px;
          float: right;
        }
        select {
          margin: 10px;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid black;
        }
        @media print{
          .table__right{
            display:none;
          }
          table{
            scale:0.9;
          }
        }
      `}</style>

    </div>
  );
}