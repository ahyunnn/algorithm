function solution(letter) {
  var answer = '';
  var morse = { 
  '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
  '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
  '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
  '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
  '-.--':'y','--..':'z'
  }
  var split_letter = letter.split(" ")
  var keys = Object.keys(morse)
  for (let i=0; i<split_letter.length; i++) {
      for (let j=0; j<keys.length; j++) {
          if (split_letter[i] == keys[j])
              answer += morse[split_letter[i]]
      }
  }
  return answer;
}