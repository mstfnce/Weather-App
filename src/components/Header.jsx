export default function Header({ children }) {
  return (
    <header className="site-header">
      <div className="container">
        {children}
        <span className="header-tag">İstanbul · 41.0°N 28.9°E</span>
      </div>
    </header>
  );
}
