
function useDateFormat(){

    const formatedDate = (rowDate) => {
        const fd = new Date(rowDate);

        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(fd);
        const mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(fd);
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(fd);
        const h = new Intl.DateTimeFormat('fr', { hour: '2-digit' }).format(fd).substring(0, 2);
        const m = new Intl.DateTimeFormat('fr', { minute: 'numeric' }).format(fd);
        const s = new Intl.DateTimeFormat('fr', { second: 'numeric' }).format(fd);

        const hDisplay = h.length < 2 ? '0'+h : h;
        const mDisplay = m.length < 2 ? '0'+m : m;
        const sDisplay = s.length < 2 ? '0'+s : s;

        return `${da}/${mo}/${ye} à ${hDisplay}:${mDisplay}:${sDisplay}`
    }

    return {
        formatedDate,
    }
}

export default useDateFormat