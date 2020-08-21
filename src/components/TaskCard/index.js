import React from 'react';
import './styles.css';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"

const contentMaxLength = 200;
const titleMaxLength = 20;

function TaskCard(props) {
    let taskId = props.data.id;
    let taskTitle = props.data.title;
    let taskDateUpdated = props.data.dateUpdated;
    let taskDateCreated = props.data.dateCreated;
    let taskContent = props.data.content;
    let taskAuthor = props.data.author;
    let taskStatus = props.data.status;
    let taskPriority = props.data.priority;

    let cardClass = "custom-card";
    let taskDateUpdatedElem = null;

    if(typeof taskDateUpdated !== 'undefined' && taskDateUpdated !== "")
        taskDateUpdatedElem = <div>Última actualización: <em>{ taskDateUpdated }</em></div>;
    
    if(typeof taskContent !== 'undefined')
        if(taskContent.length > contentMaxLength-3)
            taskContent = taskContent.slice(0, contentMaxLength-3) + "...";
        else
            taskContent = taskContent.slice(0, contentMaxLength);
    else
        taskContent = "Sin descripción";

    if(typeof taskTitle !== 'undefined')
        if(taskTitle.length > titleMaxLength-3)
            taskTitle = taskTitle.slice(0, titleMaxLength-3) + "...";
    else
        taskTitle = taskTitle.slice(0, titleMaxLength);
    else
        taskTitle = "Sin título";

    if(props.completed === true)
        cardClass += " border-success";
    else
        if(props.urgent === true)
            cardClass += " border-danger";

    return (
        <Card className={ cardClass }>
            <Card.Header as="h5">
                <Link className="card-header-link" to={ `/tasks/${taskId}` }>{ taskTitle }</Link>
            </Card.Header>
            <Card.Header>
                <Card.Subtitle className="mt-1 text-muted">
                    <b>Estado: </b>
                    <span className={ "card-status-" + taskStatus.toLowerCase() }>
                        { taskStatus }
                    </span>
                    <hr></hr>
                    <b>Prioridad: </b> 
                    <span className={ "card-priority-" + taskPriority.toLowerCase() }>
                        { taskPriority }
                    </span>                    
                </Card.Subtitle>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    { taskContent }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <div>Creada por <em>{ taskAuthor }</em> el <em>{ taskDateCreated }</em></div>
                { taskDateUpdatedElem }
            </Card.Footer>
        </Card>
    );
}

export default TaskCard;