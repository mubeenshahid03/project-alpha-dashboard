import { Link } from "react-router-dom";
import user from "../../assets/navbar/user.svg";
import logout from "../../assets/navbar/logout.svg";

type Props = {
  ico: string;
  label: string;
  path: string;
};

function Navbutton({ ico, label, path }: Props) {
  let icon;
  switch (ico) {
    case "bookings":
      icon = <img src={user} className="h-[25px] w-[25px]" />;
      break;

    case "logout":
      icon = <img src={logout} className="h-[25px] w-[25px]" />;
      break;
    default:
      icon = <img src={user} className="h-[25px] w-[25px]" />;
      break;
  }

  return (
    <>
      <Link to={path} className="w-[100%] rounded-lg flex items-center">
        <button
          className={`${
            path === "/logout"
              ? "bg-white hover:border-2 border-green_600"
              : "bg-green_600 hover:bg-green_900"
          } w-[100%] rounded-lg h-[45px] px-2 space-x-4 flex items-center `}
        >
          {icon}
          <span
            className={`font-[600] text-[16px] leading-[24px] ${
              path === "/logout" ? "text-dark_gray" : "text-white"
            }`}
          >
            {label}
          </span>
        </button>
      </Link>
    </>
  );
}

export default Navbutton;
