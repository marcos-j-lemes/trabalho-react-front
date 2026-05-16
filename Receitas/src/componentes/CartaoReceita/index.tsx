import { v4 as uuidv4 } from "uuid";
import Estrela from "../Avalicao/Estrela";
import Avalicao from "../Avalicao";


interface CartaoReceitaProps {
    nome: string
    ingredientes: {
        nome: string
        quantidade: number
        medida: string
        imagem: string
        aoApagar: (id: number) => void
    }[]

    instrucoes: string[]
}

const CartaoReceita = ({nome, ingredientes, instrucoes, imagem, aoApagar }: CartaoReceitaProps) => {


    return (

        <div className="card mb-3  shadow">
            <div className="card-img-yop">
                <img src={imagem} alt={nome}/>

            </div>
            <div className="card-body">
                <h5 className="card-title">{nome}</h5>

                <h4 className="card-text">Ingredientes</h4>


                <ul className="body">
                    {ingredientes.map( elemento  => <li key={uuidv4()} >{elemento.nome} ({elemento.quantidade} {elemento.medida})</li>)}
                </ul>

                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>

                <div className="card-footer">
                    <Avalicao/>

                </div>
            </div>
        </div>
    )

}

export default CartaoReceita
