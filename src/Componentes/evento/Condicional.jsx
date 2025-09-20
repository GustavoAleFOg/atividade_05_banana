import {useState} from 'react';
function Condicional(){

    
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email) // Testando uma validação
        console.log(userEmail) // continua no console.
    }

    function limparEmail(){
        setUserEmail('') // Colocamos um vvalor vazio, assim ele não renderiza 
    }                    // Quando clica no botão de limpar
    
    return(
        <div>
            <h2>Cadastre seu nome para jogar</h2>
            <form>
                <input type="email" 
                placeholder="Digite seu e-mail"
                onChange={(e) =>  setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar-email</button>

{userEmail && (
    <div>
        <p>O e-mail do usuário é: {userEmail}</p>
        <button onClick={limparEmail}> Limpar e-mail </button> 
    </div>   // Renderização condicional (E) print de algo esperado !!!
)}
          
            </form>
        </div>
    )
}

export default Condicional;