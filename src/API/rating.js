import api from "./client";

export const getRatings = async () => {

    const response = await api.get("/API/ratings/");

    return response.data;

};

export const submitRating = async (value) => {

    const response = await api.post("/API/ratings/", {

        value,

    });

    return response.data;

};