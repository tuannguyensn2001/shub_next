export interface MyResponse<T = null> {
    message: string;
    data: T;
}
