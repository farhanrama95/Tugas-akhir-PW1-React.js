import './footer.css'
import { motion } from "motion/react"

// FUNGSI KOMPONEN FOOTER
function Footer() {
    return ( 
        <>
            <footer className='footer footer-dark bg-dark text-white'>
                <div className="footer-content">
                    <h5>Ngoding</h5>
                    <ul>
                        <motion.li whileHover={{ scale: 1.55,}}><i className='fa-brands fa-square-facebook'></i></motion.li>
                        <motion.li whileHover={{ scale: 1.55,}}><i className='fa-brands fa-twitter'></i></motion.li>
                        <motion.li whileHover={{ scale: 1.55,}}><i className='fa-brands fa-linkedin-in'></i></motion.li>
                        <motion.li whileHover={{ scale: 1.55,}}><i className='fa-brands fa-github'></i></motion.li>
                    </ul>
                </div>
                <div className="fact">
                    Website dibuat dengan <i class="fa-brands fa-react"></i>
                </div>
                &copy; Mohamad Farhan Ramadhani (SI.25.230.0011)
            </footer>
        </>
    );
}

export default Footer;