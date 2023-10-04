const fs = require('fs');
const inquirer = require('inquirer');

class Triangle {
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

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }

  saveAsSvgFile(filename) {
    const svgContent = this.render();
    fs.writeFileSync(filename, svgContent);
    console.log(`Triangle with color ${this.color} saved as ${filename}`);
  }
}

module.exports = Triangle;
