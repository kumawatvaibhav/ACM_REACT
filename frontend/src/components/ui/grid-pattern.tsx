import React from 'react'

export function GridPattern() {
    return (
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a192f_1px,transparent_1px),linear-gradient(to_bottom,#0a192f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      </div>
    )
  }