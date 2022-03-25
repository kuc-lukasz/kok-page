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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                blanditiis nesciunt adipisci aut totam repudiandae. Voluptate
                vel a amet veritatis qui eligendi necessitatibus, quia quod
                laboriosam ullam delectus quam dolorem? Enim aspernatur esse
                laboriosam cumque, assumenda eius iure explicabo consectetur.
                Beatae officia hic quae nobis quo veritatis, tempora id vel quos
                adipisci! Qui ipsam voluptatem, iure reprehenderit recusandae
                neque aliquam! Voluptatem iusto molestiae debitis, praesentium
                reprehenderit similique magnam, libero placeat dolores
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
