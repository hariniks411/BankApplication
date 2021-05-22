import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      items : [],
      isLoaded : false,
    }
  }

  componentDidMount() {
    
    fetch('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  renderTableHeader = () => {
    return Object.keys(this.state.items[0]).map(attr => <th key={attr}>
      {attr.toUpperCase()}
    </th>)
  }

  renderTableRows =() => {
    return this.state.items.map(item => {
      return(
        <tr key={item.id}>
          <td>{item.ifsc}</td>
          <td>{item.bank_id}</td>
          <td>{item.branch}</td>
          <td>{item.address}</td>
          <td>{item.city}</td>
          <td>{item.district}</td>
          <td>{item.state}</td>
          <td>{item.bank_name}</td>
        </tr>
      )
    })
  }

  render(){
    var { isLoaded, items } = this.state;

    if(!isLoaded) {
      return <div>Loading....</div>
    }

    else{
      return (
        <div className = "App">
          <table>
            <thead>
              <tr>
                {this.renderTableHeader()}
              </tr>
            </thead>
            <tbody>
              {this.renderTableRows()}
            </tbody>
          </table>
        </div>
      );
    }
  }
}


export default App;