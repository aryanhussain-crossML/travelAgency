import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container mx-auto">
        <div className="footer flex justify-between gap-4">
          <div className=" w-full lg:flex gap-20 py-20 ">
            <div className="mb-6 lg:mb-0">
              <a href="/" className="text-2xl font-bold">
                TravelHub
              </a>
              <p className="mt-2">Making your travel dreams a reality.</p>
            </div>
            <div className="flex justify-between space-x-4">
              <div className="mb-6 lg:mb-0">
                <h3 className="uppercase font-semibold mb-2">Quick Links</h3>
                <ul>
                  <li>
                    <Link href="/about" className="hover:text-blue-300">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/packages" className="hover:text-blue-300">
                      Our Packages
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-blue-300">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contactus" className="hover:text-blue-300">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="uppercase font-semibold mb-2">Follow Us</h3>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-10 border-t border-gray-700 pt-8">
            &copy; {new Date().getFullYear()} TravelHub. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
