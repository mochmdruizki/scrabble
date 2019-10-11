# scrabble

=== A. CARA BERMAIN SCABBLE ===
1. setiap user diber 8 huruf (batasan: 2 vokal, 6 konsonan tapi random)
2. user bisa melakukan drag n drop, play, pass, clear, swap (keterangan ada di point B2)
3. minimal harus terdapat 2 huruf yang tersusun untuk menjadi sebuah kata dalam bahasa inggris

=== B. ELEMENT YANG TERDAPAT PADA SCABBLE ===
1. 8 huruf dengan acak setiap huruf memiliki nilainya masing-masing
2. terdapat 3 tombol
    - PLAY (bermain pada saat scrabble diletakan)
    - PASS (apabila terdapat gilirannya dan tidak menemukan jawaban dari kumpulan huruf tersebut maka bisa pass untuk tidak bermain di kesempatan itu)
    - CLEAR (apabila huruf sudah disimpan di board, ketika menekan tombol clear huruf-huruf tersebut kembali lagi ke tempat semula)
3. terdapat papan dengan ukuran 15x15 kotak dan terdapat bintang di kotak-kotak tertentu dengan nilai yang lebih besar daripada kotak biasa
4. papan score (huruf dan point)
5. point dikalkulasikan dan ditampilkan di dekat kumpulan huruf 

=== C. RUNUTAN PERMAINAN (TEKNIS CODE) ===
1. random 8 huruf (terdiri dari 2 vokal, 6 konsonan)
2. drag n drop huruf ke sebuah papan
    - pemain yang pertama bermain harus menyimpan kotak di tengah-tengah (center) 
    - highlight apabila mendekati salah satu kotak di sebuah papan
    - apabila dilepas maka langsung menyatu kepada kotak yang di highlight tersebut
3. drag n drop kemudian menyusun menjadi sebuah kata
    - minimal 2 huruf yang bisa dipasang
    - huruf tersebut harus bersebelahan
        - dari kiri ke kanan (horizontal)
        - dari atas ke bawah (vertical)
4. menekan tombol PLAY
    - menyatukan semua huruf yang telah di drag n drop
    - pengecekan apakah kata tersebut ada di dalam kamus (HARUS PUNYA DICTIONARY)
        - YA:
            - runutan huruf disimpan di board dan tidak bisa di drag n drop lagi
            - runutan huruf ditampilkan di papan score
            - menghitung nilai dari setiap hurufnya
            - NOTE: apabila huruf tersebut ada di salah satu bintang maka score-nya akan ditambah/dikalikan sesuai dengan ketentuan bintang tersebut
        - TIDAK:
            - menampilkan pesan bahwa kata tersebut tidak ada didalam kamus
5. menekan tombol PASS
    - melanjutkan ke user setelahnya dan skip dirinya untuk bermain
    - merandom ulang huruf
6. menekan tombol CLEAR
    - posisi huruf-huruf sudah berada diatas board
    - click clear untuk mengembalikan ke tempatnya semula
7. VALIDASI:
    - apabila ada huruf yang telah mengisi di tempat tersebut tidak bisa di timpa kembali