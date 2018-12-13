import React, { Component } from 'react';
import Notifications from './Notifications';
import NoteList from '../notes/NoteList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
    render(){
        //console.log(this.props)
        const { notes } = this.props;
        
        return (
            <div className="dashboard container">
                <div className="row">
                    {/* Note List */}
                    <div className="col s12 m6">
                        <NoteList notes={notes}/>
                    </div>
                    {/* Notications */}
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    console.log(state);
    return {
        notes: state.firestore.ordered.Notes
    }
}

export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection: 'Notes' }
    ])
)(Dashboard);