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
			content: "Realizar la planeación para la clase",
			date: "23 de Marzo 2020",
			disabled: true        
		  },
		  {
			id: 2,
			content: "Lavar mi ropa",
			date: "23 de Marzo 2020",
			disabled: true
		  },
		  {
			id: 3,
			content: "Ordenar mi cuarto",
			date: "23 de Marzo 2020",
			disabled: true
		  },
		  {
			id: 4,
			content: "Pintar mi cuarto",
			date: "23 de Marzo 2020",
			disabled: true
		  }
		],
		addTask: false,
      	newTask: "",
	  }
	  //Ligar los métodos al contexto actual
	  this.editTask = this.editTask.bind(this);
	  this.editText = this.editText.bind(this);
	  this.deleteTask = this.deleteTask.bind(this);
	  this.editTaskState = this.editTaskState.bind(this);
	  this.newTaskText = this.newTaskText.bind(this);
	  this.addTask = this.addTask.bind(this);
	}

	editTaskState(){    
		this.setState(state => ({ addTask: !state.addTask}));
	  }
  
	editTask(id){
	  let taskObj = this.state.tasks.find( task => task.id === id);
	  let taskIndex = this.state.tasks.findIndex( task => task.id === id);
	  taskObj.disabled = !taskObj.disabled;
  
	  let taskArray = this.state.tasks;
	  taskArray[taskIndex] = taskObj;
  
	  this.setState({tasks: taskArray});    
	}
  
	editText(id, event){
	  let taskObj = this.state.tasks.find( task => task.id === id);
	  let taskIndex = this.state.tasks.findIndex( task => task.id === id);
	  taskObj.content = event.target.value;
  
	  let taskArray = this.state.tasks;
	  taskArray[taskIndex] = taskObj;
  
	  this.setState({tasks: taskArray});
	}

 	newTaskText(evento){
		let text = evento.target.value;
		this.setState(state => ({newTask : text}));
	}

 	addTask(){
		let taskContent = this.state.newTask;
		let arregloIndices = this.state.tasks.map( task => task.id);
      	let id = arregloIndices[arregloIndices.length-1] + 1; 
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
		console.table(newTasks);
		console.table(id);
		this.setState(state=>({tasks : newTasks}));
		
	}

	deleteTask(id){
		let newTasks = this.state.tasks.filter(task => task.id !== id);
		this.setState(state =>({tasks: newTasks}));
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
  
