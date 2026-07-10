import './footer.css'

// FUNGSI KOMPONEN FOOTER
function Footer() {
    return ( 
        <>
            <footer className='footer footer-dark bg-dark text-white'>
                <div className="footer-content">
                    <h5>Ngoding</h5>
                    <ul>
                        <li><i className='fa-brands fa-square-facebook'></i></li>
                        <li><i className='fa-brands fa-twitter'></i></li>
                        <li><i className='fa-brands fa-linkedin-in'></i></li>
                        <li><i className='fa-brands fa-github'></i></li>
                    </ul>
                </div>
                &copy; Mohamad Farhan Ramadhani | SI.25.230.0011
            </footer>
        </>
    );
}

export default Footer;