import { db } from "./firebase.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const dateInput = document.getElementById("date");
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);

const form = document.getElementById("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("mail").value;
  const subject = document.getElementById("sub").value;
  const message = document.getElementById("mes").value;
  const date = document.getElementById("date").value;
  const fileInput = document.getElementById("file");
  let fileUrl = "";

  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "time_capsule_preset");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/drand7rpq/upload",
      { method: "POST", body: formData }
    );
    if (!response.ok) {
      throw new Error("Cloudinary upload failed: " + response.statusText);
    }
    const data = await response.json();
    fileUrl = data.secure_url;
  }

  try {
    await addDoc(collection(db, "capsules"), {
      email,
      subject,
      message,
      date,
      fileUrl,
      sent: false,
    });
    alert("Capsule saved successfully!");
    form.reset();
  } catch (error) {
    console.error("Error saving capsule:", error);
    alert(`Ошибка при сохранении:\n${error.name}\n${error.message}`);
  }
});
