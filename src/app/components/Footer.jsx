"use client"

import { Mail, Phone, Github, Linkedin, MapPin, Instagram } from 'lucide-react'

const Footer = () => {
    return (
        <footer id="footer" className="bg-black border-t border-purple-900 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-12">Let's Connect</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {/* Contact Info */}
                    <div className="text-center p-6 bg-black/50 border border-purple-800 rounded-lg hover:border-blue-600 transition">
                        <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rehan121203@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition">
                            rehan121203@gmail.com
                        </a>
                    </div>


                    <div className="text-center p-6 bg-black/50 border border-purple-800 rounded-lg hover:border-blue-600 transition">
                        <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                        <p className="text-gray-300">Bandar Lampung, Lampung</p>
                    </div>

                    <div className="text-center p-6 bg-black/50 border border-purple-800 rounded-lg hover:border-blue-600 transition">
                        <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                        <a href="https://wa.me/6285266704515" target='_blank' className="text-gray-300 hover:text-blue-400 transition">
                            +62 85266 704515
                        </a>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-6">
                    <a href="https://github.com/Hannntastix" target="_blank" rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/mraihan-athalah/" target="_blank" rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://www.instagram.com/m.raihanathalah/" target="_blank" rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition">
                        <Instagram className="w-6 h-6" />
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center mt-12 text-gray-400">
                    © {new Date().getFullYear()} M.Raihan Athalah Ilham. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer