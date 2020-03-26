import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import './home-style.css';
import ListItem from '../../components/list-item/list-item-component';

export default function Home(props){
    return(
        <div className="home-page">
            <h2>{props.titulo}</h2>

            {
                props.addTaskState ? (
                    <Row className="contenedor-agregar-tarea">
                        <Col md={1} xs={2}>
                            <Button onClick={props.editTaskState}>
                                <FontAwesomeIcon icon={faTimes} />                        
                            </Button>                                                   
                        </Col>
                        <Col md={9} xs={6}>
                            <Form.Control type="text" value={props.newTask} onChange={props.newTaskText} />
                        </Col>
                        <Col md={1} xs={1}>
                            <Button className="btn-guardar" onClick={props.addTask}>
                                Guardar
                            </Button>
                        </Col>
                    </Row>
                ) : (
                    <Row className="contenedor-agregar-tarea">
                        { /* Botón para agregar una tarea */ }
                        <Col md={6}>
                            <Button onClick={props.editTaskState}>
                                <FontAwesomeIcon icon={faPlus} />                        
                            </Button>
                            <span className="btn-label">Agregar nueva tarea</span>
                        </Col>
                        <Col md={6}>
                            <Form.Control placeholder="buscar" type="text" className="buscar" />
                        </Col>
                    </Row>
                )
            }
            
            {
                props.tareas.map( task => {
                    return(
                        <ListItem 
                            key={task.id}
                            id={task.id}
                            content={task.content}
                            date={task.date}
                            disable={task.disabled}
                            editFn={props.editFn}
                            editTextFn={props.editTextFn}
                            deleteTask={props.deleteTask}
                        />
                    )
                })
            }
        </div>
    )    
}