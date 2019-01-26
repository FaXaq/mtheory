/**
 * from : https://github.com/gre/bezier-easing/blob/master/example/index.html
 */

import bezier, { EasingFunction } from 'bezier-easing';

const BEZIER_EASING: { [key: string]: EasingFunction } = {
  linear: bezier(0, 0, 1, 1),
  ease: bezier(0.25, 0.1, 0.25, 1),
  'ease-in': bezier(0.42, 0, 1, 1),
  'ease-out': bezier(0, 0, 0.58, 1),
  'ease-in-out': bezier(0.42, 0, 0.58, 1),
};

interface IAnimationParams {
    from: number,
    duration: number,
    easing: keyof typeof BEZIER_EASING,
    to: number,
    in?: number,
    interval?: number,
    start?: () => any,
    err?: (e: Error) => any,
    each: (v: number) => any,
    end?: () => any
}

function render(from: number, to: number, value: number): number {
  return from + (to - from) * value;
}

export default function animate(params: IAnimationParams) {
  const start = Date.now();

  setTimeout(() => {
    const i = setInterval(() => {
      const p = (Date.now() - start) / params.duration;

      if (p > 1) {
        params.each(render(params.from, params.to, 1));
        if (params.end !== undefined) params.end();
        clearInterval(i);
      } else {
        params.each(render(params.from, params.to, BEZIER_EASING[params.easing](p)));
      }
    }, params.interval || 5);
  }, params.in || 0);
}
