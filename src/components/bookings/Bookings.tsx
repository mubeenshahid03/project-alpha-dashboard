import upwardArrow from "../../assets/bookings/upwardArrow.svg";
import filter from "../../assets/bookings/filter.svg";
import BookingsDetails from "./BookingsDetails";
function Bookings() {
  return (
    <>
      {/* table header */}
      <div className="flex flex-col md:flex-row px-[20px] justify-start md:justify-between md:items-center md:px-[40px]">
        <h1 className="font-[700] md:mt-8 text-[36px] text-green_900 leading-[48px]">
          Bookings Details
        </h1>
        <div className="flex flex-col w-fit md:flex-row mt-4 ms:mt-0 md:items-center md:justify-between md:space-x-4 space-y-2 md:space-y-0">
          <button className="w-[85px] rounded-[6px] border-[1px] border-light_gray space-x-2 py-1 px-3 flex items-center">
            <img
              src={filter}
              alt="filter-img"
              style={{ height: "25px", width: "25px" }}
            />
            <p className="font-[400] text-green_900 text-[14px] leading-[24px] ">
              Filter
            </p>
          </button>
          <button className="min-w-[85px] rounded-[6px] border-[1px] border-light_gray py-1 px-3 space-x-2 flex items-center">
            <img
              src={upwardArrow}
              alt="upward-arrow-img"
              style={{ height: "25px", width: "25px" }}
            />
            <p className="font-[400] text-green_900 text-[14px] leading-[24px] ">
              Export
            </p>
          </button>
        </div>
      </div>
      <BookingsDetails />
    </>
  );
}

export default Bookings;
