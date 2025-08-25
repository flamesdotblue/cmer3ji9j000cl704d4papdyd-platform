"use client";
import Image from 'next/image';
import { useState } from 'react';
import SkeuoButton from '../components/SkeuoButton';
import SkeuoToggle from '../components/SkeuoToggle';
import SkeuoSlider from '../components/SkeuoSlider';

export default function Page() {
  const [liked, setLiked] = useState(false);
  const [power, setPower] = useState(true);
  const [intensity, setIntensity] = useState(60);

  return (
    <main className="px-6 py-10 md:py-16 max-w-6xl mx-auto">
      <header className="mb-10 md:mb-14">
        <div className="skeuo-surface p-5 md:p-8">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-clay-900">Skeuomorphic Studio</h1>
          <p className="mt-3 md:mt-4 text-clay-700 max-w-2xl">Soft, tactile interfaces with realistic shadows and highlights. Explore a card featuring your provided asset with skeuomorphic controls.</p>
        </div>
      </header>

      <section className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
        <div className="skeuo-surface p-5 md:p-7 flex flex-col">
          <div className="skeuo-inset p-3 md:p-4">
            <div className="relative w-full h-[260px] md:h-[360px] rounded-xl overflow-hidden">
              <Image
                src="https://cdn.dribbble.com/userupload/36391287/file/original-2134c1650561b54d74d0327e44904e85.png?resize=1504x1128&vertical=center"
                alt="Skeuomorphic Asset"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <SkeuoButton
                label={liked ? 'Liked' : 'Like'}
                active={liked}
                onClick={() => setLiked(v => !v)}
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={liked ? '#e11d48' : 'none'} stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                }
              />
              <SkeuoButton
                label="Download"
                onClick={() => window.open('https://cdn.dribbble.com/userupload/36391287/file/original-2134c1650561b54d74d0327e44904e85.png?resize=1504x1128&vertical=center', '_blank')}
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                }
              />
            </div>
            <a href="https://dribbble.com/shots" target="_blank" rel="noreferrer" className="link">View on Dribbble</a>
          </div>
        </div>

        <div className="skeuo-surface p-5 md:p-7 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-clay-900">Control Panel</h2>
            <p className="text-clay-700 mt-2">Tweak the tactile controls to experience soft shadows and realistic highlights.</p>
          </div>

          <div className="mt-6 grid gap-6">
            <div className="flex items-center justify-between gap-4">
              <span className="text-clay-800">Power</span>
              <SkeuoToggle checked={power} onChange={setPower} />
            </div>

            <div className="grid gap-3">
              <div className="flex items-center justify-between">
                <span className="text-clay-800">Intensity</span>
                <span className="text-clay-600 text-sm">{intensity}%</span>
              </div>
              <SkeuoSlider value={intensity} onChange={setIntensity} />
            </div>

            <div className="skeuo-inset p-4">
              <p className="text-sm text-clay-700">Tip: Press and hold buttons to feel the inset shadow. All elements use layered shadows to simulate depth and material.</p>
            </div>
          </div>

          <footer className="pt-6 text-sm text-clay-600">
            Built with Next.js and Tailwind CSS
          </footer>
        </div>
      </section>
    </main>
  );
}
