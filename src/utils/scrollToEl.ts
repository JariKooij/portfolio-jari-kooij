export const scrollToEl = (el: HTMLDivElement | null) => {
    if (!el) return;

    const yOffset = -80;
    const top = el!.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top, behavior: "smooth" });
};
