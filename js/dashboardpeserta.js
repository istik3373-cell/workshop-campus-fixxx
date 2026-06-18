function logout(){

    const konfirmasi =
    confirm("Yakin ingin logout?");

    if(konfirmasi){

        window.location.href =
        "login.html";

    }

}

console.log(
"Dashboard Peserta Aktif"
);