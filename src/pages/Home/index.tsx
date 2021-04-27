import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
             <div className="home-actions">
                <h1 className="home-title">
                    Desafio do Capítulo 3, <br /> Bootcamp DevSuperior
                </h1>
                <h3 className="home-subtitle">
                    Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br /><br />
                    Favor observar as instruções passadas no capítulo sobre a <br />
                    elaboração deste projeto. <br /><br /> 
                    Este design foi adaptado a partir de Ant Design System for Figma, de <br />
                    Mateusz Wierzbicki: antforfigma@gmail.com
                </h3>
                <Link to="/search" className="home-btn-start">Começar</Link>                  
              </div>
             </div>
        </div>
    );
}

export default Home;
