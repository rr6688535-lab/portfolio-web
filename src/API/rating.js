import api from "./client";

export const getRatings = async () => {

    const response = await api.get("/api/ratings/");

    return response.data;

};

export const submitRating = async (value) => {
    const csrfResponse = await api.get("/api/csrf/");

    const response = await api.post(
        "/api/ratings/",
        {
            value,
        },
        {
            headers: {
                "X-CSRFToken": csrfResponse.data.csrfToken,
            },
        }
    );

    return response.data;
};