import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
  state = {
    gifs: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch("http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
      .then(res => res.json())
      .then(rawGifs => {
        this.setState({gifs: rawGifs.data.slice(0, 3)})
      })
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(rawGifs => {
        this.setState({gifs: rawGifs.data.slice(0, 3)})
      })
  }

  render() {
    return (
      <div>
        <div><GifSearch handleSubmit={this.handleSubmit} searchTerm={this.state.searchTerm} handleChange={this.handleChange}/></div>
        <div><GifList gifs={this.state.gifs}/></div>
      </div>
    )
  }
}
