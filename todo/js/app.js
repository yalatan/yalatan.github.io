var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $scope.openaddTodo = false;
    $scope.clickSettings = false;
    $scope.editNote = false;
    if (JSON.parse(localStorage.getItem("listNotes"))) {
        $scope.listNotesToDo = JSON.parse(localStorage.getItem("listNotes"));
    } else {
        $scope.listNotesToDo = [{
                order: {
                    letter: "L",
                    color: "#5584ff"
                },
                text: {
                    head: "Lorem ipsum",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt nam nihil tenetur vitae debitis provident, deleniti numquam repellendus earum ipsum? Impedit deleniti repudiandae nostrum ipsum aperiam molestiae accusamus quidem. "
                },
                priority: "hight",
                sortPriority: 0,
                time: new Date(2018, 1, 5, 18, 30, 0, 0).getDate() + " " + new Date(2018, 1, 5, 18, 30, 0, 0).toLocaleString('en-us', { month: 'short' }) + " " + new Date(2018, 1, 5, 18, 30, 0, 0).getFullYear() + " " + new Date(2018, 1, 5, 18, 30, 0, 0).getHours() + ":" + new Date(2018, 1, 5, 18, 30, 0, 0).getMinutes()

            },
            {
                order: {
                    letter: "L",
                    color: "#5584ff"
                },
                text: {
                    head: "Lorem ipsum",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt nam nihil tenetur vitae debitis provident, deleniti numquam repellendus earum ipsum? Impedit deleniti repudiandae nostrum ipsum aperiam molestiae accusamus quidem. "
                },
                priority: "medium",
                sortPriority: 1,
                time: new Date(2018, 1, 5, 18, 30, 0, 0).getDate() + " " + new Date(2018, 1, 5, 18, 30, 0, 0).toLocaleString('en-us', { month: 'short' }) + " " + new Date(2018, 1, 5, 18, 30, 0, 0).getFullYear() + " " + new Date(2018, 1, 5, 18, 30, 0, 0).getHours() + ":" + new Date(2018, 1, 5, 18, 30, 0, 0).getMinutes()
            }, {
                order: {
                    letter: "L",
                    color: "#5584ff"
                },
                text: {
                    head: "Lorem ipsum",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt nam nihil tenetur vitae debitis provident, deleniti numquam repellendus earum ipsum? Impedit deleniti repudiandae nostrum ipsum aperiam molestiae accusamus quidem. "
                },
                priority: "low",
                sortPriority: 2,
                time: new Date(2018, 1, 5, 18, 30, 0, 0).getDate() + " " + new Date(2018, 1, 5, 18, 30, 0, 0).toLocaleString('en-us', { month: 'short' }) + " " + new Date(2018, 1, 5, 18, 30, 0, 0).getFullYear() + " " + new Date(2018, 1, 5, 18, 30, 0, 0).getHours() + ":" + new Date(2018, 1, 5, 18, 30, 0, 0).getMinutes()

            }, {
                order: {
                    letter: "L",
                    color: "#5584ff"
                },
                text: {
                    head: "Lorem ipsum",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt nam nihil tenetur vitae debitis provident, deleniti numquam repellendus earum ipsum? Impedit deleniti repudiandae nostrum ipsum aperiam molestiae accusamus quidem. "
                },
                priority: "hight",
                sortPriority: 0,
                time: new Date(2018, 1, 5, 18, 30, 0, 0).getDate() + " " + new Date(2018, 1, 5, 18, 30, 0, 0).toLocaleString('en-us', { month: 'short' }) + " " + new Date(2018, 1, 5, 18, 30, 0, 0).getFullYear() + " " + new Date(2018, 1, 5, 18, 30, 0, 0).getHours() + ":" + new Date(2018, 1, 5, 18, 30, 0, 0).getMinutes()

            }
        ];
    }

    if (JSON.parse(localStorage.getItem("listNotesCompleted"))) {
        $scope.listNotesCompleted = JSON.parse(localStorage.getItem("listNotesCompleted"));
    } else {
        $scope.listNotesCompleted = [{
                order: {
                    letter: "L",
                    color: "#5584ff"
                },
                text: {
                    head: "Lorem ipsum",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt nam nihil tenetur vitae debitis provident, deleniti numquam repellendus earum ipsum? Impedit deleniti repudiandae nostrum ipsum aperiam molestiae accusamus quidem. "
                }
            },
            {
                order: {
                    letter: "N",
                    color: "#6ccae8"
                },
                text: {
                    head: "Lorem ipsum",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt nam nihil tenetur vitae debitis provident, deleniti numquam repellendus earum ipsum? Impedit deleniti repudiandae nostrum ipsum aperiam molestiae accusamus quidem. "
                }
            }, {
                order: {
                    letter: "L",
                    color: "#e355ff"
                },
                text: {
                    head: "Lorem ipsum",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt nam nihil tenetur vitae debitis provident, deleniti numquam repellendus earum ipsum? Impedit deleniti repudiandae nostrum ipsum aperiam molestiae accusamus quidem. "
                }
            }
        ];
    };




    function firstLetter(str) { return str.charAt(0); }
    $scope.saveNote = function(radiocheck) {
        let item = {
            "order": {
                letter: firstLetter($scope.title),
                color: "#5584ff"
            },
            text: {
                head: $scope.title || " ",
                content: $scope.content || " "
            },
            priority: radiocheck || " ",
            time: new Date().getDate() + " " + new Date().toLocaleString('en-us', { month: 'short' }) + " " + new Date().getFullYear() + " " + new Date().getHours() + ":" + new Date().getMinutes()

        }
        if (item.priority == "hight") {
            item.sortPriority = 0;
        }
        if (item.priority == "medium") {
            item.sortPriority = 1;
        }
        if (item.priority == "low") {
            item.sortPriority = 2;
        }
        $scope.listNotesToDo.push(item);
        localStorage.setItem("listNotes", JSON.stringify($scope.listNotesToDo));
        $scope.listNotesToDo = JSON.parse(localStorage.getItem("listNotes"));
        $scope.openaddTodo = false;

        /* var storedNames = JSON.parse(localStorage.getItem("listNotes"));*/

    }

    $scope.createNewToDo = function() {
        $scope.openaddTodo = true;
    };
    $scope.close = function() {
        $scope.openaddTodo = false;
    };
    /*   $scope.openSettings = function() {
           $scope.clickSettings = true;
       };*/
    /*edit*/

    $scope.edit = function(index) {
        /* $scope.clickSettings = false;*/
        $scope.editNote = true;
        $scope.choosenNote = [];
        $scope.choosenNote.push($scope.listNotesToDo[index]);
    };
    $scope.saveEditNote = function(radiocheck, ind) {
        $scope.editNote = false;
        $scope.choosenNote[ind].priority = radiocheck || " ";
        if ($scope.choosenNote[ind].priority == "hight") {
            $scope.choosenNote[ind].sortPriority = 0;
        }
        if ($scope.choosenNote[ind].priority == "medium") {
            $scope.choosenNote[ind].sortPriority = 1;
        }
        if ($scope.choosenNote[ind].priority == "low") {
            $scope.choosenNote[ind].sortPriority = 2;
        }
        $scope.choosenNote[ind].time = new Date().getDate() + " " + new Date().toLocaleString('en-us', { month: 'short' }) + " " + new Date().getFullYear() + " " + new Date().getHours() + ":" + new Date().getMinutes();
        $scope.choosenNote[ind].order.letter = firstLetter($scope.choosenNote[ind].text.head);
        localStorage.setItem("listNotes", JSON.stringify($scope.listNotesToDo));
        /*  $scope.listNotesToDo = JSON.parse(localStorage.getItem("listNotes"));*/
    };


    $scope.closeEdit = function() {
        $scope.editNote = false;
    }

    $scope.delete = function(index) {
        $scope.listNotesToDo.splice(index, 1);
        localStorage.setItem("listNotes", JSON.stringify($scope.listNotesToDo));
        /*   $scope.listNotesToDo = JSON.parse(localStorage.getItem("listNotes"));*/
    };
    $scope.complite = function(index) {
        let note = $scope.listNotesToDo.splice(index, 1);
        $scope.listNotesCompleted.push(note[0]);
        localStorage.setItem("listNotes", JSON.stringify($scope.listNotesToDo));
        /* $scope.listNotesToDo = JSON.parse(localStorage.getItem("listNotes"));*/
        localStorage.setItem("listNotesCompleted", JSON.stringify($scope.listNotesCompleted));
        /* $scope.listNotesCompleted = JSON.parse(localStorage.getItem("listNotesCompleted"));*/
    };

    $scope.deletefromConpleted = function(index) {
        $scope.listNotesCompleted.splice(index, 1);
        localStorage.setItem("listNotesCompleted", JSON.stringify($scope.listNotesCompleted));
        /*   $scope.listNotesToDo = JSON.parse(localStorage.getItem("listNotes"));*/
    };



    $scope.propertyName = 'time';
    $scope.reverse = true;
    $scope.sortBy = function(propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;

        $scope.propertyName = propertyName;
    };
    $scope.filterprop = "";
    $scope.setfilter = function() {
        console.log($scope.filterprop)
        if ($scope.filterprop === "") { $scope.filterprop = "hight"; }
        if ($scope.filterprop === "hight") { $scope.filterprop = "medium"; }
        if ($scope.filterprop === "medium") { $scope.filterprop = "low"; }
        if ($scope.filterprop === "low") { $scope.filterprop = "hight"; }

    };

});