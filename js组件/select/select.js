(function($){
  // 1. 定义jquery的扩展方法combobox
  $.fn.combobox = function(options,param){
    if(typeof options == 'string'){
      return $.fn.combobox.methods[options](this,param);
    }
    // 2. 将调用时候传过来的参数和default参数合并
    options = $.extend({},$.fn.combobox.defaults,options || {});
    // 3. 添加默认值
    var target = $(this);
    target.attr('valuefield',options.valueField);
    target.attr('textfield',options.textField);
    target.empty();
    var option = $("<option></option>");
    option.attr('value','');
    option.text(options.placeholder);
  }
})(jquery)