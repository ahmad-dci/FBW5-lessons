import React from 'react'

class SearchBar extends React.Component{
    state = {keyWord: null}
    //onInputChange:(e){ 
    onInputChange =  (e) => {
        //console.log(e.target.value);
        this.setState({keyWord: e.target.value})
        //console.log(this);

    }
    onFormSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state.keyWord);
        this.props.runSearch(this.state.keyWord)

    }
    
    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>{this.props.text}</label>
                        <input type="text"  onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar