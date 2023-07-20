import insta from "../Images/instagram.png";
import github from "../Images/github.png";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
import "./Styles/Footer.css";

export default function Footer() {
    return (
        <footer>
            <a href="https:\\www.twitter.com">
                <img src={twitter} alt="twitter" width="25px" />
            </a>
            <a href="https:\\www.facebook.com">
                <img src={facebook} alt="facebook" width="25px" />
            </a>
            <a href="https:\\www.instagram.com">
                <img src={insta} alt="instagram" width="25px" />
            </a>
            <a href="https:\\www.github.com/ts-dauntless">
                <img src={github} alt="github" width="25px" />
            </a>
        </footer>
    );
}
