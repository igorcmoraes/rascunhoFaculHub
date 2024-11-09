function Lateral({logo, nome, inscricoes}) {
    return (
        <>
            <button>Entrar</button>
            <br/>
            <img src={logo} alt={nome}/>
            <h2>{nome}</h2>
            <p>Inscrições: {inscricoes}</p>
        </>
    )
}

export default Lateral