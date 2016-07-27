(function (){
    "use strict";
    
    angular.module("jaoFramework").directive("jaoFramework", function(){
        return {
            transclude: false,
            scope: {
                title: "@",
                subtitle: "@",
                iconFile: "@"
            },
            controller: "jaoFrameworkController",
            templateUrl: "ext-modules/jaoFramework/jaoFrameworkTemplate.html"    
        };
    });

})();