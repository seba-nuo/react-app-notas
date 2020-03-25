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
            { /* Agregar una nueva tarea */ }

            {
                /* 
                
                4. Utilizar el método onChange para el input y pasarle 
                el método que le corresponde
                Nota: props.nombreAtributo
                
                5. Utilizar el método onClick para el botón y pasarle 
                el método que le corresponde  
                
                */
            }

            {
                props.addTaskState ? (
                    <Row className="contenedor-agregar-tarea">
                        <Col md={1}>
                            <Button onClick={props.editTaskState}>
                                <FontAwesomeIcon icon={faTimes} />                        
                            </Button>                                                   
                        </Col>
                        <Col md={7}>
                            <Form.Control type="text" onChange={props.newTaskText} />
                        </Col>
                        <Col md={4}>
                            <Button onClick={props.addTask}>
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