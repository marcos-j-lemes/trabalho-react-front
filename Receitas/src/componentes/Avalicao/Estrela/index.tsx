import { FaStar } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";


interface EstrelaProps {
    selecionado: boolean
    aoSelecionar: () => void
}

const Estrela = ( {selecionado = false, aoSelecionar}: EstrelaProps) => {
    return (<IoMdStar 
        color={selecionado ? 'yellow': 'grey'}
        onClick={aoSelecionar}
        />)
}

export default Estrela

