// Header.jsx

import Link from 'next/link';
import Image from 'next/image'; // For optimized image loading

const Header = () => {
  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
            {/* Consider replacing the SVG with a Next.js Image component for optimization */}
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
              <use xlinkHref="#bootstrap" /> 
            </svg>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link href="#" className="nav-link px-2 link-secondary">Overview</Link></li>
            <li><Link href="#" className="nav-link px-2 link-body-emphasis">Inventory</Link></li>
            <li><Link href="#" className="nav-link px-2 link-body-emphasis">Customers</Link></li>
            <li><Link href="#" className="nav-link px-2 link-body-emphasis">Products</Link></li>
          </ul>

          {/* Form handling would typically be done with a library or custom logic */}
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>

          <div className="dropdown text-end">
            <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              {/* Use Next.js Image for optimized user image loading */}
              <Image src="" alt="mdo" width={32} height={32} className="rounded-circle" />
            </a>
            <ul className="dropdown-menu text-small">
              <li><Link className="dropdown-item" href="#">New project...</Link></li>
              <li><Link className="dropdown-item" href="#">Settings</Link></li>
              <li><Link className="dropdown-item" href="#">Profile</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Link className="dropdown-item" href="#">Sign out</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
