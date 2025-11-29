// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAROSSAUXVxpryNIhlYYVRVXhSVWWrI3Ls",
    authDomain: "test-project-f9e1d.firebaseapp.com",
    projectId: "test-project-f9e1d",
    storageBucket: "test-project-f9e1d.firebasestorage.app",
    messagingSenderId: "355473801444",
    appId: "1:355473801444:web:82fdc2eff84ff82aed6cf1",
    measurementId: "G-WT66SMWGMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// DOM elements
const textarea = document.getElementById("test");
const submitBtn = document.getElementById("submitBtn");

// Auto-resize textarea
textarea.addEventListener("input", () => {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
});

// Submit button logic
submitBtn.addEventListener("click", async () => {
    const text = textarea.value;

    console.log("User input:", text);

    try {
        await addDoc(collection(db, "messages"), {
            content: text,
            created_at: new Date()
        });
        console.log("Saved to Firebase!");
    } catch (error) {
        console.error("Error saving to Firebase:", error);
    }
});