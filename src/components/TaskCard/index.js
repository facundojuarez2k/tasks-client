import React from 'react';
import './styles.css';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"

const priorityMap = ["Baja", "Media", "Alta", "Urgente"];
const contentMaxLength = 200;
const titleMaxLength = 20;

function TaskCard(props) {
    let priority = parseInt(props.priority);
    let dateUpdated = props.dateUpdated;
    let contentShort = props.content;
    let title = props.title;

    if(isNaN(priority) || priority < 0 || priority >= priorityMap.length)
        priority = 0;
    
    if(typeof dateUpdated !== 'undefined')
        dateUpdated = <div>Última actualización: <em>{ props.dateUpdated }</em></div>;
    
    if(typeof contentShort !== 'undefined')
        if(contentShort.length > contentMaxLength-3)
            contentShort = contentShort.slice(0, contentMaxLength-3) + "...";
        else
            contentShort = contentShort.slice(0, contentMaxLength);
    else
        contentShort = "No description";

    if(typeof title !== 'undefined')
        if(title.length > titleMaxLength-3)
        title = title.slice(0, titleMaxLength-3) + "...";
    else
        title = title.slice(0, titleMaxLength);
    else
        title = "No title";

    return (
        <Card border={ priority === 3 ? "danger" : "default" } className="card">
            <Card.Header as="h5">
                <Link className="card-header-link" to={ `/tasks/${props.id}` }>{ props.title }</Link>
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