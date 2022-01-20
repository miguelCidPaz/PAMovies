const ApiKey = "07e793aeac523d9f4455050b060257c7";

/* La logica esta preparada para todas las situaciones pero no voy a usarla para sustituir componentes,
es un reto */
export const decisionForType = async (value, id) => {

    switch (value) {
        //Similar movies
        case 'movie':
            const URLPrincipal = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${ApiKey}&language=en-US&page=1`;
            let promise = new Promise(function (resolve, reject) {
                fetch(URLPrincipal)
                    .then((res) => res.json())
                    .then(data => {
                        resolve(data.results)
                    });
            })
            return promise
        //Credits
        case 'person':
            console.log(value)
            break;
        //Generos
        case 'genres':
            console.log(value)
            break;
        //Birthdays
        case 'birthday':
            console.log(value)
            break;
        default:
            console.log(value)
            break;
    }

}