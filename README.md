# Time Capsule

*Time Capsule* — an application that allows users to send emails into the future.  
Users can specify an email address, subject, message, send date, and optionally attach a file.  
On the specified date, the email is automatically delivered to the recipient.  
This is a great way to save important thoughts, emotions, and memories for your future self or loved ones.

---

## 📌 Demo

The live version is available here:

https://timecaps.netlify.app/

---

## 🚀 Core Features

- Create a capsule with email, subject, message, send date, and optional file attachment.
- View all capsules on the My Capsules page.
- Automatically send emails on the scheduled date using Cloud Functions and a scheduler.
- Client-side and server-side data validation and error handling.
- File storage via *Cloudinary*.

---

## 🛠️ Tech Stack

- *Frontend:* HTML, CSS, JavaScript (Vanilla)
- *Backend:* Firebase Cloud Functions (Node.js)
- *Database:* Firestore
- *File Storage:* Cloudinary (for file attachments)
- *Email Service:* SMTP via Zoho Mail
- *Deployment:* Netlify (Frontend) & Firebase Functions (Backend)

### 📌 Why this stack?

- *Firebase:* Easy-to-use, free tier, and built-in triggers.
- *Netlify:* Quick and simple static site deployment.
- *Zoho SMTP:* Free and reliable alternative for email.
- *Node.js + Firebase Functions:* Perfect for scheduled tasks without additional costs.

---

## ⚙️ Installation & Local Setup

> For normal use, the demo link above is enough.

### 📥 Clone the repository:

```
git clone https://github.com/Dadrout/Time-Capsule.git
cd Time-Capsule
```
📦 Install dependencies:
```
cd functions
npm install
```
🔐 Set up environment variables for SMTP:
```
firebase functions:config:set smtp.user="YOUR_EMAIL@zoho.com" smtp.pass="APP_PASSWORD"
```
▶️ Local testing:
```
firebase emulators:start
```
🚀 Deploy backend functions:
```
firebase deploy --only functions
```
🚀 Deploy frontend on Netlify:

1. Go to Netlify


2. Create a new project and choose the Public folder or the root directory.


3. Click Deploy.




---

🔧 Future Improvements

Add user authentication to make capsules private.

Add notifications/reminders for upcoming capsule send dates.

Add AI-powered text generation for letters.

Allow editing capsules before their scheduled send date.



---

⚡ Known Limitations

Currently, all capsules are public on the My Capsules page.

Past dates are disabled (server-side validation).



---

📹 Demo Video

https://youtu.be/WcUa0F6CqV8




---

📌 Conclusion

This project was designed as a simple and functional time capsule service.
It’s already working, easy to scale, and ready for new features to be added in the future.

