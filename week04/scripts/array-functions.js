let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let namesB = Array.filter(names, (name) => {
    return name.startsWith('B');
});

let namesLength = Array.map(names, (name) => {
    return name.length;
});

let averageLength = Array.reduce(names, (accumulator, currentName) => {
    return accumulator + currentName.length, 0;
}) / names.length;