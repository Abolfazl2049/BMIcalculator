function myFunction (){
    let W = document.getElementById("weight").value;
    let H = document.getElementById("height").value;
    H = H * H;
    let result = Math.round(W/H *10000);
    let Gender1 = document.querySelector('input[name="myRadios"]:checked').value;
    let age = document.getElementById("age").value;
    if (result <= 10 || result >= 30 || age > 100){
    result = 'get out here fucking clown';
   return document.getElementById("p2").innerHTML= result;
   console.log(age)
}
    if (Gender1 == 1) {
        if (age >= 1 && age <= 3) {
          if(result <= 22 && result >= 17){
          result+= '.' + "<br>" + 'youre babie is fit.';
          return  document.getElementById("p2").innerHTML= result;
          }else if (result <= 16 ){
          return result += "." + '<br>' + 'youre babie is too skinny. try to give him more food.' + '<br>' + 'if u can';
          }else if (result >= 21){
          return result += '.' + '<br>' + 'youre babie is  getting fat.i suggest you to give him less.(food)';
    }
        }else if(age >= 4 && age <= 14){
          if(result <= 21 && result >= 17){
          result+= '.' + "<br>" + 'youve got fit body kid. keep it up by doing daily exercises';
          return  document.getElementById("p2").innerHTML= result;
          }else if (result <= 16 ){
          return result += "." + '<br>' + 'youre  too skinny kiddo. try to eat more food.you are in an important age' + '<br>' + 'if u can';
          }else if (result >= 22){
          return result += '.' + '<br>' + 'youre getting fat.i suggest you to eat less.(food)';
        }}else if(age >= 15 && age <= 30 ){
          if(result <= 23 && result >= 18){
          result += '.' + "<br>" + 'youve got fit body young man. keep it up by doing daily exercises';
          return  document.getElementById("p2").innerHTML= result;
          }else if (result <= 17 ){
          return result += "." + '<br>' + 'youre  too skinny . try to eat more food.you are in an important age' + '<br>' + 'if u can';
          }else if (result >= 24){
          return result += '.' + '<br>' + 'youre getting fat.i suggest you to eat less mister.(food)';
        }}else if(age >= 31 && age <= 50){
          if(result <= 25 && result >= 20){
          result+= '.' + "<br>" + 'youve got fit body man. keep it up by doing daily exercises';
          return  document.getElementById("p2").innerHTML= result;
          }else if (result <= 19 ){
          return result += "." + '<br>' + 'youre  too skinny mister.try to eat more food.' + '<br>' + 'if u can';
          }else if (result >= 26){
          return result += '.' + '<br>' + 'youre getting fat.i suggest you to eat less.(food)';
        }}else if(age >= 51){
          if(result <= 22 && result >= 16){
          result+= '.' + "<br>" + 'youve got fit body old man. keep it up by doing .... i dunno whatever youve been doing all this time';
          return  document.getElementById("p2").innerHTML= result;
          }else if (result <= 15 ){
          return result += "." + '<br>' + 'youre  too skinny old man. try to eat more food.you are in a dangerous age' + '<br>' + 'if u can';
          }else if (result >= 23){
          return result += '.' + '<br>' + 'youre getting fat .i suggest you to eat less.(food)';
        }
    }}else if(Gender1 == 0){
        if (age >= 1 && age <= 3) {
          if(result <= 22 && result >= 17){
          result+= '.' + "<br>" + 'youre babie is fit.';
          return  document.getElementById("p2").innerHTML= result;
          }else if (result <= 16 ){
          return result += "." + '<br>' + 'youre babie is too skinny. try to give him more food.' + '<br>' + 'if u can';
          }else if (result >= 21){
          return result += '.' + '<br>' + 'youre babie is  getting fat.i suggest you to give him less.(food)';
    }
        }else if(age >= 4 && age <= 14){
          if(result <= 21 && result >= 17){
          result+= '.' + "<br>" + 'youve got fit body kid. keep it up by doing daily exercises';
          return  document.getElementById("p2").innerHTML= result;
          }else if (result <= 16 ){
          return result += "." + '<br>' + 'youre  too skinny kiddo. try to eat more food.you are in an important age' + '<br>' + 'if u can';
          }else if (result >= 22){
          return result += '.' + '<br>' + 'youre getting fat.i suggest you to eat less.(food)';
        }}else if(age >= 15 && age <= 30 ){
          if(result <= 23 && result >= 18){
          result += '.' + "<br>" + 'youve got fit body. keep it up by doing daily exercises';
          return  document.getElementById("p2").innerHTML= result;
          }else if (result <= 17 ){
          return result += "." + '<br>' + 'youre  too skinny . try to eat more food.you are in an important age' + '<br>' + 'if u can';
          }else if (result >= 24){
          return result += '.' + '<br>' + 'youre getting fat.i suggest you to eat less mister.(food)';
        }}else if(age >= 31 && age <= 50){
          if(result <= 25 && result >= 20){
          result+= '.' + "<br>" + 'youve got fit body mam. keep it up by doing daily exercises';
          return  document.getElementById("p2").innerHTML= result;
          }else if (result <= 19 ){
          return result += "." + '<br>' + 'youre  too skinny mam.try to eat more food.' + '<br>' + 'if u can';
          }else if (result >= 26){
          return result += '.' + '<br>' + 'youre getting fat.i suggest you to eat less.(food)';
        }}else if(age >= 51){
          if(result <= 22 && result >= 16){
          result+= '.' + "<br>" + 'youve got fit body old woman. keep it up by doing .... i dunno whatever youve been doing all this time';
          return  document.getElementById("p2").innerHTML= result;
          }else if (result <= 15 ){
          return result += "." + '<br>' + 'youre  too skinny granny. try to eat more food.you are in a dangerous age' + '<br>' + 'if u can';
          }else if (result >= 23){
          return result += '.' + '<br>' + 'youre getting fat .i suggest you to eat less.(food)';
        }
    }
}}
