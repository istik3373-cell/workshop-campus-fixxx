const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = this.querySelector('input[type="email"]').value.trim().toLowerCase();
    const role = document.getElementById("role").value;

    if (!role) {
        alert("Silakan pilih role terlebih dahulu!");
        return;
    }

    if (role === "admin") {
        alert("Login Admin berhasil!");
        window.location.href = "dashboard.html";
    } else if (role === "peserta") {
        // Cari peserta berdasarkan email
        const dataPeserta = JSON.parse(localStorage.getItem("peserta")) || [];
        const found = dataPeserta.find(p => p.email.toLowerCase() === email);

        if (found) {
            localStorage.setItem("userLogin", JSON.stringify(found));
            alert("Login Peserta berhasil!");
            window.location.href = "dashboardpeserta.html";
        } else {
            // Jika belum ada di localStorage (misal demo), tetap masuk
            const demoUser = { nama: "Peserta", email: email, nim: "-", workshop: "-", status: "Belum Dicatat", sertifikat: false };
            localStorage.setItem("userLogin", JSON.stringify(demoUser));
            alert("Login Peserta berhasil!");
            window.location.href = "dashboardpeserta.html";
        }
    }
});
