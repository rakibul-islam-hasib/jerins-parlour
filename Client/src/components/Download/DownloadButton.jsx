import React, { useRef } from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  text: {
    marginBottom: 10,
    fontSize: 12,
  },
});

const MyPDF = ({ targetComponentRef }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.text}>Contact Component</Text>
        {targetComponentRef.current}
      </View>
    </Page>
  </Document>
);

const DownloadButton = ({ targetComponentId }) => {
  const targetComponentRef = useRef();

  const downloadPDF = () => {
    const element = document.getElementById(targetComponentId);
    targetComponentRef.current = element.cloneNode(true);

    const link = document.createElement('a');
    link.href = URL.createObjectURL(
      new Blob([<MyPDF targetComponentRef={targetComponentRef} />], { type: 'application/pdf' })
    );
    link.setAttribute('download', 'component.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <PDFDownloadLink document={<MyPDF targetComponentRef={targetComponentRef} />} fileName="component.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Generating PDF...' : 'Download PDF'
      }
    </PDFDownloadLink>
  );
};

export default DownloadButton;
