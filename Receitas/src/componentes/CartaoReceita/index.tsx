import Avalicao from "../Avalicao";
import { BiSolidEdit } from "react-icons/bi";



interface CartaoReceitaProps {
    nome: string
    ingredientes: {
        nome: string
        quantidade: number
        medida: string
    }[]
    instrucoes: string[]
    imagem: string
}

const CartaoReceita = ({ nome, ingredientes, instrucoes, imagem }: CartaoReceitaProps) => {
    return (
        <article className="card receita-card mb-3 shadow">
            <img className="card-img-top receita-imagem" src={imagem} alt={nome} />
            <div className="card-body">
                <h5 className="card-title">{nome}</h5>

                <h4 className="card-text">Ingredientes</h4>

                <ul className="body receita-lista">
                    {ingredientes.map((elemento) => (
                        <li key={`${nome}-${elemento.nome}`}>
                            {elemento.nome} ({elemento.quantidade} {elemento.medida})
                        </li>
                    ))}
                </ul>

                <h4 className="card-text">Modo de preparo</h4>

                <ol className="receita-lista">
                    {instrucoes.map((instrucao) => (
                        <li key={`${nome}-${instrucao}`}>{instrucao}</li>
                    ))}
                </ol>
                

                <div className="card-footer">
                    <BiSolidEdit color="grey" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                    <Avalicao />
                </div>
            </div>
        </article>
    )
}

export default CartaoReceita
