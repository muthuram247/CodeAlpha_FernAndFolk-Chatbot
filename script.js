// Fern & Folk — FAQ assistant
// This project uses a small local FAQ library and cosine similarity.
// Add your own questions and answers in FAQS below.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth, GoogleAuthProvider, signInWithPopup, signInAnonymously,
  onAuthStateChanged, signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// 1) Replace these values with your Firebase project's web-app config.
// Firebase Console > Project settings > Your apps > Web app.
const firebaseConfig = {
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJSfDnOb9m_5cf7Awd0ppUDauEMksj1fA",
  authDomain: "fern-and-folk.firebaseapp.com",
  projectId: "fern-and-folk",
  storageBucket: "fern-and-folk.firebasestorage.app",
  messagingSenderId: "1086967831726",
  appId: "1:1086967831726:web:9578ad25709d21ac14213f",
  measurementId: "G-4TV1B70W0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
};

const FAQS = [
  { q: "How do I get started?", a: "Welcome! Start by typing a question into the message box, or choose one of the suggested topics. I'll compare your wording with the FAQ library and show the closest answer I can find." , tags: "start begin first steps how use" },
  { q: "How can I contact support?", a: "For this demo, the support contact is not connected yet. Add your real support email or contact link to this answer in the FAQS list inside script.js before you submit the project." , tags: "help contact email customer service support" },
  { q: "Can I use this as a guest?", a: "Yes. Choose “Continue as guest” on the welcome screen. Guest access uses Firebase anonymous authentication, so you can try the chatbot without a Google account." , tags: "guest anonymous account sign in login without google" },
  { q: "Is my information private?", a: "This demo matches questions against a small FAQ list stored in the project. It does not send your question to an AI model. If you add analytics, a database, or external APIs later, update this explanation to describe them accurately." , tags: "privacy private data safe security information" },
  { q: "What is this chatbot?", a: "Fern & Folk is a FAQ chatbot demo. It preprocesses a question, compares its terms with the stored FAQ questions, and returns the best match when the similarity is strong enough." , tags: "what chatbot faq assistant project" },
  { q: "How does the chatbot find an answer?", a: "The chatbot cleans the text, removes common filler words, turns the words into weighted TF-IDF vectors, and compares them with cosine similarity. It then displays the closest FAQ answer if the match score passes the confidence threshold." , tags: "nlp natural language processing matching cosine similarity tf idf algorithm" },
  { q: "What if the chatbot does not know the answer?", a: "If none of the FAQ entries matches your question closely enough, I'll say I couldn't find a reliable answer and suggest trying different wording. You can improve coverage by adding more FAQs to the FAQS list." , tags: "unknown answer not know no match fallback" },
  { q: "Can I change the FAQs?", a: "Absolutely. Open script.js and edit the FAQS array. Each item has a question (q), an answer (a), and optional keywords (tags). Add questions that fit the topic you want your chatbot to support." , tags: "edit add update change questions answers faq data" },
  { q: "Does Google login work?", a: "Google sign-in works after you add your Firebase web configuration, enable Google in Firebase Authentication, and add your website domain to Firebase's authorized domains." , tags: "google authentication oauth login sign in setup" },
  { q: "Does this chatbot need the internet?", a: "Yes. This version loads Firebase modules and the web fonts from online services, so an internet connection is required for authentication and the complete interface." , tags: "internet offline network online connection" },
  { q: "How do I sign out?", a: "Open the profile area in the left sidebar and select “Sign out”. On a phone, use the same account session controls available after signing in." , tags: "logout signout leave account" },
  { q: "Can this chatbot answer anything?", a: "Not yet. It is a retrieval-based FAQ assistant, not a general-purpose AI. It answers from the FAQs you provide, so keep the library focused and add the questions your intended users are likely to ask." , tags: "limitations anything general ai chatbot capabilities" }
];

const $ = (id) => document.getElementById(id);
const loginScreen = $("loginScreen"), chatScreen = $("chatScreen");
const loginError = $("loginError"), loginNote = $("loginNote");
let auth = null, firebaseReady = false, currentUser = null, firstMessage = true;

try {
  const configured = firebaseConfig.apiKey !== "PASTE_YOUR_API_KEY" &&
    firebaseConfig.projectId !== "PASTE_YOUR_PROJECT_ID" &&
    firebaseConfig.appId !== "PASTE_YOUR_APP_ID";
  if (configured) {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    firebaseReady = true;
    onAuthStateChanged(auth, (user) => {
      if (user) showChat(user);
    });
    loginNote.textContent = "Sign in securely, or try guest access.";
  } else {
    loginNote.textContent = "Guest preview works now. Add Firebase settings to enable real sign-in.";
  }
} catch (error) {
  console.error("Firebase setup:", error);
  loginNote.textContent = "Guest preview is available. Check Firebase settings for sign-in.";
}

