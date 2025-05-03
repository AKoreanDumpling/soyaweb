'use client';
import { Github } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import Image from 'next/image';
import { Button } from '@/components/button';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-10 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <nav className="flex-1 flex justify-left">
            <Button onClick={() => router.push('./docs')}>Docs</Button>
          </nav>
          <div className="flex-1 flex gap-2 justify-end">
            <ModeToggle />
            <Button
              onClick={() =>
                router.push('https://github.com/sanjayc208/pinexio')
              }
            >
              <Github className="h-[1.2rem] w-[1.2rem] transition-all" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center px-4 py-4 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto flex flex-col items-center max-w-6xl"
        >
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-2 lg:gap-4 justify-center xs:px-2"
            >
              <Image
                priority={true}
                alt="logo"
                className="h-auto w-auto dark:invert"
                width={100}
                height={100}
                src={`/logos/hose256.png`}
              />
              <h1 className="text-5xl content-center md:text-7xl font-stretch-110% -tracking-tighter text-gray-900 dark:text-white">
                The hOSe Project
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-shadow-lg mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Humane Operating System for the Elderly
            </motion.p>
          </div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-row sm:flex-row gap-4 mt-8"
          >
            <Button
              className="px-6 py-3"
              variant={'primary'}
              onClick={() => router.push('/docs/getting-started/introduction')}
              size={'md'}
            >
              Learn More
            </Button>
            <Button
              className="px-6 py-3 gap-2"
              variant={'outline'}
              size={'md'}
              onClick={() =>
                router.push('https://github.com/akoreandumpling/hose')
              }
            >
              <Github size={20} />
              GitHub
            </Button>
          </motion.div>
        </motion.div>
        <h1 className="content-center md:text-3xl font-stretch-110% -tracking-tighter text-gray-900 dark:text-white mt-18">
          Built with:
        </h1>
        <div className="mt-8 mb-6 flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {[
            {
              src: '/logos/tux.svg',
              label: 'Linux Kernel',
              //   className: 'dark:invert',
            },
            {
              src: '/logos/ubuntu.svg',
              label: 'Ubuntu',
              //   className: 'dark:invert',
            },
            {
              src: '/logos/flutter.svg',
              label: 'Flutter',
              //   className: 'dark:invert',
            },
            {
              src: '/logos/ts.png',
              label: 'Typescript',
            },
            // {
            //   src: '/logos/tailwindcss-light.png',
            //   label: 'blank',
            //   className: 'dark:invert',
            // },
          ].map(({ src, label }) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              key={label}
              className="flex flex-col items-center"
            >
              <div className="w-5 h-5 md:w-12 md:h-12 flex items-center justify-center">
                <Image
                  width={100}
                  height={100}
                  src={src}
                  alt={`${label} Logo`}
                />
              </div>
              <span className="mt-4 text-sm">{label}</span>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Sticky Footer */}
      <footer className="sticky bottom-0 z-10 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-3 text-center text-gray-600 dark:text-gray-400">
          <div className="flex justify-end items-center space-x-4">
            <div className="flex text-sm text-right gap-3">
              <p>
                Built by <strong>Nathan Mah</strong> with PineXIO and Vercel
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
