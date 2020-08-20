import React, { useState  } from 'react';
import './styles.css';
import {  } from 'react-bootstrap';
import FilterBarType from '../FilterBarType';

const filterStatusConfig = {
    prefix: "Status",
    title: "Estado",
    filters: [
        { name: "Pendiente", status: false },
        { name: "En Resolución", status: false },
        { name: "Resuelto", status: false },
    ]
};

const filterPriorityConfig = {
    prefix: "Priority",
    title: "Prioridad",
    filters: [
        { name: "Baja", status: false },
        { name: "Media", status: false },
        { name: "Alta", status: false },
        { name: "Urgente", status: false },
    ]
};

function FilterBar(props) {
    const [filterStatus, setFilterStatus] = useState(filterStatusConfig);
    const [filterPriority, setFilterPriority] = useState(filterPriorityConfig);

    return (
        <div className="filter-bar-container">
            <FilterBarType data={filterStatus} setData={setFilterStatus} />
            <FilterBarType data={filterPriority} setData={setFilterPriority} />
        </div>
    );
}

export default FilterBar;