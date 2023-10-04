const { Triangle, Square, Circle } = require('./shapes.js');
const inquirer = require('inquirer');
const fs = require('fs'); 

async function main() {
  const shapes = [];

  for (let i = 0; i < 3; i++) {
    const shapeType = await inquirer.prompt([
      {
        type: 'list',
        name: 'shapeType',
        message: `Select shape ${i + 1}:`,
        choices: ['Triangle', 'Square', 'Circle'],
      },
    ]);

    let shape;

    if (shapeType.shapeType === 'Triangle') {
      shape = new Triangle();
    } else if (shapeType.shapeType === 'Square') {
      shape = new Square();
    } else if (shapeType.shapeType === 'Circle') {
      shape = new Circle();
    }

    await shape.setColorFromUser();
    shapes.push(shape);
  }

  for (let i = 0; i < shapes.length; i++) {
    const filename = `shape_${i + 1}.svg`;
    fs.writeFileSync(filename, shapes[i].render());
    console.log(`${shapes[i].constructor.name} with color ${shapes[i].color} saved as ${filename}`);
  }
}

main();
