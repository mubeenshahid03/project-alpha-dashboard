import React, { useState, ChangeEvent } from "react";

function Pagination() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    // console.log(event.target.value);
    setSelectedOption(event.target.value);
  };

  return (
    <div className="md:h-[40px] mb-4 md:mb-0 max-w-[450px] flex flex-col space-y-4 md:space-y-0 md:flex-row items-end md:items-center md:justify-between space-x-6">
      <div className="flex items-center justify-center">
        <p>Rows per page</p>
        <div className="relative ml-2">
          <select
            value={selectedOption}
            onChange={handleChange}
            id="custom-select"
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
          >
            <option value="option1">1</option>
            <option value="option2">2</option>
            <option value="option3">3</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 13.707a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L10 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 000 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <p className="text[14px] font-[500] text-medium_gray">1-5 of 20</p>
      <div className="flex items-center justify-between space-x-2">
        <button className="arrow-button py-1 flex items-center justify-around border-[1px] border-dark_gray px-3 rounded-[4px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-left mr-[8px] text-dark_gray"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <p className="font-[400] text-[14px] text-dark_gray mr-[5px]">Prev</p>
        </button>
        <button className="arrow-button flex py-1 items-center justify-around border-[1px] border-dark_gray px-3 rounded-[4px]">
          <p className="font-[400] text-[14px] text-dark_gray ml-[5px]">Next</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-right ml-[8px] text-dark_gray"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Pagination;
