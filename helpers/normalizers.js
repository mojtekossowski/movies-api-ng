exports.normalizeTitle = (title) => {
    return title.replace(/\s+/g, '-').toLowerCase();
}