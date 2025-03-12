import { UsersInterface } from "../../students/interfaces/user.interface";

export interface TutorInterface extends UsersInterface {
  birth_date: Date;
  role_id: number;
  status: string;
  speciality: string;
}
