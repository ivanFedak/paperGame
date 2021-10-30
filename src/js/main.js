import def from './services/default'
import burger from './modules/burger'
import game from './modules/game'



// import getResource from './services/request'


window.onload = function (){
    def();
    burger();
    game();
}