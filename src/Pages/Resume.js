import React from 'react';
import { Document, Page, PDFViewer } from 'react-pdf';

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <PDFViewer width="100%" height={500}>
        <Document file="/resume.pdf">
          <Page pageNumber={1} />
        </Document>
      </PDFViewer>
    </section>
  );
};

export default Resume;