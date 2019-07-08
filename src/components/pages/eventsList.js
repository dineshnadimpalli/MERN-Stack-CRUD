"use strict"

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents,deleteEvents } from '../../actions/eventActions';
import { Button, Glyphicon } from 'react-bootstrap';
import EventEntry from './eventEntry';
import UpdateEntry from './updateEntry';

class EventsList extends React.Component{
    
    constructor(props){
        super(props);
        const x = this.props.events.filter((record)=>{
            return true;
        });
        this.state = {
            editable : false,
            id : ""
        }
    }
    componentDidMount(){
        //Calling 1st dispatch function
        this.props.getEvents();
    }
    handleDelete(id){
        this.props.deleteEvents(id);
    }
    toggleEditableMode(){
        this.setState(...this.state,{
            editable : false
        })
    }
    updateEntryHandler(event){

    }
    handleEdit(id){
        this.setState(...this.state,{
            editable : true,
            id : id
        })
    }
    view(){
        if (this.state.editable)
            return (<UpdateEntry 
                        //events={this.state.events} 
                        //updateEntryHandler={this.updateEntryHandler.bind(this,event)} 
                        id={this.state.id} 
                        toggleEditableMode={this.toggleEditableMode.bind(this)}
                        events={this.props.events}
                    />);
        else
            return (<EventEntry />);
    }
    // transferingPropsDataToState(){
    //     this.setState(...this.state,{
    //         events: this.props.events
    //     })
    // }
    render(){

        const eventsCopy = this.props.events.map((x)=>{
            return Object.assign({},x);
        })
        const eventsList = eventsCopy.map((eventsArr)=>{
            return(
                
                <tr key={eventsArr._id}>
                    {/* <td>{eventsArr.title}</td> */}
                    <td>{eventsArr.description}</td>
                    <td>{eventsArr.date}</td>
                    <td>{eventsArr.time}</td>
                    <td>{eventsArr.venue}</td>                  
                    <td>{eventsArr.no_of_people_involved}</td>
                    <td>
                        <Button onClick={this.handleEdit.bind(this,eventsArr._id)} type="submit" bsStyle="info" bsSize="xsmall" >
                                Edit
                            </Button>
                    </td>
                    <td>
                        <Button onClick={this.handleDelete.bind(this,eventsArr._id)} type="submit" bsStyle="danger" bsSize="xsmall" >
                            Delete
                        </Button>
                    </td>
                </tr>
            )
        })
        const view = this.view();
        return (
            <div>
                {view}
                <h2 style={{marginTop:'30px',marginBottom:'20px'}}>Event Todos</h2>
                <center >
                
                <table className="table eventsTable">
                    <thead>
                        <tr>
                            <th className="textCenter">TITLE</th>
                            {/* <th className="textCenter">DESCRIPTION</th> */}
                            <th className="textCenter">DATE</th>
                            
                            <th className="textCenter">TIME</th>
                            
                            <th className="textCenter">VENUE</th>
                                                      
                            <th className="textCenter">NO OF PEOPLE INVOLVED</th>
                            <th className="textCenter">EDIT</th>
                            <th className="textCenter">DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                {eventsList}
                    </tbody>
                </table>
                </center>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        events : state.events
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getEvents : getEvents,
        deleteEvents : deleteEvents
        //otherKey : other action function,
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(EventsList);