import React, { useState } from 'react';
import axios from 'axios';

function Dados() {
    const [customerData, setCustomerData] = useState([]);

    //const apiEndpoint = import.meta.env.VITE_APP_URL_PORT; // Acessando a variável de ambiente


    const getAllCustomer = () => {
      //console.log({apiEndpoint})
        axios.get("http://127.0.0.1:35189" + '/dados', {
            responseType: 'json'
          })
          .then(response => {
            setCustomerData(response.data);
          })
          .catch(error => {
            console.error('Erro ao obter os dados:', error);
          });
      };

    const clearData = () => {
      setCustomerData([]);
    }

    return (
      <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="jumbotron jumbotron-fluid">
              <div className="container">
                  
                  <button type="button" className="btn btn-info mt-5" onClick={getAllCustomer}>Get Data</button>
                  <button type="button" className="btn btn-secondary mt-5" onClick={clearData}>Limpar</button>
              </div>
          </div>

          <div className="container">
              
              <div>
                  <h1 className="text-center">Customer Data</h1>
                  <ul className="list-group">
                      {customerData.map((customer, index) => (
                          <li key={index} className="list-group-item">{customer.firstName} {customer.lastName}</li>
                      ))}
                  </ul>
              </div>
          </div>
      </div>
  );
}

export default Dados;
