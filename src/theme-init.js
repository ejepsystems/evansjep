try { const theme=localStorage.getItem('evans-jep-theme'); if(theme==='dark'||theme==='light')document.documentElement.dataset.theme=theme; } catch {}
