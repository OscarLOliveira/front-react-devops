import React from 'react'
import imagem from '../assets/imgdevops.png'; // Importe sua imagem
import './Home.css';

const Home = () => {

    return (
        <div>
            <div className="image-container">
                <img src={imagem} alt="Imagem" />
            </div>
        </div>
    )
}

export default Home