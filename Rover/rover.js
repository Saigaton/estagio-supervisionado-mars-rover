class Rover {
    static array_directions = ['N', 'E', 'S', 'W'];
  
    constructor() {
      this.x = 0;
      this.y = 0;
      this.direction_index = 0;
    }
  
    toString() {
      return `${this.x}.${this.y}:${Rover.array_directions[this.direction_index]}`;
    }
  
    validarComando(command) {
      return /^[MLR]*$/.test(command);
    }
  
    receberComando(command) {
      if (this.validarComando(command)) {
        for (let i = 0; i < command.length; i++) {
          const action = command[i];
  
          if (action === 'M') {
            if (this.direction_index === 0) this.x = (this.x + 1) % 10;
            else if (this.direction_index === 1) this.y = (this.y + 1) % 10;
            else if (this.direction_index === 2) this.x = (this.x - 1 + 10) % 10;
            else if (this.direction_index === 3) this.y = (this.y - 1 + 10) % 10;
          }
  
          if (action === 'L') {
            this.direction_index = (this.direction_index - 1 + 4) % 4;
          }
  
          if (action === 'R') {
            this.direction_index = (this.direction_index + 1) % 4;
          }
        }
      }
  
      return this.toString();
    }
  }
  
  module.exports = Rover;