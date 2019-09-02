//declaring variables
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
let shuffleQ
let currentQ
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answer-btns')
const nextButton = document.getElementById('next-btn')
var imagesQBank = [
    {name:''}
]

// Start game
startButton.addEventListener('click', gameStart)

// function to prompt next question
function gameNext() {
    displayQuestion(shuffleQ[currentQ])
}

// Continue next question
nextButton.addEventListener('click', () => {
    currentQ++
    continueQuestions()
})
function gameStart() {
    startButton.classList.add('hide')
    shuffleQ = questions.sort(() => Math.random() - .5)
    currentQ = 0
    questionContainerElement.classList.remove('hide')
    gameNext()
 }
// }


function gameQuestion(question) {
    questionElement.innerText = question.question      
}

// function Display questions
function displayQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', gameSelect)
        answerElement.appendChild(button)
    })
}
// selecting your answer
function gameSelect(e) {
    const selectButton = e.target
    const correct = selectButton.dataset.correct
    setStat(document.body, correct)
    Array.from(answerElement.children).forEach(button => {
        setStat(button, button.dataset.correct)
    })
    nextButton.classList.remove('hide')
 }

 //function to check answers
 function setStat(element, correct) {
     clearStat(element)
     if(correct) {
         element.classList.add('correct')
     } else {
         element.classList.add('incorrect')
     }
 }

 //function to continue to next question
 function continueQuestions() {
     resetStat()
     displayQuestion(shuffleQ[currentQ])
 }
 //function to clearstatus
 function clearStat(element) {
     element.classList.remove('correct')
     element.classList.remove('incorrect')
 }

 //funtion to reset answer stat
 function resetStat() {
    nextButton.classList.add('hide')
    while (answerElement.firstChild) {
        answerElement.removeChild
            (answerElement.firstChild)
    }
}

