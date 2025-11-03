type ProductoProps = {
    nombre: String
    precio: number
    disponible: boolean
};
function crearProducto({ nombre, precio, disponible }: ProductoProps) {

   
    return (
        <div className={disponible ? 'producto disponible' : 'producto agotado'}>
            <h2>{nombre}</h2>
            <p> Precio:{precio.toFixed(2)} € </p>
            <p>Disponibilidad:{disponible ? "✅En stock" : "❌Agotado"}</p>
        </div>
    )
}

export default crearProducto