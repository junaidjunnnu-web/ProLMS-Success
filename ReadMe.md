# ProLMS Premium (standalone)

## Page looks plain white / no dark theme?

That means **custom CSS was not loading**. Common causes:

- Only `index.html` was copied, not `styles.css` (and `app.js`).
- The HTML file was opened from a **different folder** than `styles.css`, so `href="styles.css"` could not be found.

**Fixes applied in `index.html`:**

- **Bootstrap 5.3** was using the **light** theme (white page). The root tag is now `<html data-bs-theme="dark">`.
- **Google Fonts**: loaded with `<link>` (not `@import` inside `<style>`), which is more reliable.
- **Extra override** before `</body>` forces dark background if anything else wins.
- **`./styles.css`** is linked as a **fallback** if inline CSS is ever stripped (keep `styles.css` in the same folder).

**If it still looks white:** press **Ctrl+Shift+R** (hard refresh). Open **F12 → Console** and check for red errors. Confirm the address bar path is your real `prolms\index.html` (not an old copy in Downloads).

---

Three separate files (optional — `styles.css` is duplicated inside `index.html` for reliability):

| File        | Purpose                          |
|------------|-----------------------------------|
| `index.html` | Page structure + Bootstrap + Font Awesome |
| `styles.css` | Luxury dark theme, gold accents, glass UI |
| `app.js`     | 21 courses, login/register, modals, **YouTube embeds** |

## Run locally

1. Open `index.html` in a browser **or** serve the folder (recommended so iframes behave consistently):

   ```powershell
   cd prolms
   py -m http.server 8080
   ```

2. Visit `http://127.0.0.1:8080`

## Accounts

There are **no default usernames or passwords**. Use **Create account** on the login screen, then sign in with what you chose.

Accounts are saved in the browser (`localStorage`). To start fresh: **F12 → Application → Local Storage** → delete `prolmsUsers` (or clear site data).

## Add / change YouTube videos

In `app.js`, each course has a `youtubeLessons` array:

```javascript
youtubeLessons: [
  { title: 'My lesson title', id: 'VIDEO_ID_HERE' },
],
```

The `id` is the part after `v=` in a URL like  
`https://www.youtube.com/watch?v=XXXXXXXXXXX`

If a video does not load, the channel may have disabled embedding — pick another video or use **Open on YouTube**.

## Security note

This is a **front-end demo**: passwords are stored in `localStorage`. Do **not** use this pattern for real users; use a real backend (e.g. your Django LMS) with hashed passwords.
