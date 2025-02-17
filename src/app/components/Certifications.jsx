import Link from "next/link"

export default function Certifications() {
    const certifications = [
        {
            name: "Fundamentals of machine learning",
            issuer: "Microsot Learn",
            date: "Jan 2025",
            image: "/assets/Cert7.png",
            link: "https://learn.microsoft.com/en-us/users/raihanathalah-5682/achievements/print/3rjcuy2h",
        },
        {
            name: "The Complete 2024 Web Development Bootcamp",
            issuer: "Udemy",
            date: "Jul 2024",
            image: "/assets/Cert1.png",
            link: "https://www.udemy.com/certificate/UC-d5ca7417-f5bc-4327-b01a-96b2b7052079/",
        },
        {
            name: "Website Development Fundamental",
            issuer: "MySkill",
            date: "Jun 2024 - Jun 2031",
            image: "/assets/Cert2.png",
            link: "https://drive.google.com/drive/u/0/folders/1N9OlkxS4q0_fQeK80dpNpTh0h0iWLVBt",
        },
        {
            name: "Belajar Membuat Front-End Web untuk Pemula",
            issuer: "Dicoding",
            date: "May 2024 - May 2027",
            image: "/assets/Cert3.png",
            link: "https://www.dicoding.com/certificates/0LZ066WN0Z65",
        },
        {
            name: "Belajar Dasar AI",
            issuer: "Dicoding",
            date: "Jun 2024 - Jun 2027",
            image: "/assets/Cert4.png",
            link: "https://www.dicoding.com/certificates/MEPJN98JJX3V",
        },
        {
            name: "Belajar Dasar Structured Query Language (SQL)",
            issuer: "Dicoding",
            date: "Jul 2024 - Jul 2027",
            image: "/assets/Cert5.png",
            link: "https://www.dicoding.com/certificates/6RPN10KKRX2M",
        },
    ]

    return (
        <section id="certifications" className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-12">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <div key={index} className="border border-cyan-900 bg-cyan-900 bg-opacity-50 p-6 rounded-lg hover:border-blue-600 transition">
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="aspect-video relative mb-4">
                                    <img
                                        src={cert.image}
                                        alt={cert.name}
                                        className="object-cover rounded"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                                <div className="text-purple-400">{cert.issuer}</div>
                                <div className="text-blue-400">{cert.date}</div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full flex justify-center items-center my-10 px-4">
                <Link
                    href="https://drive.google.com/drive/folders/19TXQAhMQEZLx_oTH0kI88REWCf2Fuo-h?usp=sharing"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-700 to-cyan-800 text-white rounded-lg hover:from-cyan-800 hover:to-cyan-900 ease-in-out transition-colors duration-300 shadow-md hover:shadow-lg group"
                >
                    <span>More Certifications</span>
                    <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </Link>
            </div>
        </section>
    )
}