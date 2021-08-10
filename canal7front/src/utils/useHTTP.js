import { useEffect, useState, useCallback } from "react";
import axios from "axios"; //npm i axios

//const useGet = ({url, initialState = []})
const useGet = ({url}) => {
    const [data, setData] = useState([]); //useState(initialState)
    const [error, setError] = useState(false);

    const get = useCallback (async ()=>{
        try {
        const {data} = await axios.get(url);
        setData(data.items);
        }
        catch (err){
            setError(true);
        } 
    },[url]);
    useEffect (()=>{
        get();
    },[get])
    return [data, error]

    /* const [error, setError] = useState(false);
    
    useEffect(() => {
        const get = async() => {
            try{
                const {data} = await axios.get(url);
                setData(data.items);
            }
            catch(err){
                setError(true);
            } 
        }
        get();
    }, [url]);
    return [data, error]; */

}

const usePost = async(url, obj) => {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const post = async() => {
        try {
            setData(await axios.post(url, obj))
        } catch (err) {
            setError(true);
        }
    }
    post();
    return [data, error] 
}

export {useGet, usePost};