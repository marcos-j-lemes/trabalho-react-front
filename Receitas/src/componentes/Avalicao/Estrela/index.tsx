import { IoMdStar } from "react-icons/io";

interface EstrelaProps {
    selecionado: boolean
    valor: number
    aoSelecionar: () => void
}

const Estrela = ({ selecionado = false, valor, aoSelecionar }: EstrelaProps) => {
    return (
        <button
            className="estrela"
            type="button"
            onClick={aoSelecionar}
            aria-label={`Avaliar com ${valor} estrela${valor > 1 ? 's' : ''}`}
            aria-pressed={selecionado}
        >
            <IoMdStar color={selecionado ? '#f5b301' : '#b8b8b8'} />
        </button>
    )
}

export default Estrela
