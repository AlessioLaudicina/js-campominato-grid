const gridDom = document.getElementById('grid');


const playDom = document.getElementById('play');

playDom.addEventListener('click', function(){
  for (let i = 1; i < 101; i++) {
    const number = i
    console.log(number)

    const currentElement = createSquare(number);
    
    
    
    
      
    
      currentElement.addEventListener('click',
      function () {
      
    
        this.classList.toggle('clicked');
    
      }
      );
    
      gridDom.append (currentElement);
    
    }
    
    
    function createSquare(number){
      const currentElement = document.createElement('div');
      currentElement.classList.add('square');
      currentElement.innerHTML = number;
      


      return currentElement;
    
    }

    
    

})




