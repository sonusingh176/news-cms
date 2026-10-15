
function Header() {
  return (
    <header className="site-header">
      <a href="/" className="logo">
        DAILY<span>POST</span>
      </a>

      <div className="header-actions">
        <button aria-label="Search">
          <span>⌕</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
