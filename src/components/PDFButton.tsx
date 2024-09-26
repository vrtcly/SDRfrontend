import React from 'react';
import { Button } from "@/components/ui/button"
import { jsPDF } from 'jspdf';

interface PDFButtonProps {
  score: number;
}

const PDFButton: React.FC<PDFButtonProps> = ({ score }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`Quiz Score: ${score}`, 10, 10);
    doc.save('quiz-score.pdf');
  };

  return (
    <Button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
      onClick={generatePDF}
    >
      Generate PDF
    </Button>
  );
};

export default PDFButton;