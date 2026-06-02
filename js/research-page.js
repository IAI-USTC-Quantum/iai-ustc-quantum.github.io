var _activeDirection = 0;

function t(key, lang) {
    return (translations[lang] && translations[lang][key])
        || translations.en[key]
        || key;
}

function currentLang() {
    return localStorage.getItem('preferred-lang') || 'zh';
}

function pad2(n) {
    return n < 10 ? '0' + n : '' + n;
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
}

function renderResearchTabs() {
    const tabs = document.getElementById('research-tabs');
    if (!tabs) return;

    const lang = currentLang();
    tabs.innerHTML = researchDirections.map((dir, i) => {
        const title = t(dir.titleKey, lang);
        const num = pad2(i + 1);
        return `<button class="tab-btn${i === 0 ? ' active' : ''}" data-idx="${i}" data-i18n="${dir.titleKey}">
            <span class="tab-num">${num}</span>
            <span class="tab-label">${escapeHtml(title)}</span>
        </button>`;
    }).join('');

    tabs.addEventListener('click', (e) => {
        const btn = e.target.closest('.tab-btn');
        if (!btn) return;
        const idx = parseInt(btn.dataset.idx, 10);
        if (!Number.isFinite(idx)) return;
        showDirection(idx);
    });
}

function formatPubDate(dateStr) {
    if (!dateStr) return '';
    const [y, m] = dateStr.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[parseInt(m, 10) - 1] + ' ' + y;
}

function renderFeaturedPaper(paper, lang) {
    const link = paper.doi
        ? `https://doi.org/${paper.doi}`
        : paper.arxiv
            ? `https://arxiv.org/abs/${paper.arxiv}`
            : null;

    const titleHtml = link
        ? `<a class="featured-paper-title" href="${link}" target="_blank" rel="noopener">${escapeHtml(paper.title)}</a>`
        : `<span class="featured-paper-title">${escapeHtml(paper.title)}</span>`;

    const links = [];
    if (paper.doi) {
        links.push(`<a class="paper-link doi" href="https://doi.org/${paper.doi}" target="_blank" rel="noopener">DOI</a>`);
    }
    if (paper.arxiv) {
        links.push(`<a class="paper-link arxiv" href="https://arxiv.org/abs/${paper.arxiv}" target="_blank" rel="noopener">arXiv</a>`);
    }

    const summary = paper.summaryKey
        ? `<p class="featured-summary">${escapeHtml(t(paper.summaryKey, lang))}</p>`
        : '';

    const dateLabel = paper.pubDate ? formatPubDate(paper.pubDate) : '';
    const venueRow = `
        <div class="featured-paper-head">
            <span class="featured-venue">${escapeHtml(paper.venue)}</span>
            ${dateLabel ? `<span class="featured-date">${escapeHtml(dateLabel)}</span>` : ''}
        </div>
    `;

    return `
        <article class="featured-paper-card">
            ${venueRow}
            ${titleHtml}
            <p class="featured-authors">${escapeHtml(paper.authors.join(', '))}</p>
            ${summary}
            ${links.length ? `<div class="featured-links">${links.join('')}</div>` : ''}
        </article>
    `;
}

function showDirection(idx) {
    _activeDirection = idx;

    document.querySelectorAll('.tab-btn').forEach((b, i) => {
        b.classList.toggle('active', i === idx);
    });

    const content = document.getElementById('research-content');
    if (!content) return;

    const dir = researchDirections[idx];
    const lang = currentLang();

    const title = t(dir.titleKey, lang);
    const tagline = t(dir.taglineKey, lang);
    const desc = t(dir.descKey, lang);
    const themes = (dir.themeKeys || []).map(k => t(k, lang));

    const eyebrowLabel = t('rd_eyebrow_label', lang);
    const overviewLabel = t('rd_overview_label', lang);
    const themesLabel = t('rd_themes_label', lang);
    const featuredLabel = t('rd_featured', lang);

    const indexLabel = `${pad2(idx + 1)} / ${pad2(researchDirections.length)}`;

    const themesHtml = themes.length
        ? `
            <section class="direction-section">
                <p class="section-label">${escapeHtml(themesLabel)}</p>
                <ul class="themes-list">
                    ${themes.map(theme => `<li class="theme-pill">${escapeHtml(theme)}</li>`).join('')}
                </ul>
            </section>
        `
        : '';

    content.innerHTML = `
        <article class="direction-panel">
            <header class="direction-header">
                <p class="section-label direction-eyebrow">
                    <span class="direction-eyebrow-label">${escapeHtml(eyebrowLabel)}</span>
                    <span class="direction-eyebrow-divider">·</span>
                    <span class="direction-eyebrow-index">${indexLabel}</span>
                </p>
                <h2 class="direction-title" data-i18n="${dir.titleKey}">${escapeHtml(title)}</h2>
                <p class="direction-tagline">${escapeHtml(tagline)}</p>
            </header>

            <section class="direction-section">
                <p class="section-label">${escapeHtml(overviewLabel)}</p>
                <p class="direction-desc">${escapeHtml(desc)}</p>
            </section>

            ${themesHtml}

            <section class="direction-section">
                <p class="section-label">${escapeHtml(featuredLabel)}</p>
                <div class="featured-papers">
                    ${dir.featured.map(p => renderFeaturedPaper(p, lang)).join('')}
                </div>
            </section>
        </article>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    renderResearchTabs();
    showDirection(0);
});

document.addEventListener('languageChanged', () => {
    showDirection(_activeDirection);
});
