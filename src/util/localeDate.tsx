export function localeDate (date: string, language: string) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const localeDate = new Date(date);
    return d.toLocaleDateString(language, options)
}
