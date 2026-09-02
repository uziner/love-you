// Mengambil elemen dari HTML
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const finalStep = document.getElementById('finalStep');
const loveSound = document.getElementById('loveSound');

// Mengambil tombol-tombol
const btnYes1 = document.getElementById('btn-yes-1');
const btnNo1 = document.getElementById('btn-no-1');
const btnYes2 = document.getElementById('btn-yes-2');
const btnNo2 = document.getElementById('btn-no-2');
const btnContinue = document.getElementById('btn-continue');

// Fungsi untuk pergi ke halaman akhir "LOVE YOU"
function showFinalPage() {
    step1.classList.add('hidden');
    step2.classList.add('hidden');
    step3.classList.add('hidden');
    finalStep.classList.remove('hidden');
    
    // Memastikan lagu di-looping lewat JavaScript
    loveSound.loop = true;
    
    // Memutar musik
    loveSound.play().catch(error => console.log("Autoplay audio dicegah oleh browser."));
    
    // Membuat efek teks background "YOULOVE" berulang
    generateBackgroundText();
}

// Fungsi membuat teks background berulang dan rapi menutupi seluruh layar
function generateBackgroundText() {
    const bgContainer = document.getElementById('bgTextContainer');
    bgContainer.innerHTML = ''; // Bersihkan kontainer terlebih dahulu
    
    // Memperbanyak kata "YOULOVE" (diulang 150 kali per baris) agar memenuhi layar yang lebar
    const rowText = "YOULOVE ".repeat(150); 
    
    let rowsHtml = '';
    // Membuat 150 baris ke bawah agar menutupi layar saat bergerak
    for(let i = 0; i < 150; i++) {
        rowsHtml += `<div>${rowText}</div>`;
    }
    
    bgContainer.innerHTML = rowsHtml;
}

// Logika Tombol Halaman 1
btnYes1.addEventListener('click', showFinalPage);
btnNo1.addEventListener('click', () => {
    step1.classList.add('hidden');
    step2.classList.remove('hidden');
});

// Logika Tombol Halaman 2
btnYes2.addEventListener('click', showFinalPage);
btnNo2.addEventListener('click', () => {
    step2.classList.add('hidden');
    step3.classList.remove('hidden');
});

// Logika Tombol Halaman 3
btnContinue.addEventListener('click', showFinalPage);