document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("orderForm");
    const tabelBody = document.querySelector("#tabelPesanan tbody");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const nim = document.getElementById("nim").value.trim();
        const judul = document.getElementById("judul").value.trim();
        const jumlah = document.getElementById("jumlah").value.trim();

        // === VALIDASI FORM ===
        if (!nama || !nim || !judul || jumlah <= 0) {
            alert("⚠️ Harap isi semua kolom dengan benar!");
            return;
        }

        // === TAMBAHKAN DATA KE TABEL ===
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${nama}</td>
            <td>${nim}</td>
            <td>${judul}</td>
            <td>${jumlah}</td>
            <td><button class="hapus" style="background-color:red;">Hapus</button></td>
        `;

        tabelBody.appendChild(row);

        // === RESET FORM ===
        form.reset();

        // === FEEDBACK BERHASIL ===
        alert("✅ Pesanan berhasil ditambahkan!");

        // === HAPUS DATA DENGAN EVENT DELEGATION ===
        row.querySelector(".hapus").addEventListener("click", () => {
            if (confirm("Apakah Anda yakin ingin menghapus pesanan ini?")) {
                row.remove();
                alert("🗑️ Data berhasil dihapus!");
            }
        });
    });
});
