(this["webpackJsonpreact-app-notas"]=this["webpackJsonpreact-app-notas"]||[]).push([[0],{49:function(e,a,t){e.exports=t(68)},54:function(e,a,t){},61:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(18),c=t.n(s),l=(t(54),t(55),t(35)),o=t(36),i=t(47),d=t(38),m=t(48),u=t(72),k=t(71),E=t(46),f=t(15),T=t(13),b=t(74),h=t(75),p=t(9),v=t(10);t(61);function x(){return r.a.createElement(b.a,{className:"menu-desplegable",expand:"lg"},r.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(h.a,{className:"mr-auto"},r.a.createElement(h.a.Link,{className:"nav-element",as:f.b,to:"/react-app-notas"},r.a.createElement(p.a,{icon:v.d}),"Todas"),r.a.createElement(h.a.Link,{className:"nav-element",as:f.b,to:"/hoy"},r.a.createElement(p.a,{icon:v.b}),"Hoy"),r.a.createElement(h.a.Link,{className:"nav-element",as:f.b,to:"/proxima-semana"},r.a.createElement(p.a,{icon:v.c}),"Pr\xf3xima Semana"),r.a.createElement(h.a.Link,{className:"nav-element",as:f.b,to:"/completadas"},r.a.createElement(p.a,{icon:v.a}),"Completadas"))))}t(65);var g=t(70),w=t(73);t(66),t(67);function N(e){return r.a.createElement(w.a,{className:"form-flexbox"},r.a.createElement(w.a.Group,{controlId:"formBasicCheckbox",className:"checkbox-form"},r.a.createElement(w.a.Check,{type:"checkbox"})),r.a.createElement(w.a.Group,{className:"input-text-form"},r.a.createElement(w.a.Control,{type:"text",onChange:function(a){return e.editTextFn(e.id,a)},value:e.content,disabled:e.disable}),r.a.createElement(w.a.Text,{className:"text-muted"},e.date)),r.a.createElement(w.a.Group,{className:"save-btn-form"},e.disable?r.a.createElement("div",null):r.a.createElement(g.a,{variant:"primary"},"Guardar")),r.a.createElement(w.a.Group,{className:"option-btn-form"},r.a.createElement(g.a,{variant:"warning",onClick:function(){return e.editFn(e.id)}},r.a.createElement(p.a,{icon:v.e}))),r.a.createElement(w.a.Group,{className:"option-btn-form"},r.a.createElement(g.a,{variant:"danger",onClick:function(){return e.deleteTask(e.id)}},r.a.createElement(p.a,{icon:v.h}))))}function S(e){return r.a.createElement("div",{className:"home-page"},r.a.createElement("h2",null,e.titulo),e.addTaskState?r.a.createElement(k.a,{className:"contenedor-agregar-tarea"},r.a.createElement(E.a,{md:1,xs:2},r.a.createElement(g.a,{onClick:e.editTaskState},r.a.createElement(p.a,{icon:v.g}))),r.a.createElement(E.a,{md:9,xs:6},r.a.createElement(w.a.Control,{type:"text",value:e.newTask,onChange:e.newTaskText})),r.a.createElement(E.a,{md:1,xs:1},r.a.createElement(g.a,{className:"btn-guardar",onClick:e.addTask},"Guardar"))):r.a.createElement(k.a,{className:"contenedor-agregar-tarea"},r.a.createElement(E.a,{md:6},r.a.createElement(g.a,{onClick:e.editTaskState},r.a.createElement(p.a,{icon:v.f})),r.a.createElement("span",{className:"btn-label"},"Agregar nueva tarea")),r.a.createElement(E.a,{md:6},r.a.createElement(w.a.Control,{placeholder:"buscar",type:"text",className:"buscar"}))),e.tareas.map((function(a){return r.a.createElement(N,{key:a.id,id:a.id,content:a.content,date:a.date,disable:a.disabled,editFn:e.editFn,editTextFn:e.editTextFn,deleteTask:e.deleteTask})})))}function C(){return r.a.createElement("h1",null,"Error")}var y=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(i.a)(this,Object(d.a)(a).call(this))).editTaskState=function(){e.setState((function(e){return{addTask:!e.addTask}}))},e.editTask=function(a){var t=e.state.tasks.find((function(e){return e.id===a})),n=e.state.tasks.findIndex((function(e){return e.id===a}));t.disabled=!t.disabled;var r=e.state.tasks;r[n]=t,e.setState({tasks:r})},e.editText=function(a,t){var n=e.state.tasks.find((function(e){return e.id===a})),r=e.state.tasks.findIndex((function(e){return e.id===a}));n.content=t.target.value;var s=e.state.tasks;s[r]=n,e.setState({tasks:s})},e.newTaskText=function(a){var t=a.target.value;e.setState((function(e){return{newTask:t}}))},e.addTask=function(){var a=e.state.newTask,t=e.state.tasks.map((function(e){return e.id})),n=0!==t.length?t[t.length-1]+1:1,r=new Date;r=new Intl.DateTimeFormat("es-ES",{day:"numeric",month:"long",year:"numeric"}).format(r);var s=e.state.tasks;s.push({id:n,content:a,date:r,disabled:!0}),e.setState((function(e){return{tasks:s}})),e.setState({newTask:""})},e.deleteTask=function(a){var t=e.state.tasks.filter((function(e){return e.id!==a}));e.setState((function(e){return{tasks:t}}))},e.searchTask=function(a){var t=e.state.backupTask;t=t.filter((function(e){return e.content.includes(a.target.value)})),e.setState((function(e){return{tasks:t}}))},e.state={tasks:[{id:1,content:"Amar a Karla",date:"23 de marzo de 2020",disabled:!0},{id:2,content:"Darle besitos a Karla",date:"26 de marzo de 2020",disabled:!0},{id:3,content:"Cantarle algo bonito a Karla",date:"26 de marzo de 2020",disabled:!0}],addTask:!1,newTask:"",backupTask:[]},e}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(u.a,null,r.a.createElement(k.a,null,r.a.createElement(E.a,{md:3},r.a.createElement(x,null)),r.a.createElement(E.a,{md:9,className:"view-container"},r.a.createElement(T.c,null,r.a.createElement(T.a,{exact:!0,path:"/react-app-notas"},r.a.createElement(S,{titulo:"Todas las tareas",addTaskState:this.state.addTask,editTaskState:this.editTaskState,tareas:this.state.tasks,editFn:this.editTask,editTextFn:this.editText,deleteTask:this.deleteTask,addTask:this.addTask,newTaskText:this.newTaskText,newTask:this.state.newTask,searchTask:this.searchTask})),r.a.createElement(T.a,null,r.a.createElement(C,null)))))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.a62e49e2.chunk.js.map