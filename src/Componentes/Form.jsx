
import { useState } from 'react'

function Form({onLogin}) {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    // function cadastrarUsuario(event) { //adicionamos um evento.
    //     event.preventDefault() // Lincamos este evento como padrão default.
    //     console.log(`usuário ${name} foi cadastrado com a senha: ${password}`) //
    //     console.log("Cadastrou o Usuário!!!")
    // }
   

    function Login(event) {
        event.preventDefault();
        if (name && password) {
            console.log(`Jogador ${name} Tentou logar.`);
            onLogin();
        } else {
            alert("Para jogar, você deve preencher o nome é a senha!!!");
            console.error("Para jogar, você deve preencher o nome é a senha!!!")
        }
    }

    return (
        <>
    
            <h1> Meu Cadastro: </h1>
            <form onSubmit={Login}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" value={name} placeholder="Digite o seu nome"
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password" id="password" value={password} placeholder="Digite a sua senha"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
    
                    <div>
                        <input type="submit" value="Entrar" />
                    </div>
            </form>
        </>
    );
    

};








export default Form;