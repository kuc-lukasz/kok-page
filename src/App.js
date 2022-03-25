import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact } from "./components/contact";
import { Offer } from "./components/finOffer";
import { HomePage } from "./components/homePage";
import { Navigation } from "./components/navigation";
import { Logo } from "./components/logo";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Logo />
                <Navigation />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/uslugi_finansowe" element={<Offer />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
