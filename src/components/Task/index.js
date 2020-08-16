import React from 'react';
import './styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function Task(props) {
    let { taskId } = useParams();
    return <h3>Requested topic ID: {taskId}</h3>;

    /*return (
        <CardDeck className="mt-3">
            <TaskCard id="1" key="1" title="Tarjeta 1" content={lorem} priority="1" author="Facundo Juarez" dateCreated="10/05/20" dateUpdated="19/05/20" />
            <TaskCard id="2" key="2" title="Tarjeta 2" content={lorem2} priority="0" author="Roberto" dateCreated="15/01/19"/>
            <TaskCard id="3"key="3" title="Tarjeta 3" priority="2"  author="Raulito" dateCreated="30/01/20"/>
            <TaskCard id="4" key="4" title="Tarjeta 4" priority="3" author="Sofía"/>
        </CardDeck>
    );*/
}

export default Task;