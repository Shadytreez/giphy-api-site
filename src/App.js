import React,{Component} from 'react';
import City from "./city"
import './App.css';
class App extends Component{
  
    
    state={
      cities:[],
      v: [],
    };


  getTrending = () =>
  { 
    const url = "http://api.giphy.com/v1/gifs/trending?api_key=eBeXFUz7YRUQL4jA0j53KCQ0t12q8y6R";

    if(zipCode.length === 5)
    {
      fetch(url).
      then(response => response.json()).
      then(responseJson => {
        console.log(responseJson);
        this.setState({cities: responseJson});
      }).
      then(city => {
        for(let i in this.state.cities)
        {
          console.log(i);
          var joined = this.state.v.concat(<City city={this.state.cities[i]}/>);
          console.log(joined);
          this.setState({ v: joined });
          console.log(this.state.v[i]);
          console.log(this.state.cities[i]);
        } 
      }).catch((error) => {
        alert("not a valid zip code");
      });
    }else{
      alert("zip code should be 5 numbers");
    }
   
  }

  getRandom(){
    const url = "http://api.giphy.com/v1/gifs/random?api_key=eBeXFUz7YRUQL4jA0j53KCQ0t12q8y6R";
  }

  getSearch(){
    const searchTerm = document.getElementById("search").value;
    const url = "http://api.giphy.com/v1/gifs/search?q=" +SEARCH+TERM+GOES+HERE+"&api_key=eBeXFUz7YRUQL4jA0j53KCQ0t12q8y6R";
  }
  

  

  render(){
   

    return (
    <div className="content">
      <h1>Zip Code Search</h1>
      <form id ="form">
         <p>Zip Code </p> <input id="search" placeholder="12345" type="text"/>
         <button type ="button" onClick={this.getCities}> Submit</button>
       </form>
        {this.state.v}
       
    </div>)
  }
}
export default App;
