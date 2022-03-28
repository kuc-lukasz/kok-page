import {
    IntroduceContainer,
    MainHomePageContainer,
    DescribeMeContainer,
    WhoIam,
} from "../styles/homePage.styled";
import tlo from "../images/profileImg.jpg";
import { HowWeWork } from "./HowWeWork";
export const HomePage = () => {
    return (
        <MainHomePageContainer>
            <IntroduceContainer>
                <WhoIam>
                    <h1>Ekspert finansowy</h1>
                    <h2>
                        Pośrednictwo kredytowe dla klienta indywidualnego oraz
                        dla firm
                    </h2>
                </WhoIam>
                <img src={tlo} alt="" />
                <DescribeMeContainer>
                    {/* <h2>Kim jestem?</h2> */}
                    <p>
                        <p>Cześć, nazywam się Łukasz Kuc.</p>
                        <p>
                            Moim zadaniem jest pomóc Ci znaleźć najlepsza ofertę
                            finansowania pośród kilkunastu banków oraz
                            przeprowadzić Cię w całym procesie kredytowym, abyś
                            nie musiał się o nic martwić.
                        </p>
                        <p>
                            Posiadam wieloletnie doświadczenie w praktycznie
                            każdym produkcie bankowym. Dzięki temu wyjaśnię Ci
                            każde możliwe wątpliwości i pomogę Ci bezpieczenie
                            przejść cały proces krok po kroku.
                        </p>
                        <p>
                            Jeśli interesuje Cię zakup nieruchomości, samochodu,
                            leasing czy finansowanie dla Twojej firmy to
                            powinniśmy się spotkać. Dobierzemy taki produkt, aby
                            odpowiednio pasował dla Twojej inwestycji.
                        </p>
                    </p>
                </DescribeMeContainer>
            </IntroduceContainer>
            <HowWeWork></HowWeWork>
        </MainHomePageContainer>
    );
};
