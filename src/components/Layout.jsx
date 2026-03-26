import React from 'react'

const Layout = ({ children }) => {
    // Add pt-16 to offset the fixed navbar (h-16)
    return (
        <div className="min-h-screen w-full relative pt-16">
            {/* Azure Depths */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)",
                }}
            />
            {/* Your Content/Components */}
            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    )
}

export default Layout