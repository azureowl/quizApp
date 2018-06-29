const DATAQ = [
    {
        question: 'Honey is made mostly of:',
        correct: 'Sugar and water',
        choices: ['Vitamins and minerals','Sugar and water','Pollen and flower nectar','Proteins and plant milk', 'Grass and branches'],
        feedback: 'Honey is composed of 17% water and 82% mixture of sugars and other carbohydrates; honey is mainly fructose and glucose.',
        userAnswer: ''
    },
    {
        question: 'Natural-made honey is:',
        correct: 'Bee regurgitation',
        choices: ['Bee urine','Bee saliva','Bee sweat','Bee regurgitation', 'Bee carcass'],
        feedback: 'Bees work together as a group with regurgitation and digestion, passing the nectar from one bee to the next, until the product reaches the honeycombs in storage quality.',
        userAnswer: ''
    },
    {
        question: 'Honey has been harvested for how long?',
        correct: 'A really long time; at least 8,000 years',
        choices: ['A couple of decades; it’s a modern discovery','A really long time; at least 8,000 years','Since the 16th century A.D.','In 509 BC, during Roman rule', 'In 10th century Japan'],
        feedback: 'Humans apparently began hunting for honey for at least 8,000 years as evidenced by cave paintings.',
        userAnswer: ''
    },
    {
        question: 'What is another name for a beekeeper?',
        correct: 'Apiarist',
        choices: ['Apiest','Aperist','Apianist','Apiarist', 'Bee Person'],
        feedback: 'While Bee Person could be correct, the actual answer is Apiarist.',
        userAnswer: ''
    },
    {
        question: 'Honey in ancient times had an important role which was:',
        correct: 'All of the above',
        choices: ['Embalming the dead','Treating ailments','Beauty product','Producing mead','All of the above'],
        feedback: 'Honey was more than just food and drink for the ancients; it held both medicinal and religious importance.',
        userAnswer: ''
    },
    {
        question: 'Crystallized honey can be returned to a liquid state by:',
        correct: 'Warming it',
        choices: ['Diluting with water','Adding salt','Warming it','Sitting on it','Shaking hard'],
        feedback: 'Warm the honey until the crystals dissolve in a pot of heated water or gently in the microwave.',
        userAnswer: ''
    },
    {
        question: 'Honeydew honey is:',
        correct: 'The sweet secretions of aphids or other insects',
        choices: ['The juices from honeydew melons','Boiled Mountain Dew','The sweet secretions of aphids or other insects','The nectar from honeydew flowers','The remains of rotting sugar canes'],
        feedback: 'Honeydew is a sweet and sticky liquid excreted by certain insects, usually aphids.',
        userAnswer: ''
    },
    {
        question: 'Honey bees appear to have their center of origin in:',
        correct: 'South and Southeast Asia',
        choices: ['North Africa','West and Central Europe','Agrabah','South and Southeast Asia','Southern Levant'],
        feedback: 'Honey bees appear to have their center of origin in South and Southeast Asia, as all the extant species except Apis mellifera are native to that region.',
        userAnswer: ''
    },
    {
        question: 'Which country produces the most honey?',
        correct: 'China',
        choices: ['China','New Zealand','Turkey','Mexico','United States'],
        feedback: 'In 2016, global production of honey was 1.8 million tonnes, led by China with 27% of the world total.',
        userAnswer: ''
    },
    {
        question: 'Winnie the Pooh’s favorite food is:',
        correct: 'Honey',
        choices: ['Organic, roasted kale','Fried Chicken','Rocky Mountain Oysters','Honey', 'Honey Ham'],
        feedback: 'Honey, honey, honey. <a href="https://www.youtube.com/watch?v=aYqA58N3sEE" target="_blank">https://www.youtube.com/watch?v=aYqA58N3sEE</a>',
        userAnswer: ''
    }
];

const tracker = {
    questionNumber: 1,
    score: 0
};