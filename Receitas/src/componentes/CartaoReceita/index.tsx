import { v4 as uuidv4 } from "uuid";


interface CartaoReceitaProps {
    nome: string
    ingredientes: {
        nome: string
        quantidade: number
        medida: string
    }[]

    instrucoes: string[]
}

const CartaoReceita = ({nome, ingredientes, instrucoes }: CartaoReceitaProps) => {


    return (

        <div className="card mb-3">
            <img src="..." className="card-img-top" alt="nome" />
            <div className="card-body">
                <h5 className="card-title">{nome}</h5>

                <h4 className="card-text">Ingredientes</h4>


                <ul className="body">
                    {ingredientes.map( elemento  => <li key={uuidv4()} >{elemento.nome} ({elemento.quantidade} {elemento.medida})</li>)}
                </ul>


                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
        </div>
    )

}

export default CartaoReceita
