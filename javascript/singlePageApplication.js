const changeSite = () => {
    const id = location.hash.slice(1) || 'main';
    const sites = document.getElementById('sites').children;

    let siteToShow = document.getElementById(id);

    if (siteToShow === null) {
        siteToShow = document.getElementById('not-found');
    }

    for (const site of sites) {
        site.style.display = 'none';
    }

    siteToShow.style.display = 'block';
};

window.addEventListener('hashchange', changeSite);

changeSite();
