import React from 'react';
import { Link } from "react-router-dom";
import { ButtonGroup } from 'react-bootstrap';
import { FaCheck, FaEdit, FaInfoCircle } from "react-icons/fa";
import DataTable from 'react-data-table-component';
import './styles.css';

function TasksTable(props) {
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
                                <Link className="btn btn-light" to={ `/tasks/${row.id}` }><FaCheck/></Link>
                                <Link className="btn btn-light" to={ `/tasks/${row.id}` }><FaEdit/></Link>
                                <Link className="btn btn-light" to={ `/tasks/${row.id}` }><FaInfoCircle/></Link>
                            </ButtonGroup>),
            sortable: false,
            ignoreRowClick: true,
            button: false,
        },
    ];

    /*
    <ButtonGroup>
        <Button variant="light"><FaCheck /></Button>
        <Button variant="light"><FaEdit /></Button>
        <Button variant="light"><FaTrashAlt /></Button>
        <Link className="btn btn-light" to={ `/tasks/1` }><FaInfoCircle/></Link>
    </ButtonGroup>
*/
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

export default TasksTable;