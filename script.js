
const imgUser=document.querySelector('.user')
const imgBot=document.querySelector('.bot')
const btn1=document.querySelector('.btn1')
const btn2=document.querySelector('.btn2')
const btn3=document.querySelector('.btn3')
const list=document.querySelector('.list')
const win=document.querySelector('.win');
const su=document.querySelector('.scoreuser');
const sb=document.querySelector('.scorebot');
const ver=document.querySelector('.version');
const checkbox=document.querySelector('.sw');
let  choice='N';
// imgUser.src="scissor.png";


checkbox.addEventListener('change',function(){
    if(checkbox.checked)
    {
        alert("Are you sure you want  to continue");
       choice= prompt("Hi,solve this puzzle to access the content\nValue of arcsin(2)\nEnter the choice below\na). 1\nb). 0\nc). Doesn't Exist",'eg. a ')=='c'?choice='A':call();
       function call(){
           alert("sorry  wrong answer");
           choice='N';

       }
        
        console.log(choice);
        ver.textContent="Adult Version";
        const game2=new Game();
        
    // console.log("checked");

    }

    else
    {
        choice='N';
        console.log(choice);
        ver.textContent="Normal Version";
        const game2=new Game();
        console.log('not checked');
        
    }
    
    
    
})
class Game{
    #bot;
    #str1={0:'therock11',1:'thepaper',2:'thescissor'};
    #str=choice==='A'?this.#str1:{0:'rock',1:'paper',2:'scissor'};
    user;
    count=0;
    #scoreUser=0;
    #scoreBot=0;
    constructor(){
        this._userInput();
        console.log(choice);
        
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