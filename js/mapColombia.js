
var app = angular.module('maps',[]);

app.directive('mapColombia', function(){
	return{
		restrict:'E',
		templateUrl:'../directives/map-colombia.html',
		controller: 'mapsCol',
		controllerAs:'view'

	};

});

app.controller('mapsCol', function(){

var TestModule = (function () {
 	
 	var canvas1 = d3.select("#mapo")
		.append("svg")
		.attr("width", 200)
		.attr("height",200)
		.style("background-color", 'blue');
 
	var drawCircle = function(){
		

		var circle = canvas1.append("circle")
							.attr("cx",100)
							.attr("cy",100)
							.attr("r",50)
							.attr("fill","#000");
	};
	var drawRectangle = function(){
		
		var rectangle = canvas1.append("rect")
							.attr("width",100)
							.attr("height",60)
							.attr("fill","red");

	};
	
  return {
 
		d3SVGCircleExample:drawCircle,
		d3SVGRectangleExample:drawRectangle,
  	};
 
})();

	var circulo = TestModule.d3SVGCircleExample();
	var rectangulo = TestModule.d3SVGRectangleExample();

});





