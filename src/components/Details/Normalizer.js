import { filmDetail } from "./Data";

export const Normalizer = (data, type) => {
    const normalize = {
        name: "",
        photo_principal: "",
        description: "",
        details: [],
        date: null,
        video: null,
    };

    switch (type) {
        case "movie":
            normalize.name = data.title;
            normalize.photo_principal = data.poster_path;
            normalize.description = data.overview;
            normalize.details = data.production_companies;
            normalize.video = data.video;
            normalize.date = data.release_date;
            break;

        case "person":
            normalize.name = data.name;
            normalize.photo_principal = data.profile_path;
            normalize.description = data.biography;
            normalize.details = undefined;
            normalize.video = null;
            break;

        default:
            return filmDetail
    }

    return normalize
}