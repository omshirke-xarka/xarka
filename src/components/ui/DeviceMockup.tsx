import React from "react";
import { cn } from "@/lib/utils";

interface DeviceMockupProps {
    children?: React.ReactNode;
    className?: string;
    type: "desktop" | "mobile";
    url?: string;
}

export const DeviceMockup = ({ children, className, type, url }: DeviceMockupProps) => {
    if (type === "mobile") {
        return (
            <div className={cn("relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl", className)}>
                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-background dark:bg-black border border-white/10">
                    {children}
                </div>
            </div>
        );
    }

    return (
        <div className={cn("relative mx-auto border-gray-800 bg-gray-900 border-[8px] rounded-t-xl h-full w-full max-w-4xl shadow-2xl", className)}>
            <div className="rounded-lg overflow-hidden h-full w-full bg-background dark:bg-black/90 border border-white/5">
                {/* Browser Header */}
                <div className="h-8 bg-gray-800/50 flex items-center gap-2 px-4 border-b border-white/5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <div className="ml-4 flex-1 h-5 bg-black/20 rounded text-[10px] text-gray-500 flex items-center px-2 font-mono">
                        {url ?? "xarka.ai/solutions"}
                    </div>
                </div>
                <div className="h-[calc(100%-2rem)] overflow-hidden relative">
                    {children}
                </div>
            </div>
        </div>
    );
};

// Abstract UI Components for inside the mockups
export const MockupHeader = () => (
    <div className="p-6 border-b border-white/5 flex justify-between items-center">
        <div className="h-4 w-32 bg-white/10 rounded animate-pulse"></div>
        <div className="flex gap-2">
            <div className="h-8 w-8 rounded-full bg-white/10"></div>
            <div className="h-8 w-8 rounded-full bg-accent/20"></div>
        </div>
    </div>
);

export const MockupSidebar = () => (
    <div className="w-16 md:w-48 border-r border-white/5 h-full p-4 flex flex-col gap-3">
        <div className="h-8 w-full bg-accent/10 rounded mb-4"></div>
        <div className="h-4 w-3/4 bg-white/5 rounded"></div>
        <div className="h-4 w-1/2 bg-white/5 rounded"></div>
        <div className="h-4 w-2/3 bg-white/5 rounded"></div>
    </div>
);

export const MockupContent = () => (
    <div className="flex-1 p-6 space-y-4">
        <div className="flex gap-4 mb-8">
            <div className="h-24 flex-1 bg-white/5 rounded-lg border border-white/5 p-4">
                <div className="h-8 w-8 bg-accent/20 rounded-full mb-2"></div>
                <div className="h-3 w-1/2 bg-white/10 rounded"></div>
            </div>
            <div className="h-24 flex-1 bg-white/5 rounded-lg border border-white/5 p-4">
                <div className="h-8 w-8 bg-purple-500/20 rounded-full mb-2"></div>
                <div className="h-3 w-1/2 bg-white/10 rounded"></div>
            </div>
            <div className="h-24 flex-1 bg-white/5 rounded-lg border border-white/5 p-4">
                <div className="h-8 w-8 bg-blue-500/20 rounded-full mb-2"></div>
                <div className="h-3 w-1/2 bg-white/10 rounded"></div>
            </div>
        </div>
        <div className="h-48 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center text-white/20 text-sm">
            Data Visualization Overview
        </div>
    </div>
);
