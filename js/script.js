// Tampilkan modal input nama saat halaman dimuat
window.onload = function () {
  const modal = document.getElementById("name-modal"); // ID yang benar sesuai HTML
  const submitBtn = document.getElementById("submit-name");
  const input = document.getElementById("user-name-input");

  modal.style.display = "flex";

  submitBtn.onclick = function () {
    const name = input.value.trim();
    if (name) {
      document.getElementById(
        "greeting"
      ).innerText = `Hi ${name}, Welcome To Website`;
      modal.style.display = "none";
    } else {
      alert("Nama tidak boleh kosong!");
    }
  };
};

// Tangani form "Message Us"
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = this.nama.value;
    const tanggal = this.tanggal.value;
    const genderInput = this.querySelector('input[name="gender"]:checked');
    const gender = genderInput ? genderInput.value : "Tidak dipilih";
    const pesan = this.pesan.value;
    const waktu = new Date().toLocaleString("id-ID", {
      timeZone: "Asia/Jakarta",
    });

    const outputHTML = `
      <p><strong>Current time:</strong> ${waktu}</p>
      <p><strong>Nama:</strong> ${nama}</p>
      <p><strong>Tanggal Lahir:</strong> ${tanggal}</p>
      <p><strong>Jenis Kelamin:</strong> ${gender}</p>
      <p><strong>Pesan:</strong> ${pesan}</p>
    `;

    document.getElementById("output").innerHTML = outputHTML;
  });
