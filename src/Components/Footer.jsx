export default function Footer() {
  return (
    <footer className="bg-[#548780] text-white py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4 text-2xl">OK Design</div>
            <p className="">Sophisticated interiors for modern living</p>
          </div>
          <div>
            <h3 className="mb-4 text-2xl">Contact</h3>
            <p className="">info@studiointerior.com</p>
            <p className="">+995 514-257-257</p>
          </div>
          <div>
            <h3 className="mb-4 text-2xl">Follow Us</h3>
            <div className="flex gap-4 ">
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
        <div className="mt-8 pt-8 border-t border-[#f5be9e] text-center">
          <p>© 2025 OK Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
