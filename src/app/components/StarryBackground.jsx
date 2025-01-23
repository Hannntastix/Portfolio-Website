export default function StarryBackground() {
    return (
        <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-black">
                {[...Array(200)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                            width: Math.random() * 2 + 'px',
                            height: Math.random() * 2 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                            animation: `twinkle ${Math.random() * 5 + 3}s infinite`
                        }}
                    />
                ))}
            </div>
        </div>
    )
}