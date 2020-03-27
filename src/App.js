import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarComponent from './components/NavBar/navbar-component';
import { firestore } from './firebase/firebase-config-utils';

import './App.css';
import Home from './views/home/home-view';
import NotFound from './views/404-view/404-view';

class App extends React.Component{
	constructor(props){
	  super(props);
	  this.state = {
		tasks: [],
		addTask: false,
		newTask: "",
		backupTask: [],
	  }
	}

	async componentDidMount(){

		let arrayTasks = [];
		await firestore.collection('tasks').get().then(function(querySnapshot){
			querySnapshot.forEach(doc => {arrayTasks.push(doc.data())})
		})
		this.setState(state => ({tasks: arrayTasks}))
		
		// firestore.collection('tasks').onSnapshot(function(querySnapshot){
		// 	let arrayTasks = [];
		// 	querySnapshot.forEach(doc => {
		// 			arrayTasks.push(doc.data())
		// 		});
		// 		this.setState(state => ({tasks: arrayTasks}));
		// 	})

		// console.log(arrayTasks);
	}
	async componentDidUpdate(){
		let arrayTasks = [];
		await firestore.collection('tasks').get().then(function(querySnapshot){
			querySnapshot.forEach(doc => {arrayTasks.push(doc.data())})
		})
		this.setState(state => ({tasks: arrayTasks}))
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
		let fecha = new Date();
		var options = { day: 'numeric', month: 'long', year: 'numeric'  };
		fecha = new Intl.DateTimeFormat('es-ES', options).format(fecha);
		this.setState({newTask: ""});

		let refID = firestore.collection('tasks').doc();
		refID.set({
			id: refID.id, 
			content: taskContent,
			date: fecha,
			disabled: true,
		}).then(()=> {
			console.log("La tarea se ha guardado")
		}).catch( error => console.log("no se pudo agregar la tarea ", error.message));
	}

	deleteTask = (id) =>{
		let newTasks = this.state.tasks.filter(task => task.id !== id);
		this.setState(state =>({tasks: newTasks}));
		firestore.collection('tasks').doc(id).delete().then( () => {
			console.log("Se ha borrado");
		}).catch(error => console.log("se ha borrado ", error));
	}

	searchTask = (evento) => {
		let taskActual = this.state.tasks;
		let newTasks = this.state.backupTask;
		let filtro = evento.target.value.toLowerCase();
		if(evento.target.value !== ""){
			newTasks = taskActual
						 .filter(task => task.content.toLowerCase().includes(filtro));
			this.setState({backupTask: taskActual});
		}
		this.setState({tasks: newTasks});
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
  
