"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const PortfolioList = () => {
    const [isOpen, setIsOpen] = useState(false);

    const portfolioLinks = [
        { name: "My Personal Website", url: "https://your-website.com" },
        { name: "Project A - E-Commerce", url: "#" },
        { name: "Project B - Company Profile", url: "#" },
        { name: "Project C - Web App", url: "#" },
    ];

    return (
        <div className="mt-6 w-full">
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full"
                variant={isOpen ? "secondary" : "default"}
            >
                {isOpen ? "Hide Portfolio" : "View My Portfolio"}
            </Button>
            {isOpen && (
                <div className="mt-4 space-y-3 animate-fade-in">
                    {portfolioLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <Card className="hover:bg-accent transition-colors cursor-pointer border-muted-foreground/20">
                                <CardContent className="p-3 flex items-center justify-center font-medium">
                                    {link.name} <ExternalLink className="ml-2 h-4 w-4 opacity-70" />
                                </CardContent>
                            </Card>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PortfolioList;
