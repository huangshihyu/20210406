// var a=$('input').val();
function show(){
    var a=$('input').val();
    switch (a) {
        case '1':
          console.log('a=1');
          $('div').html('a=1');
          break;
        case '2':
            console.log('a=2');
            $('div').html('a=2');
            break;
        case '3':
          console.log('a=3');
          $('div').html('a=3');
          break;
        default:
          console.log(`a>3`);
      }
}