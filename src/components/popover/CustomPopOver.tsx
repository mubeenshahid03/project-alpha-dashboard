import { useState } from "react";
import { Badge, Popover } from "antd";
import { BellFilled } from "@ant-design/icons";
import Notification from "./Notification";

function CustomPopOver() {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (newVisible: boolean) => {
    setVisible(!!newVisible);
  };

  const content = (
    <div className="w-[255px] py-2">
      {/* todays notifications */}
      <div className="space-y-[16px]">
        <p className="font-[500] text-[12px] leading-[16.8px] text-medium_gray">
          Todays
        </p>
        <Notification />
      </div>
      {/* yesterday notifications */}
      <div className="space-y-[16px]">
        <p className="font-[500] text-[12px] leading-[16.8px] text-medium_gray mt-4">
          Yesterday
        </p>
        <Notification />
        <Notification />
        <Notification />
        <Notification />
      </div>
    </div>
  );

  return (
    <Popover
      content={content}
      trigger="click"
      placement="bottom"
      open={visible}
      onOpenChange={handleVisibleChange}
    >
      <Badge count={3}>
        <BellFilled style={{ color: "#333333", fontSize: "20px" }} />
      </Badge>
    </Popover>
  );
}

export default CustomPopOver;
