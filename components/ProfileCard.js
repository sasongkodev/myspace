"use client";

import { useState, useEffect } from "react";

import {
  MapPin,
  Instagram,
  Linkedin,
  Github,
  Globe,
  Moon,
  Sun,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import PortfolioList from "@/components/PortfolioList";
import { motion } from "framer-motion";
import Lanyard from "@/components/Lanyard";

const ProfileCard = () => {
  const roles = ["Web Developer", "Graphic Designer"];
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a preference
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) =>
        prevRole === roles[0] ? roles[1] : roles[0]
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (

    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('/assets/biner.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="z-10 w-full h-screen flex justify-center items-center">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]}>
          <div className="w-full h-full flex items-center justify-center p-2">
            <Card className="w-full max-w-[300px] shadow-2xl border-muted-foreground/10 bg-card/95 backdrop-blur-sm text-card-foreground">
              <CardHeader className="flex flex-row justify-end p-4 pb-0">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setDarkMode(!darkMode)}
                  className="rounded-full hover:bg-muted"
                >
                  {darkMode ? (
                    <Sun className="h-5 w-5 text-yellow-400" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              </CardHeader>

              <CardContent className="flex flex-col items-center p-6 pt-0">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="relative cursor-pointer"
                >
                  <Avatar className="h-32 w-32 border-4 border-primary/20 shadow-xl -mt-12 mb-4 ring-4 ring-background">
                    <AvatarImage
                      src="/assets/Avatar.jpg"
                      alt="Wahyu Puji Sasongko"
                      className="object-cover"
                    />
                    <AvatarFallback className="text-2xl font-bold">
                      WP
                    </AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-4 right-2 w-5 h-5 bg-green-500 border-4 border-card rounded-full animate-pulse"></span>
                </motion.div>

                <div className="text-center space-y-1">
                  <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                    Wahyu Puji Sasongko
                  </h1>
                  <p className="text-muted-foreground font-medium h-6 text-sm" suppressHydrationWarning>
                    {currentRole}
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                  <MapPin className="h-3 w-3" />
                  <span>Yogyakarta, ID</span>
                </div>

                <div className="mt-4">
                  <Badge
                    variant="outline"
                    className="px-4 py-1 border-primary/50 text-primary bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    AVAILABLE FOR WORK
                  </Badge>
                </div>

                <Separator className="my-6 opacity-50" />

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  {[
                    {
                      icon: Instagram,
                      href: "https://www.instagram.com/wps_1717/",
                    },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/wahyu-puji-sasongko-435a24207/",
                    },
                    { icon: Github, href: "https://github.com/sasongkodev" },
                    { icon: Globe, href: "https://portofolio.wahyupuji.com" },
                  ].map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="hover:text-primary hover:bg-primary/10 transition-colors"
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <social.icon className="h-5 w-5" />
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </Lanyard>
      </div>
    </div>
  );
};

export default ProfileCard;
