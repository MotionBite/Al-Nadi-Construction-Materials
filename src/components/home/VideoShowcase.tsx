'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Play } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export function VideoShowcase() {
  const t = useTranslations('Index');
  const [playingId, setPlayingId] = useState<string | null>(null);

  type VideoItem = {
    id: string;
    title: string;
    videoUrl?: string;
    image?: string;
  };

  const videos: VideoItem[] = [
    { id: '4', title: 'Construction Demo', videoUrl: '/video.mp4' },
    { id: '5', title: 'Hero Showcase', videoUrl: '/hero.mp4' },
    { id: '6', title: 'Project Overview', videoUrl: '/mp4.mp4' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              {t('videoShowcase')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <ScrollReveal key={video.id} delay={index * 0.1}>
              <div 
                className="group relative rounded-xl overflow-hidden cursor-pointer aspect-video bg-gray-900"
                onClick={(e) => {
                  if (video.videoUrl && playingId !== video.id) {
                    setPlayingId(video.id);
                    const videoElement = e.currentTarget.querySelector('video');
                    if (videoElement) {
                      videoElement.play();
                    }
                  }
                }}
              >
                {video.videoUrl ? (
                  <video 
                    src={video.videoUrl} 
                    controls={playingId === video.id}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${playingId === video.id ? 'opacity-100 z-10' : 'opacity-70 group-hover:opacity-40'}`} 
                  />
                ) : (
                  <Image 
                    src={video.image!} 
                    alt={video.title} 
                    fill 
                    className="object-cover opacity-70 group-hover:opacity-40 transition-opacity duration-500" 
                  />
                )}
                
                {playingId !== video.id && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg pointer-events-auto">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                    <h3 className="text-xl font-bold text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {video.title}
                    </h3>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
