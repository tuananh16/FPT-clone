import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(7200); // Số giây trong 2 tiếng

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (seconds) => {
    const hour = Math.floor(seconds /3600)
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      {countdown > 0 ? (
        <p style={{color :'#32373d' , fontSize: "18px", display:"flex", justifyContent:"center", }}>{formatTime(countdown)}</p>
      ) : (
        <p style={{color :'#32373d' , fontSize: "18px", display:"flex", justifyContent:"center"}}>Hết giờ</p>
      )}
    </div>
  );
};

export default CountdownTimer;
