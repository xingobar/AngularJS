var app = angular.module('TodoList',[]);
    app.controller('TodoCtrl',function($scope){
            $scope.todoList = [{
               todoText : 'todo list',
               done : false 
            }];

            $scope.todoAdd = function(){
                $scope.todoList.push({todoText:$scope.todoInput,
                                      done:false});
                $scope.todoInput = '';
            };

            $scope.remove = function(){
                var oldList = $scope.todoList ;
                $scope.todoList = [];
                angular.forEach(oldList,function(item){
                    if(!item.done){
                        $scope.todoList.push(item);
                    }
                });
            }
        });