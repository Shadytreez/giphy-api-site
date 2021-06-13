import React,{Component} from 'react';
import './App.css';
import GifCard from "./gifcard";


class App extends Component{
  
  state = {
    gifs:[],
      v: [],
      clear: [],
  }

    

  getTrending = () =>
  { 
    this.setState({v: []})
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
    this.setState({v: []})
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
    this.setState({v: []})
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
    
  
  componentDidMount(){
    this.getTrending();
  }

  

  render(){
   

    return (
    <div >
      <h1 className="content">Giphy Api</h1>
      <form id ="form" className="content">
        <input id="search" placeholder="Insert topic" type="text"/>
         <button type ="button" onClick={this.getSearch}> Submit</button>
         <button type ="button" onClick={this.getTrending}> Trending Gif</button>
       <button type ="button" onClick={this.getRandom}> Random Gif</button>
       </form>
      
       <div className="container">
       {this.state.v}
       </div>
       
    </div>)
  }
}
export default App;
