$(document).ready(function () {
  $("#quiz-form").submit(function (e) {
    e.preventDefault(); // Mencegah pengiriman formulir secara default

    // Mendefinisikan jawaban yang benar
    var jawabanBenar = [
      "salah",
      "benar",
      "benar",
      "salah",
      "benar",
      "salah",
      "salah",
      "salah",
      "salah",
      "salah",
    ];

    // Menghitung poin
    var poin = 0;
    $(this)
      .find("select")
      .each(function (indeks) {
        var jawaban = $(this).val(); // Ambil jawaban dari setiap pertanyaan
        if (jawaban === jawabanBenar[indeks]) {
          poin += 10; // Tambahkan 10 poin jika jawaban benar
        }
      });

    // Tampilkan hasilnya
    $("#result").html("<p>Total Poin: " + poin + "</p>");
  });
});
