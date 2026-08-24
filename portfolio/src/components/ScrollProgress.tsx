import { useEffect, useState } from 'react';

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
      setProgress(scrollHeight > clientHeight ? (scrollTop / (scrollHeight - clientHeight)) * 100 : 0);
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return <div className="timecode-rail" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>;
};
