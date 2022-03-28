import {
    ContactWindow,
    ContactPosibilites,
    ContactSingleWindow,
    ContactForm,
} from "../styles/contact.styled";
import contactIcon from "../images/communicate.png";
import singleClient from "../images/support.png";
import companyClient from "../images/employees.png";

export const Contact = () => {
    return (
        <ContactWindow>
            <img src={contactIcon} alt="financeOffer" />
            <h1>Kontakt</h1>
            <p>
                <p>
                    {" "}
                    Niewątpliwie, abyśmy mogli porozmawiać musimy podjąć
                    pierwszy kontakt. W tym wypadku masz kilka możliwości.
                    Możesz po prostu do mnie zadzwonić, abyśmy umówili się na
                    rozmowę. Jeśli akurat nie możesz rozmwaiać napisz maila,
                    bądź wypełnił formularz gdzie streścisz mi swoje
                    oczekiwania.
                </p>

                <p>
                    Wybierz formę, która Ci najbardziej odpowiada. Zadzwoń, bądź
                    zostaw mi swoje dane kontaktowe, a ja odezwę się Ciebie.
                </p>
            </p>
            <ContactPosibilites>
                <ContactSingleWindow>
                    <h3>Zadzwoń</h3>
                    <ContactForm>
                        <a href="tel:607154416">+48 607 154 416</a>
                    </ContactForm>
                </ContactSingleWindow>
                <ContactSingleWindow>
                    <h3>Napisz maila</h3>
                    <ContactForm>
                        <a href="mailto:kredytodkucni@gmail.com">
                            kredytodkuchni@gmail.com
                        </a>
                    </ContactForm>
                </ContactSingleWindow>
                <ContactSingleWindow>
                    <h3>Wypełnij formularz</h3>
                    <ContactForm>
                        <a href="https://forms.gle/nWZnbnfXsiKcUs2x6">
                            Formularz
                        </a>
                    </ContactForm>
                </ContactSingleWindow>
            </ContactPosibilites>
        </ContactWindow>
    );
};
