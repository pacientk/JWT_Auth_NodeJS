import api from '../http';
import { AxiosResponse } from 'axios';
import { IAuthResponse } from '../Models/IAuthResponse';

export default class AuthService {
   static async login(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
      return api.post<IAuthResponse>('/login', { email, password });
   }

   static async registration(
      email: string,
      password: string,
   ): Promise<AxiosResponse<IAuthResponse>> {
      return api.post<IAuthResponse>('/registration', { email, password });
   }

   static async logout(): Promise<AxiosResponse> {
      return api.post('/logout');
   }
}
