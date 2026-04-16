import { useState } from 'react';
import { Button } from '@/components/ui/button';

type Tab = 'site' | 'dev';

const siteIcon = (
  <svg width="42" height="42" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FF3B3F">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 7H4v9h16v-9zM5 6v2h2V6H5zm4 0v2h2V6H9z" />
  </svg>
);

const devIcon = (
  <svg width="42" height="42" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FF3B3F">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z" />
  </svg>
);

const content: Record<Tab, { icon: JSX.Element; heading: string; p1: string; p2: JSX.Element }> = {
  site: {
    icon: siteIcon,
    heading: 'Is your website working for you?',
    p1: 'When someone comes to your website looking for what you provide, will they have a good experience? How will the site look if they reach it on a phone? A tablet?',
    p2: (
      <>
        In the mobile age where a{' '}
        <strong className="font-bold">responsive &amp; accessible</strong>{' '}
        web presence is a must, it&apos;s my privilege to offer the opportunity to be seen on the web to small businesses and individuals around me.
      </>
    ),
  },
  dev: {
    icon: devIcon,
    heading: 'Looking for a new Developer?',
    p1: 'With recent experience as a Software Engineer at Invent — where I collaborated closely with external partner developers across diverse projects — I bring both technical depth and cross-team communication skills to every engagement.',
    p2: (
      <>
        I&apos;ve seen firsthand how the right technology can transform workflows and user experiences. I devote my time to building reliable, maintainable products that make a real impact, one feature at a time.
      </>
    ),
  },
};

export default function ServiceToggle() {
  const [active, setActive] = useState<Tab>('site');
  const [visible, setVisible] = useState(true);

  function switchTab(tab: Tab) {
    if (tab === active) return;
    setVisible(false);
    setTimeout(() => {
      setActive(tab);
      setVisible(true);
    }, 250);
  }

  const current = content[active];

  return (
    <section className="max-w-[45rem] mx-auto my-6 bg-white dark:bg-zinc-900 rounded-2xl px-8 py-10 transition-colors duration-500">
      <div className="flex gap-3 mb-6 max-sm:flex-col">
        <Button
          variant={active === 'site' ? 'default' : 'outline'}
          size="sm"
          className="uppercase tracking-wide px-6"
          onClick={() => switchTab('site')}
        >
          I need a Site
        </Button>
        <Button
          variant={active === 'dev' ? 'default' : 'outline'}
          size="sm"
          className="uppercase tracking-wide px-6"
          onClick={() => switchTab('dev')}
        >
          I need a Dev
        </Button>
      </div>

      <div
        className="transition-opacity duration-[250ms]"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <div className="flex items-center gap-2 mb-4">
          {current.icon}
          <h2 className="text-2xl font-semibold text-[#4B5463] dark:text-white">{current.heading}</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-400 mb-3 leading-relaxed">{current.p1}</p>
        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">{current.p2}</p>
      </div>
    </section>
  );
}
