
# Fern & Folk — FAQ Assistant

**Good questions deserve good answers.**

Fern & Folk is a lightweight FAQ chatbot built to help visitors find useful information through a simple, conversational interface. Instead of searching through multiple pages, users can ask questions in their own words and receive answers matched from a predefined FAQ library.

**Live Demo:** [Visit Fern & Folk](https://muthuram247.github.io/CodeAlpha_FernAndFolk-Chatbot/)

**Source Code:** [View Repository](https://github.com/muthuram247/CodeAlpha_FernAndFolk-Chatbot)

---

## About the Project

Fern & Folk was developed as a web-based FAQ assistant with a focus on simplicity, accessibility, and a pleasant user experience.

The website combines a clean interface with JavaScript-based text processing and FAQ matching. It is designed to understand the important words in a user's question, compare them with the available FAQ entries, and display the most relevant response.

The goal is simple: make information easier to find without making users navigate a complicated interface.

## Features

- **Interactive FAQ Chatbot** — Ask questions using natural, everyday language.
- **FAQ Matching System** — Matches user questions against predefined questions and answers.
- **Text Processing** — Normalizes user input and tokenizes text to support question matching.
- **Google Sign-In** — Provides a Google authentication option through Google Identity Services.
- **Guest Access** — Offers a way to access the chatbot without a Google account.
- **Conversation Interface** — Displays questions and answers in a chat-style layout.
- **Popular Topics** — Provides suggested topics to help users get started.
- **New Conversation** — Supports starting a fresh conversation.
- **Responsive Design** — Designed to provide a comfortable experience across screen sizes.
- **Lightweight Frontend** — Built using HTML, CSS, and JavaScript.

## How It Works

The chatbot follows a straightforward process:

1. **Access the website** — The user opens Fern & Folk in a browser.
2. **Choose an access option** — The interface offers Google sign-in and guest access.
3. **Open the chat interface** — After access is granted, the user can interact with the assistant.
4. **Enter a question** — The user types a question in their own words.
5. **Process the input** — JavaScript converts the text to a consistent format and breaks it into tokens.
6. **Match the question** — The matching logic compares the processed question with entries in the FAQ library.
7. **Display the answer** — The chatbot presents a relevant stored answer when a suitable match is found.
8. **Continue the conversation** — The user can ask another question or start a new conversation.

The chatbot uses a predefined knowledge base rather than generating answers from a large language model. Its accuracy therefore depends on the quality of the FAQ content and the question-matching logic.

## Technology Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Structures the website and its interface |
| CSS3 | Handles layout, typography, colours, and responsive styling |
| JavaScript | Manages chat interactions, text processing, and FAQ matching |
| Google Identity Services | Provides the Google sign-in integration |
| GitHub Pages | Hosts the live frontend website |

## Project Structure

```text
CodeAlpha_FernAndFolk-Chatbot/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### File Overview

- **`index.html`** — Contains the website structure, login interface, and chatbot layout.
- **`style.css`** — Defines the visual design, spacing, typography, and responsive interface.
- **`script.js`** — Contains the FAQ collection, text-processing functions, question-matching logic, and interactive behaviour.
- **`README.md`** — Documents the project, its features, and how it works.

## Getting Started

You can run the project locally or access the deployed website.

### Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/muthuram247/CodeAlpha_FernAndFolk-Chatbot.git
   ```

2. Open the project folder:

   ```bash
   cd CodeAlpha_FernAndFolk-Chatbot
   ```

3. Open `index.html` in a web browser.

For testing Google sign-in locally, configure the appropriate authorised JavaScript origin in Google Cloud Console.

### Live Website

The project is published using GitHub Pages.

**Visit:** https://muthuram247.github.io/CodeAlpha_FernAndFolk-Chatbot/

## Google Sign-In Configuration

Google sign-in uses Google Identity Services. Its operation depends on a valid OAuth 2.0 Web client ID, the required Google Identity Services script, and the correct authorised JavaScript origin.

For the deployed website, configure the origin as:

```text
https://muthuram247.github.io
```

The origin is the domain only; the repository path is not included in the authorised JavaScript origin.

Google sign-in and guest access must be correctly configured in the frontend for their respective buttons to work.

## Limitations

- Answers are based on the information stored in the FAQ library.
- Questions that do not match the available entries may not receive the expected answer.
- Google sign-in requires valid OAuth configuration and successful loading of Google's sign-in service.
- Guest access depends on the relevant event handler being connected correctly.
- The static frontend does not require a Python backend for its existing JavaScript FAQ-matching functionality.

## Future Improvements

Possible improvements include:

- Expanding the FAQ knowledge base.
- Improving question matching for differently worded queries.
- Adding more helpful fallback responses.
- Improving accessibility and keyboard navigation.
- Adding automated tests for question matching and interface behaviour.
- Enhancing conversation management.

## What I Learned

Building Fern & Folk provided practical experience in frontend development, handling user input, processing text, matching questions against structured data, integrating a third-party sign-in service, and deploying a website with GitHub Pages.

It also highlighted the importance of making technical functionality easy to use through a clear interface.

## Project Information

**Project Name:** Fern & Folk — FAQ Assistant  
**Category:** Web Development / FAQ Chatbot  
**Frontend:** HTML, CSS, JavaScript  
**Authentication:** Google Identity Services  
**Deployment:** GitHub Pages  
**Repository:** [muthuram247/CodeAlpha_FernAndFolk-Chatbot](https://github.com/muthuram247/CodeAlpha_FernAndFolk-Chatbot)

---

*Fern & Folk — Help, without the noise.*
