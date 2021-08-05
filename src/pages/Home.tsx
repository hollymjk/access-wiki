import React, {useState} from "react";
import {RouteComponentProps} from "react-router-dom";
import SearchInput from "../components/SearchInput";
import SearchResults from "../components/SearchResults";
import {search} from "../utils/wiki";

const Home = ({history}: RouteComponentProps<any>) => {

    const [term, setTerm] = useState<string>('');
    const [results, setResults] = useState<string[]>([]);
    const [selected, setSelected] = useState<string>('')


    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (term.length > 0) {
            setResults((await search(term)).results)
        }
    }

    function onSelected() {
        history.push(`/article/${selected}`)
    }

    return (
        <div>
            <form action="" onSubmit={event => handleSubmit(event)}>
                <SearchInput label='Cerca Termine' setTerm={setTerm}/>
                <p>Trovati {results.length} risultati</p>
                <SearchResults onEnter={onSelected} result={results} selected={setSelected}/>
            </form>
        </div>
    );
}

export default Home