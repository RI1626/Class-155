//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 }    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 0.1) {
          this.data.speedOfRotation += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -0.1) {
          this.data.speedOfRotation -= 0.01;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
  }
});
AFRAME.registerComponent("planemovement",{
  schema:{
    speedofAscent:{type:"number", default:0},
    speedofRotaion:{type:"number", default:0}
},

  init:function(){
  window.addEventListener("keydown",(f)=>{
    this.data.speedofAscent=this.el.getAttribute("position")
    this.data.speedofRotation=this.el.getAttribute("rotation")

    
    if(f.key=="ArrowRight"){
      if(this.data.speedofRotaion.x<=+10){
        this.data.speedofRotaion+=0.5
        this.el.setAttribute("rotation",this.data.speedofRotaion)
      }
    }
    if(f.key=="ArrowLeft"){
      if(this.data.speedofRotation.x>=-10){
          this.data.speedofRotation-=0.5 
          this.el.setAttribute("rotation",this.data.speedofRotation)
      }
    }
    if(f.key=="ArrowUp"){
      if(this.data.speedofAscent.y<=+3){
          this.data.speedofAscent+=0.01 
          this.el.setAttribute("position",this.data.speedofAscent)
      }
    }
    if(f.key=="Arrowdown"){
      if(this.data.speedofAscent.y>=-3){
          this.data.speedofAscent-=0.01 
          this.el.setAttribute("position",this.data.speedofAscent)
      }
    }
    
  })
}
}
)
 




