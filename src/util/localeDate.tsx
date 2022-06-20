export function localeDate (date: string, language: any) {
    console.log(language)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const d = new Date(date);
    return d.toLocaleDateString(language, options)
}