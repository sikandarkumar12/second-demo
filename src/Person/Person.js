import React from 'react';
import  './person.css';
// import Radium from 'radium';

const person=(props)=>{
//   const style={
//       '@media(min-width:500px)':{
//       width:'450px'
//      }};

return (<div className="Person">
    <p onClick={props.click}>
    The Fruits is {props.fruits} And the weight is {props.weight}</p>
    <p>{props.children}</p>
    {/* <input type="text" onChange={props.changed}/> */}
    </div>
    )}
// export default Radium(person);

export default person;


// style={style}












