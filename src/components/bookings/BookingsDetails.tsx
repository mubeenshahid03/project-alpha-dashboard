import React from "react";
import { ConfigProvider, Tabs } from "antd";
import BookingsTable from "./BookingsTable"
import { useQuery } from "react-query";
import { Booking } from "../../types";
import useBookingStore from "../../store/Bookings/booking";

const { TabPane } = Tabs;

const BookingsDetails: React.FC = () => {
  const { fetchAllBookings } = useBookingStore();

  const {
    data: bookings,
    status,
    // error,
  } = useQuery<Booking[]>("bookings", fetchAllBookings);
  const tabItems = [
    {
      key: "1",
      label: "Recents",
      children: (
        <BookingsTable label="recents" bookings={bookings} status={status} />
      ),
    },
    {
      key: "2",
      label: "All",
      children: (
        <BookingsTable label="all" bookings={bookings} status={status} />
      ),
    },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#3C4959",
          borderRadius: 2,

          // Alias Token
          colorBgContainer: "#3C4959",
        },
      }}
    >
      <div className="px-[40px] mt-8 h-auto">
        <Tabs defaultActiveKey="1">
          {tabItems.map((tab) => (
            <TabPane tab={tab.label} key={tab.key}>
              {tab.children}
            </TabPane>
          ))}
        </Tabs>
      </div>
    </ConfigProvider>
  );
};

export default BookingsDetails;
