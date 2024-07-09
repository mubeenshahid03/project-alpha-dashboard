export type Tab = {
  id: number;
  label: string;
};
export type TableHeading = {
  id: number;
  label: string;
};
export type Booking = {
  id: string;
  firstName: string;
  lastName: string;
  service: string;
  email: string;
  phone: string;
  date: string;
  address: string;
  message: string;
  action: JSX.Element | string;
};
