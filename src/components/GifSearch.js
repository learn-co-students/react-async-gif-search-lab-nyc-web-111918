import React from 'react'

class GifSearch extends React.Component {
  // state = {
  //   searchTerm: ''
  // }

  // handleChange = (e) => {
  //   this.setState({searchTerm: e.target.value}, () => console.log(this.state.searchTerm))
  // }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.props.handleSubmit(e)}>
          <label>
            Enter a search term:
            <input type="text" value={this.props.searchTerm} onChange={(e) => this.props.handleChange(e)}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }

}

export default GifSearch
