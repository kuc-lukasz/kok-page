import {
    FinanceOffer,
    SingleCompanyOffer,
    SingleOffer,
    CompanyMeOffer,
} from "../styles/finOffer.styled";
import financeOffert from "../images/budget.png";
import singleClient from "../images/support.png";
import companyClient from "../images/employees.png";

export const Offer = () => {
    return (
        <FinanceOffer>
            <img src={financeOffert} alt="financeOffer" />
            <h1>Usługi finansowe</h1>
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
            <SingleCompanyOffer>
                <SingleOffer>
                    <img src={singleClient} alt="singleClientIcon" />
                    <h3>Klient indywidualny</h3>
                    <ul>
                        <li>Kredyt hipoteczny</li>
                        <li>Pożyczka hipoteczna</li>
                        <li>Kredyt gotówkowy</li>
                        <li>Kredyt w rachunku</li>
                        <li>Kredyt na samochód</li>
                    </ul>
                </SingleOffer>
                <CompanyMeOffer>
                    <img src={companyClient} alt="singleClientIcon" />
                    <h3>Klient firmowy</h3>
                    <ul>
                        <li>Kredyt w rachunku bieżącym</li>
                        <li>Kredyt na dowolny cel</li>
                        <li>Kredyt obrotowy</li>
                        <li>Kredyt inwestycyjny</li>
                        <li>Leasing</li>
                    </ul>
                </CompanyMeOffer>
            </SingleCompanyOffer>
        </FinanceOffer>
    );
};
