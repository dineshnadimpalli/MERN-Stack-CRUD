'use strict'
export function eventsReducers(state=[], action){
    switch(action.type){
        case "GET_EVENTS":
            let events = action.payload.map((record)=>{return Object.assign({},record)});
            return events;
        case "POST_EVENTS":
            events = state.concat(action.payload);
            return events;
            // return {events: [...state.events,...action.payload]}
        case "DELETE_EVENT":
            let id = action.payload;
            console.log('------------------',id);
            events = state.filter((record)=>{
                return ( record._id !== id );
            });
            return events;
        case "UPLOAD_EVENTS":
            id = action.payload._id;
            events = state.map((record)=>{return Object.assign({},record)});
            events = events.map((record) =>{
                if(record._id === id){
                    // record.title = action.payload.title,
                    record.date = action.payload.date,
                    record.description = action.payload.description,
                    record.venue = action.payload.venue,
                    record.time = action.payload.time,
                    record.no_of_people_involved = action.payload.no_of_people_involved;
                }
                return record;
            });
            return events;
        default:
            console.log('Error matching perfect action in eventReducers');
		    break;
	}
	return state;
}