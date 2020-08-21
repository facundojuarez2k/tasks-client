import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { CardDeck, Row, Col, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { FaTh, FaList } from "react-icons/fa";
import TaskCard from '../TaskCard';
import Task from '../Task';
import FilterBar from '../FilterBar';
import './styles.css';
import TasksTable from '../TasksTable';
import { formatTasksData } from '../../helpers';

function Tasks(props) {
    let match = useRouteMatch();
    let content;
    let cachedDisplayStyle = localStorage.getItem("tasksDisplayStyle");

    if(cachedDisplayStyle === null)
        cachedDisplayStyle = "cards";

    const [displayStyle, setDisplayStyle] = useState(cachedDisplayStyle);
    
    const handleDisplayStyleChange = function(val) {
        setDisplayStyle(val);
        localStorage.setItem("tasksDisplayStyle", val);
    }
    
    const fetchedData = [
        { id: 1, title: "Error en el login", status: 0,  priority: 3, author: "Facundo Juarez", dateCreated: "10/05/20", dateUpdated: "19/05/20" },
        { id: 2, title: "Corregir imagen", status: 1,  priority: 0, author: "Juan García", dateCreated: "06/01/19", dateUpdated: "" },
        { id: 3, title: "Agregar funcion 1", status: 2,  priority: 2, author: "Facundo Juarez", dateCreated: "02/11/19", dateUpdated: "15/12/19" },
        { id: 4, title: "Agregar funcion 2", status: 1,  priority: 1, author: "Facundo Juarez", dateCreated: "05/12/18", dateUpdated: "" },
        { id: 5, title: "Agregar funcion", status: 2,  priority: 1, author: "Nombre Apellido", dateCreated: "03/11/18", dateUpdated: "" }
    ];

    let data = formatTasksData(fetchedData);

    switch(displayStyle) {
        case "cards":
            const cards = data.map((item) => <TaskCard key={item.id} data={item} urgent={fetchedData.priority === 3} completed={fetchedData.status === 2} />);
            content =   <CardDeck className="justify-content-center">
                            {cards}
                        </CardDeck>;
            break;
        default:
            content =   <TasksTable data={data} />;
    }

    return (
        <div>
            <Switch>
                <Route path={`${match.path}/:taskId`}>
                    <Task />
                </Route>
                <Route path={match.path}>
                    <Row>
                        <Col sm={12}>
                            <FilterBar />
                            <ToggleButtonGroup className="tasks-displaystyle mt-3 fr" type="radio" name="display-style-options" value={ displayStyle } onChange={ handleDisplayStyleChange }>
                                <ToggleButton variant="light" value="cards"><FaTh/></ToggleButton>
                                <ToggleButton variant="light" value="table"><FaList/></ToggleButton>
                            </ToggleButtonGroup>
                        </Col>
                        <Col sm={12}>
                            { content }
                        </Col>
                    </Row>
                </Route>
            </Switch>
        </div>
    );
}

export default Tasks;