import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {/*Po co robic constructor? po to zeby bindowac w srodku? Przeciez mozna robic arrow function zeby bindowac a state pisac poza constructorem */
        super(props);

        this.state = {
            term: ''
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }


    onFormSubmit(event) {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })} /*Czy to jest jedyny sposob? Przeciez za kazdym wpisaniem tekstu oprocz zmiany state renderuje calosc */
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;