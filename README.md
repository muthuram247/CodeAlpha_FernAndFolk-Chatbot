# CodeAlpha Task 2 — Fern & Folk FAQ Chatbot

A responsive FAQ chatbot with a forest-green and warm-cream interface, Google sign-in, guest access, and a small retrieval-based NLP engine.

## Features
- Google sign-in using Firebase Authentication
- Guest sign-in using Firebase anonymous authentication
- FAQ matching with text cleaning, stop-word removal, TF-IDF weighting, and cosine similarity
- Helpful fallback when a question does not match
- Responsive layout for phones and computers
- No paid AI API required; responses come from your FAQ library

## Run it
Because this project uses JavaScript modules and Firebase, open it through a local web server rather than directly as a `file://` page.

Easy options:
1. Open the folder in Acode.
2. Use Acode's preview/server feature if it serves the page over HTTP.
3. Or upload the files to GitHub and enable GitHub Pages, or deploy them to Netlify.

## Enable Google login and guest access
1. Open https://console.firebase.google.com/ and create a project.
2. Add a Web app in Project settings.
3. Copy its Firebase config into `firebaseConfig` near the top of `script.js`.
4. In Firebase Console, open **Authentication → Sign-in method**.
5. Enable **Google** and **Anonymous**.
6. In **Authentication → Settings → Authorized domains**, add your deployed domain.
7. Reload the website. Google and guest sign-in should now use Firebase.

Guest preview works even before Firebase is configured, but it is a local preview session—not a Firebase account. Google sign-in cannot work until you add your own Firebase configuration.

## Customize the FAQs
Edit the `FAQS` array in `script.js`. Each entry has:
- `q`: the FAQ question
- `a`: the answer
- `tags`: extra keywords that help matching

Use a topic that fits your internship demonstration, such as app support, college help desk, or product FAQs. Replace the sample answers with accurate answers for your chosen topic.

## Important notes
- This is a browser-side demo. Do not place private service-account keys in frontend code.
- Firebase web config is intended for client-side use, but secure your Firebase project with appropriate settings and rules if you later add a database.
- The local preview mode does not provide persistent accounts or cloud sync.
- The FAQ engine is retrieval-based, not a generative AI model. Its answers are limited to the FAQ entries you write.

## Suggested GitHub repository name
`CodeAlpha_FAQ_Chatbot`
