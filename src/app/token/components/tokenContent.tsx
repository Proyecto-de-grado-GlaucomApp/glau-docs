"use client";

import { createToken, deleteToken, getToken } from "@/service/tokenService";
import { Token } from "@/user/entities";
import { useEffect, useState } from "react";

const TokenContent = () => {

    const [token, setToken] = useState<Token | null>(null);

    // Recuperar el token cuando el componente se monta
    useEffect(() => {
        const fetchToken = async () => {
            try {
                const tokenResponse = await getToken();
                setToken(tokenResponse);
            } catch (error) {
                console.error("Error al obtener el token:", error);
            }
        };

        fetchToken();
    }, []); 

    const handleCreateToken = async () => {
        try {
            const response = await createToken();

            if (response) {
                window.location.reload();  // Recargar la página
            }
        } catch {
            alert("Hubo un error al crear el token.");
        }
    };

    const handleCancelRequest = async () => {
        try {
            if (token) {
                await deleteToken(); 
                // Recarga la página o realiza otra acción después de cancelar la solicitud
                window.location.reload();
            }
        } catch (error) {
            console.error('Error al cancelar la solicitud:', error);
        }
    };

    
    return (
<>
    <div className="lg:p-4 lg:ml-96 grid grid-cols-1 lg:grid-cols-6 gap-10 bg-white lg:bg-inherit">
        
        <div className="lg:mt-28 lg:mb-20 col-span-4 p-10 lg:p-16 lg:border-gray-200 lg:rounded-3xl lg:shadow-2xl bg-white dark:border-gray-700 lg:mt-16 mt-16">
            <h1 className="pb-10">Solicitar activación de API Token</h1>
            <p>Antes de utilizar nuestro servicio de GlauApp, es necesario que se realice una validación previa para la utilización de nuestro servicio, leyendo la configuración y obtención de tamizaje, el siguiente paso es dar click en el botón solicitar activación de API Token para que se realice la configuración de los datos y el administrador pueda activar el token asociado.</p>
            <p className="mt-4 text-gray-700">
    El estado de la API Key puede ser:
    <span className="font-bold"> ACTIVO</span> cuando la API Key está aprobada y funcionando correctamente,
    <span className="font-bold"> EN ESPERA</span> cuando la solicitud está pendiente de aprobación,
    o <span className="font-bold"> INACTIVO</span> cuando la API Key no está disponible o ha sido rechazada.
</p>
            <h1 className="pb-10 pt-10">API KEY</h1>
            <p className="text-gray-500 bg-white border border-gray-500 p-4">
                    {token && token.status !== 'INACTIVE' ? token.apiKey : "NO POSEE UNA API KEY ACTIVA EN ESTE MOMENTO"}
            </p>

            <div className="flex items-center mt-6">
                <h5>Estado: </h5>
                <p 
                    className={`ml-1 rounded-md text-white font-bold px-3 py-1 mr-3 ${
                        token 
                            ? (token.status === 'ACTIVE' 
                                ? 'bg-green-500' 
                                : token.status === 'PENDING' 
                                    ? 'bg-yellow-500' 
                                    : 'bg-red-500')
                            : 'bg-red-500'
                    }`}
                >
                    {token ? (token.status === 'ACTIVE' ? 'ACTIVO' : token.status === 'PENDING' ? 'EN ESPERA' : 'INACTIVO') : 'INACTIVO'}
                </p>
            </div>

            {/* Botón de activación del token si no existe o está 'Declined' */}
            {(token === null || token.status === 'INACTIVE') && (
                        <button 
                            type="submit" 
                            onClick={handleCreateToken} 
                            style={{ backgroundColor: '#769BCE' }} 
                            className="mt-10 rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-4 text-center"
                        >
                            Activación de API Token
                        </button>
                    )}
                {/* Botón de cancelar solicitud si el token está 'Pending' o 'Accepted' */}
                {(token && (token.status === 'PENDING' || token.status === 'ACTIVE')) && (
                    <button
                        type="button"
                        onClick={handleCancelRequest}
                        style={{ backgroundColor: '#FF4C4C' }}
                        className="mt-10 rounded-md text-white bg-danger-600 hover:bg-danger-700 focus:ring-4 focus:outline-none focus:ring-danger-300 font-medium text-sm px-5 py-4 text-center"
                    >
                        Cancelar solicitud
                    </button>
                )}
            
            
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
