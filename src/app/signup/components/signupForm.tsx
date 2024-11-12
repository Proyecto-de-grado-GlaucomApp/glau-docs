"use client";

const SignUpForm = () => {
    return (
        <section className="lg:mt-28 flex flex-col items-center justify-center fixed w-full mg:h-full bg-white">
            <div className="mt-16 sm:mt-24 py-8 w-full max-w-4xl">
                <h3 className="flex items-center justify-center sm:mb-6 text-2xl sm:text-4xl font-semibold">
                    Crea una cuenta gratuita
                </h3>
                <div className="bg-white flex flex-col justify-center items-center md:mt-0 w-full">
                    <div className="p-6 space-y-4 md:space-y-10 w-full">
                        <form className="space-y-4 md:space-y-9 w-full" action="#">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                                <div className="w-full">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Correo electrónico</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        className="border border-gray-900 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-3" 
                                        placeholder="usuario@example.com" 
                                    />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Nombre de usuario</label>
                                    <input 
                                        type="text" 
                                        name="username" 
                                        id="username" 
                                        className="border border-gray-900 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-3" 
                                        placeholder="Usuario"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4">
                                <div className="w-full">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Contraseña</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        placeholder="••••••••" 
                                        className="border border-gray-900 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-3" 
                                    />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Verificar Contraseña</label>
                                    <input 
                                        type="password" 
                                        name="confirm-password" 
                                        id="confirm-password" 
                                        placeholder="••••••••" 
                                        className="border border-gray-900 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-3" 
                                    />
                                </div>
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <div className="w-full sm:w-1/2 flex flex-col justify-center">
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Entidad médica</label>
                                    <input 
                                        type="text" 
                                        name="username" 
                                        id="username" 
                                        className="border border-gray-900 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-3" 
                                        placeholder="Hospital San Ignacio"
                                    />
                                </div>
                            </div>

                            <div className="w-full flex justify-center items-center mb-2">
                                <div className="w-full sm:w-1/2 flex flex-col justify-center">
                                    <button 
                                        type="submit" 
                                        style={{ backgroundColor: '#769BCE' }} 
                                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-4 text-center"
                                    >
                                        Registrarme
                                    </button>
                                </div>
                            </div>                        
                        </form>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full mt-8">
                    <div className="border-t border-gray-400 flex-grow"></div>
                    <span className="mx-4 text-gray-400">o</span>
                    <div className="border-t border-gray-400 flex-grow"></div>
                </div>
                <div className="flex flex-col items-center justify-center mt-10 text-gray-400">
                    <p>Aplicación desarrollada por la Pontificia Universidad Javeriana</p>
                    <p>Proyecto de Grado Ingeniería de Sistemas</p>
                    <p>Facultad de Ingeniería</p>
                    <p>Ingeniería de Sistemas y Computación</p>
                </div>
            </div>
        </section>
    );
}

export default SignUpForm;
