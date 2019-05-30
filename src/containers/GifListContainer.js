import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component{

  state={
    gifs:[]
  }

  componentDidMount(){
    fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
    .then(r=>r.json())
    .then(allData=>{
      this.setState({
        gifs: allData.data.slice(0, 3)
      })
    })
  }

  gifsToDisplay=()=>{
    return this.state.gifs.slice(0, 3)
  }

  handleSubmit=(searchInput)=>{
    this.fetchWithSearch(searchInput)
  }

  fetchWithSearch=(searchInput)=>{
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(r=>r.json())
    .then(allData=>{
      this.setState({
        gifs: allData.data.slice(0, 3)
      })
    })
  }

  render(){
    return (
      <div>
      <GifSearch handleSubmit={this.handleSubmit} fetchWithSearch={this.fetchWithSearch}/>
        <GifList
        displayGifs={this.state.gifs}
        />
      </div>
    )
  }


}
