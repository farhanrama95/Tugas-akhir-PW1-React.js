// IMPORT BOOTSTRAP SERTA ASSET YG DIPERLUKAN
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { motion } from 'motion/react';
import gallery1 from '../assets/img/gallery/gallery-1.jpg';
import gallery2 from '../assets/img/gallery/gallery-2.jpg';
import gallery3 from '../assets/img/gallery/gallery-3.jpg';
import gallery4 from '../assets/img/gallery/gallery-4.jpg';
import gallery5 from '../assets/img/gallery/gallery-5.jpg';
import gallery6 from '../assets/img/gallery/gallery-6.jpg';
import './gallery.css'

// FUNGSI KOMPONEN GALLERY

const galleryImg = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

function Gallery() {
    return (
        <Container>
            
            <motion.h1
                className='head'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Gallery
            </motion.h1>

            <Row xs={1} md={2} className="g-6">
                {galleryImg.map((img, idx) => (
                    <Col key={idx}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                        >
                            <Card>
                                <Card.Img variant="top" src={img} className='galleryImg' />
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Gallery;