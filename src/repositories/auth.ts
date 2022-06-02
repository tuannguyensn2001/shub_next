import { IUser } from 'src/models/IUser';
import { fetchLogin, fetchMe } from 'src/services/auth';
import { LoginRequest, LoginResponse } from 'src/types/auth';
import { MyResponse } from 'src/types/response';

export const getMe = async (): Promise<MyResponse<IUser>> => {
    const response = await fetchMe();

    return response.data;
};

export const getLogin = async (
    data: LoginRequest
): Promise<MyResponse<LoginResponse>> => {
    return (await fetchLogin(data)).data;
};
