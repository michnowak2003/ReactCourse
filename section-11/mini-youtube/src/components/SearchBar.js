import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state={
            term: ''
        }
    }

    onFormSubmit = (event) =>{
       event.preventDefault();
       
       this.props.onSubmit(this.state.term);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Video search</label>
                        <input 
                            onChange={(e) => this.setState({term: e.target.value})} 
                            type='text'
                            value ={this.state.term}
                        />   
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;