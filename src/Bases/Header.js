import styles from '../Css/header.module.css'
import { useNavigate } from 'react-router-dom'
import image from '../img/Logo.png'
import img from '../img/do-utilizador.png'

function Header() {
    const navigate = useNavigate();

    return (
        <div className={styles.tela}>
            <img className={styles.logo} src={image} onClick={() => navigate('')}></img>

            <div className={styles.pesquisar}>
                <input className={styles.input} type='search' id='pesquisa' placeholder='Pesquisar'></input>
            </div>

            <div className={styles.user}>
                <p  onClick={() => navigate('/PerfilAdministrador')}>Emily Crepaldi</p>
                <div className={styles.usericon}>
                <img className={styles.usericonimg} src={img}  onClick={() => navigate('/PerfilAdministrador')} ></img>
                </div>
            </div>
        </div>

    )

}

export default Header;