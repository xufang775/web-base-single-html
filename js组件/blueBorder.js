(function($){
  $.fn.blueBorder = function(){
    this.each(function(){
      $(this).css('border','solid blue 2px')
    })
    return this;
  }
  $.fn.blueText = function(){
    this.each(function(){
      $(this).css('color','blue')
    })
    return this;
  }
  
})(jQuery)