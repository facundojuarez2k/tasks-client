import React from 'react';
import './styles.css';
import Card from 'react-bootstrap/Card';

const priorityMap = ["Baja", "Media", "Alta", "Urgente"];
const contentMaxLength = 200;

function TaskCard(props) {
    let priority = parseInt(props.priority);
    let dateUpdated = props.dateUpdated;
    let contentShort = props.content;

    if(isNaN(priority) || priority < 0 || priority >= priorityMap.length)
        priority = 0;
    
    if(typeof dateUpdated !== 'undefined')
        dateUpdated = <div>Última actualización: <em>{ props.dateUpdated }</em></div>;
    
    if(typeof contentShort !== 'undefined')
        if(contentShort.length > contentMaxLength-3)
            contentShort = contentShort.slice(0,197) + "...";
        else
            contentShort = contentShort.slice(0,200);
    else
        contentShort = "No description";

    return (
            <Card   border={ priority === 3 ? "danger" : "default" } 
                className="card" 
                onClick={ () => console.log("CLICK " + props.id) }>
            
            <Card.Header as="h5">
                { props.title }
            </Card.Header>
            <Card.Header>
                <Card.Subtitle className="mt-1 text-muted">
                    <b>Prioridad: </b> 
                    <span className={ "card-priority-" + priorityMap[priority].toLowerCase() }>
                        { priorityMap[priority] }
                    </span>
                </Card.Subtitle>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    { contentShort }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <div>Creada por <em>{ props.author }</em> el <em>{ props.dateCreated }</em></div>
                {dateUpdated}
            </Card.Footer>

        </Card>
    );
}

export default TaskCard;