import { useState } from "react";

function ContadorClicks() {
    const [contador, setContador] = useState(0)
    return (
        <div>
            <h3>Contador de clicks</h3>
            <h2>Clicks:{contador}</h2>
            <button onClick={() => setContador
                (contador + 1)
            }>+1</button>
            <button onClick={() => setContador
                (contador - 1)
            }>-1</button>
            <button onClick={() => setContador
                (0)
            }>Reset</button>
            
        </div>
    );
}

export default ContadorClicks