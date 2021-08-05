import './SearchResults.css'

type SearchResultsProps = {
    result: string[]
    selected: (term: string) => void
    onEnter: () => void
}


function getOnKeyPress(key: string, onEnter: () => void) {
        if (key === 'Enter') onEnter()
}

const SearchResults = ({result, selected, onEnter}: SearchResultsProps) => (
    <>
        <ul>
            {result.map((value, index) =>
                <li tabIndex={0}
                    onKeyPress={({key}) => getOnKeyPress(key, onEnter)}
                    onFocus={() => selected(value)}
                    key={index}>{value}</li>
            )}
        </ul>
    </>
)

export default SearchResults;