class GameObject{
    constructor(container,x,y,width,height,velX,vleY){
        this.container=container;
        this.div=document.createElement("div");         
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=vleY;
       
        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";

        this.container.appendChild(this.div);
    }

    tick(){
        this.x+=this.velX;
        this.y+=this.velY;
    }
    
    render(){
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
    }
}