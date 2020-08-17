import React from 'react';
import './styles.css';
import { CardDeck, Row, Col } from 'react-bootstrap';
import TaskCard from '../TaskCard';
import Task from '../Task';
import FilterBar from '../FilterBar';
import { Switch, Route, useRouteMatch } from "react-router-dom";

//DELETE THIS
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a vehicula augue. Sed fringilla posuere eros, a consectetur nisi vulputate quis. Vestibulum ante ipsum primis in faucibus orci luctus etf ultrices posuere cubilia curae; Duis scelerisque diam in tortor maximus, quis laoreet massa laoreet. Nam aliquam luctus congue. Maecenas cursus mi neque, non hendrerit metus suscipit at. Sed vitae magna diam. Cras posuere vel nisl ut auctor.";
const lorem2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a vehicula augue. Sed fringilla posuere eros, a consectetur nisi vulputate quis. Vestibulum ante ipsum primis in faucibus orci luctus";
//

function Tasks(props) {
    let match = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route path={`${match.path}/:taskId`}>
                    <Task />
                </Route>
                <Route path={match.path}>
                    <Row>
                        <Col sm={12} lg={3}>
                            <FilterBar />
                        </Col>
                        <Col sm={12} lg={9}>
                            <CardDeck className="justify-content-center">
                                <TaskCard id="1" key="1" title="Tarjeta 1" status="2" content={lorem} priority="1" author="Facundo Juarez" dateCreated="10/05/20" dateUpdated="19/05/20" />
                                <TaskCard id="2" key="2" title="Tarjeta 3" status="1" content={lorem} priority="1" author="Facundo Juarez" dateCreated="13/07/20" />
                                <TaskCard id="3" key="3" title="Tarjeta 3" status="0" content={lorem2} priority="0" author="Roberto" dateCreated="15/01/19"/>
                                <TaskCard id="4"key="4" title="Tarjeta 4" status="0" priority="3"  author="Raulito" dateCreated="30/01/20"/>
                                <TaskCard id="5" key="5" title="Tarjeta 5" status="2" priority="3" author="Sofía"/>
                            </CardDeck>
                        </Col>
                    </Row>
                </Route>
            </Switch>
        </div>
    );
}

export default Tasks;