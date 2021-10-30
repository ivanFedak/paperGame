const game = ()=>{
    let score = 0;
    const mainBlock = document.querySelector('.main'),//Fisrt Sceen
          contentBlock = document.querySelector('.content'),//Second screen
          items = document.querySelectorAll('.main__item'), //Every hand
          picked = document.querySelector('.content__column_you .content__item'),//User (Wrapper for img )
          pcRand = document.querySelector('.content__column_house .content__item'), //Pc 
          resText = document.querySelector('.result-content__title'),//Desicion
          btnRestar = document.querySelector('.result-content__btn'),//Play Again
          ScoreNum = document.querySelector('.header__number');//Desicion

 

    items.forEach(hand=>{
        hand.addEventListener('click',()=>pickUserHand(hand));//Every item 
    })


    const pickUserHand = (hand)=>{
        //hide the current page
        mainBlock.style.display = 'none'
        contentBlock.style.display = 'block'
        //

        console.log(hand.dataset.name)//What we choose

        picked.innerHTML = hand.innerHTML;//add img inside

        pickComputerHand(hand);
    }


    const pickComputerHand = (userHand)=>{

        let hands = [...items];//all hands from main + create new obj
        let rand = hands[Math.floor(Math.random() * 3)]; //random hand 
        
        pcRand.innerHTML = rand.innerHTML//img from radnom hand

        console.log(rand.dataset.name)//what we choose

        result(userHand, rand)
    }
     

    const result = (userHand, pcHand)=>{
        let userValue = userHand.dataset.name,
            pcValue = pcHand.dataset.name;//Value (paper, scissors, rock)


        //paper
        if(userValue == 'paper' && pcValue == 'rock'){
            decision('Ты выиграл!') 
        }
        if(userValue == 'paper' && pcValue == 'scissors'){
            decision('Ты проиграл!')
        }

        //scissors
        if(userValue == 'scissors' && pcValue == 'paper'){
            decision('Ты выиграл!')
        }
        if(userValue == 'scissors' && pcValue == 'rock'){
            decision('Ты проиграл!')
        }
        
        //rock
        if(userValue == 'rock' && pcValue == 'scissors'){
            decision('Ты выиграл!')
        }
        if(userValue == 'rock' && pcValue == 'paper'){
            decision('Ты проиграл!')
        }
        

        //tie
        if(userValue == pcValue){
            decision('Ничья!')
        }

    }


    const decision = (result)=>{
        resText.textContent = result
        
        //Color border
        if(result == 'Ты проиграл!'){
            picked.style.cssText = 'border-color: #E3414F'
            pcRand.style.cssText = 'border-color: #1C9E42'//Green

            pcRand.classList.add('active_item');
            picked.classList.remove('active_item');
        }
        if(result == 'Ты выиграл!'){
            picked.style.cssText = 'border-color: #1C9E42';
            pcRand.style.cssText = 'border-color: #E3414F'; //Red

            picked.classList.add('active_item');
            pcRand.classList.remove('active_item');
            score++;
        }
        if(result == 'Ничья!'){
            picked.style.cssText = 'border-color: orange'
            pcRand.style.cssText = 'border-color: orange'

            picked.classList.add('active_item');
            pcRand.classList.add('active_item');
        }
        ///
        ScoreNum.textContent = score
    }


    const restart = (e)=>{
        mainBlock.style.display = 'block'
        contentBlock.style.display = 'none'
    }

    btnRestar.addEventListener('click',restart)
    

}
export default game;