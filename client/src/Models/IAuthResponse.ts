import { IUser } from './IUser';

export interface IAuthResponse {
   accesstoken: string;
   refreshToken: string;
   user: IUser;
}
