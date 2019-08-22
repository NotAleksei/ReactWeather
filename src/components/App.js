import React from 'react';
import './City';
import './App.css';
import City from './City';


class App extends React.Component{

state = {
width: 280,
visibility: 'visible'
}

render(){
    return(
    <div id='main'>
      <div id = 'mouse' >
      <City id = '498817' width = {this.state.width} visibility = {this.state.visibility}/>
      </div>
      <div id = 'mouse' onMouseOver ={this.hideSpb} onMouseOut={this.showSpb}>
      <City id = '524901'/>
      </div>
      <div id = 'mouse' onMouseOver ={this.hideSpb} onMouseOut={this.showSpb}>
    <City id = '551487'/>
    </div>
    <div id = 'mouse' onMouseOver ={this.hideSpb} onMouseOut={this.showSpb}>
    <City id = '2013348'/>
    </div>
    </div>
  )
};
hideSpb = () => {
this.setState({
  width: 150,
  visibility: 'hidden'
})
};
showSpb = () => {
  this.setState({
    width: 280,
    visibility: 'visible'
  })
};
}


export default App;





