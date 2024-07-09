import { CloseOutlined } from "@ant-design/icons";
import { Modal } from "antd";

interface ModalProps {
  isOpen: boolean;
  handleModal: (value: boolean) => void;
  name: string;
  message: string;
}

function CustomModal({ isOpen, handleModal, name, message }: ModalProps) {
  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    handleModal(false);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    handleModal(false);
  };

  const customTitle = (
    <div className="bg-green_600 h-[56px] flex items-center justify-between p-[16px]">
      <p className="font-[500] text-[16px] leading-[24px] text-[#ffffff]">
        Message Request
      </p>
      <div onClick={handleCancel}>
        <CloseOutlined style={{ fontSize: "24px", color: "white" }} />
      </div>
    </div>
  );

  return (
    <>
      <Modal
        title={customTitle}
        width={430}
        open={isOpen}
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        footer=""
        className="custom-modal"
        closable={false}
      >
        {/* body of modal */}
        <div className="px-[20px] pb-[35px]">
          <h3>
            ____ Message from{" "}
            <span className="font-[500] mt-2 text-[14px] text-dark_gray">
              <i>{name}</i>
            </span>
          </h3>
          <div className="rounded-[20px] mt-4 bg-light_gray p-[16px] mx-[15px]">
            <p className="font-[400] text-[14px] text-dark_gray">Hey</p>
            <p className="font-[400] text-[14px] text-dark_gray">{message}</p>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default CustomModal;
