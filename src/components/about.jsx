import './about.css';
import profileImg from '../assets/img/gallery/profile.png';
import { motion} from 'motion/react';

// FUNGSI KOMPONEN ABOUT
function About() {
    return (
        <div className="card-con">
            <h1 className='card-jdl'>Profile pembuat</h1>
            <motion.div 
            initial={{opacity:0}}
            whileInView={{
                opacity:1,
                scale:1,
                transition:{duration:0.9}
            }}
            viewport={{
                once: true
            }}

            className="profile-card">
                <h2>Profil pembuat</h2>
                <img src={profileImg} alt="" />
                <div className="bio">
                    <h3>Mohamad Farhan Ramadhani</h3>
                    <h4>25.230.0011 | 2P53 | Absen: 08</h4>
                    <div className="univ">
                        <i className="fa-solid fa-graduation-cap"></i>
                        <p>INSTITUT WIDYA PRATAMA | Sistem Informasi</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default About;