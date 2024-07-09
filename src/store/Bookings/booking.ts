import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { create } from "zustand";
import { db } from "../../firebase/firebase-config";
import { Booking } from "../../types";

interface BookingStoreState {
  bookings: Booking[];
  fetchAllBookings: () => Promise<Booking[]>;
  handledeleteBooking: (bookingId: string) => Promise<void>;
}

const useBookingStore = create<BookingStoreState>((set) => ({
  bookings: [],
  fetchAllBookings: async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "bookings"));
      const bookingsData: Booking[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Booking, "id">),
      }));
      set({ bookings: bookingsData });
      return bookingsData;
    } catch (error) {
      console.error("Error fetching bookings:", error);
      throw new Error("Failed to fetch bookings");
    }
  },
  handledeleteBooking: async (bookingId: string) => {
    try {
      return await deleteDoc(doc(db, "bookings", bookingId));
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  },
}));

export default useBookingStore;
