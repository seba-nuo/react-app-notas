import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarComponent from './components/NavBar/navbar-component';

import './App.css';
import Home from './views/home/home-view';
import NotFound from './views/404-view/404-view';

class App extends React.Component{
	constructor(){
	  super();
	  this.state = {
		tasks: [
		  {
			id: 1,
			content: "Ordenar mi cuarto",
			date: "23 de marzo de 2020",
			disabled: true
		  }
		],
		addTask: false,
		newTask: "",
		backupTask: [],
	  }
	}

	editTaskState = () =>{    
		this.setState(state => ({ addTask: !state.addTask}));
	  }
  
	editTask = (id) =>{
	  let taskObj = this.state.tasks.find( task => task.id === id);
	  let taskIndex = this.state.tasks.findIndex( task => task.id === id);
	  taskObj.disabled = !taskObj.disabled;
  
	  let taskArray = this.state.tasks;
	  taskArray[taskIndex] = taskObj;
  
	  this.setState({tasks: taskArray});    
	}
  
	editText = (id, event) => {
	  let taskObj = this.state.tasks.find( task => task.id === id);
	  let taskIndex = this.state.tasks.findIndex( task => task.id === id);
	  taskObj.content = event.target.value;
  
	  let taskArray = this.state.tasks;
	  taskArray[taskIndex] = taskObj;
  
	  this.setState({tasks: taskArray});
	}

 	newTaskText = (evento) =>{
		let text = evento.target.value;
		this.setState(state => ({newTask : text}));
	}

 	addTask = () => {
		let taskContent = this.state.newTask;
		let arregloId = this.state.tasks.map( task => task.id);
      	let id = arregloId.length !== 0 ? (arregloId[arregloId.length-1] + 1) : 1; 
		let fecha = new Date();
		var options = { day: 'numeric', month: 'long', year: 'numeric'  };
		fecha = new Intl.DateTimeFormat('es-ES', options).format(fecha);
		let newTasks = this.state.tasks;
		newTasks.push({
			id: id, 
			content: taskContent,
			date: fecha,
			disabled: true,
			})
		this.setState(state=>({tasks : newTasks}));
		this.setState({newTask: ""});
	}

	deleteTask = (id) =>{
		let newTasks = this.state.tasks.filter(task => task.id !== id);
		this.setState(state =>({tasks: newTasks}));
	}

	searchTask = (evento) => {
		let taskArray = this.state.backupTask;
		taskArray = taskArray.filter( task => task.content.includes(evento.target.value));
		this.setState( state => ({tasks: taskArray}));
	}
  
	render(){
	  return(
		<BrowserRouter>
		  <Container>
			<Row>
			  <Col md={3}>
				<NavbarComponent />
			  </Col>
			  <Col md={9} className="view-container">
				<Switch>
				  <Route exact path='/react-app-notas'>            
					<Home 
					  titulo="Todas las tareas"
					  addTaskState={this.state.addTask}
                	  editTaskState={this.editTaskState} 
					  tareas={this.state.tasks}
					  editFn={this.editTask}
					  editTextFn={this.editText}
					  deleteTask={this.deleteTask}
					  addTask={this.addTask}
					  newTaskText={this.newTaskText}
					  newTask={this.state.newTask}
					  searchTask={this.searchTask}
					/>
				  </Route>
				  <Route >
					<NotFound />
				  </Route>
				</Switch>         
			  </Col>
			</Row>
		  </Container>   
		</BrowserRouter>
	  )
	}
  }
  
  export default App;
  
