"use strict";

/*

- FERN & FOLK — FAQ ASSISTANT
- Google Identity Services + Guest Mode
- Expanded FAQ Library + Improved Keyword Matching
- 
- IMPORTANT:
- Browser-side credential decoding is not secure authentication.
- Verify Google's credential on a backend before trusting identity.
  */

/* =========================================================
GOOGLE CONFIGURATION — KEPT UNCHANGED
========================================================= */

const GOOGLE_CLIENT_ID =
"1004421091327-cjklss50ahbtac19hd4imn81o7nsud5c.apps.googleusercontent.com";

/* =========================================================
FAQ LIBRARY — 55 DETAILED QUESTIONS
========================================================= */

const FAQS = [

// GETTING STARTED

{
question: "How do I get started?",
keywords: ["start", "begin", "first steps", "new user", "getting started", "how to use"],
answer: "Welcome to Fern & Folk! Choose Continue with Google or Continue as guest on the login screen. Once the chat opens, select a suggested question or type your own question into the message box and press Send. You do not need special commands. If the answer is not relevant, try rephrasing your question or including a few specific words."
},
{
question: "What is Fern & Folk?",
keywords: ["about fern folk", "what is this website", "what is this chatbot", "application", "project introduction"],
answer: "Fern & Folk is a web-based FAQ assistant that helps users find answers quickly. Instead of searching through a long list of frequently asked questions, you can type a question and receive a related prepared answer. The project combines a conversational interface, a knowledge library, keyword matching, and Google Identity Services for the Google sign-in interface."
},
{
question: "What does FAQ mean?",
keywords: ["FAQ full form", "frequently asked questions", "FAQ meaning", "definition of FAQ"],
answer: "FAQ stands for Frequently Asked Questions. It is a collection of common questions and their answers about a website, product, service, or topic. Fern & Folk stores each FAQ with a question, an answer, and keywords. The matching system uses these entries to find information related to what you type."
},
{
question: "What is the purpose of this chatbot?",
keywords: ["purpose", "objective", "aim", "project goal", "why created", "benefits"],
answer: "The purpose of Fern & Folk is to make information easier to find through a simple chat interface. It demonstrates how a knowledge base can be organized into questions, answers, and keywords, then searched using text matching. It can reduce repetitive searching for common information, provided the relevant answers have already been added to the FAQ library."
},
{
question: "What can you help me with?",
keywords: ["what can you do", "features", "capabilities", "help topics", "what do you know"],
answer: "I can answer questions covered by my FAQ library. Topics include using the website, guest access, Google sign-in, privacy, troubleshooting, question matching, and project development. I cannot reliably answer every question in the world. If a topic is missing, try rephrasing your question or adding a new FAQ entry."
},
{
question: "How do I ask a question?",
keywords: ["type question", "send message", "submit question", "message box", "chat input"],
answer: "Open the chat screen and find the message box near the bottom. Type your question in everyday language and press Send. On a keyboard, Enter submits the question while Shift + Enter can insert a new line. The chatbot searches its FAQ library and returns the answer associated with the best match."
},
{
question: "Can I ask questions in my own words?",
keywords: ["own words", "natural language", "different wording", "rephrase", "ask normally", "synonyms"],
answer: "Yes. You can phrase questions naturally instead of copying an FAQ title exactly. The matcher looks for phrases and keywords in your question. For example, 'How can I leave my account?' may match a sign-out FAQ if the relevant keywords are included. Very different wording can still produce a poor match because this version does not deeply understand sentence meaning."
},
{
question: "What are suggested questions?",
keywords: ["suggestions", "question cards", "quick questions", "shortcuts", "popular topics"],
answer: "Suggested questions are ready-made question cards displayed on the welcome screen. They help you explore common topics without typing. Selecting a card submits its question to the same FAQ matching system. You can edit the cards in index.html and add the corresponding answers and keywords to the FAQS array in script.js."
},
{
question: "Can I use Fern & Folk on my phone?",
keywords: ["mobile", "phone", "android", "iphone", "tablet", "mobile browser"],
answer: "Yes. Open Fern & Folk in a modern mobile browser such as Chrome on Android. For the best experience, keep the browser updated, use a stable internet connection, and allow the page to load completely before signing in. The CSS controls how comfortably the interface fits different screen sizes."
},

// CHAT FEATURES

{
question: "How do I start a new conversation?",
keywords: ["new conversation", "new chat", "restart", "start over", "reset conversation", "clear messages"],
answer: "Select New conversation in the sidebar to begin again. The current implementation clears the visible conversation and restores the welcome section. It does not delete your account. If the welcome screen does not return, check that the original welcomeBlock element still exists in the page."
},
{
question: "Does the chatbot remember previous conversations?",
keywords: ["remember", "chat history", "conversation history", "memory", "save messages", "previous questions"],
answer: "The current version displays messages in the page but does not implement a database-backed conversation history. Messages may disappear when you refresh the page or start a new conversation. Permanent history would require a storage system and a clear decision about how messages are associated with users and how long they are retained."
},
{
question: "Why did the chatbot give me the wrong answer?",
keywords: ["wrong answer", "incorrect answer", "irrelevant response", "bad response", "mistake", "answer mismatch"],
answer: "The chatbot uses phrase and keyword matching. Two questions can share words while asking about different things, which may cause an unrelated FAQ to be selected. Try making your question more specific. You can also improve results by adding clearer keywords, avoiding duplicate FAQ entries, and refining the matching logic."
},
{
question: "What happens if no FAQ matches my question?",
keywords: ["no answer", "unknown question", "not found", "no match", "fallback", "unanswered"],
answer: "If the matcher cannot find a suitable FAQ, Fern & Folk displays a fallback response asking you to rephrase your question or add a related entry to the FAQS array. This is better than pretending to know an answer that is not in the knowledge base. If a topic comes up repeatedly, consider adding a dedicated FAQ for it."
},
{
question: "Can the chatbot answer every question?",
keywords: ["everything", "all questions", "any question", "general AI", "unlimited knowledge", "limitations"],
answer: "No. Fern & Folk is a retrieval-based FAQ assistant, not a general-purpose generative AI. It selects from answers written in advance. It cannot reliably answer topics outside its knowledge base and does not automatically search the internet. Adding more accurate questions, detailed answers, and relevant keywords expands its coverage."
},
{
question: "Why is my answer taking time to appear?",
keywords: ["slow answer", "waiting", "typing indicator", "delay", "response time", "loading answer"],
answer: "The script intentionally waits about 350 milliseconds before displaying a response so the typing indicator can appear. FAQ matching runs locally and is usually quick for a modest library. A very large collection or more advanced processing may take longer. If the typing indicator never disappears, inspect the browser console for JavaScript errors."
},

// GOOGLE LOGIN AND GUEST MODE

{
question: "How do I sign in with Google?",
keywords: ["google login", "google sign in", "continue with google", "google account", "authentication"],
answer: "Select the official Google sign-in button and choose a Google account when prompted. Google Identity Services returns a credential to the website, and your script decodes its payload to display profile information. Decoding a credential in the browser is not secure verification. This frontend-only demo does not establish a backend-verified identity."
},
{
question: "Can I use this as a guest?",
keywords: ["guest", "guest mode", "guest access", "without signing in", "no google account", "visitor"],
answer: "Yes. Select Continue as guest to open the chat without choosing a Google account. In this version, guest mode is a local interface state rather than Firebase anonymous authentication. It lets users explore the FAQ assistant, but it does not create a verified account or automatically save messages to a server."
},
{
question: "What is Google Identity Services?",
keywords: ["google identity services", "GIS", "google sign in technology", "identity library"],
answer: "Google Identity Services is Google's set of tools for signing users in with Google accounts and providing identity credentials to websites. Your script loads the Google sign-in library and renders Google's official sign-in button. Applications that need to trust a user's identity or protect private information must verify the returned credential securely on a backend."
},
{
question: "Is Google login securely verified in this project?",
keywords: ["secure login", "verified identity", "credential verification", "backend verification", "authentication security"],
answer: "Not completely. Your current frontend decodes the credential and checks a few payload fields, but it does not verify the cryptographic signature. A browser-side audience check is not sufficient proof of identity. For an application that protects private information or restricted features, send the credential to a trusted backend and verify its signature, issuer, audience, expiry, and other required claims there."
},
{
question: "Why is the Google sign-in button missing?",
keywords: ["google button missing", "sign in button not showing", "GIS not loading", "button invisible", "login unavailable"],
answer: "Check that the Google Identity Services script has loaded and your internet connection is working. Confirm that the client ID is a valid Web OAuth client ID, the JavaScript origin is authorized in Google Cloud, and the googleButtonContainer element exists in index.html. Open the browser console for errors and check that CSS is not hiding the container."
},
{
question: "Why does Google sign-in fail?",
keywords: ["google login error", "sign in failed", "OAuth error", "credential error", "login not working"],
answer: "Check your internet connection and confirm that the Google Identity Services library loads. Verify that your Web OAuth client ID belongs to the correct Google Cloud project and that the exact website origin is listed under Authorized JavaScript origins. An origin contains the scheme and hostname, not a repository page path. Review the browser console for the specific error."
},
{
question: "Why does guest mode not show my Google profile?",
keywords: ["guest profile", "guest name", "google name", "profile missing", "guest account name"],
answer: "Guest mode uses the fixed display name 'Guest visitor', so it does not retrieve your Google profile. The Google sign-in flow attempts to read profile information from the returned credential. The current implementation does not save profile information in a database."
},
{
question: "How do I sign out?",
keywords: ["sign out", "signout", "logout", "log out", "leave account", "exit session"],
answer: "Select Sign out below your profile. The script clears the local user state and returns you to the login screen. It also disables Google's automatic account selection when that function is available. Because this version does not maintain a Firebase Authentication session, signing out clears the app's local interface state rather than signing you out of Google itself."
},
{
question: "Does signing out delete my Google account?",
keywords: ["delete google account", "remove google account", "account deletion", "sign out delete"],
answer: "No. Signing out of Fern & Folk does not delete your Google account. It exits the current app interface state. Your Google account remains available for other websites and services. This project does not include a function for deleting Google accounts or deleting a backend user record."
},

// PRIVACY AND SECURITY

{
question: "Is my information private?",
keywords: ["privacy", "private", "personal information", "data protection", "confidential", "information safety"],
answer: "The FAQ matching happens locally in the browser, and the script does not send question text to a generative AI service. However, Google sign-in communicates with Google, and the website loads external resources such as Google Identity Services and web fonts. Avoid entering passwords, financial details, or sensitive personal information. Do not assume this demo provides complete privacy or verified authentication."
},
{
question: "Does the chatbot save my questions?",
keywords: ["save questions", "store messages", "chat storage", "save chat", "data retention", "message history"],
answer: "The script adds questions and answers to the visible page but does not itself write them to a database. Messages are not designed to persist as permanent chat history. Your browser, hosting provider, or external services may still process technical information according to their policies. Adding a database later requires a clear plan for storage, access control, and deletion."
},
{
question: "Does the chatbot send questions to an AI model?",
keywords: ["AI model", "external AI", "send questions", "OpenAI", "ChatGPT", "generative AI"],
answer: "No. The current code searches a local FAQ array using JavaScript. It does not call a generative AI model or language-generation API. Answers are written in advance and returned when the matcher finds a relevant entry. Connecting an AI model would require a separate integration, safeguards, and a backend to protect secret API keys."
},
{
question: "Is it safe to enter my password?",
keywords: ["password", "sensitive details", "credentials", "bank details", "secret information"],
answer: "No. Do not type passwords, bank details, private identification numbers, or other sensitive information into the chat. The FAQ assistant is not a password manager or secure form for confidential data. Use Google's official sign-in window for Google authentication, and never share your Google password with the chatbot."
},
{
question: "Does the website need a secret key for Google login?",
keywords: ["client secret", "secret key", "OAuth secret", "google secret", "API secret", "frontend credentials"],
answer: "The Google Identity Services browser flow uses a public Web client ID. Do not put an OAuth client secret in HTML or JavaScript because visitors can inspect frontend files. If a client secret has been exposed, rotate or revoke it in Google Cloud Console. Any secret required by a backend must be stored securely on the server, not in the public website."
},

// FAQ CUSTOMIZATION

{
question: "How can I add more FAQs?",
keywords: ["add FAQ", "new FAQ", "more questions", "expand library", "new answer", "create FAQ"],
answer: "Open script.js and locate the FAQS array. Add a new object containing question, keywords, and answer. Make the question clear, include common ways someone might ask the same thing in the keywords array, and write an accurate answer. Separate entries with commas and preserve the JavaScript object structure. Save the file, commit the change, and redeploy the website."
},
{
question: "How can I change an existing answer?",
keywords: ["edit answer", "change answer", "update FAQ", "modify response", "correct information"],
answer: "Find the relevant entry in the FAQS array in script.js. Edit its answer property while preserving quotation marks and commas. Make the answer accurate, understandable, and complete enough to solve the user's question. Save the file, commit the change to your repository, and wait for the hosted website to update."
},
{
question: "What are FAQ keywords used for?",
keywords: ["keywords", "tags", "search terms", "matching words", "synonyms", "keyword list"],
answer: "Keywords connect different phrasings to the same FAQ. For example, a sign-out FAQ might contain 'sign out', 'log out', 'logout', and 'leave account'. The matcher checks whether keyword phrases occur in the normalized question. Include useful synonyms and everyday expressions, but avoid unrelated words that could cause the wrong FAQ to be selected."
},
{
question: "How many FAQs should I add?",
keywords: ["number of FAQs", "FAQ count", "how many questions", "library size"],
answer: "There is no fixed ideal number. Start with questions users are most likely to ask, then add entries for common follow-ups and problems. A small collection of accurate, well-written FAQs can be more useful than hundreds of repetitive entries. As the library grows, organize it by topic and test questions that might match multiple entries."
},
{
question: "How do I write a good FAQ answer?",
keywords: ["good answer", "write FAQ", "answer quality", "clear response", "FAQ writing tips"],
answer: "Start by answering the question directly. Then explain important details and provide steps or examples where useful. Use simple language, short paragraphs, and accurate information. Mention limitations honestly and avoid promising features the application does not have. Each answer should solve one main problem rather than mixing several unrelated topics."
},
{
question: "Why are my new FAQs not working?",
keywords: ["new FAQ not working", "added question not recognized", "FAQ changes missing", "answer not updated", "deploy changes"],
answer: "Check that the new object is inside the FAQS array and uses the correct property names: question, keywords, and answer. Confirm that quotation marks and commas are valid JavaScript. Add keywords that appear in realistic user questions. Save and redeploy the file, then refresh the website. If needed, inspect the browser console for syntax errors."
},
{
question: "Can I add multiple keywords to one FAQ?",
keywords: ["multiple keywords", "many tags", "keyword array", "synonyms", "several search terms"],
answer: "Yes. Put multiple keyword strings inside the keywords array for one FAQ. Include common synonyms, short phrases, and alternative expressions for the same idea. For example, a sign-out FAQ can contain 'sign out', 'logout', 'log out', 'leave account', and 'end session'. This helps the matcher recognize more ways of asking the same question."
},
{
question: "Can two FAQs have similar keywords?",
keywords: ["duplicate keywords", "similar FAQ", "overlapping questions", "duplicate entries", "conflicting answers"],
answer: "They can, but too much overlap may cause the matcher to choose the wrong answer. If two questions are similar, make their wording and keywords more specific. For example, separate 'Why does Google login fail?' from 'Why is the Google button missing?' and give each entry distinctive keywords. Test both questions after making changes."
},

// MATCHING AND TECHNICAL DETAILS

{
question: "How does the chatbot find an answer?",
keywords: ["matching algorithm", "how matching works", "find answer", "search algorithm", "question processing"],
answer: "The script normalizes the user's text by converting it to lowercase, removing punctuation, and reducing repeated spaces. It compares the question with each FAQ's question and keywords. Exact or partial phrase matches and keyword matches increase a score. The FAQ with the highest positive score is selected. If no FAQ matches well enough, the chatbot returns a fallback message."
},
{
question: "What is natural language processing?",
keywords: ["NLP", "natural language processing", "language processing", "text processing"],
answer: "Natural Language Processing, or NLP, is an area of computing focused on working with human language. A chatbot can use text cleaning, tokenization, keyword matching, statistical similarity, or machine-learning models to process questions. Your current code uses relatively simple normalization and keyword scoring, so it should not be described as understanding language like a human."
},
{
question: "What is tokenization?",
keywords: ["tokenization", "tokens", "split text", "individual words", "word processing"],
answer: "Tokenization divides text into smaller pieces called tokens. In many basic chatbots, these tokens are individual words. For example, 'Please help me sign out' can be split into 'please', 'help', 'me', 'sign', and 'out'. Your current matcher primarily uses normalized strings and phrases rather than an advanced tokenization pipeline."
},
{
question: "What is TF-IDF?",
keywords: ["TF-IDF", "term frequency", "inverse document frequency", "word weighting"],
answer: "TF-IDF means Term Frequency–Inverse Document Frequency. It is a statistical technique that assigns weights to words based on how often they occur in a document and how common they are across a collection of documents. It can help distinguish informative terms from common ones. Your current script does not implement TF-IDF; it uses phrase and keyword scores instead."
},
{
question: "What is cosine similarity?",
keywords: ["cosine similarity", "similarity score", "vectors", "mathematical matching"],
answer: "Cosine similarity measures similarity between two vectors by comparing the angle between them. Text systems can represent questions as numerical vectors and use this method to compare them. It is often used with TF-IDF. Your current script does not calculate cosine similarity; it uses a simpler scoring method based on matching question phrases and keywords."
},
{
question: "Why does keyword matching sometimes fail?",
keywords: ["keyword matching fails", "matching problem", "synonym problem", "missed answer", "text matching limitation"],
answer: "Keyword matching may fail when a user uses synonyms that are not listed, changes word order, uses another language, or asks about a concept with different wording. It can also produce false matches when common words occur in unrelated questions. Add useful keyword variations, make each FAQ more specific, and consider more advanced semantic matching if the project needs stronger language understanding."
},
{
question: "Can I make this chatbot smarter?",
keywords: ["make smarter", "improve chatbot", "better matching", "advanced chatbot", "semantic search", "intelligent assistant"],
answer: "Yes. Begin by expanding the FAQ library and adding realistic synonyms. Improve matching so it compares meaningful words, handles phrases carefully, and avoids selecting an answer when confidence is low. For more advanced matching, you could use TF-IDF with cosine similarity or semantic search. Generative AI is another option, but it requires additional infrastructure and careful protection of API credentials."
},

// WEBSITE TROUBLESHOOTING

{
question: "Why is the website not loading?",
keywords: ["website not loading", "page blank", "site unavailable", "website error", "GitHub Pages error"],
answer: "Check your internet connection and reload the page. Confirm that the repository contains index.html, style.css, and script.js at the paths referenced by the HTML. Check that GitHub Pages is enabled for the correct branch and folder. If the page loads without styling or behavior, inspect the browser console and network panel for missing files or JavaScript errors."
},
{
question: "Why is the page showing an old version?",
keywords: ["old version", "changes not showing", "cache", "deployment delay", "latest code missing"],
answer: "The browser may be displaying a cached copy, or the latest repository changes may not have finished deploying. Check GitHub Pages deployment status, confirm that your changes were committed to the published branch, and refresh the page. You can also open the website in a private browsing tab to compare the result."
},
{
question: "Why does the Send button not work?",
keywords: ["send button", "message not sending", "chat form broken", "button not working", "submit error"],
answer: "Check that index.html contains chatForm, questionInput, and sendButton with the expected IDs. Confirm that script.js loads and that the browser console shows no syntax errors. Make sure the chat is open and a non-empty question has been entered. If the button becomes disabled and never returns to normal, check whether a JavaScript error interrupted question handling."
},
{
question: "Why does the chat screen not open?",
keywords: ["chat screen missing", "login not opening chat", "blank chat", "screen transition", "chat hidden"],
answer: "Check that loginScreen and chatScreen exist in index.html and their IDs match the script. Confirm that the hidden CSS class behaves correctly and login event handlers are running. If Google sign-in fails, the app may remain on the login screen. Guest mode should open the chat directly in this frontend implementation."
},
{
question: "Why does the browser show a JavaScript error?",
keywords: ["JavaScript error", "console error", "script failed", "syntax error", "undefined", "uncaught error"],
answer: "Open your browser's developer tools and inspect the Console tab. Read the first error message and its file and line number. Common causes include missing HTML IDs, a missing comma or bracket in script.js, an unavailable external script, or an element being accessed before it exists. Fix the first meaningful error, reload the page, and check again."
},
{
question: "Does the chatbot require internet access?",
keywords: ["internet", "offline", "online", "network connection", "no connection"],
answer: "The complete website requires an internet connection because it loads Google Identity Services and online fonts. FAQ matching itself runs in JavaScript in the browser once the code is loaded. Google sign-in requires access to Google's services, and a fresh page load may require downloading the website files."
},
{
question: "Why is the Google font not appearing?",
keywords: ["font missing", "Google Fonts", "font loading", "wrong typography", "font style"],
answer: "The page may be unable to load Google Fonts because of a network issue, browser restrictions, or an incorrect stylesheet URL. Check the network panel for failed font requests. The browser should fall back to the next font in your CSS font-family list if the external font cannot load."
},

// PROJECT AND DEVELOPMENT

{
question: "What technologies does this project use?",
keywords: ["technologies", "tech stack", "HTML CSS JavaScript", "programming languages", "tools used"],
answer: "The project uses HTML to structure the page, CSS to control its appearance, and JavaScript to manage the chat interface and FAQ matching. It also uses Google Identity Services for the Google sign-in interface and Google Fonts for typography. The FAQ matching logic runs in the browser and does not require an AI API."
},
{
question: "What is the role of HTML?",
keywords: ["HTML", "page structure", "website elements", "HTML purpose"],
answer: "HTML provides the structure of the website. It defines sections such as the login screen, sidebar, profile area, conversation container, question input, buttons, and welcome section. JavaScript uses the IDs and classes in this structure to find elements and respond to user actions."
},
{
question: "What is the role of CSS?",
keywords: ["CSS", "styling", "design", "colors", "layout", "appearance", "responsive design"],
answer: "CSS controls how the website looks and feels. It determines colors, typography, spacing, button styles, panel layouts, mobile responsiveness, and which elements are hidden. The Fern & Folk visual identity is mainly controlled by style.css, so you can change the design without rewriting the FAQ data."
},
{
question: "What is the role of JavaScript?",
keywords: ["JavaScript", "script", "logic", "interactivity", "event handlers", "functionality"],
answer: "JavaScript makes the page interactive. In this project, it handles the login interface, guest mode, profile display, question submission, FAQ matching, chat messages, typing indicator, new conversations, and toast notifications. The FAQS array stores the prepared answers that the matching logic can return."
},
{
question: "Where is the FAQ data stored?",
keywords: ["FAQ data location", "where FAQs stored", "script.js", "knowledge base", "FAQ array"],
answer: "The FAQ entries are stored in the FAQS array inside script.js. Each entry contains a question, a keywords array, and an answer. When you edit this array and publish the updated file, the browser can use the new FAQ content after loading the updated script."
},
{
question: "Can I publish this project on GitHub Pages?",
keywords: ["GitHub Pages", "publish", "deploy", "hosting", "live website", "online project"],
answer: "Yes. GitHub Pages can host a static website containing HTML, CSS, and JavaScript files. Make sure the published folder contains index.html and all referenced assets. Client-side Google Identity Services can be used in a static site, but secure credential verification requires a backend. GitHub Pages alone does not provide a private server for validating credentials."
},
{
question: "Can I add a real AI model later?",
keywords: ["add AI", "AI integration", "LLM", "language model", "generative AI", "API integration"],
answer: "Yes. You can later connect a language model through a backend service. The backend should protect API keys, validate requests, apply usage limits, and avoid exposing secrets in public JavaScript. You can also keep the FAQ library as a fallback when the AI service is unavailable. A real AI integration changes the project's privacy, cost, and maintenance requirements."
},
{
question: "What are the limitations of this project?",
keywords: ["limitations", "weaknesses", "disadvantages", "current problems", "what cannot do"],
answer: "The current version relies on prepared FAQ entries and simple keyword matching, so it may misunderstand synonyms or questions outside the library. It does not provide persistent chat history, a database-backed user profile, or generative AI answers. Google profile decoding in the browser is not secure identity verification. These limitations can be addressed gradually as the project grows."
},
{
question: "What improvements can be added in the future?",
keywords: ["future scope", "future improvements", "upgrades", "enhancements", "next features", "roadmap"],
answer: "Possible improvements include semantic question matching, multilingual FAQs, category filters, an admin page for editing answers, persistent conversation history, accessibility enhancements, analytics with appropriate privacy safeguards, and a backend for verified authentication. A carefully integrated AI model could answer questions beyond the FAQ library while retaining prepared FAQs for reliable common answers."
},
{
question: "How can I test the chatbot?",
keywords: ["test chatbot", "testing", "test cases", "quality assurance", "debug", "check answers"],
answer: "Test every FAQ using its exact question, a shorter version, common synonyms, and a question that should not match. Also test guest access, Google sign-in errors, sign-out, new conversations, mobile layout, and refresh behavior. Record wrong answers and improve the corresponding keywords. Testing both correct matches and deliberate non-matches helps reveal weaknesses."
},

// SUPPORT AND GENERAL QUESTIONS

{
question: "How can I contact support?",
keywords: ["contact support", "support email", "customer service", "contact team", "help desk", "support contact"],
answer: "The current demo does not contain a verified support email address or contact form. Use official contact information provided by the project owner if one is available. Do not invent an email address or assume that messages typed into this FAQ chatbot reach a support team."
},
{
question: "What should I do if an answer is not helpful?",
keywords: ["not helpful", "bad answer", "answer not useful", "wrong information", "improve answer"],
answer: "Try asking the question more clearly or include the specific topic you need help with. If the answer is still not relevant, the FAQ library may need a better entry. Add the missing question with realistic keywords and an accurate answer, then test similar phrasings to make sure the new entry works."
},
{
question: "Can I suggest a new FAQ?",
keywords: ["suggest FAQ", "request question", "new topic", "missing FAQ", "add topic", "feedback"],
answer: "You can identify a topic missing from the library and add it to script.js. The current demo does not automatically submit feedback, so a suggestion typed into the chat is not sent to the project owner. To collect suggestions, add a form and an appropriate backend or feedback service."
},
{
question: "Is Fern & Folk free to use?",
keywords: ["free", "cost", "price", "payment", "subscription", "charges"],
answer: "The current frontend does not implement a payment system or subscription checks. It does not charge users to access its FAQ interface. However, external services, hosting arrangements, or future integrations may have separate terms or costs. Check the terms of any service you add to the project."
},
{
question: "Can I use Fern & Folk without Google?",
keywords: ["without google", "no Google", "guest login", "skip google", "alternative login"],
answer: "Yes. Choose Continue as guest on the login screen. In this implementation, guest mode enters the chat locally without calling Firebase Authentication. It does not create a persistent account or verify a user's identity. This option makes the FAQ demo easy to explore."
},
{
question: "What happens if I refresh the page?",
keywords: ["refresh", "reload", "page reload", "messages disappear", "session reset"],
answer: "Refreshing the page reloads the HTML, CSS, and JavaScript. Since this version does not save chat messages or the local guest session to persistent storage, you may return to the login screen and lose the messages displayed. If you need conversations to survive a refresh, implement storage deliberately and explain how the data is handled."
},
{
question: "How can I improve the accuracy of answers?",
keywords: ["accuracy", "better answers", "improve matching", "relevance", "matching quality", "answer quality"],
answer: "Write clear FAQs, add alternative phrases that real users might type, and avoid giving unrelated questions the same keywords. Test the system with short questions, long questions, synonyms, spelling variations, and unrelated questions. If keyword matching becomes insufficient, consider a more advanced retrieval method and a confidence threshold so the assistant can decline uncertain matches."
},
{
question: "What is the difference between a FAQ chatbot and generative AI?",
keywords: ["FAQ versus AI", "difference generative AI", "retrieval chatbot", "AI chatbot comparison", "prepared answers"],
answer: "A traditional FAQ chatbot retrieves answers that have already been written and stored. A generative AI system produces new text based on a model and the context it receives. Fern & Folk currently uses stored answers and simple keyword matching. This makes its behavior easier to control, but it cannot create a prepared answer for every new topic."
},
{
question: "How do I report a bug?",
keywords: ["bug", "report issue", "problem report", "technical issue", "error report", "broken feature"],
answer: "Write down what you were trying to do, what you expected, and what actually happened. Include the browser and device you were using, plus any relevant error message from the browser console. The current demo does not automatically submit bug reports, so use the project's official issue tracker or contact channel if one has been provided."
}
];

