define(["app","lodash","jquery-ui"],function(a){"use strict";a.registerDirective("todoList",["$timeout","Todo",function(){return{restrict:"E",replace:!0,templateUrl:"build/components/todo/directives/todo-list.tpl.html",scope:{title:"@",icon:"@",state:"@"},controller:["$scope",function(a){a.updateTodoState=a.$parent.updateTodoState,a.toggleCompleted=a.$parent.toggleCompleted,a.deleteTodo=a.$parent.deleteTodo,a.$parent.todos.$promise.then(function(b){a.todos=b}),a.filter={state:a.state}}],link:function(a,b){b.find(".todo").sortable({handle:".handle",connectWith:".todo",receive:function(b,c){var d=c.item.scope().todo,e=c.item.closest("[state]").attr("state");d&&e?a.updateTodoState(d,e):console.log("Wat",d,e),c.sender.sortable("cancel")}}).disableSelection()}}}])});