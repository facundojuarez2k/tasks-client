import React from 'react';
import './styles.css';
import { useParams } from "react-router-dom";
import { Breadcrumb, Row, Col, Table, Button, Image} from 'react-bootstrap';

function Task(props) {
    let { taskId } = useParams();
    
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/tasks">Tasks</Breadcrumb.Item>
                <Breadcrumb.Item active>{ taskId }</Breadcrumb.Item>
            </Breadcrumb>

            <Row>
                <Col>
                <h1>Titulo</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={12} lg={8} className="task-content">
                    <h4>Descripción</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis blandit consectetur. Donec suscipit bibendum massa, vel eleifend velit lobortis et. Vestibulum at est id odio aliquet eleifend. Quisque non metus ante. Integer pellentesque ullamcorper dolor, sed pharetra magna cursus ac. Sed aliquet elit ut libero fringilla, sit amet ornare nunc rhoncus. Donec pulvinar sagittis tellus, non pulvinar nunc mollis et. Phasellus id urna ac risus iaculis faucibus. Vestibulum augue orci, sodales ut nunc et, blandit faucibus dolor. Cras luctus erat eu libero varius, vel iaculis nisi fringilla. Quisque ut justo molestie dui aliquet vehicula. Pellentesque vestibulum felis libero, et accumsan ipsum laoreet nec. Phasellus semper eros libero, vel bibendum odio venenatis sed. Curabitur aliquam tortor at odio iaculis congue. Ut sagittis metus vitae augue auctor commodo. Nunc at turpis elit.</p>
                    <p>Nam et enim eu nunc convallis tincidunt. Duis sollicitudin nisl nec dui maximus porta. Proin mattis at ante vitae laoreet. Donec finibus eu magna non egestas. Donec non lorem ligula. Maecenas ut urna quam. Suspendisse sodales enim massa, a venenatis eros sodales at.</p>
                    <p>Pellentesque sed ante tortor. Vestibulum facilisis metus velit, vitae placerat eros commodo in. Pellentesque eget mi malesuada, finibus nulla nec, varius leo. Curabitur eu magna tincidunt, malesuada sem at, sollicitudin odio. Curabitur eleifend sagittis velit, porttitor aliquam elit eleifend nec. Maecenas bibendum in nisl eu auctor. Curabitur a dolor aliquam, pharetra mi vel, tincidunt tortor. Nam fermentum diam lobortis mi imperdiet, maximus aliquam nunc vulputate.</p>
                </Col>
                <Col sm={12} lg={4}>
                    <h4 className="mb-3">Información</h4>
                    <Table bordered striped>
                        <tbody>
                            <tr>
                                <th>Prioridad</th>
                                <td>Urgente</td>
                            </tr>
                            <tr>
                                <th>Creador</th>
                                <td>Facundo Juarez</td>
                            </tr>
                            <tr>
                                <th>Fecha</th>
                                <td>15 Dic. 2019</td>
                            </tr>
                            <tr>
                                <th>Ultima actualización</th>
                                <td>23 Feb. 2020</td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="mb-2">
                        <Button variant="success" size="lg" block>
                            Resuelto
                        </Button>
                        <Button variant="primary" size="lg" block>
                            Editar
                        </Button>
                        <Button variant="danger" size="lg" block>
                            Eliminar
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col>
                    <h4>Imagenes</h4>
                </Col>
            </Row>
            <Row>
                <Col lg={3} md={4} sm={6} className="mb-2">
                    <Button variant="link" className="d-block mb-4 h-100 task-images-button">
                        <Image className="task-images-image" src={ process.env.PUBLIC_URL + "/images/test/img1.png"} thumbnail />
                    </Button>
                </Col>
                <Col lg={3} md={4} sm={6} className="mb-2">
                    <Button variant="link" className="d-block mb-4 h-100 task-images-button">
                        <Image className="task-images-image" src={ process.env.PUBLIC_URL + "/images/test/img2.png"} thumbnail />
                    </Button>
                </Col>
                <Col lg={3} md={4} sm={6} className="mb-2">
                    <Button variant="link" className="d-block mb-4 h-100 task-images-button">
                        <Image className="task-images-image" src={ process.env.PUBLIC_URL + "/images/test/img3.png"} thumbnail />
                    </Button>
                </Col>
                <Col lg={3} md={4} sm={6} className="mb-2">
                    <Button variant="link" className="d-block mb-4 h-100 task-images-button">
                        <Image className="task-images-image" src={ process.env.PUBLIC_URL + "/images/test/img2.png"} thumbnail />
                    </Button>
                </Col>
                <Col lg={3} md={4} sm={6} className="mb-2">
                    <Button variant="link" className="d-block mb-4 h-100 task-images-button">
                        <Image className="task-images-image" src={ process.env.PUBLIC_URL + "/images/test/img1.png"} thumbnail />
                    </Button>
                </Col>
            </Row>
        </div>
    );

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