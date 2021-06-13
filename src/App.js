import React,{Component} from 'react';
import './App.css';
import GifCard from "./gifcard";
class App extends Component{
  
    
    state={
      gifs:[],
      v: [],
    };


  getTrending = () =>
  { 
    const url = "http://api.giphy.com/v1/gifs/trending?api_key=eBeXFUz7YRUQL4jA0j53KCQ0t12q8y6R";


      fetch(url).
      then(response => response.json()).
      then(responseJson => {
        //console.log(responseJson);
        this.setState({gifs: responseJson.data});
        console.log(this.state.gifs);
      })
      .then(city =>{
        for(let i in this.state.gifs){
          var joined = this.state.v.concat(<GifCard gif={this.state.gifs[i]}/>);
          this.setState({ v: joined });
        }
      })  
      .catch((error) => {
        console.log("Failed to retrieve trending gifs");
      });
  }

  getRandom = () =>
  {
    const url = "http://api.giphy.com/v1/gifs/random?api_key=eBeXFUz7YRUQL4jA0j53KCQ0t12q8y6R";
  
    fetch(url).
      then(response => response.json()).
      then(responseJson => {
        //console.log(responseJson);
        this.setState({gifs: responseJson.data});
        console.log(this.state.gifs);
      })
      .then(city =>{
        for(let i in this.state.gifs){
          var joined = this.state.v.concat(<GifCard gif={this.state.gifs[i]}/>);
          this.setState({ v: joined });
        }
      })  
      .catch((error) => {
        console.log("Failed to retrieve trending gifs");
      }); 
  }


  getSearch= () =>
  { 
    const searchTerm = document.getElementById("search").value;
    const url = "http://api.giphy.com/v1/gifs/search?q=" +searchTerm+"&api_key=eBeXFUz7YRUQL4jA0j53KCQ0t12q8y6R";


      fetch(url).
      then(response => response.json()).
      then(responseJson => {
        //console.log(responseJson);
        this.setState({gifs: responseJson.data});
        console.log(this.state.gifs);
      })
      .then(city =>{
        for(let i in this.state.gifs){
          var joined = this.state.v.concat(<GifCard gif={this.state.gifs[i]}/>);
          this.setState({ v: joined });
        }
      })  
      .catch((error) => {
        console.log("Failed to retrieve trending gifs");
      });
  }
    
  
  

  

  render(){
   

    return (
    <div className="content">
      <h1>Giphy Api</h1>
      <form id ="form">
         <p>Image tag search </p> <input id="search" placeholder="12345" type="text"/>
         <button type ="button" onClick={this.getSearch}> Submit</button>
       </form>
       <button type ="button" onClick={this.getTrending}> Trending Gif</button>
       <button type ="button" onClick={this.getRandom}> Random Gif</button>
        {this.state.v}
       
    </div>)
  }
}
export default App;
