// Footer.jsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="p-3 mt-3 border-top">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <div className="col-12 col-lg-auto mb-3 mb-lg-0 text-center text-lg-start">
            &copy; {new Date().getFullYear()} Your Company Name
          </div>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link href="#" className="nav-link px-2 link-secondary">About</Link></li>
            <li><Link href="#" className="nav-link px-2 link-secondary">Contact</Link></li>
            <li><Link href="#" className="nav-link px-2 link-secondary">Privacy</Link></li>
            <li><Link href="#" className="nav-link px-2 link-secondary">Terms</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
