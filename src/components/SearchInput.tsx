import './SearchInput.css'

type SearchInputProps = {
    setTerm: (term: string) => void
    label: string
}

const SearchInput = ({setTerm, label}: SearchInputProps) => (
    <div>
        <label htmlFor="search">{label}</label>
        <input aria-label="inserisi parola da cercare" tabIndex={0} autoFocus={true} type="text" name='search' onInput={event => setTerm(event.currentTarget.value)}/>
    </div>
);

export default SearchInput;
