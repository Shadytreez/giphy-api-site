import React,{Component} from 'react';
import './App.css';
import GifCard from "./gifcard";


class App extends Component{
  
  state = {
    gifs:[],
      v: [],
      clear: [],
      currentGif: 0,
  }

    

  getTrending = () =>
  { 
    this.setState({currentGif: 1});
    this.setState({v: []});
    const rating = document.getElementById("rate").value;
    const url = "http://api.giphy.com/v1/gifs/trending?api_key=eBeXFUz7YRUQL4jA0j53KCQ0t12q8y6R&rating=" + rating;

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
    this.setState({currentGif: 2});
    this.setState({v: []})
    const rating = document.getElementById("rate").value;
    const url = "http://api.giphy.com/v1/gifs/random?api_key=eBeXFUz7YRUQL4jA0j53KCQ0t12q8y6R&rating=" + rating;
  
    fetch(url).
      then(response => response.json()).
      then(responseJson => {
        console.log("line 52", responseJson);
        // console.log(responseJson);
        console.log(responseJson.data);
        this.setState({gifs: responseJson.data});
        console.log(this.state.gifs);
      })
      .then(city =>{
        // for(let i in this.state.gifs){
        //   console.log("i",i);
           var joined = this.state.v.concat(<GifCard gif={this.state.gifs}/>);
           this.setState({ v: joined });
        // }
      })  
      .catch((error) => {
        console.log("Failed to retrieve trending gifs");
      }); 
  }


  getSearch= () =>
  { 
    this.setState({currentGif: 3});
    this.setState({v: []})
    const rating = document.getElementById("rate").value;
    const searchTerm = document.getElementById("search").value;
    const url = "http://api.giphy.com/v1/gifs/search?q=" +searchTerm+"&api_key=eBeXFUz7YRUQL4jA0j53KCQ0t12q8y6R&rating=" + rating;
    

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


  getRatingGif = () =>
  {
    console.log(this.state.currentGif)
    if(this.state.currentGif === 1){
      this.getTrending()
    }else if(this.state.currentGif === 2){
      this.getRandom()
    }else if(this.state.currentGif === 3){
      this.getSearch()
    }
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
       <div className="rating">
       <label for="rate">Rating:</label>
       <select onChange={this.getRatingGif} id="rate">
        <option value="">No rating</option>
        <option value="g">G</option>
        <option value="pg">PG</option>
       <option value="pg-13">PG-13</option>
       <option value="r">R</option>
        </select>
       </div>
       
       <div className="container">
       {this.state.v}
       </div>
       
    </div>)
  }
}
export default App;
