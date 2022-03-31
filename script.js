
const imgUser=document.querySelector('.user')
const imgBot=document.querySelector('.bot')
const btn1=document.querySelector('.btn1')
const btn2=document.querySelector('.btn2')
const btn3=document.querySelector('.btn3')
const list=document.querySelector('.list')
const win=document.querySelector('.win');
const su=document.querySelector('.scoreuser');
const sb=document.querySelector('.scorebot');
// imgUser.src="scissor.png";

class Game{
    #bot;
    #str={0:'rock',1:'paper',2:'scissor'};
    user;
    count=0;
    #scoreUser=0;
    #scoreBot=0;
    constructor(){
        this._userInput();
        
    }
    _rand(){
        return Math.floor(Math.random()*3)
    };

    _botInput(){
        
        this.#bot=this._rand();
        
         imgBot.src=`${this.#str[this.#bot]}.png`;
        //  console.log(this.#bot);
         
    }
    _userInput(){
        btn1.addEventListener('click',this.callback.bind(this,0))
        btn2.addEventListener('click',this.callback.bind(this,1))
        btn3.addEventListener('click',this.callback.bind(this,2))
     }

    callback(userIn){
        this.user=userIn;
        // console.log('user=',this.user);
        this.count=1;
        this._botInput();
        imgUser.src=`${this.#str[this.user]}.png`;
        document.querySelector('.img').classList.remove('.hidden');
        imgBot.style.opacity='100%';
        this._compare();
        this.displayScore();
 }

 displayScore(){
     su.textContent=`Score(user): ${this.#scoreUser}`;
     sb.textContent=`Score(bot) : ${this.#scoreBot}`;

 }

    _compare(){
        if(this.#bot==this.user)
        {win.textContent="DRAW!! NO WINNER";
            }
        else 
        {
             if(this.#bot==0&&this.user==1)
             {   this.#scoreUser++;
                win.textContent="YOU are WINNER🎊🎊";
             }
        else if(this.#bot==1&&this.user==0)
          { win.textContent="BOT WON 💣";
             this.#scoreBot++;       }
        if(this.#bot==1&&(this.user==2))
         {       this.#scoreUser++;
              win.textContent="YOU are WINNER🎊🎊";
            } 
         else if(this.#bot==2&&this.user==1)
              { win.textContent="BOT WON 💣";
              this.#scoreBot++;}

         if(this.#bot==2&&this.user==0)
         { this.#scoreUser++;
              win.textContent="YOU are WINNER🎊🎊";
          } 
                else if(this.#bot==0&&this.user==2)
               { win.textContent="BOT WON 💣";
               this.#scoreBot++;}
             }

    }
    
}


(()=>
{const game=new Game()})();