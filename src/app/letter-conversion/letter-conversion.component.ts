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
    'U': '55', 'V': '27', 'W': '45', 'X': '00', 'Y': '21',
    'Z': '66', ' ': '!!' , '0': 'AC', '1': 'BC', '2': 'DC',
    '3': 'EC', '4': 'FC', '5': 'GC', '6': 'HC', '7': 'IC',
    '8': 'JC', '9': 'KC'
  };


  convertText() {
    this.convertedText = '';
    for (let i = 0; i < this.inputText.length; i++) {
      const character = this.inputText[i].toUpperCase();
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
