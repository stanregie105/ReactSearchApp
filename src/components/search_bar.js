
import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            term: ''
        };
    }
    render(){
        return (
            <div>
                <input
                value={this.state.term}
                 onChange ={evt=> this.setState({term: evt.target.value})}/>
             </div>
        );
    }

    handleInputChange(evt){
      console.log(evt.target.value);
    }
}

export default SearchBar;