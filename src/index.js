module.exports = function toReadable (number) {
  const numberWord = {
    '0': 'zero',
    '1' : 'one',
    '2' : 'two',
    '3' : 'three',
    '4' : 'four',
    '5' : 'five',
    '6' : 'six',
    '7' : 'seven',
    '8' : 'eight',
    '9' : 'nine',
    '10' : 'ten',
    '11' : 'eleven',
    '12' : 'twelve',
    '13' : 'thirteen',
    '14' : 'fourteen',
    '15' : 'fifteen',
    '16' : 'sixteen',
    '17' : 'seventeen',
    '18' : 'eighteen',
    '19' : 'nineteen',
    '20' : 'twenty',
  }
  const tens = {
    '20' : 'twenty',
    '30' : 'thirty',
    '40' : 'forty',
    '50' : 'fifty',
    '60' : 'sixty',
    '70' : 'seventy',
    '80' : 'eighty',
    '90' : 'ninety',
  }
  const hundreds = {
    '100' : 'one hundred',
    '200' : 'two hundred',
    '300' : 'three hundred',
    '400' : 'four hundred',
    '500' : 'five hundred',
    '600' : 'six hundred',
    '700' : 'seven hundred',
    '800' : 'eight hundred',
    '900' : 'nine hundred',
  }

    if(number <= 20){
      for(key in numberWord){
        if(number.toString() === key){
          return numberWord[key]
        }
      }
    }
    if(number > 20 && number < 100){
      let arr = number.toString().split('')
      arr[0] = arr[0] + '0'
      if(+arr[1] === 0){
        arr.pop()
      }
      for(key in tens){
        if(arr[0] === key){
          arr[0] = tens[key]
        }
      }
      for(key in numberWord){
        if(arr[1] === key){
          arr[1] = numberWord[key]
        }
      }
      return arr.join(' ');
    }
    if(number >= 100 && number < 1000){
      let arr = number.toString().split('')
      arr[0] = arr[0] + '00'
      arr[1] = arr[1] + '0'
      if(+arr[2] === 0){
        arr.pop()
      }
      for(key in hundreds){
        if(arr[0] === key){
          arr[0] = hundreds[key]
        }
      }
      if(+arr[1] === 10 && arr[2] === undefined){
        arr[1] = 'ten'
      }
      if(+arr[1] < 20 ){
        arr[1] = (+arr[1] + +arr[2]).toString()
        arr.pop()
        for(key in numberWord){
          if(arr[1] === key){
            arr[1] = numberWord[key]
          }
        }
      }
      if(+arr[2] === 0){
        arr.pop()
      }
      if(+arr[1] >= 20){
        for(key in tens){
          if(arr[1] === key){
            arr[1] = tens[key]
          }
        }
        for(key in numberWord){
          if(arr[2] === key){
            arr[2] = numberWord[key]
          }
        }
      }
      return arr.join(' ')
    }
}
