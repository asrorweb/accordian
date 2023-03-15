import { useState } from "react";
import QuestionList from "./components/QuestionList";

function App() {
    const [name, setList] = useState([
        {
            id: 0,
            title: "Do I Have To Allow The Use Of Cookies?",
            text: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
        },
        {
            id: 1,
            title: "How Do I Change My My Page Password?",
            text: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
        },
        {
            id: 2,
            title: "What Is BankID?",
            text: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
        },
        {
            id: 3,
            title: "What Is BankID?",
            text: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
        },
        {
            id: 4,
            title: "What Is BankID?",
            text: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
        },
        {
            id: 5,
            title: "What Is BankID?",
            text: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
        },
    ]);

    return <QuestionList posts={name} />;
}

export default App;
