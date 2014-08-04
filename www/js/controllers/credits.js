/* We use RequireJS AMD style modules to get a reference to the app object */
define(['app'], function(app) {
    /* Tell that we're defining a controller with name CreditsCtrl,
     * and with dependencies on $scope, 
     * we specify this as string to not break when minifying
     */
    app.controller('CreditsCtrl', ['$scope',
        /* Implementation. AngularJS does dependency injection 
        * to fill the $scope var
        */
        function CreditsCtrl($scope) {
            /* Data binding to the view */
            $scope.name = 'Me';
        }
    ]);
});
