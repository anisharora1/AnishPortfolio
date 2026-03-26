
import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="w-full bg-[#0e0e11] text-white py-2 mt-12">
                <div className="container mx-auto text-center">
                    <p className="text-sm tracking-widest">&copy; {new Date().getFullYear()} Anish Arora. All rights reserved.💚</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer