class BaseClass1{
    constructor(x, y, width, height){

        var options={
           isStatic:true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        this.image = loadImage("sprites");
     
    }}