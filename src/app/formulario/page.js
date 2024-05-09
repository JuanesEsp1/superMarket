const Formulario = () => {
    return ( 
        <div className="w-full h-screen  flex">
            <div className="w-full h-full bg-slate-600">

            </div>
            <div className="w-[900px] h-full flex justify-center items-center">
                <div className="w-full gap-5 px-20 flex flex-col bg-white">
                    <div className="text-3xl font-medium flex justify-start">
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
                        <div className="w-full h-12 flex justify-center">
                            <button className="w-40 h-10 rounded-xl hover:-translate-y-1  duration-500   bg-emerald-300 hover:bg-emerald-500 hover:text-white">
                                Registrar
                            </button>
                        </div>        
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Formulario;