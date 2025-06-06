import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Set the PDF.js worker source
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "../static/pdf.worker.min.mjs",
  //   "../static/pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).href;

const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // PDF file URL
  const pdfUrl =
    "/documents/Eleveting-your-digital-presence-through-expert-marketing-services.pdf";

  // Handle successful document load
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  // Handle document load errors
  const onDocumentLoadError = (error) => {
    console.error("Error loading PDF:", error);
    setError("Failed to load PDF. Please try again or check the file path.");
    setLoading(false);
  };

  // Reset state when component mounts/unmounts
  useEffect(() => {
    setLoading(true);
    setError(null);
    setNumPages(null);
  }, []);

  return (
    <div className="w-full md:w-[820px] xl:w-full">
      {loading && <p>Loading PDF...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={<p>Loading PDF...</p>}
      >
        {numPages &&
          Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              width={Math.min(800, window.innerWidth - 40)} // Responsive width
            />
          ))}
      </Document>
    </div>
  );
};

export default PDFViewer;
