document.addEventListener('DOMContentLoaded', () => {
    console.log('❤️ Valentine application loaded successfully');
    
    // Add ambient music hint (optional interaction)
    document.addEventListener('valentine-accepted', () => {
        console.log('🎉 Valentine accepted! Celebration triggered.');
    });
});
