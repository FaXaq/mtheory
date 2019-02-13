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
    (function animateFrame() {
      const p = (Date.now() - start) / params.duration;
      if (p > 1) {
        params.each(render(params.from, params.to, 1));
        if (params.end !== undefined) params.end();
      } else {
        params.each(render(params.from, params.to, BEZIER_EASING[params.easing](p)));
        requestAnimationFrame(animateFrame);
      }
    }());
  }, params.in || 0);
}

export class AnimationTimeline {
  private _animations: Array<IAnimationParams> = [];

  start() {
    this.next();
  }

  // execute next animation
  next() {
    // if there is one
    if (this.nextAnimation !== undefined) {
      // store old callback on end, to trigger later
      const oldCallback = this.nextAnimation.end;
      this.nextAnimation.end = () => {
        // trigger if there was a specified callback
        if (oldCallback) oldCallback();
        // delete this animation in the heap
        this.del();
        // go to next animation
        this.next();
      };

      animate(this.nextAnimation);
    }
  }

  add(animation: IAnimationParams): AnimationTimeline {
    this.animations.push(animation);
    return this;
  }

  del(): IAnimationParams | undefined {
    const a = this.animations.shift();
    return a;
  }

  get animations(): Array<IAnimationParams> {
    return this._animations;
  }

  get nextAnimation(): IAnimationParams | undefined {
    if (this.animations.length == 0) {
      return undefined;
    }

    return this.animations[0];
  }
}
