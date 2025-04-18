// app/layout.jsx
import "./../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const layout = ({ children }) => {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

export default layout;