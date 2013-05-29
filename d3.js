// *****************client side*******************
if (Meteor.isClient) {

    function CanvasMaze(config) {
        this.color = d3.scale.category10(); //return color(i);
        this.brickSize = config.brickSize || 20;
        this.canvas = undefined;
        this.canvasWidth = config.canvasWidth || 600;
        this.canvasHeight = config.canvasHeigth || 600;
    };

    CanvasMaze.prototype = {
        init: function () {
            this.canvas = d3.select("#maze_canvas").append("svg")
                .attr("width", this.canvasWidth)
                .attr("height", this.canvasHeight);
            this.createMaze();
        },
        createMaze: function (argument) {
            var size = this.canvasWidth / 20,
                randomnumber;
            for (var x = 0; x < size; x++) {
                for (var y = 0; y < size; y++) {
                    if(x === 0 || x === (size - 1) || y === 0 || y === (size - 1) ){
                      this.addBrick(x * this.brickSize, y * this.brickSize);
                    }
                    else{
                      randomnumber=Math.floor(Math.random()*2)
                      if(randomnumber){
                        this.addBrick(x * this.brickSize, y * this.brickSize);
                      }
                    }
                    
                }
            }
        },
        addBrick: function (x, y) {
          console.log(arguments);
            this.canvas.append("rect")
                .attr("width", this.brickSize)
                .attr("height", this.brickSize)
                .attr("x", x)
                .attr("y", y)
                .attr("stroke", '#000000')
                .attr('fill', function () {
                        return '#333'; // danger
                });
        }
    };

    Template.canvas.rendered = function () {


        var maze = new CanvasMaze({
                brickSize: 5
            });
        maze.init();
    };
}
// *****************server side*******************
if (Meteor.isServer) {
    Meteor.startup(function () {
            console.log("welcome to codetoys");
        });
}