const intersection = images => {
    let observer = new IntersectionObserver((entries, self) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target
                const src = img.getAttribute("data-src")
                img.setAttribute("src", src)
                self.unobserve(entry.target)
            }
        })
    })
    images.forEach(image => {
        observer.observe(image)
    })
}

export default intersection
