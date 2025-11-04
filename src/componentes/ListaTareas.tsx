import { useState } from "react"

function ListaTareas() {



    const [listaTareas, setlistaTareas] = useState([
        { id: 1, texto: 'correr', completada: false },
        { id: 2, texto: 'saltar', completada: true },
        { id: 3, texto: 'comer', completada: true }
    ])

    const [nombreTarea, setnomreTarea] = useState<string>('')

    function cambiaCompletada(id: number) {
        setlistaTareas(listaTareas.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t)))
    }

    function añadirTarea() {
        let max = 0
        listaTareas.map(t => max = t.id > max ? t.id : max);

        setlistaTareas([...listaTareas, { id: max + 1, texto: nombreTarea, completada: false }])



    }
    function eliminarTarea(id: number) {
        setlistaTareas(listaTareas.filter(t => t.id !== id))
    }


    return (
        <>
            <h1>Lista de tareas</h1>
            <ul>
                {listaTareas.map(
                    t => (
                        <li key={t.id}>{t.texto}
                            <input onChange={() => cambiaCompletada(t.id)} type="checkbox" checked={t.completada}></input>
                            <button  onClick={()=>eliminarTarea(t.id)}>Eliminar</button>
                        </li>
                    )
                )}
            </ul>
            <input onChange={(e) => setnomreTarea(e.target.value)} type="text" placeholder="Introduce nombre de tarea" />
            <button onClick={() => { añadirTarea() }}>Añadir tarea</button>



        </>
    )
}

export default ListaTareas
