import React, { useState } from 'react';

const ESP32_IP = 'http://192.168.137.31';

const checkConnection = async () => {
  try {
    const response = await fetch(`${ESP32_IP}/status`);
    return response.ok;
  } catch (error) {
    console.error("ESP32 no disponible:", error);
    return false;
  }
};

const turnOnLed = async (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
  setLoading(true);
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(`${ESP32_IP}/led/on`, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!response.ok) {
      throw new Error('Fallo en la solicitud al encender el LED');
    }
    alert('LED encendido');
  } catch (error) {
    if ((error as Error).name === 'AbortError') {
      console.error('La solicitud para encender el LED tardó demasiado y fue cancelada.');
    } else {
      console.error('Error al encender el LED:', error);
    }
  } finally {
    setLoading(false);
  }
};

const turnOffLed = async (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
  setLoading(true);
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(`${ESP32_IP}/led/off`, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!response.ok) {
      throw new Error('Fallo en la solicitud al apagar el LED');
    }
    alert('LED apagado');
  } catch (error) {
    if ((error as Error).name === 'AbortError') {
      console.error('La solicitud para apagar el LED tardó demasiado y fue cancelada.');
    } else {
      console.error('Error al apagar el LED:', error);
    }
  } finally {
    setLoading(false);
  }
};

const ServoControl: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleTurnOn = async () => {
    const isConnected = await checkConnection();
    if (isConnected) {
      await turnOnLed(setLoading);
    } else {
      alert("ESP32 no disponible. Verifique la conexión.");
    }
  };

  const handleTurnOff = async () => {
    const isConnected = await checkConnection();
    if (isConnected) {
      await turnOffLed(setLoading);
    } else {
      alert("ESP32 no disponible. Verifique la conexión.");
    }
  };

  return (
    <div>
      <h1>Control de LED</h1>
      <button onClick={handleTurnOn} disabled={loading}>
        {loading ? 'Encendiendo...' : 'Encender LED'}
      </button>
      <button onClick={handleTurnOff} disabled={loading}>
        {loading ? 'Apagando...' : 'Apagar LED'}
      </button>
    </div>
  );
};

export default ServoControl;
