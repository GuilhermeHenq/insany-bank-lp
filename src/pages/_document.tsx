import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="description"
            content="Participe da revolução do banco digital com o SmartMoney. Tecnologia, inovação e praticidade para você ou sua empresa."
          />
          <meta name="theme-color" content="#1D63FF" />

          <meta property="og:title" content="SmartMoney - O banco digital que fala sua língua" />
          <meta
            property="og:description"
            content="Tecnologia e inovação para sua vida financeira. Cadastre-se e acompanhe o lançamento oficial."
          />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="SmartMoney - O banco digital que fala sua língua" />
          <meta
            name="twitter:description"
            content="Tecnologia e inovação para sua vida financeira. Cadastre-se e acompanhe o lançamento oficial."
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon-v2.ico" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