//Question and answer bank
const questions = [
    {question: 'Name this architectural landmark and where is it located?',
        answers: [
            { text: 'Burj Khalifa, Dubai UAE', correct: true },
            { text: 'Great Wall of China, China', correct: false },
            {text: 'Petronas Towers, Malaysia', correct: false},
            {text: 'Christ the Redeemer, Brazil', correct: false}
    ]
    },
    {question: 'Name the furry rodent considered to be a Peruvian delicacy',
        answers: [
            { text: 'Field mouse', correct: false },
            {text: 'Rabbit', correct: false},
            { text: 'Guinea pig', correct: true },
            {text: 'Hamster', correct: false}
        ]
    },
    {
        question: 'What country did famous painter Salvador Dali grow up in?',
        answers: [
            { text: 'Spain', correct: true },
            { text: 'Italy', correct: false },
            { text: 'Mexico', correct: false },
            { text: 'Thailand', correct: false }
        ]
    },
    {
        question: 'Name this famous natural wonder down under',
        answers: [
            { text: 'Niagara Falls', correct: false },
            { text: 'Northern Lights', correct: false },
            { text: 'Grand Canyon', correct: false },
            { text: 'Great Barrier Reef', correct: true },
        ]
    },
    {
        question: 'This cubist artpiece was painted by?',
        answers: [
            { text: 'Pablo Picasso', correct: true },
            { text: 'Salvador Dali', correct: false },
            { text: 'Andy Warhol', correct: false },
            { text: 'Vincent Van Gogh', correct: false },
        ]
    },
    {
        question: 'Name this famous dish and what country it hails from.',
        answers: [
            { text: 'Sushi, Japan', correct: false },
            { text: 'Yakitori, Japan', correct: false },
            { text: 'Pho, Vietnam', correct: false },
            { text: 'Kimbap, Korea', correct: true }
        ]
    },
    {
        question: 'Who wrote, "I love you as certain dark things are to be loved, in secret, between the shadow and the soul."',
        answers: [
            { text: 'Walt Whitman', correct: false },
            { text: 'Maya Angelou', correct: false },
            { text: 'Pablo Neruda', correct: true },
            { text: 'Langston Hughes', correct: false }
        ]
    },
    {
        question: 'What city and country is the Taj Mahal located?"',
        answers: [
            { text: 'Agra, India', correct: true },
            { text: 'Johannesburg, South Africa', correct: false },
            { text: 'Rio de Janeiro, Brazil', correct: false },
            { text: 'Mumbai, India', correct: false }
        ]
    },
    {
        question: 'Who is this famous artist that suffered severe injuries to their pelvic bone and spinal column at the age of 18. What type of accident?',
        answers: [
            { text: 'Diego Rivera, prison struggle', correct: false },
            { text: 'Salvador Dali, riot accident', correct: false },
            { text: 'Frida Kahlo, bus accident', correct: true },
            { text: 'Pablo Picasso, childhood disease', correct: false }
        ]
    },
    {
        question: 'Name the tallest twin towers in the world and in what city?',
        answers: [
            { text: 'Twin Towers, Chicago (USA)', correct: false },
            { text: 'Emirates Towers, Dubai (UAE)', correct: false },
            { text: 'Grand Gateway Shanghai, Shanghai (China)', correct: false },
            { text: 'Petronas Towers, Kuala Lumpur (Malaysia)', correct: true }
        ]
    },
    {
        question: 'What key ingredient differentiates this papaya salad dish as Lao-style vice Thai-style?',
        answers: [
            { text: 'Shrimp', correct: false },
            { text: 'Crab', correct: true },
            { text: 'Oranges', correct: false },
            { text: 'Peanuts', correct: false }
        ]
    },
    {
        question: 'This prehistoric monument in England was popularized by musicians such as the Beatles and Black Sabbath. Name it.',
        answers: [
            { text: 'Great Wall of China', correct: false },
            { text: 'Mount Rushmore', correct: false },
            { text: 'Colosseum', correct: false },
            { text: 'Stonehenge', correct: true }
        ]
    },
    {
        question: 'This monument stretches across mountains for 13,170 miles.',
        answers: [
            { text: 'Long Walls of Athens', correct: false },
            { text: 'Great Wall of China', correct: true },
            { text: 'Wall of Constantinople', correct: false },
            { text: 'The Berlin Wall', correct: false }
        ]
    },
    {
        question: 'A recent top vacation destination due to having the best beaches in the world, what island is this located?',
        answers: [
            { text: 'Jimbaran, Bali', correct: false },
            { text: 'Uppuveli, Sri Lanka', correct: false },
            { text: 'El Nido, Palawan', correct: true },
            { text: 'Venice Beach, Los Angeles', correct: false }
        ]
    },
    {
        question: 'What animal has three eyelids?',
        answers: [
            { text: 'Guinea Pig', correct: false },
            { text: 'Flamingo', correct: false },
            { text: 'Kangaroo', correct: false },
            { text: 'Camel', correct: true }
        ]
    },
    {
        question: 'What famous poet wrote the following: "Yesterday I was clever so I wanted to change the world. Today, I am wise so I am changing myself."?',
        answers: [
            { text: 'Langston Hughes', correct: false },
            { text: 'Rumi', correct: true },
            { text: 'Nikki Giovanni', correct: false },
            { text: 'Pablo Neruda', correct: false }
        ]
    },
    {
        question: 'During WWII, this installation was used to house stolen artworks by the Nazis',
        answers: [
            { text: 'The Louvre', correct: true },
            { text: 'Stonehenge', correct: false },
            { text: 'The Eiffel Tower', correct: false },
            { text: 'St Basils Cathedral', correct: false }
        ]
    },
    {
        question: 'What year was the glass pyramid at the Louvre built?',
        answers: [
            { text: '1977', correct: false },
            { text: '1856', correct: false },
            { text: '2008', correct: false },
            { text: '1989', correct: true }
        ]
    },
    {
        question: 'The origins of this dish reign from countries of the Middle East, but where is chicken tikka masala considered a national dish?',
        answers: [
            { text: 'Chennai (IN)', correct: false },
            { text: 'Bangkok (TH)', correct: false },
            { text: 'Tuscany (IT)', correct: false },
            { text: 'Britain (UK)', correct: true}            
        ]
    },
    {
        question: 'Who said the following: "Writing is like traveling, its wonderful to go somewhere, but you get tired of staying."',
        answers: [
            { text: 'Langston Hughes', correct: true },
            { text: 'Rudy Francisco', correct: false },
            { text: 'Rumi', correct: false },
            { text: 'Nikki Giovanni', correct: false }
        ]
    },
    {
        question: 'Who said this: "If you dont like something, change it. If you cant change it, change your attitude."? ',
        answers: [
            { text: 'Nikki Giovanni', correct: false },
            { text: 'Maya Angelous', correct: true },
            { text: 'Jane Austen', correct: false },
            { text: 'Toni Morrison', correct: false }
        ]
    },
    {
        question: 'Name this famous landmark located in Rio de Janeiro, Brazil.',
        answers: [
            { text: 'Shrine of the Bab', correct: false },
            { text: 'Basilicia of Our Lady Guadalupe', correct: false },
            { text: 'Notre Dame Cathedral', correct: false },
            { text: 'Christ the Reedemer', correct: true }
        ]
    },
    {
        question: 'Where can you find the best chicken sandwiches in the country?',
        answers: [
            { text: 'Popeyes', correct: true },
            { text: 'Chic-fil-A', correct: false },
            { text: 'McDonalds', correct: false },
            { text: 'Waffle House', correct: false }
        ]
    },
    {
        question: '3000 cherry blossom trees were gifted to the U.S. from the mayor of Tokyo in what year? Where can you find them?',
        answers: [
            { text: '1950, National Harbor, DC.', correct: false },
            { text: '1985, Inner Harbor, Baltimore', correct: false },
            { text: '1912. National Mall, DC.', correct: true },
            { text: '2011, Rockefeller Plaza, New York', correct: false }
        ]
    },
    {
        question: 'This flower is native to what country?',
        answers: [
            { text: 'India', correct: false },
            { text: 'Guatemala', correct: false },
            { text: 'Zimbabwe', correct: false },
            { text: 'South Africa', correct: true }
        ]
    },
    {
        question: 'Originally, this cheerful breed of dog was taken along Spanish/Mediterranean trade routes, but gained popularity in the French royal court.',
        answers: [
            { text: 'Bichon Frise', correct: true },
            { text: 'Cavalier King Charles', correct: false },
            { text: 'Shih Tzu', correct: false },
            { text: 'French Bulldog', correct: false }
        ]
    },
    {
        question: 'What college football team did this famous actor play for before reaching fame?',
        answers: [
            { text: 'University of Southern California', correct: false },
            { text: 'Massachusetts Institute of Technology', correct: false },
            { text: 'Ohio State University', correct: false },
            { text: 'University of Miami', correct: true }
        ]
    },
    {
        question: 'Name the highest paid actress of 2019, at $56 million dollars.',
        answers: [
            { text: 'Scarlett Johanssen', correct: true },
            { text: 'Halle Berry', correct: false },
            { text: 'Emma Roberts', correct: false },
            { text: 'Hailee Steinfeld', correct: false }
        ]
    },
    {
        question: 'The Grand Canyon in Arizona is how deep?',
        answers: [
            { text: '11,1111 feet', correct: false },
            { text: '6,093 feet', correct: true },
            { text: '4,867 feet', correct: false },
            { text: '7,021 feet', correct: false }
        ]
    },
    {
        question: 'Fermented shark, smoked puffin, and sheep head jelly are some of this country unusual dishes.',
        answers: [
            { text: 'New Zealand', correct: false },
            { text: 'Morocco', correct: false },
            { text: 'Russia', correct: false },
            { text: 'Iceland', correct: true }
        ]
    }
]