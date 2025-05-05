
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's work together!</h3>
            <p className="mb-6 text-lg">
              I'm currently open to freelance Android development opportunities and collaborations. 
              If you're building something cool with Compose, I'd love to hear about it!
            </p>
            
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-medium mb-1">Looking for</h4>
                <p className="text-muted-foreground">Freelance Android work, Collaboration opportunities</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-1">Email me at</h4>
                <a href="mailto:aditya1875more@gmail.com" className="text-primary hover:underline">
                  aditya1875more@gmail.com
                </a>
              </div>
            </div>

            <p className="mb-4 font-medium">Connect with me:</p>
            <div className="flex gap-4">
              <a href="https://github.com/Dev-Aditya-More" target="_blank" rel="noopener noreferrer"
                className="social-icon bg-secondary hover:bg-primary hover:text-white">
                <Github size={20} />
              </a>
              <a href="https://x.com/@Adityaastwt" target="_blank" rel="noopener noreferrer"
                className="social-icon bg-secondary hover:bg-primary hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/in/adityamore2005" target="_blank" rel="noopener noreferrer"
                className="social-icon bg-secondary hover:bg-primary hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="flex items-center">
            <Card className="w-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Call To Action</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Open to freelance Android gigs and collaborations.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>DM me on Twitter if you're building something cool with Compose 🚀</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Always happy to connect with fellow Android nerds!</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <a href="mailto:contact@adityamore.dev">Get In Touch</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
