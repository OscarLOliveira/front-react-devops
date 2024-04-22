import React, { useState } from 'react'
import imagem from '../assets/imgdevops.png'; // Importe sua imagem
import './Home.css';

const Home = () => {

    const appTitle = import.meta.env.VITE_APP_TITLE; // Acessando a variável de ambiente

    const nome = [nome, setNome] = useState('')

    return (

        <div>
            <div className="image-container">
                
                <h4>{appTitle}</h4>
                <img src={imagem} alt="Imagem" />
            </div>
            <h1></h1>
        </div>
    )
}

export default Home