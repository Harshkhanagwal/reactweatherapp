import React from 'react'

const Maintemp = (props) => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date();
    const month = months[d.getMonth()]
    const date = d.getDate();
    const dayNum = d.getDay();



    const tempK = props.ndata?.main.temp;
    const tempC = tempK - 273.15;
    const tempDecimalFix = tempC.toFixed(2);


    const ftempK = props.ndata?.main.feels_like;
    const ftempC = ftempK - 273.15;
    const ftempDecimalFix = ftempC.toFixed(2);

    const mink = props.data?.main.temp_min;
    const minc = mink - 273.15;
    const minf = minc.toFixed(2);

    const maxk = props.ndata?.main.temp_max;
    const maxc = maxk - 273.15;
    const maxf = maxc.toFixed(2);

    const humidity = props.data?.main.humidity;
    const pressure = props.data?.main.pressure;

    return (
        <>
            <section className='temparea container'>
                <div className="tempdetails container2">
                    <div className="innerTemp">
                        <div className="header-area">
                            <div className="cname">
                                {props.ndata?.name}, {props.ndata?.sys.country}
                            </div>
                            <div className="date-area">
                                {
                                    month + " " + date + " - " + days[dayNum]
                                }
                            </div>
                        </div>

                        <div className="colorBar">

                        </div>

                        <div className="detailsec">
                            <span className="heading-d">
                                Temparture Details
                            </span>

                            <div className="details">
                                <div className="detail-bx">
                                    <span className="detail-elm">Main : {tempDecimalFix}°C</span>
                                    <span className="detail-elm">Feels like : {ftempDecimalFix}°C</span>
                                </div>

                                <div className="detail-bx">
                                    <span className="detail-elm">Minimum  : {minf}°C</span>
                                    <span className="detail-elm">Maximum : {maxf}°C</span>
                                </div>

                                <div className="detail-bx">
                                    <span className="detail-elm">Pressure : {pressure}</span>
                                    <span className="detail-elm">Humidity : {humidity}</span>
                                </div>

                            </div>

                        </div>
                    </div>
                    <br />
                </div>
            </section>
        </>
    )
}

export default Maintemp
