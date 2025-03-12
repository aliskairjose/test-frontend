import { UsersInterface } from "../../students/interfaces/user.interface";

export interface BookingInterface {
  id: number;
  service_id: number;
  staff_id: number;
  user_id: number;
  date: Date;
  start_time: string;
  end_time: string;
  user: UsersInterface;
  staff: StaffInterface;
}

export interface StaffInterface extends UsersInterface {
  speciality?: string;
}
