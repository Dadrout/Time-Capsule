const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();
const db = admin.firestore();

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: "dadrout@zohomail.com",
    pass: "bC1av9evjwmU",
  },
});

exports.scheduledSendCapsules = functions.pubsub
  .schedule("0 0 * * *")
  .timeZone("Etc/UTC")
  .onRun(async () => {
    const today = new Date().toISOString().split("T")[0];
    const qs = await db
      .collection("capsules")
      .where("date", "<=", today)
      .where("sent", "==", false)
      .get();

    if (qs.empty) return null;

    await Promise.all(
      qs.docs.map((doc) => {
        const { email, subject, message, fileUrl } = doc.data();
        return transporter
          .sendMail({
            from: '"Time Capsule" <dadrout@zohomail.com>',
            to: email,
            subject,
            text: message + (fileUrl ? `\n\n${fileUrl}` : ""),
          })
          .then(() => doc.ref.update({ sent: true }));
      })
    );

    return null;
  });
