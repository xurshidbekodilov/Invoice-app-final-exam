// formatDate funksiyasi parametr sifatida dateString oladi. dateString — bu sana yoki vaqtni ifodalovchi matnli qiymat bo'ladi. Masalan, "2025-02-12" ni "February 12, 2025" kabi chiqaradi.

export default function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleString('en-US', options);
}