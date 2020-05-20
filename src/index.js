import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyBx_Gwnml0WJyw2LbE7QRUg81LFGB7qu3U';
// Create an new component. This component should produce some HTML.
 const App = ()=>{
     return (
           <div>
              <SearchBar/>
            </div>
          );
 }

// Take this component generated Html. Put it on the page(in the Dom) 
ReactDOM.render(<App/>, document.querySelector('.container'));