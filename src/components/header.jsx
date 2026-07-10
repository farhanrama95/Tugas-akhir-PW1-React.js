import './header.css';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'motion/react';

// FUNGSI KOMPONEN HEADER 
function Header() {
    return (
        <div
        
        className ='hero min-vh-92 w-100 '>                      
            <Container>
                <Row>
                    <Col>
                        <motion.h1
                            initial={{opacity: 0, y: -40}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration:0.8,ease:"easeIn"}}
                        >Mari BerSantai Sejenak</motion.h1>
                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration:1,ease:"easeIn"}}
                        >Selamat datang di website kami! Kami senang Anda berada di sini. Jelajahi berbagai layanan dan produk yang kami tawarkan, dan jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau membutuhkan bantuan. Terima kasih telah mengunjungi kami!</motion.p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;