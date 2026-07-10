import './header.css';
import { Container, Row, Col } from 'react-bootstrap';

// FUNGSI KOMPONEN HEADER 
function Header() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Mary BerSantai Sejenak</h1>
                        <p>Selamat datang di website kami! Kami senang Anda berada di sini. Jelajahi berbagai layanan dan produk yang kami tawarkan, dan jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau membutuhkan bantuan. Terima kasih telah mengunjungi kami!</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Header;