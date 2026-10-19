# 🤖 Rock, Paper, Scissors vs. The Evil AI

A JavaScript-only console-based Rock, Paper, Scissors game built as part of the Web Development assignment.

---

## 🎮 How to Play
1. Open **`index.html`** in any web browser.
2. Open your browser's **Developer Tools (Console)**:
   - **Windows:** Press `F12` or `Ctrl + Shift + I` (then click the **Console** tab).
   - **Mac:** Press `Cmd + Option + J`.
3. Follow the prompt boxes to enter **Rock**, **Paper**, or **Scissors**.
4. The first to reach **3 wins** wins the match! When the match ends, you will be asked if you want to play again.

---

## 🛠️ Technical Requirements & Features
- **Pure JavaScript & Logic:** No HTML/CSS UI styling required; runs via browser dialogs (`prompt`, `alert`, `confirm`) and outputs to the console[span_1](start_span)[span_1](end_span).
- **Input Sanitization:** Uses `.trim()` and `.toLowerCase()` to handle capitalization and spacing gracefully.
- **Robust Error Handling:** 
  - Safely handles user cancellations (`null` prompts) without crashing.
  - Handles invalid entries (gibberish) by notifying the user and re-prompting without altering scores[span_2](start_span)[span_2](end_span)[span_3](start_span)[span_3](end_span).
- **Modular Functions:** Built with clean separation of concerns (`computerPlay`, `playerPlay`, `playRound`, and the main `game` loop).

---
