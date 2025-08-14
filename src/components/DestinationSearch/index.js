import {Component} from 'react'

import ListItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  emptytext = () => {
    this.setState({searchInput: ''})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const {id, name, imgUrl} = destinationsList

    const searchResult = destinationsList.filter(eachitem =>
      eachitem.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="maincontainer">
        <h1 className="mainhead">Destination Search</h1>
        <div className="container1">
          <input
            type="search"
            value={searchInput}
            placeholder="Search"
            onChange={this.onChangeInput}
          />
          <button onClick={this.emptytext} type="button">
            x
          </button>
          <img
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
          />
        </div>
        <ul>
          {searchResult.map(eachItem => (
            <ListItem eachcard={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
