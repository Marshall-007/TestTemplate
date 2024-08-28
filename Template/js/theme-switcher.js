function setTheme(color) {
    const themeStyle = document.getElementById('theme-style');
    if (color === 'red') {
        themeStyle.setAttribute('href', 'css/theme-red.css');
    } else if (color === 'brown') {
        themeStyle.setAttribute('href', 'css/theme-brown.css');
    } else if (color === 'blue') {
        themeStyle.setAttribute('href', 'css/theme-blue.css');
    }
}
