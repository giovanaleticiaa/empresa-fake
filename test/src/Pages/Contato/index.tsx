import { Link } from "react-router-dom";

export function Contato(){
    return(

        <div>
            <h1>Bem vindo a página de contato</h1>
            <h3>Telefone: (xx) XXXXX-XXXX</h3>
            <br/>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
        </div>
    )
}