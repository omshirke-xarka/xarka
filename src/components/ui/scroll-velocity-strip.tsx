import React from "react";

interface ScrollVelocityStripProps {
    items: React.ReactNode[];
    velocity?: number;
    className?: string;
}

export function ScrollVelocityStrip({ items, velocity = 30, className }: ScrollVelocityStripProps) {
    // Duration inversely proportional to velocity — higher velocity = faster scroll
    const duration = Math.max(10, 120 / velocity);

    const renderItems = () =>
        items.map((item, index) => (
            <div
                key={index}
                className="inline-flex items-center mx-4 sm:mx-10 shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
                {item}
            </div>
        ));

    const renderedItems = renderItems();
    return (
        <section className={`w-full overflow-hidden py-8 ${className ?? ""}`} style={{ contain: "layout paint" }}>
            <div
                className="flex flex-nowrap whitespace-nowrap animate-marquee"
                style={
                    {
                        "--marquee-duration": `${duration}s`,
                    } as React.CSSProperties
                }
            >
                {renderedItems}
                {renderedItems}
                {renderedItems}
                {renderedItems}
            </div>
        </section>
    );
}
