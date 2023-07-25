import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter-conversion',
  templateUrl: './letter-conversion.component.html',
  styleUrls: ['./letter-conversion.component.css']
})
export class LetterConversionComponent implements OnInit {
  inputText: string = '';
  convertedText: string = '';



  constructor() { }


  letterConversionMap: Record<string, string> = {
    'A': '11', 'B': '23', 'C': '28', 'D': '46', 'E': '77',
    'F': '22', 'G': '24', 'H': '29', 'I': '47', 'J': '88',
    'K': '33', 'L': '25', 'M': '40', 'N': '48', 'O': '99',
    'P': '44', 'Q': '26', 'R': '41', 'S': '80', 'T': '00',
    'U': '55', 'V': '27', 'W': '45', 'X': '49', 'Y': '21',
    'Z': '66', ' ': '!!' , '0': 'AC', '1': 'BC', '2': 'DC',
    '3': 'EC', '4': 'FC', '5': 'GC', '6': 'HC', '7': 'IC',
    '8': 'JC', '9': 'KC', 'a': '1-', 'b': '2-', 'c': '3-', 'd': '4-', 'e': '5-',
    'f': '6-', 'g': '7-', 'h': '8-', 'i': '9-', 'j': '0-',
    'k': '-1', 'l': '-2', 'm': '-3', 'n': '-4', 'o': '-5',
    'p': '-6', 'q': '-7', 'r': '-8', 's': '-9', '-0': '+1',
    'u': '+2', 'v': '+3', 'w': '+4', 'x': '+5', 'y': '+6',
    'z': '+7'
  };
  
  letterConversionReverseMap: Record<string, string> = {
    '11': 'A', '23': 'B', '28': 'C', '46': 'D', '77': 'E',
    '22': 'F', '24': 'G', '29': 'H', '47': 'I', '88': 'J',
    '33': 'K', '25': 'L', '40': 'M', '48': 'N', '99': 'O',
    '44': 'P', '26': 'Q', '41': 'R', '80': 'S', '00': 'T',
    '55': 'U', '27': 'V', '45': 'W', '49': 'X', '21': 'Y',
    '66': 'Z', '!!': ' ' , 'AC': '0', 'BC': '1', 'DC': '2',
    'EC': '3', 'FC': '4', 'GC': '5', 'HC': '6', 'IC': '7',
    'JC': '8', 'KC': '9','1-': 'a', '2-': 'b', '3-': 'c', '4-': 'd', '5-': 'e',
    '6-': 'f', '7-': 'g', '8-': 'h', '9-': 'i', '0-': 'j',
    '-1': 'k', '-2': 'l', '-3': 'm', '-4': 'n', '-5': 'o',
    '-6': 'p', '-7': 'q', '-8': 'r', '-9': 's', '+1': '-0',
    '+2': 'u', '+3': 'v', '+4': 'w', '+5': 'x', '+6': 'y',
    '+7': 'z'
  }


  convertText() {
    this.convertedText = '';

      let result = "";
      for (let i = 0; i <this.inputText.length; i+= 2) {
        result = this.inputText.substr(i, 2);
        const character = result[i];
         const convertedCharacter = this.letterConversionReverseMap[result];
      if (convertedCharacter) {
        this.convertedText += convertedCharacter  ;
      } else {
        this.convertedText += character ;
      }
       
    }

  }

backText= ""
   convertback() {
    this.convertedText = '';
    for (let i = 0; i < this.inputText.length; i++) {
      const character = this.inputText[i];
      const convertedCharacter = this.letterConversionMap[character];
      if (convertedCharacter) {
        this.convertedText += convertedCharacter;
      } else {
        this.convertedText += character;
      }
    }

  }

  
  ngOnInit(): void {
  }

}
