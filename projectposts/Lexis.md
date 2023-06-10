---
title: "Lexis"
subtitle: "An Educational Word Game"
github: "https://github.com/loafisgood/lexis"
tags: ["Chakra UI", "React JS", "Socket.IO"]
img: "/Lexis.png"
---

# Inspiration
While we were brainstorming ideas on what we wanted to base our project on for this hackathon, we thought about creating a game that was both fun and educational. We were quite puzzled when confronted with such a simple yet challenging idea. Our team went through countless games that established these two concepts. I thought about how my younger brother had trouble in English class because of the daunting imposition of learning confusing vocabulary. We finally landed on a game that would let you guess how a word was spelled through the pronunciation. We wanted to make a game that was inspired by Wordle but without the limit which allowed for the lobby creator to make as many words as they wished. This would grant teachers or parents a way to teach children how a word sounds and how it is spelled through a point-oriented game. The origin of the name "Lexis" is the translation of the word "Word" in Greek.

# What it does
Lexis is a word guessing game where you can listen to the pronunciation of any word the host decides to input. This word is hidden while the length of the word is shown. Each wrong miss for a word will deduct 10 points from your score. Rounds are created for each word that is inputted into the list. After every round, everyone's score is increased by 100. The host may create as many words as they choose. The game ends when the list of words is exhausted. The person who has missed the least amount of words or no words at all is placed in the first place and so on. Players can join a host's game or a host can create a list of words to start the game.

# How we built it
We used the react library with typescript. We also used socket.io for the backend. The styling was done through the Chakra UI library. The confetti on the podium was installed through react-confetti created by Alampros.

# Challenges we ran into / Accomplishments that we're proud of
- Most of us had no idea how to use React, Socket.io, and Typescript. 
- Most of us were unfamiliar with back-end as well. 
- Along the way, we learned how to utilize these tools to create our project!

## What we learned
We learned how to use Typescript, Chakra-UI, Socket.io, and React in more depth.

## What's next for Lexis
Lexis is an extremely ambitious project that we are insistent on improving. We really want to better our project because of two cardinal reasons which are because we want to help and give back to teachers and parents and because we want to people to have fun with friends. We are proud we are able to create such an impactful app that allows for these constructive effects on our society. We plan on adding more features such as more game modes and an improved UI to make our app more accessible to younger children.