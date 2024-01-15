import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Random() {

    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState(false);

    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     console.log(imageSource);
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    // useEffect( () => {
    //     fetchData();
    // }, [])

    const {gif, loading, fetchData} = useGif();

    return (
        <div className="w-1/2 bg-green-500 flex flex-col rounded-lg border border-black items-center gap-y-5 mt-[15px]">

            <h1 className="text-2xl underline uppercase font-bold mt-[15px]">A Random Gif</h1>

            {
                loading ? (<Spinner/>) : (<img src={gif} width="450" alt="random gif"/>)
            }

            <button className="bg-green-200 w-10/12 text-lg py-2 px-10 font-semibold rounded-lg mb-[20px]" onClick={() => fetchData()}>Generate</button>

        </div>
    );

}