import React, { useState  } from 'react';
import { Navbar, Row, Col, NavDropdown, Nav, Form, FormControl, FormCheck } from 'react-bootstrap';
import './styles.css';
import { priorityOptions, statusOptions } from '../../helpers';

const filters = [
    {
        prefix: "Priority",
        type: "priority",
        title: "Prioridad",
        options: priorityOptions
    },
    {
        prefix: "Status",
        type: "status",
        title: "Estado",
        options: statusOptions
    },
]

const selectedFilters = [
    //{type: "", option: ""}
]

function FilterBar(props) {
    /*const [filterStatus, setFilterStatus] = useState(filterStatusConfig);
    const [filterPriority, setFilterPriority] = useState(filterPriorityConfig);*/

    /* DEBERIA USAR ESTADO DE REACT */
    const handleFilterOptions = function(event) {
        let optionName = event.target.dataset.optionName;
        let filterType = event.target.dataset.filterType;

        let index = selectedFilters.findIndex( (filter) => ((filter.type === filterType) && (filter.option === optionName)) );
        
        if(event.target.checked) {
            if(index < 0) { // Filter checked but is not in array -> add it
                selectedFilters.push({type: filterType, option: optionName});
            }
        } else {
            if(index >= 0) { // Filter unchecked and in array -> remove it
                selectedFilters.splice(index, 1);
            }
        }
    }

    let filterNavItem = filters.map((filter, index) => {
        
        let options = filter.options.map((option) =>
            <FormCheck
                key={option.name}
                custom
                label={option.label}
                type="checkbox"
                className="filter-bar-dropdown-checkbox"
                id={ `filter${filter.prefix}_${option.name}` }
                data-filter-type={ filter.type }
                data-option-name={ option.name }
                onClick={ handleFilterOptions }
            />
        );

        return  <NavDropdown key={index} title={filter.title} className="filter-bar-dropdown">
                    <div className="filter-bar-dropdown-item">
                        {options}
                    </div>
                </NavDropdown>;
    });
    

    return (
        <Row>
            <Col sm={12}>
                <Navbar expand="lg">
                    <Form inline className="filter-bar-search">
                        <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                    </Form>
                    <Navbar.Toggle aria-controls="filterBarNavbar" />
                    <Navbar.Collapse id="filterBarNavbar">
                        <Nav className="mr-auto">
                            {filterNavItem}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
        </Row>
    );
}

export default FilterBar;