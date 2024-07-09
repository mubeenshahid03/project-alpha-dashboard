import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { headings } from "../../const";
import { Booking } from "../../types";
import deleteIcon from "../../assets/bookings/delete.svg";
import Pagination from "./Pagination";
import CustomModal from "../CustomModal";
import useBookingStore from "../../store/Bookings/booking";
import useSearchStore from "../../store/Search/search";
import Confirmation from "../Confirmation";

type Props = {
  label: string;
  bookings: Booking[] | undefined;
  status: string;
};

function BookingsTable({ label, bookings, status }: Props) {
  const { handledeleteBooking } = useBookingStore();
  const { searchQuery } = useSearchStore();
  const [isOpen, setisOpen] = useState(false);
  const [ModalOpen, setModalOpen] = useState(false);
  const handleModal = (value: boolean) => {
    setisOpen(value);
  };

  const queryClient = useQueryClient();

  const { mutate: deleteBooking } = useMutation(handledeleteBooking, {
    onSuccess: () => {
      queryClient.invalidateQueries("bookings");
    },
    onError: (error) => {
      console.error("Error deleting booking:", error);
    },
  });
  //useEffect(() => {
  //   const bookingsDates = bookings?.map((booking: Booking) => {
  //     const modifiedDate = new Date(booking.date).toISOString();
  //     return {
  //       ...booking, // Clone booking object
  //       modifiedDate,
  //     };
  //   });

  //   console.log(bookingsDates, "here");
  // }, []);

  const handleSearch = () => {
    if (!bookings || !bookings.length) return [];
    if (searchQuery === "") return bookings;
    const searchRegex = new RegExp(searchQuery, "i");
    return bookings.filter(
      (booking) =>
        searchRegex.test(booking.firstName) ||
        searchRegex.test(booking.phone) ||
        searchRegex.test(booking.service) ||
        searchRegex.test(booking.email)
    );
  };

  if (status === "loading") return <div>Loading ...</div>;
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border-gray-200 w-full">
          <thead className="h-[40px]">
            {headings.map((item) => (
              <th
                className="text-start px-[10px] text-[600] text-[12px] leading-16px"
                key={item.id}
              >
                {item.label}
              </th>
            ))}
          </thead>
          {label === "recents" && (
            <tbody>
              {bookings &&
                handleSearch()
                  .slice(0, 3)
                  .sort((a, b) => {
                    return (
                      new Date(b.date).getTime() - new Date(a.date).getTime()
                    );
                  })
                  .map((booking) => (
                    <>
                      <tr
                        key={booking.id}
                        className="min-h-[50px] border-b border-light_gray"
                      >
                        <td>{booking.firstName + " " + booking.lastName}</td>
                        <td>{booking.service}</td>
                        <td>{booking.email}</td>
                        <td>{booking.phone}</td>
                        <td>{booking.date}</td>

                        <td>
                          <CustomModal
                            isOpen={isOpen}
                            handleModal={handleModal}
                            name={booking.firstName + " " + booking.lastName}
                            message={booking.message}
                          />
                          <button
                            type="button"
                            className="text-green_600 mt-2 hover:text-white text-nonwrap border border-green_600 hover:bg-green_600 focus:ring-2 focus:outline-none focus:ring-green_600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green_600 dark:text-green_600 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green_600"
                            onClick={() => handleModal(true)}
                          >
                            View Message
                          </button>
                        </td>
                        <td
                          className="!px-0"
                          onClick={() => deleteBooking(booking.id)}
                          // onClick={() => setModalOpen(true)}
                        >
                          <img
                            src={deleteIcon}
                            alt="delete-icon"
                            className="h-[24px] w-[24px] m-auto hover:h-[26px] hover:w-[26px]"
                          />
                        </td>
                      </tr>
                      {/* <Confirmation
                        ModalOpen={ModalOpen}
                        setModalOpen={setModalOpen}
                        bookingId={booking.id}
                        deleteBooking={deleteBooking}
                      /> */}
                    </>
                  ))}
            </tbody>
          )}

          {label === "all" && (
            <tbody>
              {bookings &&
                handleSearch().map((booking) => (
                  <>
                    <tr
                      key={booking.id}
                      className="min-h-[50px] border-b border-light_gray"
                    >
                      <td>{booking.firstName + " " + booking.lastName}</td>
                      <td>{booking.service}</td>
                      <td>{booking.email}</td>
                      <td>{booking.phone}</td>
                      <td>{booking.date}</td>

                      <td>
                        <CustomModal
                          isOpen={isOpen}
                          handleModal={handleModal}
                          name={booking.firstName + " " + booking.lastName}
                          message={booking.message}
                        />
                        <button
                          type="button"
                          className="text-green_600 mt-2 hover:text-white text-nonwrap border border-green_600 hover:bg-green_600 focus:ring-2 focus:outline-none focus:ring-green_600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green_600 dark:text-green_600 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green_600"
                          onClick={() => handleModal(true)}
                        >
                          View Message
                        </button>
                      </td>
                      <td
                        className="!px-0"
                        onClick={() => deleteBooking(booking.id)}
                        //onClick={() => setModalOpen(true)}
                      >
                        <img
                          src={deleteIcon}
                          alt="delete-icon"
                          className="h-[24px] w-[24px] m-auto hover:h-[26px] hover:w-[26px]"
                        />
                      </td>
                    </tr>
                    {/* <Confirmation
                      ModalOpen={ModalOpen}
                      setModalOpen={setModalOpen}
                      bookingId={booking.id}
                      deleteBooking={deleteBooking}
                    /> */}
                  </>
                ))}
            </tbody>
          )}
        </table>
      </div>
      <div className="flex items-center justify-end mt-[50px]">
        <Pagination />
      </div>
    </>
  );
}

export default BookingsTable;
