import Header from "../Bases/Header"
import Navbar from "../Bases/Navbar"
import Styles from "../Css/user.module.css"
import TabelaUsuario from "../Bases/Tabelas/tabelaUsuarios.js"

function usuarios() {

    return (
        <div className={Styles.tela}>
            <Header />
            <div className={Styles.config}>
                <Navbar/>
                <TabelaUsuario/>
            </div>

        </div>
    )

}

export default usuarios