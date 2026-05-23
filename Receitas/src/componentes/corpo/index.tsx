import CartaoReceita from "../CartaoReceita"
import receitasJson from "../../json/receitas.json"
import imagemPadrao from "../../assets/aaa.jpeg"
import Modal from "../Modal"


const Corpo = () => {
    const receitas = receitasJson.receitas

    return (
        <main className="receitas-grid">

            {receitas.map((receita) => (
                <CartaoReceita
                key={receita.nome}
                nome={receita.nome}
                ingredientes={receita.ingredientes}
                instrucoes={receita.instrucoes}
                imagem={imagemPadrao}
                />
                // <Modal id={receita.id} nome={receita.nome}/>
            ))}

        </main>
    )
}

export default Corpo
