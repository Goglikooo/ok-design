export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">OK Design</div>
            <p className="text-neutral-400">
              Sophisticated interiors for modern living
            </p>
          </div>
          <div>
            <h3 className="mb-4">Contact</h3>
            <p className="text-neutral-400">info@studiointerior.com</p>
            <p className="text-neutral-400">+995 514-257-257</p>
          </div>
          <div>
            <h3 className="mb-4">Follow Us</h3>
            <div className="flex gap-4 text-neutral-400">
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Pinterest
              </a>
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-neutral-400">
          <p>© 2025 Studio Interior. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
