import React from 'react';
import {Form, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import './list-item-style.css';

export default function ListItem(props){
    
    let editText = (e) => props.editTextFn(props.id, e);
    return (
        <Form className="form-flexbox">
            { /* Checkbox */ }
            <Form.Group controlId="formBasicCheckbox" className="checkbox-form">
                <Form.Check type="checkbox" />
            </Form.Group>
            { /* Input type text */ }
            <Form.Group className="input-text-form">    
                <Form.Control type="text" onChange={editText} value={props.content} disabled={props.disable} />
                <Form.Text className="text-muted">
                    {props.date}
                </Form.Text>
            </Form.Group>
            { /* Buttons */ }
            <Form.Group className="save-btn-form">
                {
                    props.disable ? <div></div> : <Button variant="primary">Guardar</Button>               
                }
            </Form.Group>
            <Form.Group className="option-btn-form">
                <Button variant="warning" onClick={() => props.editFn(props.id)}>
                    <FontAwesomeIcon icon={faPencilAlt} />
                </Button>
            </Form.Group>
            <Form.Group className="option-btn-form">
                <Button variant="danger" onClick={() => props.deleteTask(props.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </Form.Group>            
        </Form>
    )
}