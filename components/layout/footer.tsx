export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-tech-grey-200 bg-tech-light py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Minimal Company Info */}
          <div className="text-center md:text-left">
            <p className="text-sm font-light text-tech-grey-500">
              © {currentYear} Z.E DIGITAL TECH SHPK
            </p>
            <p className="text-xs text-tech-grey-400 mt-1">
              M52231011N • Tiranë, Albania
            </p>
          </div>

          {/* Minimal Links */}
          <div className="flex gap-6 items-center">
            <a
              href="mailto:elsahaxhi@yahoo.com"
              className="text-sm font-light text-tech-grey-500 hover:text-blue-primary transition-colors"
            >
              Email
            </a>
            <div className="w-px h-4 bg-tech-grey-300" />
            <a
              href="https://github.com/ezekaj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light text-tech-grey-500 hover:text-blue-primary transition-colors"
            >
              GitHub
            </a>
            <div className="w-px h-4 bg-tech-grey-300" />
            <a
              href="https://linkedin.com/company/zedigitaltech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light text-tech-grey-500 hover:text-blue-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
