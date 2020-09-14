import React from 'react'
import {connect} from 'react-redux'


// the component get the data from outside as props  and there is no other way
class SongsList extends React.Component{
    
    render() {
        console.log(this.props);
        return(
            <div className="col-md-6">
                Songs List
            </div>
        )
    }
}

// this function is to cnvert some data from main state to props
// to be passed to a component using connect method
const mapStateToProps = (state) => {
    return({songs: state.songs})
}

export default connect(mapStateToProps)(SongsList) 