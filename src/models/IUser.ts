import {IProfile} from "src/models/IProfile";

export declare interface IUser {
    id: number;
    email: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    profile?: IProfile
}
