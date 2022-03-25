import {
    IntroduceContainer,
    MainHomePageContainer,
    StepsWindow,
    StepsWindows,
    HowWorkContainer,
    DescribeMeContainer,
} from "../styles/homePage.styled";
import tlo from "../images/profileImg.jpg";
import firstMeeting from "../images/conversation.png";
import secondMeeting from "../images/knowledge.png";
import thirdMeeting from "../images/handshake.png";
export const HomePage = () => {
    return (
        <MainHomePageContainer>
            <IntroduceContainer>
                <img src={tlo} alt="" />
                <DescribeMeContainer>
                    <h2>Kim jestem?</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Enim quam asperiores eaque fuga dolorum, ut nihil eos
                        vitae laudantium placeat provident consequatur commodi
                        sapiente odit unde quasi. Similique, quas voluptatibus.
                        Ducimus consequuntur molestiae nulla laborum inventore
                        aliquid, quam soluta delectus in sit consectetur fugit
                        fugiat tenetur incidunt asperiores distinctio
                        accusantium nostrum omnis! Voluptatem dolores neque ipsa
                        iste aperiam earum necessitatibus! Eos, delectus, quod a
                        natus blanditiis, vel earum iure dolore labore nisi
                        molestiae cumque qui optio? Rem ratione quis libero
                    </p>
                </DescribeMeContainer>
            </IntroduceContainer>

            <HowWorkContainer>
                <h1>Nasza współpraca</h1>
                <StepsWindows>
                    <StepsWindow>
                        <img src={firstMeeting} alt="firstmeetingIcon" />
                        <h3>Pierwszy kontakt - poznajmy się!</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quam velit dicta omnis expedita voluptatibus
                            fugit provident commodi suscipit voluptate facere
                            accusantium id veritatis nihil rerum, eveniet harum
                            voluptatum iusto dolore. Sapiente corporis dolores
                            veritatis laborum aperiam odio, quod nesciunt vel
                        </p>
                    </StepsWindow>
                    <StepsWindow>
                        <img src={secondMeeting} alt="secondtmeetingIcon" />
                        <h3>Drugi kontakt - propozycje!</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quam velit dicta omnis expedita voluptatibus
                            fugit provident commodi suscipit voluptate facere
                            accusantium id veritatis nihil rerum, eveniet harum
                            voluptatum iusto dolore. Sapiente corporis dolores
                            veritatis laborum aperiam odio, quod nesciunt vel
                        </p>
                    </StepsWindow>
                    <StepsWindow>
                        <img src={thirdMeeting} alt="thirdmeetingIcon" />
                        <h3>Trzeci kontakt - finalizacja!</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quam velit dicta omnis expedita voluptatibus
                            fugit provident commodi suscipit voluptate facere
                            accusantium id veritatis nihil rerum, eveniet harum
                            voluptatum iusto dolore. Sapiente corporis dolores
                            veritatis laborum aperiam odio, quod nesciunt vel
                        </p>
                    </StepsWindow>
                </StepsWindows>
            </HowWorkContainer>
        </MainHomePageContainer>
    );
};
