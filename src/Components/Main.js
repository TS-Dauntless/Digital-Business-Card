import profile from "../Images/profile.jpg";
import email from "../Images/mail.png";
import linkedin from "../Images/linkedin.png";
import "./Styles/Main.css";

export default function Main() {
    return (
        <main>
            <img src={profile} alt="Profile" width="300px" />
            <h1>Thamarai Selvan</h1>
            <h3>Full Stack Developer</h3>
            <p>
                <a className="nostyle" href="https:\\www.google.com">
                    Ts-Dauntless.website
                </a>
            </p>
            <div className="social-media">
                <a
                    href="https:\\www.gmail.com"
                    className="convert-to-button back-white nostyle"
                >
                    <img src={email} alt="" width="20px" />
                    <p className="black">Email</p>
                </a>
                <a
                    href="https:\\www.linkedin.com"
                    className="convert-to-button back-blue nostyle"
                >
                    <img src={linkedin} alt="" width="20px" />
                    <p className="white">LinkedIn</p>
                </a>
            </div>
        </main>
    );
}
