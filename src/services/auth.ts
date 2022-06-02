import { IUser } from 'src/models/IUser';
import API from 'src/network';
import { LoginRequest } from 'src/types/auth';

export const fetchMe = () => API.get('/v1/auth/me');

export const fetchLogin = (data: LoginRequest) =>
    API.post('/v1/auth/login', data);
