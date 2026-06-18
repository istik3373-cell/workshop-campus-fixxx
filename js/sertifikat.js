// SERTIFIKAT PAGE
console.log("Halaman Sertifikat Aktif 🏆");

// DOWNLOAD BUTTON
const downloadButtons = document.querySelectorAll(".download-btn");

downloadButtons.forEach(button=>{

    button.addEventListener("click", ()=>{

        alert("Sertifikat berhasil didownload!");

    });

});