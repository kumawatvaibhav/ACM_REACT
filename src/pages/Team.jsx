import { MemberCard } from "../components/ui/member-card"


import teamMembers from "../lib/member"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#020c1b] relative overflow-hidden py-16 px-4">
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-white tracking-tight">
            Our Team
          </h1>
          <p className="text-xl text-cyan-400 max-w-2xl mx-auto">
            Meet the dedicated officers of the GSFCU ACM Student Chapter
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
      <div className="absolute inset-0  pointer-events-none" />
    </div>
  )
}