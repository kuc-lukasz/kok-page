import logo from "../images/logo-blue.png";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import youtube from "../images/youtube.png";
import tiktok from "../images/tik-tok.png";
import {
    MainPageWindow,
    Links,
    Link,
    MainLogo,
    PhoneNumber,
} from "../styles/logo.styled";
export const Logo = () => {
    return (
        <MainPageWindow>
            <Links>
                <Link>
                    <a href="https://www.instagram.com/kredytodkuchni/">
                        <img src={instagram} alt="instagram" />
                    </a>
                </Link>
                <Link>
                    <a href="https://www.facebook.com/kredytodkuchni/">
                        <img src={facebook} alt="facebook" />
                    </a>
                </Link>
                <Link>
                    <a href="https://www.youtube.com/channel/UCwdzT8cUTcEGqvxFjDhEvCg">
                        <img src={youtube} alt="youtube" />
                    </a>
                </Link>
                <Link>
                    <a href="https://www.tiktok.com/@kredyt_od_kuchni">
                        <img src={tiktok} alt="tiktok" />
                    </a>
                </Link>
            </Links>
            <MainLogo>
                <a href="https://www.kredytodkuchni.pl">
                    <img src={logo} alt="logo" />
                </a>
            </MainLogo>
            <PhoneNumber>
                <a href="tel:607154416">+48 607 154 416</a>
            </PhoneNumber>
        </MainPageWindow>
    );
};
