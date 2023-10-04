const inquirer = require('inquirer');

class Shape {
  constructor() {
    this.color = "black";
  }

  async setColorFromUser() {
    const { selectedColor } = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedColor',
        message: 'Select a color:',
        choices: ['red', 'green', 'blue', 'yellow', 'black'],
      },
    ]);
    this.color = selectedColor;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect width="100" height="100" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="50" cy="50" r="50" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Square, Circle };
