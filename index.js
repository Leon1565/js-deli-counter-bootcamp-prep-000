var deliLine = [];

function takeANumber(deliLine, name){
  deliLine.push(name)
  return `Welcome, ${name}. You are number ${deliLine.length}
  in line`;
}

function currentLine(newLine){
  var line = [];
  if(newLine.length === 0){
    return 'The line is currently empty';
  }
  else{
    for(var i = 0; i < newLine.length; i++){
      line += (i + i) + newLine[i];
    }
  }
}

function nowServing(x){
  if(x.length === 0){
    return 'There is no one to serve';
  }
  else{
    var name = x[0];
    x.splice(0, 1);
    return `Currently serving ${name}`;
  }
  
}