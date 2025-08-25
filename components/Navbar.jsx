export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="skeuo-surface px-4 py-3 flex items-center justify-between rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl shadow-skeuoSm bg-gradient-to-br from-white to-[#e9eef7] grid place-items-center">
              <span className="text-clay-800 font-semibold">SS</span>
            </div>
            <span className="text-clay-900 font-semibold tracking-tight">Skeuomorphic Studio</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#showcase" className="link">Gallery</a>
            <a href="#controls" className="link">Controls</a>
            <a href="https://nextjs.org" target="_blank" rel="noreferrer" className="link">Docs</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
