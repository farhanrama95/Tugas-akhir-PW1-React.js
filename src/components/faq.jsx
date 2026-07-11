import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import { motion } from 'motion/react';
import './faq.css';

// Data FAQ - silakan sesuaikan isinya
const faqData = [
  { q: "Bagaimana Cara Ordernya?", a: "Kamu bisa order lewat website atau hubungi admin kami langsung." },
  { q: "Apakah Ada Wifinya?", a: "Ada, wifi gratis tersedia di seluruh area." },
  { q: "Sudah Beroperasi Berapa Lama?", a: "Kami sudah beroperasi sejak beberapa tahun terakhir." },
  { q: "Berapa Kapasitas Maksimal Penginap?", a: "Kapasitas maksimal sekitar 10 orang." },
  { q: "Apakah Tempatnya Nyaman?", a: "Ya, tempat kami didesain senyaman mungkin untuk keluarga." },
  { q: "Bagaimana Lingkungan disekitarnya?", a: "Lingkungan sekitar asri, tenang, dan mudah dijangkau." },
  { q: "Apakah Sudah Terverifikasi dengan Baik?", a: "Ya, kami sudah terverifikasi resmi oleh pihak berwenang." },
  { q: "Apakah Cocok Untuk Anak - Anak?", a: "Sangat cocok, tersedia fasilitas ramah anak." },
];

function Faq() {
  // Bagi data jadi 2 kolom (kiri & kanan)
  const half = Math.ceil(faqData.length / 2);
  const leftCol = faqData.slice(0, half);
  const rightCol = faqData.slice(half);

  return (
    <Container className="faq-section">
      {/* Judul section - fade in dari bawah */}
      <motion.div
        className="faq-head text-center mb-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>Yang Biasa Di Tanyakan</h2>
        <p>Bingung? kami bisa bantu.</p>
      </motion.div>

      <div className="foq row g-3">
        {/* Kolom kiri */}
        <div className="col-12 col-md-6">
          <Accordion>
            {leftCol.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{scale:1.05}}
              >
                <Accordion.Item eventKey={String(idx)} className="faq-item">
                  <Accordion.Header>{item.q}</Accordion.Header>
                  <Accordion.Body>{item.a}</Accordion.Body>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion>
        </div>

        {/* Kolom kanan */}
        <div className="foq col-12 col-md-6">
          <Accordion>
            {rightCol.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{scale:1.05}}
              >
                <Accordion.Item eventKey={String(idx + half)} className="faq-item">
                  <Accordion.Header>{item.q}</Accordion.Header>
                  <Accordion.Body>{item.a}</Accordion.Body>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </Container>
  );
}

export default Faq;