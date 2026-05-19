import { useState } from "react"
import Estrela from "./Estrela"

const Avalicao = () => {
    const numEstrelas = 5
    const [avaliacao, setAvaliacao] = useState(0)

    return (
        <div className="avaliacao" aria-label={`Nota: ${avaliacao} de ${numEstrelas}`}>
            {Array.from({ length: numEstrelas }, (_, i) => (
                <Estrela
                    key={i + 1}
                    valor={i + 1}
                    selecionado={avaliacao > i}
                    aoSelecionar={() => setAvaliacao(i + 1)}
                />
            ))}
        </div>
    )
}


export default Avalicao
