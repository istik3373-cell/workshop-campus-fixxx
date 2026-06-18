// ABSENSI PAGE
console.log("Halaman Absensi Aktif ✅");

// BUTTON CHECK
const statusButtons = document.querySelectorAll(".status-btn");

statusButtons.forEach(button=>{

    button.addEventListener("click", ()=>{

        alert("Status absensi berhasil diubah!");

    });

});