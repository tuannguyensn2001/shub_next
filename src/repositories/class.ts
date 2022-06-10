import {IClass} from "src/models/IClass";
import {fetchOwnClass} from "src/services/class";
import {GetOwnClassResponse} from "src/types/class";
import {MyResponse} from "src/types/response";

export const getOwnClass = async (): Promise<MyResponse<GetOwnClassResponse>> => {
    const response = await fetchOwnClass();
    return response.data;
}