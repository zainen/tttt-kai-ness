import { PodcastSpotify, PodcastYoutube } from "../components/reusable/IframeHolder";

export const Podcasts = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-tttt-200 p-6">
        <h2 className='text-3xl text-center font-bold py-6 text-primary-300'>Recommended Resources</h2>

        <PodcastYoutube 
          url="https://www.youtube.com/embed/133n0BTYXOQ" 
          title='Rich Roll Podcast' 
          description="How to Balance Your Hormones: Neal Barnard, MD"
          />
        <PodcastYoutube 
          url="https://www.youtube.com/embed/XfURDjegrAw" 
          orderReverse 
          title='Huberman Lab' 
          description="How Food and Nutrients Control Our Moods"
          />
        <PodcastSpotify 
          url="https://open.spotify.com/embed/episode/5fICMbKljWzMW0EMTinMPj?utm_source=generator" 
          title='The MindBodyGreen Podcast'
          description="Psychobiotics & the Best Food for Managing Stress | Leading Scientists Bonnie J. Kaplan, Ph.D. & Julia J. Rucklidge, Ph.D." 
          />
        <PodcastYoutube 
          url="https://www.youtube.com/embed/lvh3g7eszVQ" 
          orderReverse 
          title='Lex Fridman Podcast' 
          description="Andrew Huberman: Focus, Stress, Relationships, and Friendship"
          />
      </div>
    </div>
  )
}