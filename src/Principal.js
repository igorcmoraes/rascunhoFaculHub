function Principal({ curso, escola, foto, insc, comentario }) {
    return (
        <>
            <div className="lado">
                <p className="inicio">{curso}</p>
                <p className="final">{escola}</p>
            </div>
            <img src={foto} alt={curso} />
            <div className="lado">
                <p className="inicio">{insc}</p>
                <p className="final">{comentario}</p>
            </div>
        </>
    )
}

export default Principal