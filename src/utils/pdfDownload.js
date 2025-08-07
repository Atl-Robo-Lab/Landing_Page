// Utility function for handling PDF downloads
export const downloadPdf = (pdfName = 'atlrobo-brochure') => {
  const pdfUrl = `/${pdfName}.pdf`;
  
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = `${pdfName}.pdf`;
  link.target = '_blank';
  
  // Add to DOM, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Optional: Track download analytics
  console.log(`PDF downloaded: ${pdfName}`);
};

// Alternative function that opens PDF in new tab
export const openPdfInNewTab = (pdfName = 'atlrobo-brochure') => {
  const pdfUrl = `/${pdfName}.pdf`;
  window.open(pdfUrl, '_blank');
};