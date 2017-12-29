import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
// import Radium,{StyleRoot} from 'radium';
import Header from './header/header';
class App extends Component {
  state={
fruits:[
{id:"a", fruit:"Banana",weight:32},
{id:"b", fruit:"Apple",weight:45},
{id:"c", fruit:"pineapple",weight:90},
],
showFruits:false
}
// switchNameHandler=(newFruits)=>{
// this.setState({
//   fruits:[
//     {fruit:newFruits,weight:32},
//     {fruit:"Ap",weight:45},
//     {fruit:"pin",weight:90}
//     ]})}

// changeData=(props)=>{
// return(
// <div>
// <p>the data changed is {props.fruit}, </p>
// </div>
// )}
deleteFruitHandler=(fruitIndex)=>{
// const fruit=this.state.fruits.slice();
// slice=it copies the full array and create new one
const fruit=[...this.state.fruits];
fruit.splice(fruitIndex,1);
this.setState({fruits:fruit});
}



togglePersonsHandler=()=>{
const doesShow=this.state.showFruits;

this.setState({showFruits:!doesShow});

}

NameChangehandler=(event,id)=>{
  const fruitIndex=this.state.fruits.findIndex(p=>{
  return p.id==id;
  });
const fruit={
  ...this.state.fruits[fruitIndex]
};
//const fruits=Object.assign({},this.state.fruit[fruitIndex]);
fruit.fruits=event.target.value;

const fruits=[...this.state.fruits];
fruits[fruitIndex]=fruit;
this.setState({fruits:fruits});


 this.setState({
fruits:[
{fruit:event.target.value,weight:"12"},
{fruit:event.target.value,weight:"26"},
{fruit:event.target.value,weight:"45"}
]})
}
  render() {
  const style1={
backgroundColor:'green',
font:'inherit',
border:'1px solid blue',
padding:'8px',
color:'white',
cursor:'pointer',
// ':hover':{
// backgroundColor:'lightgreen',
// color:'white'

// }
};
let fruits=null;
if(this.state.showFruits){
  fruits=(
<div>
{this.state.fruits.map((fruit,index)=>{
return <Person click={()=>this.deleteFruitHandler(index)}
name={fruit.fruits} 
weight={fruit.weight}
key={fruit.id}
changed={(event)=>this.NameChangehandler(event,fruit.id)}
/>
})}
 
  {/* <Person 
    fruits={this.state.fruits[1].fruit} 
    weight={this.state.fruits[1].weight}
    click={this.switchNameHandler.bind(this,"Orange")} changed={this.NameChangehandler}>Fruits Tests:{}</Person>
  <input type="text" onChange={this.NameChangehandler}/> 
    <Person 
    fruits={this.state.fruits[2].fruit} 
    weight={this.state.fruits[2].weight} /> */}
  </div>
  );

style1.backgroundColor='red';
// style1[':hover']={
// backgroundColor:'lightred',
// color:'black',
// };


}


// let classes=['red','bold'].join(' ');"red bold"

const classes=[];

if(this.state.fruits.length<=2){
classes.push('red');
}
if(this.state.fruits.length<=1){
classes.push('bold');
}
return (
      // <StyleRoot>
      <div className="App">
        <Header />
        {/* <Person 
        fruits={this.state.fruits[0].fruit} 
        weight={this.state.fruits[0].weight} /> */}
        {/* <button onClick={this.switchNameHandler.bind("Mango")}>Switch Name</button> */}
        <p className={classes.join(' ')}>This is working</p>

        <button style={style1}
        onClick={this.togglePersonsHandler}>Switch Name</button>
        {fruits}


      {/* { this.state.showFruits?
      
      <div>
      <Person 
        fruits={this.state.fruits[1].fruit} 
        weight={this.state.fruits[1].weight}
        click={this.switchNameHandler.bind(this,"Orange")} changed={this.NameChangehandler}>Fruits Tests:{}</Person>
      <input type="text" onChange={this.NameChangehandler}/> 
        <Person 
        fruits={this.state.fruits[2].fruit} 
        weight={this.state.fruits[2].weight} />
      </div>:null
      
      } 
 */}</div>
  // </StyleRoot>
    );
  }
}
// export default Radium(App);

// higher order component
//Radium a component wrapping our component

export default App;








