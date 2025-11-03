import { useState, type JSX } from 'react'

type TipoActividad = 'deporte' | 'lectura' | 'musica' | 'cocina'
type NivelEnergia = 'alto' | 'medio' | 'bajo'

function SelectorActividades(): JSX.Element {
  const [actividadSeleccionada, setActividadSeleccionada] = useState<TipoActividad | null>(null)
  const [tiempoDisponible, setTiempoDisponible] = useState<number>(60)
  const [nivelEnergia, setNivelEnergia] = useState<NivelEnergia>('medio')
  const [mostrarRecomendaciones, setMostrarRecomendaciones] = useState<boolean>(false)
  const [nombreUsuario, setNombreUsuario] = useState<string>('')
  const [inputNombre, setInputNombre] = useState<string>('')

  const seleccionarActividad = (actividad: TipoActividad): void => {
    if (actividadSeleccionada === actividad) {
      setActividadSeleccionada(null)
    } else {
      setActividadSeleccionada(actividad)
    }
  }

  const seleccionarEnergia = (nivel: NivelEnergia): void => {
    if (nivelEnergia === nivel) {
      setNivelEnergia('medio')
    } else {
      setNivelEnergia(nivel)
    }
  }

  const cambiarTiempo = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTiempoDisponible(Number(e.target.value))
  }

  const manejarSubmitNombre = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (inputNombre.trim()) {
      setNombreUsuario(inputNombre.trim())
      setInputNombre('')
    }
  }

  const toggleRecomendaciones = (): void => {
    setMostrarRecomendaciones(!mostrarRecomendaciones)
  }

  const obtenerConsejos = (actividad: TipoActividad): string[] => {
    const consejos = {
      deporte: ['Recuerda hidratarte', 'Haz calentamiento'],
      lectura: ['Busca un lugar cómodo', 'Ajusta la luz'],
      musica: ['Usa auriculares', 'Prueba géneros nuevos'],
      cocina: ['Lee la receta completa', 'Ten ingredientes listos']
    }
    return consejos[actividad]
  }

  return (
    <>
      <h2>Selector de Actividades</h2>

      <form onSubmit={manejarSubmitNombre}>
        <input
          type="text"
          value={inputNombre}
          onChange={(e) => setInputNombre(e.target.value)}
          placeholder="Tu nombre"
        />
        <button type="submit">Guardar nombre</button>
      </form>

      <h3>¿Qué quieres hacer?</h3>
      <button 
        onClick={() => seleccionarActividad('deporte')}
        disabled={actividadSeleccionada === 'deporte'}
      >
        Deporte
      </button>
      <button 
        onClick={() => seleccionarActividad('lectura')}
        disabled={actividadSeleccionada === 'lectura'}
      >
        Lectura
      </button>
      <button 
        onClick={() => seleccionarActividad('musica')}
        disabled={actividadSeleccionada === 'musica'}
      >
        Música
      </button>
      <button 
        onClick={() => seleccionarActividad('cocina')}
        disabled={actividadSeleccionada === 'cocina'}
      >
        Cocina
      </button>

      {actividadSeleccionada && (
        <>
          <h3>Tiempo disponible: {tiempoDisponible} minutos</h3>
          <input
            type="range"
            min="15"
            max="180"
            step="15"
            value={tiempoDisponible}
            onChange={cambiarTiempo}
          />

          <h3>Nivel de energía:</h3>
          <button 
            onClick={() => seleccionarEnergia('alto')}
            style={{ backgroundColor: nivelEnergia === 'alto' ? '#ccc' : 'white' }}
          >
            Alto
          </button>
          <button 
            onClick={() => seleccionarEnergia('medio')}
            style={{ backgroundColor: nivelEnergia === 'medio' ? '#ccc' : 'white' }}
          >
            Medio
          </button>
          <button 
            onClick={() => seleccionarEnergia('bajo')}
            style={{ backgroundColor: nivelEnergia === 'bajo' ? '#ccc' : 'white' }}
          >
            Bajo
          </button>
        </>
      )}

      <button onClick={toggleRecomendaciones}>
        {mostrarRecomendaciones ? 'Ocultar' : 'Mostrar'} Recomendaciones
      </button>

      {mostrarRecomendaciones && actividadSeleccionada && (
        <>
          <h3>Consejos para {actividadSeleccionada}:</h3>
          <ul>
            {obtenerConsejos(actividadSeleccionada).map((consejo, index) => (
              <li key={index}>{consejo}</li>
            ))}
          </ul>
        </>
      )}

      {nombreUsuario && actividadSeleccionada && (
        <p>
          Hola {nombreUsuario}, tu actividad recomendada es: {actividadSeleccionada}
        </p>
      )}
    </>
  )
}

export default SelectorActividades