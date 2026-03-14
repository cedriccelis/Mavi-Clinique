import React, { useState, useRef, useCallback, useEffect } from 'react';

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
}

// This component takes two image URLs (before and after) and creates a slider to compare them.
export const ImageComparison: React.FC<ImageComparisonProps> = ({ 
  beforeImage, 
  afterImage, 
  altBefore = 'Before', 
  altAfter = 'After' 
}) => {
    // State to track the slider's position (from 0 to 100)
    const [sliderPosition, setSliderPosition] = useState(50);
    // State to track if the user is currently dragging the slider
    const [isDragging, setIsDragging] = useState(false);

    // Ref to the main container element to get its dimensions
    const containerRef = useRef<HTMLDivElement>(null);

    // Function to handle the slider movement (for both mouse and touch)
    const handleMove = useCallback((clientX: number) => {
        // If not dragging or no container ref, do nothing
        if (!isDragging || !containerRef.current) return;
        
        // Get the bounding box of the container
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate the new slider position as a percentage
        let newPosition = ((clientX - rect.left) / rect.width) * 100;

        // Clamp the position to be between 0 and 100 to prevent it from going out of bounds
        newPosition = Math.max(0, Math.min(100, newPosition));
        
        setSliderPosition(newPosition);
    }, [isDragging]);

    // Mouse event handlers
    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = useCallback(() => setIsDragging(false), []);
    const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
    
    // Touch event handlers
    const handleTouchStart = () => setIsDragging(true);
    const handleTouchEnd = () => setIsDragging(false);
    const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

    // Effect to add and clean up global event listeners for mouse up/leave
    // This ensures dragging stops even if the cursor leaves the component area
    useEffect(() => {
        window.addEventListener('mouseup', handleMouseUp);
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseUp]);

    return (
        <div 
            ref={containerRef}
            className="relative w-full max-w-4xl mx-auto select-none rounded-xl overflow-hidden shadow-2xl aspect-[4/3]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp} // Stop dragging if mouse leaves the container
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* After Image (Top Layer) - Its visibility is controlled by the clip-path */}
            <div
                className="absolute top-0 left-0 h-full w-full overflow-hidden z-10"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={afterImage}
                    alt={altAfter}
                    className="h-full w-full object-cover object-left grayscale"
                    draggable="false"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 text-white text-xs uppercase tracking-widest backdrop-blur-sm rounded">Na</div>
            </div>

            {/* Before Image (Bottom Layer) */}
            <img
                src={beforeImage}
                alt={altBefore}
                className="block h-full w-full object-cover object-left grayscale"
                draggable="false"
                referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 text-white text-xs uppercase tracking-widest backdrop-blur-sm rounded z-20">Voor</div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center z-30"
                style={{ left: `calc(${sliderPosition}% - 2px)` }} // Center the handle on the line
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            >
                <div className={`bg-white rounded-full h-10 w-10 flex items-center justify-center shadow-lg transition-all duration-200 ease-in-out ${isDragging ? 'scale-110 shadow-xl' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-800">
                        <path d="m15 18-6-6 6-6"/>
                        <path d="m9 18 6-6-6-6"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};
