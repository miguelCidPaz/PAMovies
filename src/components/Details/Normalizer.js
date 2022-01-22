import { filmDetail } from "./Data";

export const Normalizer = (data, type) => {

    const normalize = {
        name: "",
        photo_principal: "",
        description: "",
        details: [],
        countries: null,
        date: null,
        video: null,
    };


    switch (type) {
        case "movie":

            let countries = [];
            for (let i = 0; i < data.production_countries.length; i++) {
                countries.push(data.production_countries[i].name);
            }


            normalize.name = data.title;
            normalize.photo_principal = data.poster_path;
            normalize.description = data.overview;
            normalize.details = data.production_companies;
            normalize.video = data.video;
            normalize.date = data.release_date.split("-")[0];
            normalize.countries = countries
            break;

        case "person":
            normalize.name = data.name;
            normalize.photo_principal = data.profile_path;
            normalize.description = data.biography;
            normalize.details = undefined;
            normalize.video = null;
            normalize.date = data.birthday;
            normalize.countries = data.place_of_birth !== null ? data.place_of_birth.split(",") : undefined
            break;

        default:
            return filmDetail
    }

    return normalize
}


export const shortString = (text) => {
    if (text.length < 30) {
        return text
    }
    return text.split("").map((element, index) => index < 30 ? element : null)
}

export const normalizeKeys = (text) => {
    if (text !== undefined && text !== null) {
        console.log(text)
        const length = text.search(".jpg");
        return text.split("").map((element, index) => index > 0 && index < length ? element : null).join('')
    } else {
        return text
    }
}