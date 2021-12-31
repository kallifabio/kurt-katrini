window.onload = function(){
  setTimeout(function(){
    document.getElementById('loading-area').className = 'fade-out';
  }, 2000)

  setTimeout(function(){
    document.getElementById('loading-area').style.display = 'none';
  }, 2500)
}
