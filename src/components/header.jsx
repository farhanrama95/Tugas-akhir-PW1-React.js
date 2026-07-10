import './header.css';
import { Container, Row, Col } from 'react-bootstrap';

// FUNGSI KOMPONEN HEADER 
function Header() {
    return (
        <div className ='hero min-vh-92 w-100 '>                      
            <Container>
                <Row>
                    <Col>
                        <h1>Mari BerSantai Sejenak</h1>
                        <p>Selamat datang di website kami! Kami senang Anda berada di sini. Jelajahi berbagai layanan dan produk yang kami tawarkan, dan jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau membutuhkan bantuan. Terima kasih telah mengunjungi kami!</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;