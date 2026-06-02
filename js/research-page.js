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

function formatPubDate(dateStr) {
    if (!dateStr) return '';
    const [y, m] = dateStr.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[parseInt(m, 10) - 1] + ' ' + y;
}

function renderDirectionsTOC(lang) {
    const label = t('rd_toc_label', lang);
    const items = researchDirections.map((dir, i) => {
        const num = pad2(i + 1);
        const title = escapeHtml(t(dir.titleKey, lang));
        const tagline = escapeHtml(t(dir.taglineKey, lang));
        return `
            <li class="toc-item-wrap">
                <a class="toc-item" href="#${dir.id}">
                    <span class="toc-num">${num}</span>
                    <span class="toc-text">
                        <span class="toc-title">${title}</span>
                        <span class="toc-tagline">${tagline}</span>
                    </span>
                    <span class="toc-arrow" aria-hidden="true">↓</span>
                </a>
            </li>
        `;
    }).join('');

    return `
        <nav class="directions-toc-block" aria-label="${escapeHtml(label)}">
            <p class="section-label">${escapeHtml(label)}</p>
            <ul class="directions-toc">${items}</ul>
        </nav>
    `;
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

function renderDirectionSection(dir, idx, lang) {
    const title = escapeHtml(t(dir.titleKey, lang));
    const tagline = escapeHtml(t(dir.taglineKey, lang));
    const desc = escapeHtml(t(dir.descKey, lang));
    const themes = (dir.themeKeys || []).map(k => t(k, lang));

    const eyebrowLabel = escapeHtml(t('rd_eyebrow_label', lang));
    const overviewLabel = escapeHtml(t('rd_overview_label', lang));
    const themesLabel = escapeHtml(t('rd_themes_label', lang));
    const featuredLabel = escapeHtml(t('rd_featured', lang));

    const indexLabel = `${pad2(idx + 1)} / ${pad2(researchDirections.length)}`;

    const themesHtml = themes.length
        ? `
            <section class="direction-section">
                <p class="section-label">${themesLabel}</p>
                <ul class="themes-list">
                    ${themes.map(theme => `<li class="theme-pill">${escapeHtml(theme)}</li>`).join('')}
                </ul>
            </section>
        `
        : '';

    return `
        <section class="direction-panel" id="${dir.id}">
            <header class="direction-header">
                <p class="section-label direction-eyebrow">
                    <span class="direction-eyebrow-label">${eyebrowLabel}</span>
                    <span class="direction-eyebrow-divider">·</span>
                    <span class="direction-eyebrow-index">${indexLabel}</span>
                </p>
                <h2 class="direction-title" data-i18n="${dir.titleKey}">${title}</h2>
                <p class="direction-tagline">${tagline}</p>
            </header>

            <section class="direction-section">
                <p class="section-label">${overviewLabel}</p>
                <p class="direction-desc">${desc}</p>
            </section>

            ${themesHtml}

            <section class="direction-section">
                <p class="section-label">${featuredLabel}</p>
                <div class="featured-papers">
                    ${dir.featured.map(p => renderFeaturedPaper(p, lang)).join('')}
                </div>
            </section>
        </section>
    `;
}

function renderAll() {
    const root = document.getElementById('research-content');
    if (!root) return;
    const lang = currentLang();

    root.innerHTML = `
        ${renderDirectionsTOC(lang)}
        <div class="directions-stack">
            ${researchDirections.map((dir, i) => renderDirectionSection(dir, i, lang)).join('')}
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', renderAll);
document.addEventListener('languageChanged', renderAll);
