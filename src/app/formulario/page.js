'use client'
import Resgistro from "../components/registro/Registro";
import InicioSesion from "../components/inicioSeccion/InicioSesion";
import { useState } from "react";


const Formulario = () => {

    const [state, setState] = useState(false)

    return ( 
        <div className="w-full h-screen  flex">
            <div className="w-full h-full flex justify-center items-center bg-slate-600">
                <h1 className="bg-white">hola mundo</h1>
            </div>

            <div className="w-[900px] h-full flex justify-center items-center">
                <div className="w-full gap-5 px-20 flex flex-col bg-white">
                    {state?
                    <div className="">
                        <InicioSesion
                            setState={setState}
                        />
                    </div>
                    :
                    <div className="">
                        <Resgistro
                            setState={setState}
                        />
                    </div>
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Formulario;