/* =========================================================
ELEMENTS
========================================================= */

const $ = (id) => document.getElementById(id);

const loginScreen = $("loginScreen");
const chatScreen = $("chatScreen");
const googleButton = $("googleButton");
const googleButtonContainer = $("googleButtonContainer");
const guestButton = $("guestButton");
const loginNote = $("loginNote");
const loginError = $("loginError");

const profileName = $("profileName");
const profileType = $("profileType");
const avatar = $("avatar");

const signOutButton = $("signOutButton");
const newChatButton = $("newChatButton");
const aboutButton = $("aboutButton");

const conversation = $("conversation");
const welcomeBlock = $("welcomeBlock");
const chatForm = $("chatForm");
const questionInput = $("questionInput");
const sendButton = $("sendButton");
const typingIndicator = $("typingIndicator");
const toast = $("toast");

let currentUser = null;
let toastTimeout = null;
let responseTimer = null;
/* =========================================================
UI HELPERS
========================================================= */

function showToast(message) {
if (!toast) return;

toast.textContent = message;
toast.classList.remove("hidden");

clearTimeout(toastTimeout);
toastTimeout = setTimeout(() => {
toast.classList.add("hidden");
}, 3000);
}

function showLoginError(message) {
if (loginError) loginError.textContent = message;
}

