
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
const reset=document.querySelector('.reset');
const modalcontent=document.querySelector('.modalcontent');
const modal=document.querySelector('.modal');
const modalclose=document.querySelector('.close');
const modalbtn=document.querySelector('.btn-modal');
 const inputmodal=document.querySelector('.input-modal');
let  choice='N';
// imgUser.src="scissor.png";



class Feature{
    #data={
        exp:'',
        first:0,
        operation:'',
        second:0,
        answer:0,
    };
    constructor(){
        this.features();
        // this.getexp();

        // setdata() only without api call
        this.setdata();
    }
    getexp(){
        fetch("https://x-math.herokuapp.com/api/random").then(response=>response.json()).then(data=>this.setdata(data)).catch(err=>console.log(err));

    }
    setdata(data='No Data'){
        // this.#data.exp=data.expression;
        // this.#data.answer=data.answer;
        this.#data.exp="Hi, you need to solve this to access       the content of the Ridonculous version🎃\n        If you solve this you get  a big pie 🍰\n  Expression =             4*arctan(1) ";
        this.#data.answer=3.1415926535;
     }


    version(){
        
        
            if(checkbox.checked)
            { 
                //  this.getexp();
                // alert("Are you sure you want  to continue");
                this.modal();
            
            //    prompt(`Hi,solve this puzzle to access the content \n${this.#data.exp}\nEnter the choice below`,' here')==`${this.#data.answer}`?pass():fail();
             
              
              
            }
            else
            {
                choice='N';
                console.log(choice);
                ver.textContent="Normal Version";
                const game2=new Game();
                console.log('not checked');
                
                
            }
            
        

    }
     pass(){
        choice='A';
        console.log(choice);
        ver.textContent="Ridonculous Version";
        const game2=new Game();

       };
        fail(){
           alert("Sorry the computer thinks you are not Old enough!");
           choice='N';

       };
    modal(){
        
        modal.style.display="block";
       modalcontent.textContent =this.#data.exp;
       
       modalbtn.addEventListener('click',this.check.bind(this,inputmodal,modal));

       modalclose.addEventListener('click',function(e){
           e.preventDefault();
           modal.style.display="none";

       })

      


    }
    check(input='',modal){
        
        modal.style.display="none";

        if(input.value==`${this.#data.answer}`)
          this.pass();
        else 
        this.fail();
    }

    features(){
        reset.addEventListener('click',function(){
             location.reload()
        })

        checkbox.addEventListener('change',this.version.bind(this))


        
    }

    loadGif(search){
        const apikey="E41182PLMN8J";
        const search_term=`${search}`;
        const lmt=4;
        const url="https://g.tenor.com/v1/search?q=" + search_term + "&key=" +
        apikey + "&limit=" + lmt;

        fetch(url).then(res=>res.json()).then(data=>this.displayGif(data)
        ).catch(err=>console.log(err)
        )

    }
    rand(range){
        return Math.floor(Math.random()*range)
    };

    displayGif(gif){
         modal.style.display="block";
        
   console.log(gif.results[0]["media"][0]["nanogif"]["url"]);
   
    //    modalcontent.textContent ="You WIN";
       modalbtn.style.opacity=0;
       inputmodal.style.opacity=0;
       let rand=this.rand(3);
       document.querySelector('.gif').src=`${gif.results[`${rand}`]["media"][0]["nanogif"]["url"]}`;
    //    console.log(gif.results[3].itemurl);
       
    // const gi=document.querySelector('.gif');
    // // console.log(gi);
    // gi.style.width="300px";
    // gi.style.height="300px";
    
     
       
       modalbtn.addEventListener('click',function(){
        
        modal.style.display="none";

          });

       modalclose.addEventListener('click',function(e){
           e.preventDefault();
           modal.style.display="none";

             });
       }
}

class Game{
    #bot;
    #paper="https://i.insider.com/550b24a46da8115622cd5ecd?width=1000&format=jpeg&auto=webp"

    #str1={0:'images/therock11',1:`${this.#paper}`,2:'images/thescissor'};
    #str=choice==='A'?this.#str1:{0:'images/rock',1:'images/paper',2:'images/scissor'};
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
        // btn1.addEventListener('click',this.callback.bind(this,0))
        // btn2.addEventListener('click',this.callback.bind(this,1))
        // btn3.addEventListener('click',this.callback.bind(this,2));
        document.querySelector('#options').addEventListener('click',(e)=>{
            // console.log(+e.target.classList[1].slice(3)-1);
            let btnNum=+e.target.classList[1].slice(3)-1;
            // console.log(this);
            
             this.callback.call(this,btnNum);
           });

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
     su.textContent=`Score(user):    ${this.#scoreUser}`;
     sb.textContent=`Score(bot) :    ${this.#scoreBot}`;

 }
 win_gify(con){
     features.loadGif(con)
 }

    _compare(){
        if(this.#bot==this.user)
        {win.textContent="DRAW!! NO WINNER";
            this.win_gify('silence');}
        else 
        {   if(this.#bot==2&&this.user==0)
            { this.#scoreUser++;
                 win.textContent="YOU are WINNER🎊🎊";
                 this.win_gify('i+win');
             }
             else if(this.#bot==0&&this.user==2)
               { win.textContent="BOT WON 💣";
               this.win_gify('falling+in+dirt');
               this.#scoreBot++;}
             else if(this.user>this.#bot)
            { this.#scoreUser++;
                win.textContent="YOU are WINNER🎊🎊";
                this.win_gify('i+won');
            } 
            else
            { win.textContent="BOT WON 💣";
            this.#scoreBot++;
            this.win_gify('falling');}
              
             }

    }
    
}


(()=>
{const game=new Game();
const features=new Feature()})();
const features=new Feature()