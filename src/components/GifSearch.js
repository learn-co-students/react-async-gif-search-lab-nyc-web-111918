import React from 'react'

export default class GifSearch extends React.Component{

  constructor(props){
    super(props)
    this.state={
      searchInput: null
    }
  }

  handleChange=(e)=>{
    this.setState({
      searchInput: e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    return this.props.handleSubmit(this.state.searchInput)
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" name="search"/>
        <input type="submit" value="Find Gifs"/>
      </form>
    )
  }

}
