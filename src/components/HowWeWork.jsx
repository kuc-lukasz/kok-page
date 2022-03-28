import {
    StepsWindow,
    StepsWindows,
    HowWorkContainer,
} from "../styles/homePage.styled";
import firstMeeting from "../images/conversation.png";
import secondMeeting from "../images/knowledge.png";
import thirdMeeting from "../images/handshake.png";

export const HowWeWork = () => {
    return (
        <HowWorkContainer>
            <h1>Nasza współpraca</h1>
            <StepsWindows>
                <StepsWindow>
                    <img src={firstMeeting} alt="firstmeetingIcon" />
                    <h3>Pierwszy kontakt - poznajmy się!</h3>
                    <p>
                        <p>
                            Jest to początek naszej współpracy, dlatego ważne
                            jest abyśmy się poznali. Na tym etapie przede
                            wszystkim poznaję Twoje potrzeby i plany. Opowiesz
                            mi co Cię interesuje, co planujesz zakupić.
                        </p>
                        <p>
                            Rodzaj spotkania dopasujemy w sposób dla nas
                            najwygodniejszy. Możemy się spotkać u Ciebie w
                            domu/firmie bądź u mnie w biurze. Możemy również
                            spotkać się zdalnie i porozmawiać online. Przede
                            wszystkim ma być swobodnie!
                        </p>
                    </p>
                </StepsWindow>
                <StepsWindow>
                    <img src={secondMeeting} alt="secondtmeetingIcon" />
                    <h3>Drugi kontakt - propozycje!</h3>
                    <p>
                        <p>
                            Wiem już czego potrzebujesz, więc czas abym
                            przedstawił Ci wszystkie możliwości.
                        </p>
                        <p>
                            Analizuję ofertę z kilkunastu banków i wybieram te
                            najkorzystniejsze dla Ciebie. Zawsze przedstawiam Ci
                            kilka opcji, abyśmy mieli możliwość wyboru oraz
                            porównanie.
                        </p>
                        <p>
                            Tłumaczę Ci wszystkie zagadnienia, korzyści oraz
                            koszty. Omówimy wszystkie etapy wnioskowania.
                        </p>
                    </p>
                </StepsWindow>
                <StepsWindow>
                    <img src={thirdMeeting} alt="thirdmeetingIcon" />
                    <h3>Trzeci kontakt - finalizacja!</h3>
                    <p>
                        <p>
                            Jeśli wybierzesz ofertę, która będzie dla Ciebie
                            najlepsza – przechodzimy do etapu końcowego.
                        </p>
                        <p>
                            Jest to etap w którym przygotowuję wszystkie
                            niezbędne dokumenty. Ponownie umówimy wszystkie
                            warunki i wyjaśnimy ostatnie kwestie.
                        </p>
                        <p>
                            Z reguły jest to jedno spotkanie, ale czasem w
                            zależności od procesu może być ich kilka. Zostawiam
                            Ci moją wizytówkę i służę Ci wsparciem w
                            przyszłości!
                        </p>
                    </p>
                </StepsWindow>
            </StepsWindows>
        </HowWorkContainer>
    );
};
