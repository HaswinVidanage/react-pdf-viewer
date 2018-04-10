import React from 'react';
import ReactDOM from 'react-dom';
import PDFViewer from './PDFViewer/PDFViewer';
import './PDFViewer/styles/index.css';

ReactDOM.render(<PDFViewer url='compressed.tracemonkey-pldi-09.pdf'/>, document.getElementById('root'));
