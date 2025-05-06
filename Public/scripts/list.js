import { db } from "./firebase.js";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const tbody = document.getElementById("capsules-list");

async function renderList() {
  tbody.innerHTML = "";

  const snap = await getDocs(collection(db, "capsules"));
  if (snap.empty) {
    tbody.innerHTML = `<tr><td colspan="6">No capsules found.</td></tr>`;
    return;
  }

  snap.forEach((d) => {
    const { email, subject, date, fileUrl, sent } = d.data();
    const tr = document.createElement("tr");

    const statusText = sent ? "Sent" : "Pending";
    const statusClass = sent ? "status-sent" : "status-pending";

    tr.innerHTML = `
      <td>${email}</td>
      <td>${subject}</td>
      <td>${date}</td>
      <td class="${statusClass}">${statusText}</td>
      <td>
        ${fileUrl ? `<a href="${fileUrl}" target="_blank">Download</a>` : "—"}
      </td>
      <td>
        <button class="btn-delete" data-id="${d.id}">Delete</button>
      </td>
    `;

    tbody.appendChild(tr);
  });

  document.querySelectorAll(".btn-delete").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.dataset.id;
      if (confirm("Delete this capsule?")) {
        await deleteDoc(doc(db, "capsules", id));
        renderList();
      }
    });
  });
}

window.addEventListener("DOMContentLoaded", renderList);