function clearLoginError() {
showLoginError("");
}

function showScreen(screen) {
loginScreen?.classList.toggle("hidden", screen !== "login");
chatScreen?.classList.toggle("hidden", screen !== "chat");
}

function updateProfile(user, type) {
if (profileName) profileName.textContent = user.name || "Guest visitor";
if (profileType) profileType.textContent = type;

const letter = (user.name || "G").trim().charAt(0) || "G";
if (avatar) avatar.textContent = letter.toUpperCase();
}

function restoreWelcomeBlock() {
if (!conversation || !welcomeBlock) return;

conversation.replaceChildren(welcomeBlock);
welcomeBlock.classList.remove("hidden");
}

function enterChat(user, type) {
currentUser = {
name: user.name || "Guest visitor",
email: user.email || ""
};

updateProfile(currentUser, type);
clearLoginError();
showScreen("chat");
restoreWelcomeBlock();
questionInput?.focus();
}

function signOut() {
currentUser = null;
clearTimeout(responseTimer);
setTyping(false);

if (window.google?.accounts?.id) {
window.google.accounts.id.disableAutoSelect();
}

showScreen("login");
clearLoginError();

if (loginNote) {
loginNote.textContent = "Your questions stay in this browser session.";
}

restoreWelcomeBlock();
showToast("You have signed out of Fern & Folk.");
}

/* =========================================================
GOOGLE IDENTITY SERVICES — SINGLE CUSTOM BUTTON
========================================================= */

function decodeGoogleCredential(credential) {
if (typeof credential !== "string") {
throw new Error("Google did not return a credential.");
}

const parts = credential.split(".");
if (parts.length !== 3) {
throw new Error("The Google credential format is invalid.");
}

const encodedPayload = parts[1]
.replace(/-/g, "+")
.replace(/_/g, "/");

const paddedPayload =
encodedPayload + "=".repeat((4 - encodedPayload.length % 4) % 4);

const bytes = Uint8Array.from(
atob(paddedPayload),
(character) => character.charCodeAt(0)
);

return JSON.parse(new TextDecoder().decode(bytes));
}

function handleGoogleCredential(response) {
try {
const user = decodeGoogleCredential(response.credential);

// These checks do NOT verify the credential's signature.  
if (user.aud !== GOOGLE_CLIENT_ID) {  
  throw new Error("Credential belongs to a different client.");  
}  

if (  
  user.iss !== "https://accounts.google.com" &&  
  user.iss !== "accounts.google.com"  
) {  
  throw new Error("Unexpected credential issuer.");  
}  

if (!user.name || !user.email) {  
  throw new Error("Google did not return the required profile.");  
}  

enterChat(  
  { name: user.name, email: user.email },  
  "Google profile · not backend-verified"  
);  

showToast("Welcome to Fern & Folk, " + user.name + "!");

} catch (error) {
console.error("Google sign-in error:", error);
showLoginError(
"We couldn't read your Google profile. Please try again."
);
}
}

