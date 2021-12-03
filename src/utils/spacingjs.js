import { dev } from '@/project.config';

if (dev) {
  let script = document.createElement('script');
  script.setAttribute('src', 'https://cdn.jsdelivr.net/npm/spacingjs');
  document.head.appendChild(script);
}
