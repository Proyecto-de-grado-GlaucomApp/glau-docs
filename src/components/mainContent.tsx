"use client";

const MainContent = () => {
    return (
<>
    <div className="lg:p-4 lg:ml-96 grid grid-cols-1 lg:grid-cols-6 gap-10 bg-white lg:bg-inherit">
        
        <div className="lg:mt-28 lg:mb-20 col-span-4 p-10 lg:p-16 lg:border-gray-200 lg:rounded-3xl lg:shadow-2xl bg-white dark:border-gray-700 lg:mt-16 mt-16">
            <h1 className="pb-10">GlauApp referencia documentación de API</h1>
            <p className="pb-10">
                El glaucoma es una enfermedad ocular que puede provocar la pérdida de visión irreversible si no se detecta a tiempo. GlauApp utiliza algoritmos avanzados para detectar la excavidad del nervio óptico y el área neuroretiniana, permitiendo un diagnóstico inicial que puede guiar a los profesionales en la toma de decisiones informadas sobre el manejo y tratamiento del paciente.
            </p>
            <h2 className="pb-10">Acerca de la aplicación</h2>
            <p className="pb-6">
                GlauApp es un servicio desarrollado como propuesta de trabajo de grado, diseñado para facilitar el tamizaje del glaucoma mediante el análisis de imágenes del nervio óptico. Su objetivo principal es proporcionar a oftalmólogos y profesionales de la salud ocular una herramienta eficaz que les permita realizar evaluaciones preliminares de la salud visual de los pacientes de manera rápida y precisa.
            </p>
            <p className="pb-6">
                La <strong>API Web de GlauApp</strong> es un servicio RESTful que facilita la interacción entre un servicio externo y el servidor, permitiendo el procesamiento y análisis de imágenes para el tamizaje de glaucoma.
            </p>
            <p className="pb-6"><strong>Funcionalidades clave</strong></p>
            <p className="pb-3">
                <strong>· Autenticación:</strong> La API requiere un token de autorización que los usuarios deben obtener tras registrarse e iniciar sesión. Esto asegura que solo los usuarios autorizados puedan acceder a las funcionalidades del servicio.
            </p>
            <p className="pb-3">
                <strong>· Carga de Imágenes:</strong> El endpoint principal (POST /mobile/glaucoma-screening/process) permite a los usuarios subir imágenes para su análisis. Este proceso incluye validaciones para garantizar que los archivos sean adecuados para el procesamiento.
            </p>
            <p className="pb-10">
                <strong>· Análisis de Resultados:</strong> Una vez que la imagen es procesada, la API devuelve un JSON que incluye información detallada sobre el análisis, como ratios de distancia, perímetro y área, además de clasificar el estado del nervio óptico del paciente.
            </p>
            <h1 className="pb-10">Configuración inicial</h1>
            <p className="pb-10">
                La configuración inicial de GlauApp es fundamental para comenzar a utilizar esta herramienta de tamizaje de glaucoma. Este proceso sencillo permite a los usuarios registrarse, iniciar sesión y obtener un token de API necesario para acceder a las funcionalidades de la aplicación. Una vez configurada, GlauApp facilita el análisis de imágenes del nervio óptico, proporcionando a los profesionales de la salud ocular datos precisos para tomar decisiones informadas sobre la salud de sus pacientes.
            </p>
            <p className="pb-3">1. Registrarte e Inicia Sesión</p>
            <p className="pb-3">2. Ir a la sección de API Token para activar el Token</p>
            <p className="pb-10">3. Cuando se active el Token, ir a la Sección de Obtención de Tamizaje para realizar las peticiones REST asociadas, es recomendable realizar una primera prueba inicial desde softwares como Postman o similares.</p>
            <h1 className="pb-6">Desarrolladores del módulo</h1>
            <p className="pb-6">
                Los desarrolladores de esta solución son estudiantes de Ingenieira de Sistemas de último semestre de la Pontificia Universidad Javeriana.
            </p>
            <p className="pb-3">· Erick Santiago Garavito Villamil</p>
            <p className="pb-3">· Fabio Luis Buitrago Ochoa</p>
            <p className="pb-3">· Felipe García Castilblanco</p>
            <p className="pb-10">· Luisa Lorena Parra Nivia</p>
            <div className="flex ms-2 md:me-24 lg:pb-6">
                <img src="logoGlauApp.svg" className="h-8 me-3" />
                <span className="self-center text-xl font-medium lg:text-2xl whitespace-nowrap dark:text-black">
                    <span style={{ color: '#769BCE' }}>Glau</span>DOCS
                </span>
            </div>
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

export default MainContent;
