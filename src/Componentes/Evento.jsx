import Button from "./evento/Button.jsx";

function Evento({ numero }){
     
    function meuEvento(){
        console.log(`Opss.. Fui ativado!!! ${numero}`)
    }

    function segundoEvento(){
        console.log("Segundo Disparo Ativado!!!")
    }
    return (
        <>
            <p> Clique para disparar um Evento:</p>
            <Button event= {meuEvento} text=" Primeiro Disparo do Evento" />
            <Button event ={segundoEvento} text=" Segundo Disparo do Evento" />
           
        </>
    )

}
export default Evento;