import React,{Component} from 'react';
import './App.css';
import Cardlist from './Component/CardList'

class App extends Component{
  constructor(){
    super();
    this.state={
      users: [],
      searchparam:'',
      toDisplay:[],
    }
    this.fetchData = this.fetchData.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
   
  }
  componentWillMount(){
    this.fetchData();
  }
  changeHandler(event){
    let arrayToDisplay=[];
    this.state.users.map(item=>{
      if(item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1)
      {
        arrayToDisplay.push(item)
       }
    })
    this.setState({toDisplay:arrayToDisplay,searchparam:event.target.value});
    
  }

  fetchData=()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res=> res.json())
    .then(item=>this.setState({users:item,toDisplay:item}))
  }
  resetHandler(){
    this.setState({toDisplay:this.state.users,searchparam:''})
  }
  render(){
    return(
      <div className='App'>
  <div>    <input type="text" placeholder="Enter text to search" onChange={this.changeHandler} value={this.state.searchparam}/>
      <input type="button" value="Reset" onClick={this.resetHandler}/></div>
     {this.state.toDisplay.map(item=><Cardlist id={item.id}>{item.name}</Cardlist>)}
     
      </div>
    )
  }
}
export default App;
