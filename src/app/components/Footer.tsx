import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#064EA4] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Software Recruitment co.</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Image
                  src="/fa-brands_linkedin-in.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Image
                  src="/mdi_twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Image
                  src="/ic_baseline-facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Image
                  src="/mdi_instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  For Jobseekers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  For clients
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Our sectors
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Sectors</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Software engineering
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  DevOps
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Cloud
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Infrastructure
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Testing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Nav item
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Nav item
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Nav item
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Nav item
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Nav item
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Nav item
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
