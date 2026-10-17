const epoki = [
{ numer: "01", nazwa: "Starożytność", opis: "Bogowie, proporcje i harmonia.", symbol: "◉" },
{ numer: "02", nazwa: "Średniowiecze", opis: "Symbolika, światło i sacrum.", symbol: "✳" },
{ numer: "03", nazwa: "Renesans", opis: "Człowiek w centrum świata.", symbol: "◒" },
{ numer: "04", nazwa: "Barok", opis: "Dramat, ruch i emocje.", symbol: "✺" },
];

export default function Home() {
return (
<main>
  <header className="site-header">
    <a href="/" className="site-logo">Krótka Sztuka<span>.</span></a>
    </header>
<nav className="navbar">
<a className="logo" href="#">krótka<span>.</span>sztuka</a>
<div className="nav-links">
<a href="#epoki">Epoki</a>
<a href="#nauka">Materiały</a>
<a href="#quiz">Quizy</a>
</div>
<a className="nav-button" href="#epoki">Zacznij naukę ↗</a>
</nav>

<section className="hero">
<div className="hero-copy">
<p className="eyebrow">HISTORIA SZTUKI, ALE PO LUDZKU</p>
<h1>Sztuka jest<br />bliżej, niż <em>myślisz.</em></h1>
<p className="hero-description">
Odkrywaj epoki, poznawaj artystów i ucz się rozpoznawać dzieła.
Bez nudnego wkuwania.
</p>
<a className="primary-button" href="#epoki">Odkryj materiały ↗</a>
<p className="hero-note">✳ Twoja mała przestrzeń wielkiej sztuki</p>
</div>

<div className="artwork">
<div className="artwork-label">GALERIA / 001</div>
<div className="art-circle" />
<div className="art-circle second" />
<div className="art-shape" />
<p className="artwork-caption">Sztuka opowiada historie.</p>
</div>
</section>

<section className="section epochs" id="epoki">
<p className="eyebrow">TWOJA PODRÓŻ PRZEZ WIEKI</p>
<h2>Każda epoka ma <em>swoją historię.</em></h2>
<p className="section-intro">Wybierz kierunek i poznawaj sztukę we własnym tempie.</p>

<div className="epoch-grid">
{epoki.map((epoka) => (
<a href="#nauka" className={`epoch-card epoch-${epoka.numer}`} key={epoka.numer}>
<span className="epoch-number">{epoka.numer}</span>
<span className="epoch-symbol">{epoka.symbol}</span>
<h3>{epoka.nazwa}</h3>
<p>{epoka.opis}</p>
<span className="card-arrow">Odkryj ↗</span>
</a>
))}
</div>
</section>

<section className="section learning" id="nauka">
<p className="eyebrow">UCZ SIĘ PO SWOJEMU</p>
<h2>Mniej wkuwania.<br /><em>Więcej rozumienia.</em></h2>
<div className="learning-grid">
<article>
<span className="feature-symbol">✎</span>
<h3>Notatki bez chaosu</h3>
<p>Najważniejsze informacje podane jasno i przystępnie.</p>
</article>
<article id="quiz">
<span className="feature-symbol">✳</span>
<h3>Quizy i powtórki</h3>
<p>Sprawdzaj wiedzę i utrwalaj to, czego się uczysz.</p>
</article>
<article>
<span className="feature-symbol">◉</span>
<h3>Odkrywaj dzieła</h3>
<p>Łącz artystów, obrazy, style i historyczne konteksty.</p>
</article>
</div>
</section>

<footer className="footer">
<a className="logo" href="#">krótka<span>.</span>sztuka</a>
<p>Patrz. Odkrywaj. Rozumiej.</p>
<span>Projekt edukacyjny · Zwolnieni z Teorii</span>
</footer>
</main>
);
}

