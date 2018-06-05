import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component{
    constructor( props ){
        super( props )

        this.state = {
            term: ''
        }

        this.inputChange = this.inputChange.bind( this )
        this.onFormSubmit = this.onFormSubmit.bind( this )
    }

    inputChange( event ){
        
        this.setState ({
            term : event.target.value
        })
    }

    onFormSubmit( event ){
        event.preventDefault()

        //fetch weather api
        this.props.fetchWeather( this.state.term )
        this.setState({ term: '' })

    }

    render(){
        return (
            <div className="row">
                <form className="col s12" onSubmit={ this.onFormSubmit }>
                    <div className="row">
                        <div className="input-field col s7">
                        <input 
                            id="icon_prefix" 
                            type="text" 
                            className="validate" 
                            value={ this.state.term }
                            onChange={ this.inputChange } 
                            placeholder='Los Angelese'/>
                            
                        </div>
                        <div className="input-field col s3">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Search
                                <i className="material-icons right">search</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps( dispatch ){
    return bindActionCreators({ fetchWeather }, dispatch )
}

export default connect( null, mapDispatchToProps )( SearchBar )
