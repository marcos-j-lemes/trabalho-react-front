import CartaoReceita from "../CartaoReceita"
import receitasJson from "../../json/receitas.json"
import imagemPadrao from "../../assets/aaa.jpeg"

const Corpo = () => {
    const receitas = receitasJson.receitas

    return (
        <main className="receitas-grid">

            {receitas.map((receita) => (
                <CartaoReceita
                key={receita.nome}
                nome={receita.nome}
                ingredientes={receita.ingredientes}
                imagem={imagemPadrao}
                instrucoes={receita.instrucoes}
                />
            ))}

        </main>
    )
}

export default Corpo
