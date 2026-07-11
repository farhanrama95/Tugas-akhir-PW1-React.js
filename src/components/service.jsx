import './service.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'motion/react'

function Service() {
  return (
    <div className='service-con'>
        <div className="ser-head">
            <h1>Services</h1>
            <p>Alasan terbaik mengapa anda memilih pelayanan kami</p>
        </div>
            <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{once:true}}
                   
                     className="container-ser">
                        <div className="box">
                            <i className="fa-solid fa-coins"></i>
                            <p className='sub'>Harga Terjangkau</p>
                            <p>Layanan yang murah dan ramah dikantong.</p>
                        </div>
                        <div className="box">
                            <i className="fa-solid fa-thumbs-up"></i>
                            <p className='sub'>Fasilitas Terbaik</p>
                            <p>Fasilitas kami sudah memenuhi standar yang berlaku.</p>
                        </div>
                        <div className="box">
                            <i className="fa-solid fa-shield-halved"></i>
                            <p className='sub'>Tersertifikasi</p>
                            <p>Layanan kami sudah tersertifikasi khusus.</p>
                        </div>
            </motion.div>
    </div>
  )
}

export default Service