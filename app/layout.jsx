import '@styles/global.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: 'Polish Tutor Online',
  description:
    'Discover and share your experiences of learning the Polish language',
  icons: {
    icon: '/assets/images/coatOfArms.jpg',
  },
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
        <div className="main ">
          <div className=" gradient" />
        </div>

        <main className="app dark:bg-slate-900">
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
