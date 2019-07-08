import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';
import { Button, Glyphicon } from 'react-bootstrap';
import { postEvents } from '../../actions/eventActions';

class EventEntry extends React.Component{
    handleSubmit(){
        const x = {
            // title: findDOMNode(this.refs.title).value ,
            date: findDOMNode(this.refs.date).value ,
            time: findDOMNode(this.refs.time).value ,
            venue: findDOMNode(this.refs.venue).value ,
            description: findDOMNode(this.refs.description).value ,
            no_of_people_involved:  findDOMNode(this.refs.no_of_people_involved).value 
        }
        const entryStatus = (
            // x.title !== '' &&
            x.date !== '' &&
            x.time !== '' &&
            x.venue !== '' &&
            x.description !== '' &&
            x.no_of_people_involved !== ''
        )
        if(entryStatus)
            this.props.postEvents([{
                // title:x.title,
                date: x.date,
                time: x.time,
                venue: x.venue,
                description: x.description,
                no_of_people_involved:  x.no_of_people_involved
            }])
        else
            window.alert('All fields are mantatory.');
            // findDOMNode(this.refs.title).value = "";
            findDOMNode(this.refs.date).value = "";
            findDOMNode(this.refs.time).value = "";
            findDOMNode(this.refs.venue).value = "";
            findDOMNode(this.refs.description).value = "";
            findDOMNode(this.refs.no_of_people_involved).value = "";
    }
    render(){
        return (
        <div>
            <center style={{marginTop:'30px'}}>
                <h2 style={{marginBottom:'30px'}}>Add Event</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Event Name :</td>
                        <td><input type='text' ref='description' /></td>
                    </tr>
                    {/* <tr>
                        <td>Description :</td>
                        <td><input type='text' ref='description' /></td>
                    </tr> */}
                    <tr>
                        <td>Date :</td>
                        <td><input type='date' ref='date' /></td>
                    </tr>
                    <tr>
                        <td>Time :</td>
                        <td><input type='time' ref='time' placeholder="hh:mm" /></td>
                    </tr>
                    <tr>
                        <td>Venue :</td>
                        <td><input type='text' ref='venue' /></td>
                    </tr>
                    
                    <tr>
                        <td>Number of people involved :</td>
                        <td><input type='number' min='0' ref='no_of_people_involved' /></td>
                    </tr>
                    <tr>
                        <td colSpan="2" >
                            <center >
                                {/* <button onClick={this.handleSubmit.bind(this)} >Add</button> */}
                                <Button onClick={this.handleSubmit.bind(this)} bsStyle="success" bsSize="large" block>ADD EVENT</Button>
                            </center>
                        </td>
                    </tr>
                </tbody>
            </table>
            </center >
        </div>)
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        postEvents : postEvents
    },dispatch);
}
export default connect(null,mapDispatchToProps)(EventEntry);