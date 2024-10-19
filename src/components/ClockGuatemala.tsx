import React, { useEffect, useState } from 'react';

const ClockGuatemala: React.FC = () => {
  const [time, setTime] = useState<string>(''); // Especificar que es un string

  const updateTime = () => {
    // Obtener la hora actual en Guatemala
    const options: Intl.DateTimeFormatOptions = { 
      timeZone: 'America/Guatemala', 
      hour: '2-digit', 
      minute: '2-digit', 
    };
    
    const formatter = new Intl.DateTimeFormat([], options);
    const formattedTime = formatter.format(new Date());
    setTime(formattedTime);
  };

  useEffect(() => {
    // Actualizar la hora cada segundo
    const intervalId = setInterval(updateTime, 1000);

    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Hora Guatemala {time}</h1>
    </div>
  );
};

export default ClockGuatemala;
