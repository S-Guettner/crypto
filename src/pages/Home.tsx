import { useState,useEffect } from "react";

const Home = () => {

    const [cryptoData,setCryptoData] = useState([])

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
        `)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    },[])


    return ( 
        <h1 className="text-4xl">Home</h1>
     );
}
 
export default Home;