import React from 'react'

const Temp = (props) => {

  const tempK =props.data?.main.temp;
  const tempC = tempK - 273.15;
  const tempDecimalFix = tempC.toFixed(2);

  
  const ftempK =props.data?.main.feels_like;
  const ftempC = ftempK - 273.15;
  const ftempDecimalFix = ftempC.toFixed(2);

  return (
    <div className="temp container">
      <p className="city">
        {props.data?.name}
      </p>

      <p className="temprature">
        {tempDecimalFix}°C
      </p>
      <span className="tempd">
        Feels like : {ftempDecimalFix}°C  - { props.data?.weather[0].main}
      </span>
    </div>
  )
}

export default Temp