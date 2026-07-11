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
            <div className="container-ser">
                <div className="row g-4">
                    <div className="col-12 col-md-4">
                        <motion.div className="box">
                            <i class="fa-solid fa-coins"></i>
                            <p className='sub'>Harga Terjangkau</p>
                            <p>Layanan yang murah dan ramah dikantong.</p>
                        </motion.div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="box">
                            <i class="fa-solid fa-thumbs-up"></i>
                            <p className='sub'>Fasilitas Terbaik</p>
                            <p>Fasilitas kami sudah memenuhi standar yang berlaku.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="box">
                            <i class="fa-solid fa-shield-halved"></i>
                            <p className='sub'>Tersertifikasi</p>
                            <p>Layanan kami sudah tersertifikasi khusus.</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Service