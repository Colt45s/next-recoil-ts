import React from 'react';
import Document from 'next/document';
import Layout from '../components/Layout';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return <Layout />;
  }
}

export default MyDocument;
