
# Fern & Folk — FAQ Chatbot 

Fern & Folk is a simple FAQ chatbot that helps website visitors find answers to common questions quickly. Users can type their questions into the chat interface and receive answers based on the information stored in the chatbot.

The goal of this project is to make finding information simple, quick, and convenient.

## Features

- FAQ-based question answering
- Text cleaning and keyword-based question matching
- Interactive chat interface
- Google sign-in option
- Guest access option
- User profile display
- Sign-out option
- Mobile-friendly website design

## How It Works

1. Open the Fern & Folk website.
2. Choose Google sign-in or guest access.
3. Enter the chatbot interface.
4. Type a question in the message box.
5. JavaScript cleans the question and processes its words.
6. The chatbot compares the question with its predefined FAQ collection.
7. A relevant answer is displayed in the chat window.
8. Continue asking questions or sign out when finished.

The chatbot uses predefined information and question matching. It does not generate answers to every possible question automatically.

## Technologies Used

- **HTML** — Website structure
- **CSS** — Website design and layout
- **JavaScript** — Chat functionality and FAQ matching
- **Google Identity Services** — Google authentication
- **GitHub Pages** — Frontend hosting
- **Render** — Backend hosting, if required by the deployed configuration

## Project Structure

```text
fern-and-folk/
├── index.html
├── style.css
├── script.js
└── README.md
```

- `index.html` — Main webpage
- `style.css` — Styling and responsive layout
- `script.js` — FAQ data, question matching, and interface interactions
- `README.md` — Project documentation

## Setup and Usage

1. Clone or download the repository.
2. Keep the project files in the same structure expected by the HTML file.
3. Open `index.html` in a browser for local testing.
4. For online hosting, publish the frontend using GitHub Pages.
5. Configure Google OAuth correctly if Google sign-in is enabled.

## Google Sign-in

Google authentication requires a valid OAuth 2.0 Web client ID and the correct authorised JavaScript origin in Google Cloud Console.

The authorised origin must match the deployed website's origin. Authentication will not work correctly until the Google configuration and frontend code are set up properly.

## Limitations

- Responses depend on the questions and answers stored in the FAQ collection.
- Unrecognised questions may not return the expected answer.
- Google sign-in requires valid OAuth configuration.
- Guest access requires a working click handler in JavaScript.
- GitHub Pages hosts static frontend files and does not execute Python files directly.
- A separately hosted backend must be connected to the frontend if backend functionality is required.

## Future Improvements

- Improve question matching
- Add more frequently asked questions
- Improve login and guest access
- Add chat history
- Improve error handling
- Enhance mobile accessibility

## Project Objective

Fern & Folk demonstrates how HTML, CSS, and JavaScript can be combined to build a simple conversational interface for answering frequently asked questions.

The project focuses on usability, straightforward design, and quick access to information.

---

**Project:** Fern & Folk FAQ Chatbot  
**Frontend:** HTML, CSS, JavaScript  
**Hosting:** GitHub Pages  
**Authentication:** Google Identity Services
