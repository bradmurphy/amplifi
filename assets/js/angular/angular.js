// ANGULAR SEARCH

var artistArray;
var amplifiApp = angular.module("amplifiApp", []);

amplifiApp.controller("amplifiController", ['$scope', '$rootScope', function($rootScope, $scope) {

	$scope.artistClick = function(artist) {
		$scope.currentArtistName = artist.name;
	};

	$scope.amplifiArtists = [
		{
			name: 'alt-J',
			genre: 'Rock',
			imgUrl: 'assets/img/artists/alt-j.jpg'
		},
		{
			name: 'Bastille',
			genre: 'Rock',
			imgUrl: 'assets/img/artists/bastille.jpg'
		},
		{
			name: 'G-Eazy',
			genre: 'Rap',
			imgUrl: 'assets/img/artists/g-eazy.jpg'
		},
		{
			name: 'Hozier',
			genre: 'Soul',
			imgUrl: 'assets/img/artists/hozier.jpg'
		},
		{
			name: 'Kesha',
			genre: 'Rap',
			imgUrl: 'assets/img/artists/kesha.jpg'
		},
		{
			name: 'Kings of Leon',
			genre: 'Rock',
			imgUrl: 'assets/img/artists/kings-of-leon.jpg'
		},
		{
			name: 'Louis CK',
			genre: 'Comedy',
			imgUrl: 'assets/img/artists/louis-ck.jpg'
		},
		{
			name: 'Skrillex',
			genre: 'Electronic',
			imgUrl: 'assets/img/artists/skrillex.jpg'
		},
		{
			name: 'Sylvan Esso',
			genre: 'Electronic',
			imgUrl: 'assets/img/artists/sylvan-esso.jpg'
		},
		{
			name: 'Waka Flocka',
			genre: 'Rapper',
			imgUrl: 'assets/img/artists/waka-flocka.jpg'
		},
		{
			name: 'Washed Out',
			genre: 'Electronic',
			imgUrl: 'assets/img/artists/washed-out.jpg'
		},
		{
			name: 'Wiz Khalifa',
			genre: 'Rap',
			imgUrl: 'assets/img/artists/wiz-khalifa.jpg'
		},
	];

	artistArray = $scope.amplifiArtists;

}]);


amplifiApp.controller("testController", ['$scope', '$rootScope', function($rootScope, $scope) {



}]);