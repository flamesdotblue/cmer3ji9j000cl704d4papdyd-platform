"use client";
import Image from 'next/image';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import SkeuoButton from '../components/SkeuoButton';
import SkeuoToggle from '../components/SkeuoToggle';
import SkeuoSlider from '../components/SkeuoSlider';

const ASSET_URL = "https://cdn.dribbble.com/userupload/3074079/file/original-d35ac7d5748235db5a3e4e536c7338f8.png?resize=2048x1536&vertical=center";

export default function Page() {
  const [liked, setLiked] = useState(false);
  const [power, setPower] = useState(true);
  const [intensity, setIntensity] = useState(60);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero / Cover with heading and subheading */}
      <section id="hero" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="skeuo-surface p-6 md:p-8">
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-clay-900">Design that feels real</h1>
                <p className="mt-3 md:mt-4 text-lg text-clay-700">A skeuomorphic interface with soft shadows, tactile elements, and layered depth. Explore the gallery and try the controls below.</p>
                <div className="mt-6 flex items-center gap-4">
                  <a href="#showcase">
                    <SkeuoButton
                      label="Explore Gallery"
                      onClick={() => {}}
                      icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#047857" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>}
                    />
                  </a>
                  <a className="link" href="#controls">See Controls</a>
                </div>
              </div>
            </div>
            <div className="skeuo-inset p-3 md:p-4 rounded-2xl">
              <div className="relative w-full h-[260px] md:h-[360px] rounded-xl overflow-hidden">
                <Image
                  src={ASSET_URL}
                  alt="Skeuomorphic Asset"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase + Controls */}
      <section id="showcase" className="px-6 py-10 md:py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
          <div className="skeuo-surface p-5 md:p-7 flex flex-col">
            <div className="skeuo-inset p-3 md:p-4">
              <div className="relative w-full h-[260px] md:h-[360px] rounded-xl overflow-hidden">
                <Image
                  src={ASSET_URL}
                  alt="Skeuomorphic Asset"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
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
                  onClick={() => window.open(ASSET_URL, '_blank')}
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  }
                />
              </div>
              <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="link">Source</a>
            </div>
          </div>

          <div id="controls" className="skeuo-surface p-5 md:p-7 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-clay-900">Control Panel</h2>
              <p className="text-clay-700 mt-2">Adjust the tactile controls to experience soft shadows and realistic highlights.</p>
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
        </div>
      </section>
    </main>
  );
}
