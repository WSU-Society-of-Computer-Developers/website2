// from https://github.com/ThatZiv/portfolio/blob/dev/src/components/YouTubeEmbed.js
import React from "react"

export default function Embed({id}) {
    return (
        <iframe width="75%" height="480"
            src={`https://www.youtube-nocookie.com/embed/${id}`}
            title={id}
            frameborder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
        </iframe>
  )
}