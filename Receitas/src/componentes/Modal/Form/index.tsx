


const Form = ( {id}: {id: number} ) => {

    const { receitas } = useContext(ReceitaContext)
    const {nome, ingredientes, instrucoes } = receitas!.find(receita => receita.id === id )
    
    return (
        <form>
            <input type="text" className="" />


        </form>
    )
}




