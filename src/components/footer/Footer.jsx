import './Footer.css';

function Footer(){
    return (
        <footer className="footer mt-auto py-3 main-color">
            <div className="footer-container">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a>
                    </li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a>
                    </li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a>
                    </li>
                </ul>
                <p className="text-center text-body-secondary">&copy; 2024 Company, Inc</p>
            </div>
        </footer>
    );
}

export default Footer;