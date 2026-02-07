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
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ProfileCard = () => {
  const roles = ["Web Developer", "Graphic Designer"];
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [darkMode, setDarkMode] = useState(false);

  // Mouse position state for parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for mouse movement
  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    // Calculate normalized position (-0.5 to 0.5)
    // Avoid division by zero
    if (width === 0 || height === 0) return;

    const xPos = (clientX - left) / width - 0.5;
    const yPos = (clientY - top) / height - 0.5;

    x.set(xPos);
    y.set(yPos);
  }

  // Transform background opposite to mouse movement (Parallax)
  const bgX = useTransform(mouseX, [-0.5, 0.5], ["10px", "-10px"]);
  const bgY = useTransform(mouseY, [-0.5, 0.5], ["10px", "-10px"]);

  useEffect(() => {
    // Check if user has a preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) =>
        prevRole === roles[0] ? roles[1] : roles[0]
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 relative overflow-hidden ${darkMode ? "dark" : ""}`}
      onMouseMove={handleMouseMove}
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('/assets/biner.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          x: bgX,
          y: bgY,
          scale: 1.1 // Scale up to prevent edges from showing during movement
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 1.5
        }}
        className="z-10 w-full max-w-md"
        style={{ perspective: 1000 }}
      >
        <motion.div
          whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <Card className="w-full transition-all duration-300 shadow-2xl border-muted-foreground/10 bg-card/90 backdrop-blur-sm text-card-foreground">

            <CardHeader className="flex flex-row justify-end p-4 pb-0">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="rounded-full hover:bg-muted"
              >
                {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5" />}
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
                  <AvatarFallback className="text-2xl font-bold">WP</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-4 right-2 w-5 h-5 bg-green-500 border-4 border-card rounded-full animate-pulse"></span>
              </motion.div>

              <div className="text-center space-y-1">
                <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  Wahyu Puji Sasongko
                </h1>
                <p className="text-muted-foreground font-medium h-6">
                  {currentRole}
                </p>
              </div>

              <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                <MapPin className="h-4 w-4" />
                <span>Yogyakarta, ID</span>
              </div>

              <motion.div
                className="mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge variant="outline" className="px-4 py-1 border-primary/50 text-primary bg-primary/5 hover:bg-primary/10 transition-colors">
                  AVAILABLE FOR WORK
                </Badge>
              </motion.div>

              <Separator className="my-6 opacity-50" />

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                {[
                  { icon: Instagram, href: "https://www.instagram.com/wps_1717/" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/wahyu-puji-sasongko-435a24207/" },
                  { icon: Github, href: "https://github.com/sasongkodev" },
                  { icon: Globe, href: "https://ngobrolit.com/" },
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:bg-primary/10 transition-colors">
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>



            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfileCard;
