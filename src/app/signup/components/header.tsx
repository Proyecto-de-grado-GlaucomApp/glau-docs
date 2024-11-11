"use client";

const Header = () => {
    return (
        <nav className="fixed pt-3 top-0 z-50 w-full bg-white dark:border-gray-300" >
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                <div className="flex ms-2 md:me-24">
                            <img src="logoGlauApp.svg" className="h-8 me-3" />
                            <span className="self-center text-xl font-medium lg:text-2xl whitespace-nowrap dark:text-black">
                                <span style={{ color: '#769BCE' }}>Glau</span>DOCS
                            </span>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center ms-3 text-m font-medium">
                      <h3 className="flex items-center ms-3 hidden sm:block">¿Ya posees una cuenta gratuita?</h3>
                      <a style={{ color: '#769BCE' }} className="flex items-center ms-3">Inicia Sesión</a>
                      </div>
                    </div>
                </div>
                
            </div>

        </nav>
    )


}

export default Header;