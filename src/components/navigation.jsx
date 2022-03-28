import { Link, useNavigate } from "react-router-dom";
import { NavButtons, NavButton } from "../styles/navigation.styled";
import { HowWeWork } from "./HowWeWork";

export const Navigation = () => {
    const navigate = useNavigate();
    return (
        <NavButtons>
            <NavButton onClick={() => navigate("/")}>Strona Główna</NavButton>
            <NavButton onClick={() => navigate("/uslugi_finansowe")}>
                Usługi finansowe
            </NavButton>
            <NavButton onClick={() => navigate("/contact")}>Kontakt</NavButton>
            {/* <NavButton onClick={() => navigate(`/${HowWeWork}`)}>
                Nasza współpraca
            </NavButton> */}
        </NavButtons>
    );
};
