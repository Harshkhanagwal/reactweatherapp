import React from 'react'
import { useState, useEffect } from 'react'
import '../style/Detailcard.css'
import Temp from '../components/Temp'
import { BsSearch } from 'react-icons/bs'
import Maintemp from './Maintemp'
const Detailcard = () => {

    const [searchTerm, setsearchTerm] = useState()
    const [data, setData] = useState()

    useEffect(() => {
        try{

            fetch(`https://api.openweathermap.org/data/2.5/weather?q=new+delhi&appid=ad8300df27420798bcf5004c184de162`)
            .then(response => response.json())
            .then(data => setData(data))
        }catch(err){
            alert("enter valid ")
        }
    }, [])

    const fetchdata = () =>{

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=ad8300df27420798bcf5004c184de162`)
        .then(response => response.json())
        .then(data => setData(data))
    }

    return (
        <>
        
            <div className="Detailcard container">
                <div className="searchbar-area-outer container">
                    <div className="searchbar-area container2">
                       
                        <input type="text" className='searchin' onChange={(e) => setsearchTerm(e.target.value)} />
                        <button className='searchbt' onClick={()=>fetchdata()}><BsSearch /></button>
                    </div>
                </div>
                <Temp data={data} />
                <Maintemp ndata={data} />

            </div>


        </>
    )
}

export default Detailcard