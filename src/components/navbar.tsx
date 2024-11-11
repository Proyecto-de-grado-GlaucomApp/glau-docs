"use client";

import React, { useEffect, useState } from 'react';

const Navbar = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
            import("flowbite").then((module) => module.initFlowbite());
            setIsLoading(true);
    }, [])

    return (
        <> <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 bg-white dark:border-gray-300 border-b-8" style={{ borderColor: '#769BCE'}}>
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        {
                            isLoading ? <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-200 dark:focus:ring-gray-200">
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                            </button> : null
                        }

                        <div className="flex ms-2 md:me-24">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
                            <span className="self-center text-xl font-medium sm:text-2xl whitespace-nowrap dark:text-black">GlauDOCS</span>
                        </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center ms-3">
                          <div>
                              <button type="button" className="flex text-sm focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-200" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                  <span className="sr-only">Open user menu</span>
                                  <p>Usuario</p>
                                </button>
                          </div>
                          <div className="z-50 hidden my-5 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-200 dark:divide-gray-200" id="dropdown-user">
                              <div className="px-5 py-5" role="none">
                                  <p className="text-s text-gray-900 dark:text-gray-900" role="none">
                                      Fabio Buitrago
                                  </p>
                                  <p className="text-sm text-gray-900 dark:text-gray-900" role="none">
                                      Hospital San Ignacio
                                  </p>
                                  <p className="text-sm text-gray-900 dark:text-gray-900" role="none">
                                      fabiobuitra@gmail.com
                                  </p>

                              </div>
                              <ul className="py-1" role="none">
                                  <li>
                                      <a href="#" className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-600 dark:hover:bg-gray-300 dark:hover:text-gray-700" role="menuitem">Cerrar Sesión</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                    </div>
                </div>
                
            </div>

            
        </nav>
        
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-white-200 sm:translate-x-0" aria-label="logo-sidebar">
                <div className="h-full pb-4 overflow-y-auto bg-white">
                    <ul className="space-y-2 font-light">
                        <li>
                            <a href="" className="flex items-center p-3 text-gray-900 group hover:bg-[rgba(118,155,206,0.2)] hover:border-l-4 hover:border-[#769BCE] group">
                                <span className="ms-5">Configuración</span>
                            </a>
                        </li>
                        <li>
                            <a href="diagnosis" className="flex items-center p-3 text-gray-900 group hover:bg-[rgba(118,155,206,0.2)] hover:border-l-4 hover:border-[#769BCE] group">
                                <span className="flex-1 ms-5 whitespace-nowrap">Obtención Tamizaje</span>
                            </a>
                        </li>
                        <li>
                            <a href="token" className="flex items-center p-3 text-gray-900 group hover:bg-[rgba(118,155,206,0.2)] hover:border-l-4 hover:border-[#769BCE] group">
                                <span className="flex-1 ms-5 whitespace-nowrap">API Token</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-3 text-gray-900 group hover:bg-[rgba(118,155,206,0.2)] hover:border-l-4 hover:border-[#769BCE] group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Ingresa Ahora</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-3 text-gray-900 group hover:bg-[rgba(118,155,206,0.2)] hover:border-l-4 hover:border-[#769BCE] group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Registro</span>
                            </a>
                        </li>
                    </ul>
                    
                </div>
                        
            </aside>
            
            </>
  );
};

export default Navbar;
