const Resgistro = ({setState}) => {
    return ( 
        <>
        <div className="text-3xl font-medium flex justify-start mb-3">
            Registro
        </div>
        <div className="flex flex-col gap-8">
            <div className="w-full flex flex-col gap-3">
                <div class="relative z-0 w-full mb-5 group">
                    <input  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:border-emerald-500 focus:outline-none  peer" placeholder=" " required />
                    <label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Nombre
                    </label>
               </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:border-emerald-500 focus:outline-none  peer" placeholder=" " required />
                    <label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Correo
                    </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:border-emerald-500 focus:outline-none  peer" placeholder=" " required />
                    <label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Numero de Documento
                    </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:border-emerald-500 focus:outline-none  peer" placeholder=" " required />
                    <label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Contraseña
                    </label>
                </div>
            </div>
            <div className="w-full flex flex-col gap-4 justify-center items-center">
                <button type="submit" className="w-40 h-10 rounded-xl hover:-translate-y-1  duration-500   bg-emerald-300 hover:bg-emerald-500 hover:text-white">
                    Registrar
                </button>
                <div className="flex gap-2 ">
                    ¿Ya tienes cuenta?
                    <div
                        onClick={()=>{setState(true)}} 
                        className="cursor-pointer text-blue-500  hover:text-emerald-500">Iniciar sesión</div>
                </div>
            </div>        
        </div>
    </>
    )
}
 
export default Resgistro;