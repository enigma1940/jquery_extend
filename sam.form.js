
function checkConf(a, b){
  a.keyup(function(){
    if(a.val().length>7 && a.val()==b.val()){ a.css('background','none'); }
    else{a.css('background','rgba(255, 122, 0, 0.64)'); }
  });
  return (a.val().length>7 && a.val()==b.val());
}
function checkField(a, b){
  a.keyup(function(){
    if(a.val().length>b){
      a.css('background','none');
    }else{a.css('background','rgba(255, 122, 0, 0.64)');}
  });
  return a.val().length>b;
}



class args{
  constructor(color='rgba(255, 122, 0, 0.64)', length=1){
    this.Color=color;
    this.Length = length;
  }
}
/*class argsConf{
  constructor(){}
}*/

$.fn.extend({
  checkInput: function(args){
    var backg = $(this).css('background');
    $(this).keyup(function(){
      if($(this).val().length>args.Length){
        $(this).css('background', backg);
      }else{$(this).css('background', args.Color);}
    });
    return $(this).val().length>args.Length;
  }

  /*checkConfirm: function(argsConf){

  }*/
});
