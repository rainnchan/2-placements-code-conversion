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
    '8': 'JC', '9': 'KC', 
  };
  
  letterConversionReverseMap: Record<string, string> = {
    '11': 'A', '23': 'B', '28': 'C', '46': 'D', '77': 'E',
    '22': 'F', '24': 'G', '29': 'H', '47': 'I', '88': 'J',
    '33': 'K', '25': 'L', '40': 'M', '48': 'N', '99': 'O',
    '44': 'P', '26': 'Q', '41': 'R', '80': 'S', '00': 'T',
    '55': 'U', '27': 'V', '45': 'W', '49': 'X', '21': 'Y',
    '66': 'Z', '!!': ' ' , 'AC': '0', 'BC': '1', 'DC': '2',
    'EC': '3', 'FC': '4', 'GC': '5', 'HC': '6', 'IC': '7',
    'JC': '8', 'KC': '9'
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
    this.backText = '';
    let result = "";
    for (let i = 0; i < this.inputText.length; i+= 2) {
      result = this.inputText.substr(i, 2);
      const character = result.substr(i, 2);
       const convertedCharacter = this.letterConversionReverseMap[result];
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
