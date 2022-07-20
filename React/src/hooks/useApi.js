// Hook para conectar a BD y obtener items(ropa)

import Axios from "axios"
import { useState, useEffect } from "react"


const useApi = (endpoint) => {

    const [data, setData] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/${endpoint}`)
            .then(({ data }) => setData(data))
            .catch(err => setError(err))
    }, [endpoint])

    return [data, error]
}

export default useApi