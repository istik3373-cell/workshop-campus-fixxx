console.log("Halaman Peserta Aktif 🚀");

function renderTabel(data) {
    const tbody = document.getElementById("bodyPeserta");
    if (!tbody) return;
    tbody.innerHTML = "";
    if (data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;color:#999;">Belum ada peserta terdaftar.</td></tr>`;
        return;
    }
    data.forEach((p, i) => {
        tbody.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${p.nama}</td>
            <td>${p.email}</td>
            <td>${p.workshop}</td>
        </tr>`;
    });
}

function loadPeserta() {
    const data = JSON.parse(localStorage.getItem("peserta")) || [];
    renderTabel(data);
}

// Search
const searchInput = document.getElementById("searchPeserta");
if (searchInput) {
    searchInput.addEventListener("keyup", function() {
        const filter = this.value.toLowerCase();
        const allData = JSON.parse(localStorage.getItem("peserta")) || [];
        const filtered = allData.filter(p =>
            p.nama.toLowerCase().includes(filter) ||
            p.email.toLowerCase().includes(filter) ||
            p.workshop.toLowerCase().includes(filter)
        );
        renderTabel(filtered);
    });
}

loadPeserta();
