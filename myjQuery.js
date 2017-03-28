
$ document.getElementById("btnGrapes").addEventListener('click',function(){
         var grapes = document.getElementById("elementsToScroll")
         grapes.style.display = grapes.style.display == '' || grapes.style.display == 'block'?'none':'block';
      })