(function(){
    "use strict";

    angular.module("jaoMenu").directive("jaoMenu", function(){
        return {
            transclude: true,
            templateUrl: "ext-modules/jaoMenu/jaoMenuTemplate.html",
            controller: "jaoMenuController",
            link: function(scope, el, attr){

            }
        };
    });

})();