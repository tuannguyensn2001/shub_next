import API from "src/network";

export const fetchOwnClass = () => API.get("/v1/classes/owner");