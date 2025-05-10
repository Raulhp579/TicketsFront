import '../styles/Header.css';
import logoFBC from '../assets/escudos/LogoFBC.webp';
import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';




const Header = () => {
    const [openDialog, setAbrirDialog] = useState(null);

    const abrirMenu = (dialogId) => {
        setAbrirDialog(dialogId);
    };

    const cerrarMenu = () => {
        setAbrirDialog(null);
        const btnMenu = document.getElementById('btnTickets')
        btnMenu.classList.remove('btnTickets')
    };

    const agregarRotate = () => {
        const elemento = document.getElementById('btnTickets');
        if (elemento) {
            elemento.classList.add('btnTickets');
        }
    };

    const handleClick = () => {
        agregarRotate('btnTickets');
        setTimeout(() => {
            abrirMenu('menu');




            <button onClick={handleClick}>Abrir Menú</button>;
        }, 300);
    };


    return (
        <header className='encabezado'>
            <div className='logotipo'><img src={logoFBC} className='logoFBC' alt='Logo' /></div>
            <div className='titulo'>
                <h1>Venta de tickets</h1>
            </div>
            <div className='nav'>
                <nav>
                    <ul>
                        <button id='btnTickets'
                            style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: '10px' }}
                            onClick={() => handleClick()}
                        >
                            <MenuIcon style={{ color: '#FFFFFF', maxHeight: '80px', maxWidth: '50px', minHeight: '70px', minWidth: '40px' }} />
                        </button>
                    </ul>
                    {/* Contenedor de diálogos */}
                    <div>
                        {/* Dialogo del Menú */}
                        {openDialog === 'menu' && (
                            <dialog className='dialogPrincipal' open>
                                <h3>Menú</h3>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                    <button onClick={() => abrirMenu('Tickets')}>Tickets</button>
                                    <div style={{ height: '2px', backgroundColor: 'white', width: '100%' }}></div>

                                    <button onClick={() => abrirMenu('Contacto')}>Contacto</button>
                                    <div style={{ height: '2px', backgroundColor: 'white', width: '100%' }}></div>
                                    <button onClick={cerrarMenu}>Cerrar</button>

                                </div>
                            </dialog>
                        )}

                        {/* Cuadro de Tickets */}
                        {openDialog === 'Tickets' && (
                            <dialog className='dialogTickets' open>
                                <h3>Tickets</h3>
                                <p>Aquí los usuarios compran los tickets.</p>
                                <button onClick={cerrarMenu}>Cerrar</button>
                            </dialog>
                        )}

                        {/* Cuadro de Opción 2 */}
                        {openDialog === 'Contacto' && (
                            <dialog className='dialogContacto' open>
                                <h3 style={{ color:'rgb(8, 8, 8)' }}>Ubicación</h3>
                                <p>Para que no te pierdas, te dejamos aquí la ubicación exacta del estadio</p>
                                
                                {/* Aquí iría el mapa del spotify camp nou */}
                                <div style={{ marginTop: '1rem' }}>
                                    <h3 style={{ color:'rgb(8, 8, 8)' }}>¿Cómo llegar al Spotify Camp Nou?</h3>
                                    <div style={{ borderRadius: '10px', overflow: 'hidden', marginTop: '0.5rem' }}>
                                        <iframe
                                            title="Ubicación Spotify Camp Nou"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.339223511849!2d2.1217596766310775!3d41.38089617129637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4987c8f3ee06f%3A0xd64bc78e6cb7a85b!2sSpotify%20Camp%20Nou!5e0!3m2!1ses!2ses!4v1715347544453!5m2!1ses!2ses"
                                            width="100%"
                                            height="300"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>


                                <button onClick={cerrarMenu}>Cerrar</button>
                            </dialog>
                        )}
                    </div>
                </nav>


            </div>
        </header >
    );
};

export default Header;
