import api from "./client";

export const getRatings = async () => {

    const response = await api.get("/api/ratings/");

    return response.data;

};

export const submitRating = async (value) => {
    await api.get("/api/csrf/");

    const response = await api.post("/api/ratings/", {
        value,
    });

    return response.data;
};
