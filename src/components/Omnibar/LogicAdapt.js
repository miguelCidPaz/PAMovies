const ApiKey = "07e793aeac523d9f4455050b060257c7";

/* La logica esta preparada para todas las situaciones pero no voy a usarla para sustituir componentes,
es un reto */
export const decisionForType = async (value, id) => {
    let URLPrincipal = ''
    let promise = "";

    switch (value) {
        //Similar movies
        case 'movie':
            URLPrincipal = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${ApiKey}&language=en-US&page=1`;
            promise = new Promise(function (resolve, reject) {
                fetch(URLPrincipal)
                    .then((res) => res.json())
                    .then(data => {
                        resolve(iteratorObjects(data.results, 'similar'))
                    });
            })
            return promise
        //Credits
        case 'person':
            URLPrincipal = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${ApiKey}&language=en-US`;
            promise = new Promise(function (resolve, reject) {
                fetch(URLPrincipal)
                    .then((res) => res.json())
                    .then(data => {
                        resolve(iteratorObjects(data.crew, 'movie_credits'))
                    });
            })
            return promise
        /*         //Generos
                case 'genres':
                    console.log(value)
                    break;
                //Birthdays
                case 'birthday':
                    console.log(value)
                    break; */
        default:
            console.log(value)
            break;
    }

}
// data.original_title

const iteratorObjects = (data, media) => {
    if (data !== undefined) {
        const newArr = data.map((element, index) => index < 30 && element.adult === false ? OmniNormalizer(element, media) : null)
        const conjunto = new Set(newArr);
        const unicos = [...conjunto];
        return unicos
    }
}

const OmniNormalizer = (data, media) => {

    if (data !== undefined) {
        const newObject = {
            title: undefined, //titulo
            subtitle: undefined, // trabajo
            adult: undefined, // Evitar porno
            photo: undefined, // foto
            date: undefined, // fecha
            id: undefined // idBusqueda
        }

        switch (media) {
            case 'similar':
                newObject.title = data.original_title;
                newObject.subtitle = undefined;
                newObject.adult = data.adult;
                newObject.photo = data.poster_path;
                newObject.date = data.release_date;
                newObject.id = data.id;
                return newObject

            case 'movie_credits':
                newObject.title = data.title;
                newObject.subtitle = data.department;
                newObject.adult = data.adult;
                newObject.photo = data.poster_path !== null ? data.poster_path : undefined;
                newObject.date = data.release_date;
                newObject.id = data.id;
                return newObject

            default:
                return newObject
        }
    } else {
        return undefined
    }
}

export const reduxName = (text) => {
    const numCharacters = 2
    if (text === undefined || text === null || text.split(' ').length < numCharacters) {
        return text
    }
    const newArr = text.split(' ').filter((element, index) => index < numCharacters ? element : null).join('')
    if(newArr.length > numCharacters*4){
        return text.split('').filter((element, index) => index < numCharacters*4 ? element : null).join('')
    }else{
        return newArr
    }
}