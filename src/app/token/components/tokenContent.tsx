"use client";

const TokenContent = () => {
    return (
<>
    <div className="lg:p-4 lg:ml-96 grid grid-cols-1 lg:grid-cols-6 gap-10 bg-white lg:bg-inherit">
        
        <div className="lg:mt-28 lg:mb-20 col-span-4 p-10 lg:p-16 lg:border-gray-200 lg:rounded-3xl lg:shadow-2xl bg-white dark:border-gray-700 lg:mt-16 mt-16">
            <h1 className="pb-10">GlauApp referencia documentación de API</h1>
            
        </div>
        
        <div className="col-span-2 hidden lg:block lg:mt-20">
            <p style={{ color: '#769BCE' }} className="text-xs lg:mt-24 mb-6 font-medium text-xl">En esta página</p>
            <ul className="space-y-1 font-light">
                <li>
                    <a href="" className="text-xs flex items-center p-3 text-gray-900 group hover:bg-[rgba(118,155,206,0.2)] hover:border-l-4 hover:border-[#769BCE] group">
                        <span className="ms-5 ">Acerca de la aplicación</span>
                    </a>
                </li>
                <li>
                    <a href="" className="text-xs flex items-center p-3 text-gray-900 group hover:bg-[rgba(118,155,206,0.2)] hover:border-l-4 hover:border-[#769BCE] group">
                        <span className="flex-1 ms-5 whitespace-nowrap">Configuración Inicial</span>
                    </a>
                </li>
                <li>
                    <a href="" className="text-xs flex items-center p-3 text-gray-900 group hover:bg-[rgba(118,155,206,0.2)] hover:border-l-4 hover:border-[#769BCE] group">
                        <span className="flex-1 ms-5 whitespace-nowrap">Desarrolladores del módulo</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</>

    )
}

export default TokenContent;
