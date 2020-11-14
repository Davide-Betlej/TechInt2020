import React from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'

class Item extends React.Component {
    state = {
      person: {}
    }
  
    constructor(props) {
      super(props)
      this.person = {}
    }
  
    fetchData(id) {
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
          let person = res.data
          this.setState({ person });
          this.person = person;
        })
    }
  
    componentDidMount(prevProps) {
      this.fetchData(this.props.match.params.id);
    }
  
    componentDidUpdate(prevProps) {
      this.fetchData(this.props.match.params.id);
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      return this.state.person.id == this.props.match.params.id;
    }
  
    render() {
      console.log(this.person)
      return (
        <p>{this.person.name}</p>
      )
    }
  }

export default class Items extends React.Component {
  render() {
    const { url } = this.props.match
    return (
      <div>
        <h1>Welcome to Item Page</h1>
        <strong>Select item Id</strong>
        <ul>
          <li>
            <Link to="/items/1">Item 1 </Link>
          </li>
          <li>
            <Link to="/items/2">Item 2 </Link>
          </li>
          <li>
            <Link to="/items/3">Item 3 </Link>
          </li>
          <li>
            <Link to="/items/4">Item 4 </Link>
          </li>
        </ul>
        <Route path="/items/:id" component={Item} />
      </div>
    )
  }
}