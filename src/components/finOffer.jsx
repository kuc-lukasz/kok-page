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
                <p>
                    Usługi finansowe, które oferuję mają bardzo szeroki zakres.
                    Dzięki wieloletniemu doświadczeniu, wiem że produkt musi być
                    dopasowany do faktycznego rodzaju zakupu.
                </p>
                <p>
                    Jeśli jesteś klientem indywidualnym, to porozmawiamy o
                    każdym możliwym finansowaniu zakupu jako osoba
                    indywiduwalna. Dzięki wielu możliwościom finansowym jesteśmy
                    w stanie wybrać odpowiedni, najmniej kosztowny i najbardziej
                    elastyczny sposób. Inny rodzaj produktu będzie przy budowie
                    domu, inny przy zakupie samochodu, a jeszcze inny przy
                    potrzebie gotówki na krótki okres spłaty.{" "}
                </p>
                <p>
                    Klient firmowy ma dostęp do produktów, które są dostosowane
                    do działalności gospodarczej. Przy szerokim spektrum
                    finansowania, trzeba dostosować produkt do rodzaju
                    prowadzonej działalności. Odpowiednio dopasowany produkt do
                    potrzeby, może znacząco obniżyć koszta finansowania i
                    zapewnić większą elastyczność.
                </p>
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
