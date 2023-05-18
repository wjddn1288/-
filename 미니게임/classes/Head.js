class Head extends GameObject{
    constructor(container, x,y,width,height,velX,velY){
        super(container, x,y,width,height,velX,velY);
        
        this.div.style.background="yellow";
        this.div.style.float="left";
        this.div.style.borderRadius="25px";
        this.div.style.zIndex = 2;  
    }    
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;

        if(head.x>=(CELL_SIZE*CELL_COLS) || head.x<0 || (head.y>=(CELL_SIZE*CELL_ROWS) || head.y<0)){ //4방향 다 
            alert("gameover :(  현재 점수는 "+score+"점")
            document.location.reload();
        }

        for(let i = 0;i<failArray.length;i++){  //지나갔던  tail들의 위치를 저장
            if(collisionCheck(this,failArray[i])){
                alert("그거 아닌뎅~\n gameover :(  현재 점수는 "+score+"점");
                document.location.reload();
            }
        }
        if (collisionCheck(this, tail)) {
            failArray.push(tail); // 이전에 있었던 tail 즉 내가 밟고 지나간 좌표값
            createTail();
            score=score+100;
        }
    }
}