function initializeGoogleLogin() {
if (!window.google?.accounts?.id) {
showLoginError(
"Google sign-in is unavailable. Check your connection and refresh."
);
return;
}

window.google.accounts.id.initialize({
client_id: GOOGLE_CLIENT_ID,
callback: handleGoogleCredential,
auto_select: false,
cancel_on_tap_outside: true
});

// Remove the extra Google-rendered button completely.
if (googleButtonContainer) {
googleButtonContainer.replaceChildren();
googleButtonContainer.style.display = "none";
}

// Keep the custom button visible.
if (googleButton) {
googleButton.classList.remove("hidden");
googleButton.disabled = false;
googleButton.onclick = openGoogleSignIn;
}

if (loginNote) {
loginNote.textContent =
"Google sign-in is provided by Google Identity Services.";
}
}

function openGoogleSignIn() {
clearLoginError();

if (!window.google?.accounts?.id) {
showLoginError(
"Google sign-in is still loading. Refresh the page and try again."
);
return;
}

// Opens Google's One Tap/account selection prompt.
window.google.accounts.id.prompt((notification) => {
if (notification.isNotDisplayed()) {
console.warn(
"Google prompt was not displayed:",
notification.getNotDisplayedReason()
);

showLoginError(  
    "Google's account prompt could not open. Check browser settings and try again."  
  );  
} else if (notification.isSkippedMoment()) {  
  console.info("Google sign-in prompt was skipped.");  
}

});
}

