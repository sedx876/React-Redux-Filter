import React, {Component} from 'react';
import './styles/App.css';
import {connect} from 'react-redux'
import {loadData} from './store'

class App extends Component {

  componentDidMount(){
    //loadData returns an object used by dispatch as the action
    //{count: 20} is our payload
    this.props.dispatch(loadData({count: 20}))
  }

  render() {
    return (
      <div className="App">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="Title">
                Pagination, Filtering and Sorting with React
              </h1>
              <h2 className="subtitle">
                A detailed guide
              </h2>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div>
              <div className="field is-grouped" style={{alignItems: "center"}}>
                <div clasName="control">
                  <div className="select">
                    <select>
                      <option value='' disabled selected>Sort by</option>
                      <option>Price - Lowest to Highest</option>
                      <option>Price - Highest to Lowest</option>
                      <option>Sort - A-Z</option>
                      <option>Sort - Z-A</option>
                    </select>
                  </div>
                </div>
                <div className='control' style={{minWidth: "300px"}}>
                  <input style={{width: '100%'}} placeholder='Filter by' type='text'/>
                </div>
              </div>
            </div>
            <div className='title is-ancestor' style={{flexWrap: 'wrap'}}>
              {this.props.state.products && this.props.state.products.map(product => (
                <div className='tile is-parent is-3'>
                <div className='tile is-child box'>
                <p>
                  <b>Name: </b>
                  {product.name}
                </p>
                <p>
                  <b>Designer: </b>
                  {product.designer}
                </p>
                <p>
                  <b>Type: </b>
                  {product.type}
                </p>
                <p>
                  <b>Price: </b>
                  {product.price}
                </p>
                </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }

}

function mapStateToProps(state){
  return {state}
}

export default connect(mapStateToProps)(App);