$("googleButton").addEventListener("click", async () => {
  loginError.textContent = "";
  if (!firebaseReady) {
    loginError.textContent = "Google login needs your Firebase config first. Guest access is ready to use.";
    return;
  }
  try {
    await signInWithPopup(auth, new GoogleAuthProvider());
  } catch (error) {
    loginError.textContent = friendlyAuthError(error);
  }
});

$("guestButton").addEventListener("click", async () => {
  loginError.textContent = "";
  if (!firebaseReady) {
    showChat({ isAnonymous: true, displayName: "Guest visitor", uid: "local-guest" });
    return;
  }
  try {
    await signInAnonymously(auth);
  } catch (error) {
    loginError.textContent = friendlyAuthError(error);
  }
});

$("signOutButton").addEventListener("click", async () => {
  if (firebaseReady && auth && currentUser && currentUser.uid !== "local-guest") {
    try { await signOut(auth); } catch (error) { console.error(error); }
  }
  currentUser = null;
  chatScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  $("conversation").innerHTML = "";
  firstMessage = true;
  loginError.textContent = "";
});

$("newChatButton").addEventListener("click", resetConversation);
$("aboutButton").addEventListener("click", () => showToast("I match your question with the closest entry in the FAQ library."));
$("profileButton").addEventListener("click", () => showToast("Use the Sign out option below your profile to end this session."));
$("chatForm").addEventListener("submit", (event) => {
  event.preventDefault();
  sendQuestion($("questionInput").value);
});
$("questionInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    sendQuestion($("questionInput").value);
  }
});
$("questionInput").addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = Math.min(this.scrollHeight, 120) + "px";
});
document.querySelectorAll(".suggestion").forEach((button) => {
  button.addEventListener("click", () => sendQuestion(button.dataset.question));
});

function showChat(user) {
  currentUser = user;
  loginScreen.classList.add("hidden");
  chatScreen.classList.remove("hidden");
  const name = user.displayName || (user.isAnonymous ? "Guest visitor" : "Welcome back");
  $("profileName").textContent = name;
  $("profileType").textContent = user.isAnonymous ? "Guest account" : "Google account";
  $("avatar").textContent = name.charAt(0).toUpperCase();
  if (firstMessage) {
    $("conversation").innerHTML = "";
    const welcome = $("welcomeBlock").cloneNode(true);
    welcome.id = "welcomeBlock";
    welcome.classList.remove("hidden");
    $("conversation").appendChild(welcome);
    welcome.querySelectorAll(".suggestion").forEach((button) => {
      button.addEventListener("click", () => sendQuestion(button.dataset.question));
    });
    firstMessage = false;
  }
}
function resetConversation() {
  $("conversation").innerHTML = "";
  const welcome = document.createElement("div");
  welcome.className = "welcome-block";
  welcome.innerHTML = `<div class="welcome-spark">✳</div><p class="eyebrow">A FRESH START</p><h1>What can I help<br>you <em>figure out?</em></h1><p class="welcome-description">Ask me something in your own words. I'll look for the closest answer in my FAQ library.</p><div class="suggestion-grid"><button class="suggestion" data-question="How do I get started?"><span class="suggestion-icon">↗</span><span><strong>Getting started</strong><small>Find your first steps</small></span><span class="suggestion-arrow">→</span></button><button class="suggestion" data-question="How can I contact support?"><span class="suggestion-icon">☏</span><span><strong>Contact & support</strong><small>Know where to get help</small></span><span class="suggestion-arrow">→</span></button><button class="suggestion" data-question="Can I use this as a guest?"><span class="suggestion-icon">♧</span><span><strong>Guest access</strong><small>Use it without signing in</small></span><span class="suggestion-arrow">→</span></button><button class="suggestion" data-question="Is my information private?"><span class="suggestion-icon">⌑</span><span><strong>Privacy basics</strong><small>Understand your data</small></span><span class="suggestion-arrow">→</span></button></div>`;
  $("conversation").appendChild(welcome);
  welcome.querySelectorAll(".suggestion").forEach((button) => button.addEventListener("click", () => sendQuestion(button.dataset.question)));
}
function sendQuestion(rawQuestion) {
  const question = rawQuestion.trim();
  if (!question) return;
  $("questionInput").value = "";
  $("questionInput").style.height = "auto";
  $("welcomeBlock")?.remove();
  addMessage("user", question);
  $("typingIndicator").classList.remove("hidden");
  $("sendButton").disabled = true;
  // Brief pause gives the UI a natural response rhythm.
  setTimeout(() => {
    const result = findBestFaq(question);
    $("typingIndicator").classList.add("hidden");
    $("sendButton").disabled = false;
    addMessage("bot", result.answer, result.score, result.matchedQuestion);
    $("questionInput").focus();
  }, 350);
}
function addMessage(type, text, score = null, matchedQuestion = "") {
  let list = $("conversation").querySelector(".message-list");
  if (!list) {
    list = document.createElement("div");
    list.className = "message-list";
    $("conversation").appendChild(list);
  }
  const item = document.createElement("div");
  item.className = `message ${type}`;
  if (type === "bot") {
    const mark = document.createElement("div");
    mark.className = "message-mark";
    mark.textContent = "✳";
    item.appendChild(mark);
  }
  const wrap = document.createElement("div");
  wrap.className = "bubble-wrap";
  const meta = document.createElement("div");
  meta.className = "message-meta";
  meta.textContent = type === "user" ? "You · just now" : "Fern & Folk · just now";
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;
  wrap.append(meta, bubble);
  if (type === "bot" && matchedQuestion) {
    const note = document.createElement("div");
    note.className = "match-note";
    note.textContent = `Closest FAQ: “${matchedQuestion}”`;
    wrap.appendChild(note);
  }
  item.appendChild(wrap);
  list.appendChild(item);
  $("conversation").scrollTop = $("conversation").scrollHeight;
}

