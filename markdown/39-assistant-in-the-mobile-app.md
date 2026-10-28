# Ship It: Mobile App

*Section 6: Capstone: Campus Assistant · Lesson 39 of 41 · about 1 week*

**Before you start, check that** [Ship It: Service and Website](38-assistant-service-and-web.md) is live for curators.

## Introduction

> **Most students will meet your assistant on a phone, on mobile data, with one thumb.**

The same service now powers a chat screen in your Android and iOS app. Phones add their own problems: slow networks, apps sent to the background mid-answer, small screens and keyboards that cover the input.

**After this, you can** put the assistant in a native app that behaves well on slow networks.

**The skill that lasts:** AI features on mobile: retries, cancellation and graceful fallbacks on real devices.

## Lesson overview

By the end of this lesson, you should be able to:

- Add a chat screen that reuses the web service.
- Handle slow networks, retries and interrupted answers.
- Test on a real phone, not only an emulator.

## Assignment

### Days 1–2 · about 3 hours

1. Add the chat screen where your app's navigation rules allow it. Reuse the service, the citation format and the feedback buttons from the web.

### Days 3–4 · about 3 hours

2. Handle the hard cases: a retry sends the same idempotency key, so it can't create a second request; a timeout message; cancellation; and an answer fetched again by request ID after the app returns from the background. Check that sign-out and account switching clear the chat.

### Days 5–6 · about 3 hours

3. Test on a real Android phone (and an iPhone if you can) on slow mobile data. Fix what breaks: keyboard covering the input, long Bangla text wrapping, links opening outside the app.
4. No native app? Make the web chat page work well on a phone instead, and test it on a real phone on mobile data.

### Memory check · 10 min

5. Close this page. In your log, answer from memory, then check:
   - Name two mobile problems a web chat page rarely has. ([where to check](39-assistant-in-the-mobile-app.md))
6. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: Name two mobile problems a web chat page rarely has.</summary>

The app goes to the background mid-answer, and slow or flaky mobile data. The keyboard covering the input is a third.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Ship It: Service and Website](38-assistant-service-and-web.md) · [Course map](README.md) · [Next lesson: Project: Campus Assistant Pilot →](40-project-campus-assistant.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 28 Oct 2026
