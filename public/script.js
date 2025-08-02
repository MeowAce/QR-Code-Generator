function generateQR() {
    const input = document.getElementById('text-input').value.trim();
    const canvas = document.getElementById('qr-canvas');
    const message = document.getElementById('qr-message');
    const downloadContainer = document.getElementById('download-container');

    if (!input) {
        message.textContent = 'Masukkan teks dulu!!';
        canvas.classList.add('hidden');
        downloadContainer.classList.add('hidden');
        return;
    }

    message.textContent = '';
    canvas.classList.remove('hidden');

    QRCode.toCanvas(canvas, input, { width: 300 }, function (error) {
        if (error) {
            console.error(error);
            message.textContent = 'Gagal membuat QR code.';
            canvas.classList.add('hidden');
            downloadContainer.classList.add('hidden');
        } else {
            downloadContainer.classList.remove('hidden');
        }
    });
}

function downloadQR() {
    const canvas = document.getElementById('qr-canvas');
    const format = document.getElementById('format-select').value;
    const link = document.createElement('a');
    link.download = `qr-code.${format}`;
    link.href = canvas.toDataURL(`image/${format}`);
    link.click();
}

function clearInput() {
    document.getElementById('text-input').value = '';
    const canvas = document.getElementById('qr-canvas');
    const message = document.getElementById('qr-message');
    const downloadContainer = document.getElementById('download-container');
    
    canvas.classList.add('hidden');
    message.textContent = '';
    downloadContainer.classList.add('hidden');
}

function copyToClipboard() {
    const input = document.getElementById('text-input');
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(input.value);

    alert("Teks disalin ke papan klip: " + input.value);
}

function downloadQR() {
    const canvas = document.getElementById('qr-canvas');
    const format = document.getElementById('format-select').value;
    const link = document.createElement('a');
    link.download = `qr-code.${format}`;
    link.href = canvas.toDataURL(`image/${format}`);
    link.click();
}

function clearInput() {
    document.getElementById('text-input').value = '';
    const qrContainer = document.getElementById('qr-container');
    const message = document.getElementById('qr-message');
    const downloadContainer = document.getElementById('download-container');
    
    qrContainer.classList.add('hidden');
    message.textContent = '';
    downloadContainer.classList.add('hidden');
}

function copyToClipboard() {
    const input = document.getElementById('text-input');
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(input.value);

    alert("Teks disalin ke papan klip: " + input.value);
}