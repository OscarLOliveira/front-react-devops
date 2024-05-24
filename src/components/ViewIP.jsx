import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewIP() {
  const [ip, setIp] = useState('');

  //const apiEndpoint = import.meta.env.VITE_APP_URL_PORT; // Acessando a variável de ambiente

  useEffect(() => {

    const fetchIPAddress = async () => {
      try {
        //console.log({apiEndpoint})
        const response = await axios.get('http://127.0.0.1:35189' + '/ip', {
          responseType: 'text'
        });
        if (response.status !== 200) {
          throw new Error('Erro ao obter o IP');
        }
        const data = response.data;
        setIp(data);
      } catch (error) {
        console.error('Erro ao obter o IP:', error);
        setIp('Não foi possível obter o endereço IP');
      }
    };

    fetchIPAddress();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="text-center">
          <h1>IP do Serviço</h1>
          <p>{ip}</p>
        </div>
      </div>
    </div>
  );
}

export default ViewIP;
