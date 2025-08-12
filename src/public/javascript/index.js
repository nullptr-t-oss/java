function viewPdf(url) {
    const googleViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`;
    window.open(googleViewerUrl, '_blank');
}

function downloadDoc(url , filename) {
    const anchor_download = document.getElementById('downloader');
    
    anchor_download.href = new URL(url, document.baseURI).href;
    anchor_download.download = filename;
    anchor_download.click();
}

function applyAosAttributes() {
    const elements = document.querySelectorAll('div');
    elements.forEach((el, idx) => {
        el.setAttribute('data-aos', idx % 2 === 0 ? 'fade-left' : 'fade-right');
        el.setAttribute('data-aos-offset', '500');
        el.setAttribute('data-aos-duration', '500');
    });
}

// Call this function after the DOM is loaded
document.addEventListener('DOMContentLoaded', applyAosAttributes);
