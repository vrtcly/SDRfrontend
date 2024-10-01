import React from 'react';
import { Button } from "@/components/ui/button"
import { jsPDF } from 'jspdf';

interface PDFButtonProps {
  score: number;
}

const PDFButton: React.FC<PDFButtonProps> = ({ score }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Quiz Results', 20, 20);
    doc.setFontSize(14);
    doc.text(`Total Score: ${score}`, 20, 40);
    doc.text('Thank you for completing the quiz!', 20, 60);
    doc.save('quiz-results.pdf');
  };

  return (
    <Button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      onClick={generatePDF}
    >
      Generate PDF
    </Button>
  );
};

export default PDFButton;