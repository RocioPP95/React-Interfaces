import { useState } from "react";
//import { Fragment } from "react/jsx-runtime";//esto solo es si pongo <Fragmento></Fragmento>

function MiComponente() {
    const [visible, setvisible] = useState<boolean>(true)
    const [afirmativo, setafirmativo] = useState<boolean>(true)

    const [estadoPersona, setestadoPersona] = useState<String>("despierto")

    const [textoInput, setTeztoInput] = useState<string>("")


    const cambiarEstadoPersona = () => {
        if (estadoPersona === "dormido") {
            setestadoPersona("despierto")
        }
        else if (estadoPersona === "despierto") {
            setestadoPersona("trabajando")
        }
        else {
            setestadoPersona("dormido")
        }

    }

    const [dia, setdia] = useState<number>(0);
    const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
    const cambiarDia = () => {
        setdia(dia === dias.length - 1 ? 0 : dia + 1);
    }


    return (
        //Fragmento
        <>
            <h2>Siempre Visible</h2>
            <p>Estoy siempre visible</p>
            <small>Fin: del punto siempre visible</small>

            <hr />

            <h2>mostrar/ocultar</h2>
            {visible && <p>texto mostrado</p>}
            <button onClick={() => { setvisible(!visible) }}>{visible ? "ocultar" : "mostrar"}</button>
            <br />
            <small>Fin: mostrar/ocultar</small>

            <hr />

            <h2>Alternar valores</h2>
            {afirmativo ? <p>SI</p> : <p>NO</p>}
            <button onClick={() => { setafirmativo(!afirmativo) }}>alternar valor</button>
            <br />
            <small>Fin: alternar valores</small>

            <hr />

            <h2>Transicion entre estados</h2>
            <p>Estado : {estadoPersona}</p>

            <button onClick={() => { cambiarEstadoPersona() }}>cambiar estado</button>
            <br />
            <small>Fin: fin transicion</small>

            <hr />

            <h2>Transicion entre estados ARRAYS</h2>
            <p>Dia de la semana : {dias[dia]}</p>

            <button onClick={() => { cambiarDia() }}>cambiar estado</button>
            <br />
            <small>Fin: fin transicion</small>

            <hr />
            <h2>onChange</h2>
            <input type="text" placeholder="Introduce un texto..." onChange={(e) => { setTeztoInput(e.target.value )}} />
            <p>El texto introducido es: {textoInput}</p>
            <br />
            <small>Fin OnChange</small>


        </>

    )
}
export default MiComponente;