// student.controller.js
(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentController', StudentController);

    function StudentController() { 
        var vm = this;

        vm.students = (localStorage.getItem('students') !== null) ? JSON.parse(localStorage.getItem('students')) : [];
        vm.numberText = '';
        vm.nameText = '';
        vm.addressText = '';
        vm.phoneText = '';
        vm.gpaText = '';
        vm.planText = '';
        vm.levelText = '';
        
        // Functions
        vm.addStudent = addStudent;
        vm.clearStudentInput = clearStudentInput;
        vm.getNumOfActiveStudents = getNumOfActiveStudents;
        vm.archiveStudents = archiveStudents;

        function addStudent() {
            vm.students.push( {number:vm.numberText, name:vm.nameText, address:vm.addressText, phone:vm.phoneText, gpa:vm.gpaText, plan:vm.planText, level:vm.levelText, active:true }) ;
            vm.clearStudentInput();
            vm.archiveStudents();
        }

        function clearStudentInput() {
            vm.numberText = '';
            vm.nameText = '';
            vm.addressText = '';
            vm.phoneText = '';
            vm.gpaText = '';
            vm.planText = '';
            vm.levelText = '';
        }

        function getNumOfActiveStudents() {
            var count = 0;

            angular.forEach(vm.students, function(student) {
                count += student.active ? 0 : 1;
            });

            return count;
        }

        function archiveStudents() {
            var oldStudents = vm.students;
            localStorage.setItem('students', JSON.stringify(vm.students));
        }
        
        /*
            todoList.archive = function() {
                var oldTodos = todoList.todos;
            
                todoList.todos = [];
            
                angular.forEach(oldTodos, function(todo) {
                    if (!todo.done) todoList.todos.push(todo);
                });
                
                localStorage.setItem('todos', JSON.stringify(todoList.todos));
            };
            
            todoList.refresh = function(checked) {
                                
                    var tempTodos = JSON.parse(localStorage.getItem('todos'));
    
                    angular.forEach(tempTodos, function(todo) {
    
                        if(angular.equals(checked.todo.text, todo.text)){
                            todo.done = !todo.done; 
                                
                            localStorage.setItem("todos", JSON.stringify(tempTodos));
                        }
                    });
                }     */  
    }
})();