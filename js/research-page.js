var _activeDirection = 0;

function renderResearchTabs() {
    const tabs = document.getElementById('research-tabs');
    if (!tabs) return;

    tabs.innerHTML = researchDirections.map((dir, i) => {
        const title = translations.en[dir.titleKey] || dir.titleKey;
        return `<button class="tab-btn${i === 0 ? ' active' : ''}" data-idx="${i}" data-i18n="${dir.titleKey}">${title}</button>`;
    }).join('');

    tabs.addEventListener('click', (e) => {
        const btn = e.target.closest('.tab-btn');
        if (!btn) return;
        const idx = parseInt(btn.dataset.idx, 10);
        showDirection(idx);
    });
}

function showDirection(idx) {
    _activeDirection = idx;
    document.querySelectorAll('.tab-btn').forEach((b, i) => {
        b.classList.toggle('active', i === idx);
    });

    const content = document.getElementById('research-content');
    if (!content) return;

    const dir = researchDirections[idx];
    const lang = localStorage.getItem('preferred-lang') || 'zh';
    const desc = translations[lang][dir.descKey] || translations.en[dir.descKey] || '';
    const featuredLabel = translations[lang]['rd_featured'] || translations.en['rd_featured'] || 'Featured Publications';

    content.innerHTML = `
        <div class="direction-panel">
            <p class="direction-desc">${desc}</p>
            <h3 class="featured-heading">${featuredLabel}</h3>
            <div class="featured-papers">
                ${dir.featured.map(paper => renderFeaturedPaper(paper)).join('')}
            </div>
        </div>
    `;
}

function renderFeaturedPaper(p) {
    const link = p.doi
        ? `https://doi.org/${p.doi}`
        : p.arxiv
            ? `https://arxiv.org/abs/${p.arxiv}`
            : '#';
    const titleHtml = link !== '#'
        ? `<a class="paper-title" href="${link}" target="_blank" rel="noopener">${p.title}</a>`
        : `<span class="paper-title">${p.title}</span>`;

    return `
        <div class="featured-paper-card">
            <span class="featured-venue">${p.venue}</span>
            ${titleHtml}
            <p class="featured-authors">${p.authors.join(', ')}</p>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    renderResearchTabs();
    showDirection(0);
});

document.addEventListener('languageChanged', () => {
    showDirection(_activeDirection);
});