function waitForGoogle(attempt = 0) {
if (window.google?.accounts?.id) {
initializeGoogleLogin();
return;
}

if (attempt >= 30) {
showLoginError(
"Google sign-in could not load. Refresh the page and try again."
);
return;
}

setTimeout(() => waitForGoogle(attempt + 1), 300);
}
/* =========================================================
FAQ MATCHING — IMPROVED KEYWORD SCORING
========================================================= */

const STOP_WORDS = new Set([
"a", "an", "the", "is", "are", "am", "was", "were", "be", "been",
"being", "to", "of", "in", "on", "at", "for", "from", "with", "and",
"or", "but", "do", "does", "did", "how", "what", "when", "where",
"why", "who", "can", "could", "would", "should", "i", "me", "my",
"you", "your", "it", "this", "that", "as", "about", "please", "tell",
"there", "any", "we", "our", "they", "them", "their", "have", "has",
"had", "will", "just", "want", "need", "like", "help"
]);

function normalizeText(text) {
return String(text || "")
.toLowerCase()
.normalize("NFKD")
.replace(/[\u0300-\u036f]/g, "")
.replace(/[^\p{L}\p{N}\s]/gu, " ")
.replace(/\s+/g, " ")
.trim();
}

function tokenize(text) {
return normalizeText(text)
.split(" ")
.filter((word) => word.length > 1 && !STOP_WORDS.has(word));
}

