define([], function(){

  var Song = function(title){
    this.title = title.charAt(0).toUpperCase() + title.slice(1);
  };

  return Song;
});
