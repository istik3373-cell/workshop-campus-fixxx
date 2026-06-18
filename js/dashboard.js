console.log("Dashboard Admin Aktif 🚀");

function loadDashboard() {
    const data = JSON.parse(localStorage.getItem("peserta")) || [];
    const sertifikats = JSON.parse(localStorage.getItem("sertifikat")) || [];
    const hadir = data.filter(p => p.status === "Hadir").length;

    // Update cards
    const cards = document.querySelectorAll(".card h1");
    if (cards[0]) cards[0].textContent = data.length;
    if (cards[2]) cards[2].textContent = hadir;

    // Update table
    const tbody = document.getElementById("bodyDashboard");
    if (!tbody) return;
    if (data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;color:#999;">Belum ada peserta.</td></tr>`;
        return;
    }
    tbody.innerHTML = data.slice(0, 5).map((p, i) => `
        <tr>
            <td>${i + 1}</td>
            <td>${p.nama}</td>
            <td>${p.workshop}</td>
            <td><span class="${p.status === 'Hadir' ? 'success' : 'danger'}">${p.status || 'Tidak Hadir'}</span></td>
        </tr>
    `).join('');
}

loadDashboard();