function scoreFAQ(question, faq) {
const normalizedQuestion = normalizeText(question);
const normalizedTitle = normalizeText(faq.question);
const queryWords = new Set(tokenize(question));
const faqWords = new Set(
tokenize(faq.question + " " + (faq.keywords || []).join(" "))
);

let score = 0;

if (normalizedQuestion === normalizedTitle) {
score += 12;
} else if (
normalizedQuestion.includes(normalizedTitle) ||
normalizedTitle.includes(normalizedQuestion)
) {
score += 7;
}

for (const keyword of faq.keywords || []) {
const phrase = normalizeText(keyword);
if (!phrase) continue;

if (normalizedQuestion.includes(phrase)) {  
  score += phrase.includes(" ") ? 5 : 2;  
}

}

let overlap = 0;

for (const word of queryWords) {
if (faqWords.has(word)) overlap++;
}

score += overlap * 1.5;

if (queryWords.size > 0) {
score += (overlap / queryWords.size) * 2;
}

return score;
}

function findFAQAnswer(question) {
const normalizedQuestion = normalizeText(question);

if (!normalizedQuestion) {
return "Please type a question so I can help.";
}

if (tokenize(question).length === 0) {
return "Could you try asking that in a few more words? I need a little more detail to search the FAQ library.";
}

let bestMatch = null;
let bestScore = 0;
let secondBestScore = 0;

for (const faq of FAQS) {
const score = scoreFAQ(question, faq);

if (score > bestScore) {  
  secondBestScore = bestScore;  
  bestScore = score;  
  bestMatch = faq;  
} else if (score > secondBestScore) {  
  secondBestScore = score;  
}

}

if (!bestMatch || bestScore < 2.5) {
return "I couldn't find a reliable match in my FAQ library for that question yet. Try rephrasing it with specific words, or add a related question to the FAQS list in script.js.";
}

if (
secondBestScore > 0 &&
bestScore - secondBestScore < 1 &&
bestScore < 8
) {
return "I found a few possibly related topics, but I'm not confident enough to choose one. Could you make your question a little more specific?";
}

return bestMatch.answer;
}

