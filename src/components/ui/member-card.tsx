import React from "react"
import { Card, CardContent } from "../ui/Card"
import { Github, Linkedin } from 'lucide-react'

interface MemberProps {
  name: string
  role: string
  image: string
  github: string
  linkedin: string
}

export function MemberCard({ name, role, image, github, linkedin }: MemberProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 transform hover:-translate-y-2 bg-[#0a192f]/20 border-cyan-500/20 backdrop-blur-sm">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            width={300}
            height={300}
            className="w-full object-cover aspect-square transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-cyan-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6">
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              <Github className="text-cyan-400 w-8 h-8 hover:text-cyan-300 hover:scale-110 transition-all" />
            </a>
            <a
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
            >
              <Linkedin className="text-cyan-400 w-8 h-8 hover:text-cyan-300 hover:scale-110 transition-all" />
            </a>
          </div>
        </div>
        <div className="p-6 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-semibold text-xl mb-1 text-white">{name}</h3>
            <p className="text-sm text-cyan-400">{role}</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
        </div>
      </CardContent>
    </Card>
  )
}

