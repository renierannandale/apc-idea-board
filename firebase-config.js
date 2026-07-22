/* ============================================================
   Live Idea Board — Firebase configuration
   ------------------------------------------------------------
   Shared by BOTH the presentation deck (ideas.js) and the
   audience submit page (submit/index.html).

   HOW TO FILL THIS IN  (full walkthrough in SETUP_LIVE_IDEAS.md)
     1. Create a free Firebase project at https://console.firebase.google.com
     2. Add a "Web app" and copy its config object.
     3. Enable the *Realtime Database* (start in locked mode, then
        paste the rules from firebase.rules.json).
     4. Replace the PASTE_… values below with your own.

   NOTE: These keys are NOT secret. Firebase web config is meant to
   be embedded in client-side code; access is controlled by the
   database rules (firebase.rules.json), not by hiding these values.
   ============================================================ */

window.FIREBASE_CONFIG = {
  apiKey:      "PASTE_API_KEY",
  authDomain:  "PASTE_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PASTE_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId:   "PASTE_PROJECT_ID",
  appId:       "PASTE_APP_ID"
};

/* Public URL where the audience submit page is hosted.
   This is the address encoded into the QR code on the slide.
   (Filled in automatically when the submit page is deployed.) */
window.IDEAS_SUBMIT_URL = "https://renierannandale.github.io/apc-idea-board/";
