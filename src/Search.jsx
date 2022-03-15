import React, {useState} from 'react';

let Search = () => {

    let [state , setState] = useState({
        searchKey : '',
        data : null
    });

    let submitSearch = (event) => {
        event.preventDefault();
        alert(state.searchKey);
        fetch("http://example.com/movies.json")
            .then(response => response.json())
            .then(data => {
                setState({
                    ...state,
                    data : data.data
                })
            });
    };

    return (
        <>
            <h2>Search</h2>
            <form onSubmit={submitSearch}>
                <input
                    value={state.searchKey}
                    onChange={(e) => setState({...state, searchKey: e.target.value})}
                    type="text" className="form-control"/>
                <input type="submit" className="btn btn-success" value="search"/>
            </form>
            <div>
                {
                    state.data !== null && state.data.length > 0 &&
                    <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data">
                        <pre>{JSON.stringify(state.data)}</pre>
                        {
                            state.data !== null && state.data.length > 0 && state.data.map(text => {
                                return(
                                    <>
                                        <li className="py-10">Open : {text.open}</li>
                                        <li className="py-10">Close : {text.close}</li>
                                        <li className="py-10">High : {text.high}</li>
                                        <li className="py-10">Low : {text.low}</li>
                                    </>
                                )
                            })
                        }
                        {
                            state.data && state.data?.length === 0 &&
                            <span>No Results found</span>
                        }
                    </ul>
                }

            </div>
        </>
    )
};
export default Search;