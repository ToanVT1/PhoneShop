// count, as: As ="span"
export function Text({children, as:As = "span"}){
    return (
        <>
        {/* span, h1, h2, h3, h4, h5, h6, p */}
        <As>{children}</As>
        </>
    )
}