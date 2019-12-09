import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            lat: null,
            errorMessage: null
        }; 
    }

    componentDidMount(){
         window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({
                lat: position.coords.latitude
            }),
            (err) => this.setState({
                errorMessage: err.message
            })
        );
    }

    render(){
        return(
            <div className="border red">
                <SeasonDisplay
                lat = {this.state.lat}
                error = {this.state.errorMessage}
                />
            </div>
        );  
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));