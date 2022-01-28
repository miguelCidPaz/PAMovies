import { useState, useEffect } from "react";

const DetailProvider = (props) => {
    const [fullproviders, fullSetProviders] = useState(undefined); //Todos los proveedores a nivel mundial
    const [localProvider, setLocalProvider] = useState(undefined); //Proveedor local que estamos viendo
    const [region, setRegion] = useState('ES'); //Objeto para seleccionar las distintas regiones
    const [type, setType] = useState('rent') //Objeto para selecccionar los distintos tipos de negocio
    const [title, settitle] = useState('Cargando...')
    const ApiKey = "07e793aeac523d9f4455050b060257c7";

    const getProviders = async(id) => {
        const URLPrincipal = `
        https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${ApiKey}`;
        const promise = new Promise(function (resolve, reject) {
            fetch(URLPrincipal)
                .then((res) => res.json())
                .then(data => {
                    fullSetProviders(data.results)
                });
        })
    }

    const SelectRegion = async(results) => {
        if(results !== undefined){
        switch(region){
            case 'ES':
                setLocalProvider(results.ES);
                break;
            case 'US':
                setLocalProvider(results.US)
                break;
            default:
                setLocalProvider(results.ES)
            }
        }
    }

    const selectType = (objeto) => {
        if(objeto !== undefined){
        switch(type){
            case "flatrate":
                /* settitle('flatrate') */
                return objeto.flatrate
            case "rent":
                /* settitle('rent') */
                return objeto.rent
            case "buy":
                /* settitle('buy') */
                return objeto.buy
            default:
                /* settitle('flatrate') */
                return objeto.flatrate
        }}
    }

/*     useEffect(() => {

    }, [type]) */

    useEffect(() => {
        if(props.id !== undefined){getProviders(props.id)}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props])

    useEffect(() => {
        if(fullproviders !== undefined){
            setLocalProvider(SelectRegion(fullproviders))
        }
    }, [fullproviders])

    useEffect(() => {
        
    },[localProvider])

    /**
     *  display_priority: 2
        logo_path: "/q6tl6Ib6X5FT80RMlcDbexIo4St.jpg"
        provider_id: 2
        provider_name: "Apple iTunes"
     */

        

    return(
        <> {localProvider !== undefined ? 
        <section className="detailprovider--exterior-container">
            <div className="detailprovider--interior-mincontent">
                <button onClick={(e) => {setRegion('ES')}}>ES</button>
                <button onClick={(e) => {setRegion('US')}}>US</button>
            </div>
            <div className="detailprovider--interior-mincontent">
                {localProvider.flatrate !== 0 ? <button onClick={(e) => {setType('flatrate')}}>Suscripcion</button> : null}
                {localProvider.rent !== 0 ? <button onClick={(e) => {setType('rent')}}>Alquiler</button> : null}
                {localProvider.buy !== 0 ? <button onClick={(e) => {setType('buy')}}>Comprar</button> : null}
            </div>

            <p>{title}</p>
            
            <div className="detailprovider--interior-container">
                {localProvider !== undefined && localProvider !== null
                ? selectType(localProvider).map((element) => {
                        return (
                            <div className="detailprovider--exterior-frame">
                                <div className="detailprovider--interior-frame">
                                    <img src="#" alt={element.provider_name} />
                                </div>
                            </div>
                        )
                    }) : null}
            </div>
        </section>
        : null}
        </>
    )
}

export default DetailProvider