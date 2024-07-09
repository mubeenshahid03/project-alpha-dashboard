// import { useState } from "react";
// import { Button, message, Modal } from "antd";

// type Props = {
//   ModalOpen: boolean;
//   setModalOpen: (value: boolean) => void;
//   bookingId: string;
//   deleteBooking: (value: string) => void;
// };

// const App = ({ ModalOpen, setModalOpen, bookingId, deleteBooking }: Props) => {
//   const [loading, setLoading] = useState(false);

//   const handleOk = () => {
//     setLoading(true);
//     deleteBooking(bookingId);
//     message.success("Deleted Successfully!");
//     setModalOpen(false);
//     setLoading(false);
//   };

//   const handleCancel = () => {
//     setModalOpen(false);
//   };

//   return (
//     <>
//       {/* <Button type="primary" onClick={() => setModalOpen(true)}>
//         Display a modal dialog at 20px to Top
//       </Button> */}
//       <Modal
//         title="Are you sure?"
//         style={{
//           top: 20,
//         }}
//         open={ModalOpen}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         footer={[
//           <Button
//             key="back"
//             style={{
//               backgroundColor: "#ffff",
//               border: "2px solid #4CAF50",
//               borderRadius: "7px",
//               color: "#4CAF50",
//             }}
//             onClick={handleCancel}
//           >
//             Return
//           </Button>,
//           <Button
//             key="submit"
//             style={{
//               backgroundColor: "#4CAF50",
//               color: "#ffff",
//               borderRadius: "7px",
//             }}
//             loading={loading}
//             onClick={handleOk}
//           >
//             Delete
//           </Button>,
//         ]}
//       >
//         <p>You want to delete this record?</p>
//       </Modal>
//     </>
//   );
// };

// export default App;
