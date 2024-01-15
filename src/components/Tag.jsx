import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Tag() {

    const [tag, setTag] = useState('');

    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState(false);
    

    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     console.log(imageSource);
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    // useEffect( () => {
    //     fetchData();
    // }, [])

    const {gif, loading, fetchData} = useGif(tag);

    return (
        <div className="w-1/2 bg-blue-400 flex flex-col rounded-lg border border-black items-center gap-y-5 mt-[15px]">

            <h1 className="text-2xl underline uppercase font-bold mt-[15px]">
                {
                    tag === "" ? ("Random Gif") : ("Random " + tag + " Gif")
                }
            </h1>

            {
                loading ? (<Spinner/>) : (<img src={gif} width="450" alt="random gif"/>)
            }

            <input type="text" className="w-10/12 py-2 px-3 rounded-lg mb-[6px] text-center" onChange={ (e) => setTag(e.target.value)} value={tag}/>

            <button className="bg-blue-200 w-10/12 text-lg py-2 px-10 font-semibold rounded-lg mb-[20px]" onClick={() => fetchData(tag)}>Generate</button>

        </div>
    );

}