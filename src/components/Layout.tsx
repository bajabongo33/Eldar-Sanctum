import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-eldar-dark text-white">
    <Header />
    <main className="flex-1 container mx-auto p-4">{children}</main>
    <Footer />
  </div>
);

export default Layout;
