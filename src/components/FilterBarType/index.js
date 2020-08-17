import React, { useState  } from 'react';
import './styles.css';
import { Form, FormCheck, Card, Collapse } from 'react-bootstrap';
import { ChevronDown } from 'react-feather';

function FilterBarType(props) {
    const [open, setOpen] = useState(false);

    return (
        <Card className="filter-card">
            <Card.Header>
                <h6 className="title">{ props.data.title }</h6>
                <ChevronDown onClick={() => setOpen(!open)}
                    aria-controls={ `filter${props.data.title}` }
                    aria-expanded={open}
                    className="collapse-button">
                </ChevronDown>
            </Card.Header>
            <Collapse in={open}>
                <div id={ `filter${props.data.title}` }>
                    <Card.Body className="filter-content" >
                        <Form>
                            {
                                props.data.filters.map( (filter, index) => 
                                    <FormCheck
                                        key={index}
                                        custom
                                        label={filter.name}
                                        type="checkbox"
                                        id={ `filter${props.data.prefix}_${index}` }
                                    />
                                )
                            }
                        </Form>
                    </Card.Body>
                </div>
            </Collapse>
        </Card>
    );
}

export default FilterBarType;