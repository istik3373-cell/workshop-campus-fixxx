document.getElementById("formDaftar").addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const nim = document.getElementById("nim").value.trim();
    const workshop = document.getElementById("workshop").value;

    // Validasi email duplikat
    let dataPeserta = JSON.parse(localStorage.getItem("peserta")) || [];
    const sudahAda = dataPeserta.find(p => p.email.toLowerCase() === email);
    if (sudahAda) {
        alert("Email ini sudah terdaftar! Silakan gunakan email lain atau langsung login.");
        return;
    }

    const peserta = {
        nama: nama,
        email: email,
        nim: nim,
        workshop: workshop,
        status: "Tidak Hadir",
        sertifikat: false
    };

    dataPeserta.push(peserta);
    localStorage.setItem("peserta", JSON.stringify(dataPeserta));
    localStorage.setItem("userLogin", JSON.stringify(peserta));

    alert("Pendaftaran berhasil! Silakan login.");
    this.reset();
    window.location.href = "login.html";
});
