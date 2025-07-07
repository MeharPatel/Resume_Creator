import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="home-mid-sections py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center">
              <h2 className="text-3xl font-bold">
                MakeYour<span className="text-resume-primary">Resume</span>
              </h2>
            </Link>
            <p className="mt-4 max-w-md">
              Create stunning, professional resumes in minutes with our easy-to-use
              builder. Stand out from the crowd and land your dream job.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="footer-link transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/builder" className="footer-link transition-colors">
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Email:</span> meharpatel2512@gmail.com
              </li>
              <li>
                <span className="font-semibold">Phone:</span> +91 63548 83965
              </li>
              <li>
                <span className="font-semibold">Address:</span> Surat - 395001, Gujarat, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center md:flex md:justify-between">
          <p className="text-gray-400">
            © {new Date().getFullYear()} MakeYourResume. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link to="" className="text-gray-400 hover:text-resume-primary mx-2 transition-colors">
              Privacy Policy
            </Link>
            <Link to="" className="text-gray-400 hover:text-resume-primary mx-2 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;