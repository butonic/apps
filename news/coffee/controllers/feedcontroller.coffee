angular.module('News').controller 'FeedController', 
['Controller', '$scope', 'FeedModel', (Controller, $scope, FeedModel) ->

    class FeedController extends Controller

        constructor: (@$scope, @feedModel) ->
            @$scope.items = @feedModel.getItems()


    return new FeedController($scope, FeedModel)
]