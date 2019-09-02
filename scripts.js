//declaring variables
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
let shuffleQ
let currentQ
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answer-btns')
const nextButton = document.getElementById('next-btn')
// const answerChoice = document.getElementById('answer-btns')
// var score


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
    // currentQ++
    // continueQuestions()      
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
            console.log('correct')
        } else {
            button.dataset.incorrect = answer.incorrect
            console.log('incorrect')
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
    // getImage()
    })
    if (shuffleQ.length > currentQ + 1) {
        nextButton.classList.remove('hide')
    }   else {
        startButton.innerText="Reset"
        startButton.classList.remove('hide')
    }
    // answerChoice.addEventListener('click', () => {
    //     currentQ++
    //     continueQuestions()
//     })
 }

 //function to check answers
 function setStat(element, correct) {
     clearStat(element)
     if(correct) {
         element.classList.add('correct')
     } else {
         element.classList.add('incorrect')
     }
    //  showImage()
 }
 //function to show image
//  function showImage() {
//      const imageElement = document.getElementById('image').appendChild(image)

//  }

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
     clearStat(document.body)
    nextButton.classList.add('hide')
    while (answerElement.firstChild) {
        answerElement.removeChild
            (answerElement.firstChild)
    }
}

//Question and answer bank
const questions = [
    {
        image: './images/bk.jpg',
        question: 'Name this architectural landmark and where is it located?',
        answers: [
            { text: 'Burj Khalifa, Dubai UAE', correct: true },
            { text: 'Great Wall of China, China', incorrect: false },
            {text: 'Petronas Towers, Malaysia', incorrect: false},
            {text: 'Christ the Redeemer, Brazil', incorrect: false}
    ]
    },
    {
        image: './images/gp.jpg',
        question: 'Name the furry rodent considered to be a Peruvian delicacy',
        answers: [
            { text: 'Field mouse', incorrect: false },
            {text: 'Rabbit', incorrect: false},
            { text: 'Guinea pig', correct: true },
            {text: 'Hamster', incorrect: false}
        ]
    },
    {
        image: './images/dali.jpg',
        question: 'What country did famous painter Salvador Dali grow up in?',
        answers: [
            { text: 'Spain', correct: true },
            { text: 'Italy', incorrect: false },
            { text: 'Mexico', incorrect: false },
            { text: 'Thailand', incorrect: false }
        ]
    },
    {
        image: './images/gbr.jpg',
        question: 'Name this famous natural wonder down under',
        answers: [
            { text: 'Niagara Falls', incorrect: false },
            { text: 'Northern Lights', cinorrect: false },
            { text: 'Grand Canyon', incorrect: false },
            { text: 'Great Barrier Reef', correct: true },
        ]
    },
    {
        image: './images/picassoart.jpg',
        question: 'This cubist artpiece was painted by?',
        answers: [
            { text: 'Pablo Picasso', correct: true },
            { text: 'Salvador Dali', incorrect: false },
            { text: 'Andy Warhol', incorrect: false },
            { text: 'Vincent Van Gogh', incorrect: false },
        ]
    },
    {
        image: './images/poutine.jpg',
        question: 'Name this famous dish and what country it hails from.',
        answers: [
            { text: 'Sushi, Japan', incorrect: false },
            { text: 'Yakitori, Japan', incorrect: false },
            { text: 'Pho, Vietnam', incorrect: false },
            { text: 'Kimbap, Korea', correct: true }
        ]
    },
    {
        image: './images/neruda.jpg',
        question: 'Who wrote, "I love you as certain dark things are to be loved, in secret, between the shadow and the soul."',
        answers: [
            { text: 'Walt Whitman', incorrect: false },
            { text: 'Maya Angelou', incorrect: false },
            { text: 'Pablo Neruda', correct: true },
            { text: 'Langston Hughes', incorrect: false }
        ]
    },
    {
        image: './images/tajmahal.jpg',
        question: 'What city and country is the Taj Mahal located?"',
        answers: [
            { text: 'Agra, India', correct: true },
            { text: 'Johannesburg, South Africa', incorrect: false },
            { text: 'Rio de Janeiro, Brazil', incorrect: false },
            { text: 'Mumbai, India', incorrect: false }
        ]
    },
    {
        image: './images/frida.jpg',
        question: 'Who is this famous artist that suffered severe injuries to their pelvic bone and spinal column at the age of 18. What type of accident?',
        answers: [
            { text: 'Diego Rivera, prison struggle', incorrect: false },
            { text: 'Salvador Dali, riot accident', incorrect: false },
            { text: 'Frida Kahlo, bus accident', correct: true },
            { text: 'Pablo Picasso, childhood disease', incorrect: false }
        ]
    },
    {
        image: './images/pt.jpg',
        question: 'Name the tallest twin towers in the world and in what city?',
        answers: [
            { text: 'Twin Towers, Chicago (USA)', incorrect: false },
            { text: 'Emirates Towers, Dubai (UAE)', incorrect: false },
            { text: 'Grand Gateway Shanghai, Shanghai (China)', incorrect: false },
            { text: 'Petronas Towers, Kuala Lumpur (Malaysia)', correct: true }
        ]
    },
    {
        image: './images/ps.jpg',
        question: 'What key ingredient differentiates this papaya salad dish as Lao-style vice Thai-style?',
        answers: [
            { text: 'Shrimp', incorrect: false },
            { text: 'Crab', correct: true },
            { text: 'Oranges', incorrect: false },
            { text: 'Peanuts', incorrect: false }
        ]
    },
    {
        image: './images/stonehenge.jpg',
        question: 'This prehistoric monument in England was popularized by musicians such as the Beatles and Black Sabbath. Name it.',
        answers: [
            { text: 'Great Wall of China', incorrect: false },
            { text: 'Mount Rushmore', incorrect: false },
            { text: 'Colosseum', incorrect: false },
            { text: 'Stonehenge', correct: true }
        ]
    },
    {
        image: './images/greatwall.jpg',
        question: 'This monument stretches across mountains for 13,170 miles.',
        answers: [
            { text: 'Long Walls of Athens', incorrect: false },
            { text: 'Great Wall of China', correct: true },
            { text: 'Wall of Constantinople', incorrect: false },
            { text: 'The Berlin Wall', incorrect: false }
        ]
    },
    {
        image: './images/palawan.jpg',
        question: 'A recent top vacation destination due to having the best beaches in the world, what island is this located?',
        answers: [
            { text: 'Jimbaran, Bali', incorrect: false },
            { text: 'Uppuveli, Sri Lanka', incorrect: false },
            { text: 'El Nido, Palawan', correct: true },
            { text: 'Venice Beach, Los Angeles', incorrect: false }
        ]
    },
    {
        image: './images/camel.jpg',
        question: 'What animal has three eyelids?',
        answers: [
            { text: 'Guinea Pig', incorrect: false },
            { text: 'Flamingo', incorrect: false },
            { text: 'Kangaroo', incorrect: false },
            { text: 'Camel', correct: true }
        ]
    },
    {
        image: './images/rumi.jpg',
        question: 'What famous poet wrote the following: "Yesterday I was clever so I wanted to change the world. Today, I am wise so I am changing myself."?',
        answers: [
            { text: 'Langston Hughes', incorrect: false },
            { text: 'Rumi', correct: true },
            { text: 'Nikki Giovanni', incorrect: false },
            { text: 'Pablo Neruda', incorrect: false }
        ]
    },
    {
        image: './images/louvre.jpg',
        question: 'During WWII, this installation was used to house stolen artworks by the Nazis',
        answers: [
            { text: 'The Louvre', correct: true },
            { text: 'Stonehenge', incorrect: false },
            { text: 'The Eiffel Tower', incorrect: false },
            { text: 'St Basil\'s Cathedral', incorrect: false }
        ]
    },
    {
        image: './images/louvre.jpg',
        question: 'What year was the glass pyramid at the Louvre built?',
        answers: [
            { text: '1977', incorrect: false },
            { text: '1856', incorrect: false },
            { text: '2008', incorrect: false },
            { text: '1989', correct: true }
        ]
    },
    {
        image: './images/tm.jpg',
        question: 'The origins of this dish reign from countries of the Middle East, but where is chicken tikka masala considered a national dish?',
        answers: [
            { text: 'Chennai (IN)', incorrect: false },
            { text: 'Bangkok (TH)', incorrect: false },
            { text: 'Tuscany (IT)', incorrect: false },
            { text: 'Britain (UK)', correct: true}            
        ]
    },
    {
        image: './images/langston.jpg',
        question: 'Who said the following: "Writing is like traveling, it\'s wonderful to go somewhere, but you get tired of staying."',
        answers: [
            { text: 'Langston Hughes', correct: true },
            { text: 'Rudy Francisco', incorrect: false },
            { text: 'Rumi', incorrect: false },
            { text: 'Nikki Giovanni', incorrect: false }
        ]
    },
    {
        image: './images/angel.jpg',
        question: 'Who said this: "If you don\'t like something, change it. If you can\'t change it, change your attitude."? ',
        answers: [
            { text: 'Nikki Giovanni', incorrect: false },
            { text: 'Maya Angelous', correct: true },
            { text: 'Jane Austen', incorrect: false },
            { text: 'Toni Morrison', incorrect: false }
        ]
    },
    {
        image: '/.images/ctr.jpg',
        question: 'Name this famous landmark located in Rio de Janeiro, Brazil.',
        answers: [
            { text: 'Shrine of the Bab', incorrect: false },
            { text: 'Basilicia of Our Lady Guadalupe', incorrect: false },
            { text: 'Notre Dame Cathedral', incorrect: false },
            { text: 'Christ the Reedemer', correct: true }
        ]
    },
    {
        image: './images/popeyes.jpg',
        question: 'Where can you find the best chicken sandwiches in the country?',
        answers: [
            { text: 'Popeye\'s', correct: true },
            { text: 'Chic-fil-A', incorrect: false },
            { text: 'McDonalds', incorrect: false },
            { text: 'Waffle House', incorrect: false }
        ]
    },
    {
        image: './images/blossom.jpg',
        question: '3000 cherry blossom trees were gifted to the U.S. from the mayor of Tokyo in what year? Where can you find them?',
        answers: [
            { text: '1950, National Harbor, DC.', incorrect: false },
            { text: '1985, Inner Harbor, Baltimore', incorrect: false },
            { text: '1912. National Mall, DC.', correct: true },
            { text: '2011, Rockefeller Plaza, New York', incorrect: false }
        ]
    },
    {
        image: './images/bird-of-p.jpg',
        question: 'This flower is native to what country?',
        answers: [
            { text: 'India', incorrect: false },
            { text: 'Guatemala', incorrect: false },
            { text: 'Zimbabwe', incorrect: false },
            { text: 'South Africa', correct: true }
        ]
    },
    {
        image: './images/bf.jpg',
        question: 'Originally, this cheerful breed of dog was taken along Spanish/Mediterranean trade routes, but gained popularity in the French royal court.',
        answers: [
            { text: 'Bichon Frise', correct: true },
            { text: 'Cavalier King Charles', incorrect: false },
            { text: 'Shih Tzu', incorrect: false },
            { text: 'French Bulldog', incorrect: false }
        ]
    },
    {
        image: './images/rock.jpg',
        question: 'What college football team did this famous actor play for before reaching fame?',
        answers: [
            { text: 'University of Southern California', incorrect: false },
            { text: 'Massachusetts Institute of Technology', incorrect: false },
            { text: 'Ohio State University', incorrect: false },
            { text: 'University of Miami', correct: true }
        ]
    },
    {
        image: './images/scarlett.jpg',
        question: 'Name the highest paid actress of 2019, at $56 million dollars.',
        answers: [
            { text: 'Scarlett Johanssen', correct: true },
            { text: 'Halle Berry', incorrect: false },
            { text: 'Emma Roberts', incorrect: false },
            { text: 'Hailee Steinfeld', incorrect: false }
        ]
    },
    {
        image: './images/gc.jpg',
        question: 'The Grand Canyon in Arizona is how deep?',
        answers: [
            { text: '11,1111 feet', incorrect: false },
            { text: '6,093 feet', correct: true },
            { text: '4,867 feet', incorrect: false },
            { text: '7,021 feet', incorrect: false }
        ]
    },
    {
        image: './images/puffin.jpg',
        question: 'Fermented shark, smoked puffin, and sheep head jelly are some of this country unusual dishes.',
        answers: [
            { text: 'New Zealand', incorrect: false },
            { text: 'Morocco', incorrect: false },
            { text: 'Russia', incorrect: false },
            { text: 'Iceland', correct: true }
        ]
    }
]