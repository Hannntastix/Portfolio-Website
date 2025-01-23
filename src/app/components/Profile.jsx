"use client"

const Profile = () => {
    return (
        <section id="profile" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden border-2 border-purple-800">
                            <img
                                src="/assets/Profile.jpg"
                                alt="Profile"
                                className="object-cover w-full h-full hover:scale-105 transition duration-300 opacity-80"
                            />
                        </div>
                        <div className="absolute -z-10 top-4 right-4 w-full h-full rounded-2xl bg-blue-600/20"></div>
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-5xl text-center md:text-left font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Hello, i'm M.Raihan Athalah Ilham
                        </h1>
                        <h2 className="text-2xl text-purple-400">An Informatics Engineer Student</h2>
                        <p className="text-gray-300 text-lg leading-relaxed text-justify">
                            An Informatics Engineering student with a passion for programming, proficient in Next.js, React, TypeScript, JavaScript, HTML, CSS,
                            Tailwind, and React Native. Possesses strong skills in application and web development, as well as database management. Experienced
                            in creating software and designing mobile applications with a focus on content and user experience. An adaptive learner with strong
                            analytical abilities, ready to tackle complex technical challenges.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="border h-auto border-purple-800 p-4 rounded-lg bg-black/50">
                                <h3 className="text-purple-400 font-semibold">Years Experience</h3>
                                <p className="text-3xl font-bold text-white">1+</p>
                            </div>
                            <div className="border border-purple-800 p-4 rounded-lg bg-black/50">
                                <h3 className="text-purple-400 font-semibold">Projects</h3>
                                <p className="text-3xl font-bold text-white">7+</p>
                            </div>
                            <div className="border border-purple-800 p-4 rounded-lg bg-black/50">
                                <h3 className="text-purple-400 font-semibold">Education</h3>
                                <p className="text-lg font-bold text-white">Institut Teknologi Sumatera (2022 - Now)</p>
                                <p className="text-lg font-bold text-zinc-300">GPA 3.31/4.00</p>
                            </div>
                            <div className="border border-purple-800 py-4 px-2 rounded-lg bg-black/50">
                                <h3 className="text-purple-400 font-semibold">Programming Skills</h3>
                                <p className="text-lg font-bold text-white">HMTL, CSS, JavaScript, Python, C++, React JS, Tailwind CSS, Next JS, MongoDB, MySQL</p>
                            </div>
                            <div className="border border-purple-800 p-4 rounded-lg bg-black/50">
                                <h3 className="text-purple-400 font-semibold">Tools</h3>
                                <p className="text-lg font-bold text-white">Xampp 7/10</p>
                                <p className="text-lg font-bold text-white">VS Code 8/10</p>
                                <p className="text-lg font-bold text-white">Figma 7/10</p>
                                <p className="text-lg font-bold text-white">Postman 7/10</p>
                                <p className="text-lg font-bold text-white">GIT 7/10</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile