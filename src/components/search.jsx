import React from 'react';
import '../assets/styles/components/search.scss';
import {isDBf,getVideos} from '../actions';
import {connect} from 'react-redux';
const search = props => {
    const handleChange = event => {
        const word = event.target.value;
        if(word === '')
        {
          props.isDBf(false)
        }
        if(word.length >= 1)
        {
          props.isDBf(true);
          props.getVideos(word);
        }
      }
    return(
        <section className="section">
                <div className="col s12">
                    <div className="responsi">
                         <div className="input-field">
                         <i className="material-icons prefix">search</i>
                            <input 
                            id='search' 
                            type="text" 
                            onChange= {handleChange}
                            className="validate" 
                            />
                            <label htmlFor="search">Buscar...</label>
                        </div>
                    </div>
                </div>
            </section>
    )
}
const mapDisptachToProps = {
    isDBf,
    getVideos,
}
export default connect(null,mapDisptachToProps)(search);