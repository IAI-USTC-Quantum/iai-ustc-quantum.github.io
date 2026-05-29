function renderPapers() {
    const byYear = {};
    publications.forEach(p => {
        if (!byYear[p.year]) byYear[p.year] = [];
        byYear[p.year].push(p);
    });

    const container = document.getElementById('papers-container');
    if (!container) return;

    const yearsSorted = Object.keys(byYear).sort((a, b) => b - a);

    container.innerHTML = yearsSorted.map(year => `
        <div class="year-group">
            <h2 class="year-heading">${year}</h2>
            ${byYear[year].map(p => `
                <div class="paper-card">
                    <p class="paper-venue">${p.venue}</p>
                    <p class="paper-title">${p.title}</p>
                    <p class="paper-authors">${p.authors.join(', ')}</p>
                    <div class="paper-links">
                        ${p.doi ? `<a href="https://doi.org/${p.doi}" class="paper-link doi" target="_blank" rel="noopener">DOI</a>` : ''}
                        ${p.arxiv ? `<a href="https://arxiv.org/abs/${p.arxiv}" class="paper-link arxiv" target="_blank" rel="noopener">arXiv</a>` : ''}
                    </div>
                </div>
            `).join('')}
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderPapers);
