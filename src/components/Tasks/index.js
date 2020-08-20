import React, { useState } from 'react';
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import { CardDeck, Row, Col, ToggleButtonGroup, ToggleButton, Table, Button, ButtonGroup, Form } from 'react-bootstrap';
import { FaTrashAlt, FaCheck, FaEdit, FaInfoCircle, FaTh, FaList } from "react-icons/fa";
import TaskCard from '../TaskCard';
import Task from '../Task';
import FilterBar from '../FilterBar';
import './styles.css';

//DELETE THIS
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a vehicula augue. Sed fringilla posuere eros, a consectetur nisi vulputate quis. Vestibulum ante ipsum primis in faucibus orci luctus etf ultrices posuere cubilia curae; Duis scelerisque diam in tortor maximus, quis laoreet massa laoreet. Nam aliquam luctus congue. Maecenas cursus mi neque, non hendrerit metus suscipit at. Sed vitae magna diam. Cras posuere vel nisl ut auctor.";
const lorem2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a vehicula augue. Sed fringilla posuere eros, a consectetur nisi vulputate quis. Vestibulum ante ipsum primis in faucibus orci luctus";
//

function Tasks(props) {
    let match = useRouteMatch();
    let content;
    let cachedDisplayStyle = localStorage.getItem("tasksDisplayStyle");

    if(cachedDisplayStyle === null)
        cachedDisplayStyle = "cards";

    const [displayStyle, setDisplayStyle] = useState(cachedDisplayStyle);
    
    const handleDisplayStyleButton = function(val) {
        setDisplayStyle(val);
        localStorage.setItem("tasksDisplayStyle", val);
    }
    

    switch(displayStyle) {
        case "cards":
            content =   <CardDeck className="justify-content-center">
                            <TaskCard id="1" key="1" title="Tarjeta 1" status="2" content={lorem} priority="1" author="Facundo Juarez" dateCreated="10/05/20" dateUpdated="19/05/20" />
                            <TaskCard id="2" key="2" title="Tarjeta 3" status="1" content={lorem} priority="1" author="Facundo Juarez" dateCreated="13/07/20" />
                            <TaskCard id="3" key="3" title="Tarjeta 3" status="0" content={lorem2} priority="0" author="Roberto" dateCreated="15/01/19"/>
                            <TaskCard id="4"key="4" title="Tarjeta 4" status="0" priority="3"  author="Raulito" dateCreated="30/01/20"/>
                            <TaskCard id="5" key="5" title="Tarjeta 5" status="2" priority="3" author="Sofía"/>
                        </CardDeck>;
            break;
        default:
            content =   <Table className="mt-3">
                            <thead>
                                <tr className="text-center">
                                    <th>Titulo</th>
                                    <th>Estado</th>
                                    <th>Prioridad</th>
                                    <th>Autor</th>
                                    <th>Creado</th>
                                    <th>Actualizado</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tarjeta 1</td>
                                    <td>Resuelto</td>
                                    <td>Urgente</td>
                                    <td>Facundo</td>
                                    <td>29/12/18</td>
                                    <td>-</td>
                                    <td>
                                    <ButtonGroup>
                                        <Button variant="light"><FaCheck /></Button>
                                        <Button variant="light"><FaEdit /></Button>
                                        <Button variant="light"><FaTrashAlt /></Button>
                                        <Link className="btn btn-light" to={ `/tasks/1` }><FaInfoCircle/></Link>
                                    </ButtonGroup>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tarjeta 2</td>
                                    <td>Pendiente</td>
                                    <td>Normal</td>
                                    <td>Juan</td>
                                    <td>15/09/19</td>
                                    <td>18/01/20</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </Table>;
    }

    return (
        <div>
            <Switch>
                <Route path={`${match.path}/:taskId`}>
                    <Task />
                </Route>
                <Route path={match.path}>
                    <Row className="mt-3">
                        <Col sm={12} lg={{span: 9, offset: 3}} className="d-flex justify-content-end">
                            <Form.Group controlId="formSearch" className="tasks-searchbar">
                                <Form.Control type="text" placeholder="Buscar" />
                                <Form.Text>
                                </Form.Text>
                            </Form.Group>
                            <ToggleButtonGroup className="tasks-displaystyle" type="radio" name="display-style-options" value={displayStyle} onChange={ handleDisplayStyleButton }>
                                <ToggleButton variant="secondary" value="cards"><FaTh/></ToggleButton>
                                <ToggleButton variant="secondary" value="table"><FaList/></ToggleButton>
                            </ToggleButtonGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} lg={3}>
                            <FilterBar />
                        </Col>
                        <Col sm={12} lg={9}>
                            { content }
                        </Col>
                    </Row>
                </Route>
            </Switch>
        </div>
    );
}

export default Tasks;