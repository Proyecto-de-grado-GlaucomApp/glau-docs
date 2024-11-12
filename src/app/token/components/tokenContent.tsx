"use client";

const TokenContent = () => {
    return (
<>
    <div className="lg:p-4 lg:ml-96 grid grid-cols-1 lg:grid-cols-6 gap-10 bg-white lg:bg-inherit">
        
        <div className="lg:mt-28 lg:mb-20 col-span-4 p-10 lg:p-16 lg:border-gray-200 lg:rounded-3xl lg:shadow-2xl bg-white dark:border-gray-700 lg:mt-16 mt-16">
            <h1 className="pb-10">Solicitar activación de API Token</h1>
            <p>Antes de utilizar nuestro servicio de GlauApp, es necesario que se realice una validación previa para la utilización de nuestro servicio, leyendo la configuración y obtención de tamizaje, el siguiente paso es dar click en el botón solicitar activación de API Token para que se realice la configuración de los datos y el administrador pueda activar el token asociado.</p>
            <button 
                type="submit" 
                style={{ backgroundColor: '#769BCE' }} 
                className="mt-10 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-4 text-center"
            >
                Activación de API Token
            </button>

            <h1 className="pb-10 pt-10">API Token</h1>
            <p className="text-gray-500 bg-white border border-gray-500 p-4">
                a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6
            </p>
        </div>
        
        <div className="col-span-2 hidden lg:block lg:mt-20">
            <p style={{ color: '#769BCE' }} className="text-xs lg:mt-24 mb-6 font-medium text-xl">En esta página</p>
            <ul className="space-y-1 font-light">
                <li>
                    <a href="" className="text-xs flex items-center p-3 text-gray-900 group hover:bg-[rgba(118,155,206,0.2)] hover:border-l-4 hover:border-[#769BCE] group">
                        <span className="ms-5 ">Solicitar activación de API Token</span>
                    </a>
                </li>
                <li>
                    <a href="" className="text-xs flex items-center p-3 text-gray-900 group hover:bg-[rgba(118,155,206,0.2)] hover:border-l-4 hover:border-[#769BCE] group">
                        <span className="flex-1 ms-5 whitespace-nowrap">API Token</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</>

    )
}

export default TokenContent;