/* =========================================================
CHAT MESSAGES
========================================================= */

function addMessage(text, sender) {
if (!conversation) return;

let list = conversation.querySelector(".message-list");

if (!list) {
list = document.createElement("div");
list.className = "message-list";
conversation.appendChild(list);
}

const item = document.createElement("div");
item.className = sender === "user" ? "message user" : "message assistant";

if (sender !== "user") {
const mark = document.createElement("div");
mark.className = "message-mark";
mark.textContent = "✳";
item.appendChild(mark);
}

const wrap = document.createElement("div");
wrap.className = "bubble-wrap";

const meta = document.createElement("div");
meta.className = "message-meta";
meta.textContent =
sender === "user" ? "You · just now" : "Fern & Folk · just now";

const bubble = document.createElement("div");
bubble.className = "bubble";
bubble.textContent = text;

wrap.append(meta, bubble);
item.appendChild(wrap);
list.appendChild(item);

conversation.scrollTop = conversation.scrollHeight;
}

function setTyping(isTyping) {
typingIndicator?.classList.toggle("hidden", !isTyping);
if (sendButton) sendButton.disabled = isTyping;
}

function handleQuestion(question) {
const cleanQuestion = String(question || "").trim();
if (!cleanQuestion) return;

if (!currentUser) {
showToast("Please continue as guest or use Google sign-in first.");
return;
}

addMessage(cleanQuestion, "user");
welcomeBlock?.classList.add("hidden");
setTyping(true);
clearTimeout(responseTimer);

responseTimer = setTimeout(() => {
const answer = findFAQAnswer(cleanQuestion);
setTyping(false);
addMessage(answer, "assistant");
questionInput?.focus();
}, 350);
}

/* =========================================================
QUESTION INPUT
========================================================= */

chatForm?.addEventListener("submit", (event) => {
event.preventDefault();

const question = questionInput?.value || "";
if (!question.trim()) return;

handleQuestion(question);
questionInput.value = "";
questionInput.style.height = "auto";
});

questionInput?.addEventListener("keydown", (event) => {
if (event.key === "Enter" && !event.shiftKey) {
event.preventDefault();
chatForm?.requestSubmit();
}
});

questionInput?.addEventListener("input", () => {
questionInput.style.height = "auto";
questionInput.style.height =
Math.min(questionInput.scrollHeight, 140) + "px";
});

/* =========================================================
SUGGESTED QUESTIONS
========================================================= */

document.querySelectorAll("[data-question]").forEach((button) => {
button.addEventListener("click", () => {
const question = button.dataset.question || "";

if (!currentUser) {  
  showToast("Please sign in or continue as a guest first.");  
  return;  
}  

handleQuestion(question);

});
});

/* =========================================================
NEW CONVERSATION
========================================================= */

newChatButton?.addEventListener("click", () => {
if (!currentUser || !conversation || !welcomeBlock) return;

clearTimeout(responseTimer);
setTyping(false);
conversation.replaceChildren(welcomeBlock);
welcomeBlock.classList.remove("hidden");

showToast("Started a new conversation.");
});

/* =========================================================
ABOUT AND PROFILE
========================================================= */

aboutButton?.addEventListener("click", () => {
showToast(
"Fern & Folk finds answers from its FAQ library. It does not know answers that haven't been added yet."
);
});

$("profileButton")?.addEventListener("click", () => {
showToast("Use the Sign out option below your profile to end this session.");
});

/* =========================================================
STARTUP
========================================================= */

function startApp() {
showScreen("login");

if (googleButtonContainer) {
googleButtonContainer.replaceChildren();
googleButtonContainer.style.display = "none";
}

if (googleButton) {
googleButton.classList.remove("hidden");
googleButton.onclick = openGoogleSignIn;
}

waitForGoogle();
}

if (document.readyState === "loading") {
document.addEventListener("DOMContentLoaded", startApp, {
once: true
});
} else {
startApp();
}
