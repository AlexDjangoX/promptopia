import '@styles/global.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: 'Polish Tutor Online',
  description: 'Discover & Share AI Prompts',
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className=" dark:bg-slate-900 app">
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
