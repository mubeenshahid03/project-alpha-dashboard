import notificationAvatr from "../../assets/popover/notificationAvatar.svg";
function Notification() {
  return (
    <div className="flex space-x-4 hover:bg-[#f3f3f3] px-2 rounded-lg">
      <img src={notificationAvatr} height={24} width={24} />
      <div className="flex flex-col">
        <p className="font-[600] text-[14px] text-medium_gray">
          John Doe has booked!
        </p>
        <p className="font-[400] text-medium_gray leading-[16.8px] text-[12px]">
          Check out what he wants
        </p>
      </div>
    </div>
  );
}

export default Notification;
