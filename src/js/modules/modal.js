const modalWindow = ()=>{
 
    const btn = document.querySelector('.rules__btn'),
          closeBtn = document.querySelector('.modal__close'),
          modal = document.querySelector('.modal');

   

    function closeModal(e) {
        if(!e.target.closest('.modal__body')  &&  !e.target.closest('.rules__btn')){
            modal.classList.remove('modal_active');
            document.body.classList.remove('_lock')
        }
        if(e.target.closest('.modal__close')){
            modal.classList.remove('modal_active');
            document.body.classList.remove('_lock')
        }
    }
        



    btn.addEventListener('click',function(e){
        modal.classList.add('modal_active');
        document.body.classList.add('_lock');
    })

    document.addEventListener('click', closeModal);

    closeBtn.addEventListener('click',closeModal);
        
        

}
    


    

export default modalWindow;