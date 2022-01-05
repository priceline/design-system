import React from 'react'
import PropTypes from 'prop-types'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const BaseCSS = ({ css }) => (
  <style
    dangerouslySetInnerHTML={{
      __html: css,
    }}
  />
)
BaseCSS.propTypes = {
  css: PropTypes.any,
}
BaseCSS.defaultProps = {
  css: '*{box-sizing:border-box}body{margin:0}',
}

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    )
    const styles = sheet.getStyleElement()
    return { ...page, styles }
  }

  render() {
    const { styles } = this.props

    return (
      <Html>
        <Head>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Montserrat:500,700&display=swap'
          />
          <BaseCSS />
          {styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