// Basic NLP preprocessing: lowercase, remove punctuation and stop words.
// TF-IDF weights and cosine similarity rank the most relevant FAQ.
const STOP_WORDS = new Set(["a","an","the","is","are","am","was","were","be","been","being","to","of","in","on","at","for","from","with","and","or","but","do","does","did","how","what","when","where","why","who","can","could","would","should","i","me","my","you","your","it","this","that","as","about","please","tell","me","there","any"]);
function tokenize(text) {
  return text.toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/).filter(word => word.length > 1 && !STOP_WORDS.has(word));
}
function termFrequency(tokens) {
  const counts = {};
  tokens.forEach(word => counts[word] = (counts[word] || 0) + 1);
  const total = tokens.length || 1;
  Object.keys(counts).forEach(word => counts[word] /= total);
  return counts;
}
function cosineSimilarity(vectorA, vectorB) {
  let dot = 0, normA = 0, normB = 0;
  for (const word in vectorA) {
    normA += vectorA[word] ** 2;
    if (vectorB[word]) dot += vectorA[word] * vectorB[word];
  }
  for (const word in vectorB) normB += vectorB[word] ** 2;
  if (!normA || !normB) return 0;
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}
function findBestFaq(question) {
  const queryTokens = tokenize(question);
  if (!queryTokens.length) return { answer: "Could you try asking that in a few more words? I'll look for a matching question in the FAQ library.", score: 0, matchedQuestion: "" };
  const docs = FAQS.map(faq => tokenize(`${faq.q} ${faq.tags || ""}`));
  const vocabulary = new Set(docs.flat());
  const idf = {};
  vocabulary.forEach(word => {
    const docsWithWord = docs.filter(doc => doc.includes(word)).length;
    idf[word] = Math.log(1 + docs.length / (1 + docsWithWord));
  });
  const makeVector = tokens => {
    const tf = termFrequency(tokens), vector = {};
    Object.keys(tf).forEach(word => vector[word] = tf[word] * (idf[word] || 1));
    return vector;
  };
  const queryVector = makeVector(queryTokens);
  let best = { faq: null, score: 0 };
  FAQS.forEach((faq, index) => {
    const faqVector = makeVector(docs[index]);
    const score = cosineSimilarity(queryVector, faqVector);
    if (score > best.score) best = { faq, score };
  });
  if (!best.faq || best.score < 0.09) {
    return { answer: "I couldn't find a reliable match in my FAQ library for that question yet. Try rephrasing it, or add a related question to the FAQS list in script.js.", score: best.score, matchedQuestion: "" };
  }
  return { answer: best.faq.a, score: best.score, matchedQuestion: best.faq.q };
}
function friendlyAuthError(error) {
  const code = error?.code || "";
  if (code.includes("popup-closed-by-user")) return "The sign-in window was closed. Try again whenever you're ready.";
  if (code.includes("unauthorized-domain")) return "This website domain is not authorized in Firebase. Add it under Authentication → Settings → Authorized domains.";
  if (code.includes("operation-not-allowed")) return "Enable Google and Anonymous sign-in in Firebase Authentication.";
  return "Sign-in didn't work just now. Check your Firebase setup and try again.";
}
function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 2600);
}
