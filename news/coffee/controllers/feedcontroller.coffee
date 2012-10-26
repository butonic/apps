angular.module('News').controller 'FeedController', 
['Controller', '$scope', (Controller, $scope) ->

	class FeedController extends Controller

		constructor: (@$scope) ->



	return new FeedController($scope)
]