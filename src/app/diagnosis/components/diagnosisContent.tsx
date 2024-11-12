"use client";

const DiagnosisContent = () => {
    return (
<>
<div className="lg:p-4 lg:ml-96 grid grid-cols-1 lg:grid-cols-6 gap-10 bg-white bg-white lg:bg-inherit">
        
        <div className="lg:mt-28 lg:mb-20 col-span-4 p-10 lg:p-16 lg:border-gray-200 lg:rounded-3xl lg:shadow-2xl bg-white dark:border-gray-700 lg:mt-16 mt-16">
            <h1 className="pb-6">Obtención de Tamizaje</h1>
            <p className="pb-6">Permite cargar una imagen para el tamizaje de glaucoma. </p>
            <div className="flex items-center mb-6">
                <p className="bg-[#769BCE] text-white font-bold px-3 py-1 mr-3">
                    POST
                </p>
                <h5>/mobile/glaucoma-screening/process</h5>
            </div>
            <div className="bg-[#2F3F53] p-4 sm:w-full">
                <h5 className="text-[#516D8F]">1</h5>
                <div className="flex space-x-4">
                    <h5 className="text-[#516D8F]">2</h5>
                    <h5 className="text-[#DFB5A3]">Authorization:</h5>
                    <h5 className="text-[#73C8C0]">Bearer &lt;token&gt;</h5>
                </div>
                <div className="flex space-x-4">
                    <h5 className="text-[#516D8F]">3</h5>
                    <h5 className="text-[#DFB5A3]">Content-Type:</h5>
                    <h5 className="text-[#73C8C0]">multipart/form-data</h5>
                </div>
                <div className="flex space-x-4">
                    <h5 className="text-[#516D8F]">4</h5>
                    <h5 className="text-[#DFB5A3]">Body:</h5>
                </div>
                <div className="flex space-x-4">
                    <h5 className="text-[#516D8F]">5</h5>
                    <h5 className="text-[#73C8C0] pl-5"> - file: [Archivo de imagen]</h5>
                </div>
                <h5 className="text-[#516D8F]">6</h5>
            </div>
            <p className='mt-6'>file (tipo MultipartFile): Imagen que se desea analizar. Debe ser un archivo válido y no vacío. </p>
            <h1 className="py-6">Respuesta</h1>
            <div className="flex items-center mb-6">
                <p className="bg-[#769BCE] text-white font-medium px-3 py-1 mr-3">
                    200 OK
                </p>
            </div>
            <div className="bg-[#2F3F53] p-4 sm:w-full">
                <div className="flex space-x-4">
                    <h5 className="text-[#516D8F]">1</h5>
                </div>
                <div className="flex space-x-4">
                    <h5 className="text-[#516D8F]">2</h5>
                    <h5 className="text-[#516D8F]">{'{'}</h5>
                </div>
                <div className="flex flex-wrap space-x-4">
                    <h5 className="text-[#516D8F]">3</h5>
                    <h5 className="text-[#DFB5A3] pl-5">"imageUrl":</h5>
                    <h5 className="text-[#73C8C0]">"https://imagen.com/image_id.jpg"</h5>
                </div>
                <div className="flex flex-wrap space-x-4">
                    <h5 className="text-[#516D8F]">4</h5>
                    <h5 className="text-[#DFB5A3] pl-5">"imageId":</h5>
                    <h5 className="text-[#73C8C0]">"image_id.png",</h5>
                </div>
                <div className="flex flex-wrap space-x-4">
                    <h5 className="text-[#516D8F]">5</h5>
                    <h5 className="text-[#DFB5A3] pl-5">"distanceRatio":</h5>
                    <h5 className="text-[#73C8C0]">0.176,</h5>
                </div>
                <div className="flex flex-wrap space-x-4">
                    <h5 className="text-[#516D8F]">6</h5>
                    <h5 className="text-[#DFB5A3] pl-5">"perimeterRatio":</h5>
                    <h5 className="text-[#73C8C0]">0.7,</h5>
                </div>
                <div className="flex flex-wrap space-x-4">
                    <h5 className="text-[#516D8F]">7</h5>
                    <h5 className="text-[#DFB5A3] pl-5">"areaRatio":</h5>
                    <h5 className="text-[#73C8C0]">0.49,</h5>
                </div>
                <div className="flex flex-wrap space-x-4">
                    <h5 className="text-[#516D8F]">8</h5>
                    <h5 className="text-[#DFB5A3] pl-5">"neuroretinalRimPerimeter":</h5>
                    <h5 className="text-[#73C8C0]">594.504,</h5>
                </div>
                <div className="flex flex-wrap space-x-4">
                    <h5 className="text-[#516D8F]">9</h5>
                    <h5 className="text-[#DFB5A3] pl-5">"neuroretinalRimArea":</h5>
                    <h5 className="text-[#73C8C0]">28134.7,</h5>
                </div>
                <div className="flex flex-wrap space-x-4">
                    <h5 className="text-[#516D8F]">10</h5>
                    <h5 className="text-[#DFB5A3] pl-5">"excavationPerimeter":</h5>
                    <h5 className="text-[#73C8C0]">416.153,</h5>
                </div>
                <div className="flex flex-wrap space-x-4">
                    <h5 className="text-[#516D8F]">11</h5>
                    <h5 className="text-[#DFB5A3] pl-5">"excavationArea":</h5>
                    <h5 className="text-[#73C8C0]">13786.0,</h5>
                </div>
                <div className="flex flex-wrap space-x-4">
                    <h5 className="text-[#516D8F]">12</h5>
                    <h5 className="text-[#DFB5A3] pl-5">"state":</h5>
                    <h5 className="text-[#73C8C0]">1,</h5>
                </div>
                <div className="flex space-x-4">
                    <h5 className="text-[#516D8F]">13</h5>
                    <h5 className="text-[#DFB5A3] pl-5">"ddlStage":</h5>
                    <h5 className="text-[#73C8C0]">4</h5>
                </div>
                <div className="flex space-x-4">
                    <h5 className="text-[#516D8F]">14</h5>
                    <h5 className="text-[#516D8F]">{'}'}</h5>
                </div>
                <div className="flex space-x-4">
                    <h5 className="text-[#516D8F]">15</h5>
                </div>
            </div>
            
            <div className="flex items-center my-6">
                <p className="bg-[#DFB5A3] text-white font-medium px-3 py-1 mr-3">
                    400 (Bad request)
                </p>
            </div>
            <div className="bg-[#2F3F53] p-4 sm:w-full">
                <div className="flex space-x-4">
                    <h5 className="text-[#516D8F]">1</h5>
                </div>

                <div className="flex space-x-4">
                    <h5 className="text-[#516D8F]">2</h5>
                    <h5 className="text-[#516D8F]">{'{'}</h5>
                </div>

                <div className="flex space-x-4 flex-wrap">
                    <h5 className="text-[#516D8F]">3</h5>
                    <h5 className="text-[#DFB5A3] pl-5">"error": {"{"}</h5>
                </div>

                <div className="flex space-x-4 flex-wrap">
                    <h5 className="text-[#516D8F]">4</h5>
                    <h5 className="text-[#DFB5A3] pl-10">"status": </h5>
                    <h5 className="text-[#73C8C0]">400,</h5>
                </div>

                <div className="flex space-x-4 flex-wrap">
                    <h5 className="text-[#516D8F]">5</h5>
                    <h5 className="text-[#DFB5A3] pl-10">"message":</h5>
                    <h5 className="text-[#73C8C0]">"string"</h5>
                </div>

                <div className="flex space-x-4 flex-wrap">
                    <h5 className="text-[#516D8F]">6</h5>
                    <h5 className="text-[#DFB5A3] pl-5">{"}"}</h5>
                </div>

                <div className="flex space-x-4 flex-wrap">
                    <h5 className="text-[#516D8F]">7</h5>
                    <h5 className="text-[#516D8F]">{'}'}</h5>
                </div>
                <div className="flex space-x-4">
                    <h5 className="text-[#516D8F]">8</h5>
                </div>
            </div>
            <p className= 'font-bold mt-5'>Achivo no proporcionado o vacío.</p>
            <p>· Mensaje de error: "No file provided or file is empty."</p>
            <p className= 'font-bold mt-5'>Error en la solicitud hacia el servicio de procesamiento de imágenes.</p>
            <p>· Mensaje de error: "Request error: [Descripción del error del cliente]"  </p>
        </div>
        
        <div className="col-span-2 hidden lg:block lg:mt-20">
            <p style={{ color: '#769BCE' }} className="text-xs lg:mt-24 mb-6 font-medium text-xl">En esta página</p>
            <ul className="space-y-1 font-light">
                <li>
                    <a href="" className="text-xs flex items-center p-3 text-gray-900 group hover:bg-[rgba(118,155,206,0.2)] hover:border-l-4 hover:border-[#769BCE] group">
                        <span className="ms-5 ">Obtención Tamizaje</span>
                    </a>
                </li>
                <li>
                    <a href="" className="text-xs flex items-center p-3 text-gray-900 group hover:bg-[rgba(118,155,206,0.2)] hover:border-l-4 hover:border-[#769BCE] group">
                        <span className="flex-1 ms-5 whitespace-nowrap">Respuesta</span>
                    </a>
                </li>
                <li>
                    <a href="" className="text-xs flex items-center p-3 text-gray-900 group hover:bg-[rgba(118,155,206,0.2)] hover:border-l-4 hover:border-[#769BCE] group">
                        <span className="flex-1 ms-5 whitespace-nowrap">Errores</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</>

    )
}

export default DiagnosisContent;
