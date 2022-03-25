import { useNavigate } from "react-router-dom";
import { NavButtons, NavButton } from "../styles/navigation.styled";

export const Navigation = () => {
    const navigate = useNavigate();
    return (
        <NavButtons>
            <NavButton onClick={() => navigate("/")}>Strona Główna</NavButton>
            <NavButton onClick={() => navigate("/uslugi_finansowe")}>
                Usługi finansowe
            </NavButton>
            <NavButton onClick={() => navigate("/contact")}>Kontakt</NavButton>
        </NavButtons>
    );
};
