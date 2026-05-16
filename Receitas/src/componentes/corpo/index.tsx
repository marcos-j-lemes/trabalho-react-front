import CartaoReceita from "../CartaoReceita"
import { v4 as uuidv4 } from "uuid";
import receitasJson from "../../json/receitas.json"

const Corpo = () => {

    const receitas = receitasJson.receitas

    return (
        
        <main className="d-flex justify-content gap-3">  

            {receitas.map((receita) => <CartaoReceita
                key={uuidv4()}
                nome={receita.nome}
                ingredientes={receita.ingredientes}
                imagem={receita.imagem}
                instrucoes={receitas.instrucoes}
            />)}
        
        </main>
    )

}

export default Corpo

