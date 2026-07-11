import './about.css'
import profileImg from '../assets/img/gallery/profile.png'

// FUNGSI KOMPONEN ABOUT
function About() {
    return (
        <div className="profile-card">
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

        </div>
    );
}

export default About;