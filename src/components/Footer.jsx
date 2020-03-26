import React from 'react';
import { Link } from 'react-router-dom';
// Importam SVG-urile(iconitele).
import { ReactComponent as Phone } from '../assets/icons/phone.svg';
import { ReactComponent as Mail } from '../assets/icons/mail.svg';
import { ReactComponent as GitHub } from '../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../assets/icons/linkedin.svg';
// Importam CSS-ul
import './Footer.css';

function Footer() {
    return(
        // Vrem ca intreg footer-ul sa aiba un fundal diferit la culoare.
        // Footer-ul are 3 coloane si un copyright separat.
        <footer className="pt-3 bg-light">
            {/* Vrem ca ce contine footer-ul pe primul rand sa fie centrat si sa nu depaseasca
            dimensiunile minimime si maxime, de aceea avem clasele container-fluid si container-min-max. */}
            {/* Avand un singur rand, nu este necesar sa folosim grid-ul Bootstrap, flex isi
            face treaba foarte usor. Doar trebuie sa dam display:flex si sa aliniem
            elementele pe orizontala cu justify-content: space-between. */}
            <div className="container-fluid container-min-max-width
                            d-flex justify-content-between">
                {/* Coloana 1: link-uri interne utile */}
                <div>
                    <h3 className="h5">Link-uri rapide:</h3>
                    <p className="mb-1">
                        <Link to='/about'>Despre</Link>
                    </p>
                    <p className="m-0">
                        <Link to='/terms-and-conditions'>Termeni și condiții</Link>
                    </p>
                </div>
                {/* Coloana 2: telefon+mail */}
                <div>
                    <h3 className="h5">Contactează-mă:</h3>
                    <p className="mb-1">
                        {/* Putem la click sa intram direct in aplicatia de mail, specificand adresa de mail catre
                        care scriem, dupa "mailto:". */}
                        <a href="mailto:razvan.cirlugea@gmail.com">
                            <Mail className="mr-1 mb-1 footer-icon"/>
                            razvan.cirlugea@gmail.com
                        </a>
                    </p>
                    <p className="m-0"><Phone className="mr-1 footer-icon"/>+40728998166</p>
                </div>
                {/* Coloana 3: link-uri externe. */}
                <div>
                    <h3 className="h5">Contactează-mă:</h3>
                    <p className="mb-1">
                        <a href="https://github.com/razvancir96">
                            <GitHub className="mr-1 mb-1 footer-icon"/>
                            razvancir96
                        </a>
                    </p>
                    <p className="m-0">
                        <a href="https://www.linkedin.com/in/razvancirlugea/">
                            <LinkedIn className="mr-1 footer-icon"/>
                            razvancirlugea
                        </a>
                    </p>
                </div>
            </div>
            {/* Pentru cel de-al doilea rand din footer, nu trebuie decat sa centram textul. */}
            <div className="text-center py-3">
                &copy; Răzvan Cîrlugea, 2019
            </div>
        </footer>
    );
}

export default Footer;