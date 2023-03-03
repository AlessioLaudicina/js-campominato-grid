const gridDom = document.getElementById('grid');

let numberBlacklist = [];

const playDom = document.getElementById('play');

playDom.addEventListener('click', function(){
  for (let i = 0; i < 100; i++) {

    const currentElement = createSquare();
    
    
    
      
    
      currentElement.addEventListener('click',
      function () {
      
    
        this.classList.toggle('clicked');
    
      }
      );
    
      gridDom.append (currentElement);
    
    }
    
    
    function createSquare(){
      const currentElement = document.createElement('div');
      currentElement.classList.add('square');
      return currentElement;
    
    }

})




