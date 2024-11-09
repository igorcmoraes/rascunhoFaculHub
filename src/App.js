import React, { useEffect, useState } from 'react';
import Cabecalho from './Cabecalho';
import Lateral from './Lateral';
import Principal from './Principal';

function App() {
    const [usuarios, setUsuarios] = useState([]);

    const logo = "logo_sabor_do_brasil.png"
    const nome = "FaculHub"
    const inscricoes = "7"

    return (
        <div className="App">
            <header>
                <Cabecalho></Cabecalho>
            </header>
            <div id="mae">
                <aside>
                    <Lateral logo="perfil.png" nome={nome} inscricoes="7"></Lateral>
                </aside>
                <main>
                    <Principal curso="Inteligência Artificial" escola="PUC-MG" foto="inteligenciaArtificial.jpg" insc="4" comentario="0"></Principal>
                    <Principal curso="Design Gráfico" escola="SENAI-MG" foto="Design.jpg" insc="3" comentario="2"></Principal>
                </main>
            </div>
        </div>
    );
}

export default App;