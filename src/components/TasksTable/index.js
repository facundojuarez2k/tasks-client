import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { markAsSolved } from '../../state/actions/tasksActions';
import { ButtonGroup, Button } from 'react-bootstrap';
import { FaCheck, FaEdit, FaInfoCircle } from "react-icons/fa";
import DataTable from 'react-data-table-component';
import './styles.css';

function TasksTable(props) {

    const handleSolvedButton = (id) => {
        const taskId = parseInt(id);
        props.dispatch(markAsSolved(taskId));
    }

    const handleEditButton = (id) => {
        const taskId = parseInt(id);
        console.log(taskId);
    }

    const columns = [
        {
            name: 'Titulo',
            selector: 'title',
            sortable: true,
        },
        {
            name: 'Estado',
            selector: 'status',
            sortable: true,
        },
        {
            name: 'Prioridad',
            selector: 'priority',
            sortable: true,
        },
        {
            name: 'Autor',
            selector: 'author',
            sortable: true,
        },
        {
            name: 'Creado',
            selector: 'dateCreated',
            sortable: true,
        },
        {
            name: 'Actualizado',
            selector: 'dateUpdated',
            sortable: true,
        },
        {
            name: 'Acciones',
            cell: (row) =>  (<ButtonGroup>
                                <Button className="btn btn-light" onClick={ () => handleSolvedButton(row.id) }><FaCheck/></Button>
                                <Button className="btn btn-light" onClick={ () => handleEditButton(row.id) }><FaEdit/></Button>
                                <Link className="btn btn-light" to={ `/tasks/${row.id}` }><FaInfoCircle/></Link>
                            </ButtonGroup>),
            sortable: false,
            ignoreRowClick: true,
            button: false,
        },
    ];

    return (
        <DataTable
            noHeader 
            className="mt-3"
            keyField="id"
            columns={ columns }
            data={ props.data }>
        </DataTable>
    );
}

export default connect()(TasksTable);