import React from "react";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-extralight mt-1">WORKER</h4>
        <p>Software Engineer</p>
        <div className="flex space-x-2 my-2">
          {/* TECHNOLOGY!!! */}
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEVRK9T///9EEtLMxfBKHtOai+M/ANFCDdLk4PfSy/LZ0/RPKNRYM9bx7/tHGdLJwvCgkeWyp+mVhOLt6vpMI9Pf2vZ+aN2qnOiOfOCrn+iHc9/n4/jBt+7b1fWKd+B1XdtkRti6r+z5+P1yWNtePdeTguJ6YtxnS9htUtr29P23q+upneeDbt7xWqHzAAADn0lEQVR4nO3a7VraMBiA4bSUFKgUxagoooKfOM//+KaMvgk0NFxOXM2e+yeWJc+sTWlQCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4H+SpSJrOMxUB5Xuq2XaaOONQaV/5L8OvOx31vrj3WOYq+qwE+egct5p0n9PNJN+4zGO18Mkpv3EOip2HZYdV8fMcvtqPk0a6ff/hMvmQxy9fNfoX1c40OHCgVvYCxde7F149g2Fyc2uP8VoChfpjvM0msLkesco8RQm9yb2wlP/xebzhe26ln648K5KocLhyKOzWg87W6/a39nW0SffsB6ueBfFUGFf73lPk2cy0HjrPQe6p6kXznznaahwsO8ZVhzJQN2mu8SvUy9MJp6RoyiU2S6y+nkaReFYhvYsilEU3tjztb4oRlHYtWMPaxebKAovtF2cL9Otw6IovCz1UEZ/2LrYRFJobmX0s63zNIrC95um/FqGf9y8w4ilsEgXMv7mohhLocpuZPzRxnkaTaHSA5nAk7soxlNY7FgU4ylUpaQkJ86iGP70VOd9WvDvC5W2z0Dv7MUmVLg4rRle+RJbUGieZQrOoviZpxi+T2FtKFTpq8zBPuaPqlDl9ubNVOdpXIXmSSbRqc7TuAqVts/DztdXi8gKCyOzWK57IitU2aNM4/XPoviZwscWFyo9k3ncrc7TUGFv3N12/Ox78NqWQmcevdXFJnxPk9V4t7HaUuhuqHQ/Xo/ovrTi3LypIspC8yIz6esoC1U+l6mcZ1EWKr2sfvK+KGbdCAuzN5nLPI+yUOmOTOa5HMdYWBQymamexFio7C8u6T5FWaj0mUznJc7C4kGmM4qzUKX174q0vrAwZuOOuLlQ6dMfVljkxfnbg/skM1Bo7n9WoTla9UxvbUyg0N2Oair0fXryfoA6bKGRC8dEakKFRWm3oxoKe5OxR3d7o/XQhc5jQnmcHSpU2dU+hTuc1x57H7Qwm9ihR9WeRLBQ6c3vFLW5sHT+pGRjKVxYqB9TmNrHoMli/0JVdt1Jt7mwPLFDy3c59yhU2g1pc2FxZ4c+rv71fQqN88ZWFzq7SlPZN9unUKXOb3/W5kKl5+tZ2qU4HS2HK8tfDQPq6XBt2XF2htPBcthk8eQpXFQ/HB/iri1/uZ6djd60sxCn1aZ043i57F1vfB8s9WxuBza6C/nhYW68TZnnqf/r+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Ei/AfHYTPUXy/PDAAAAAElFTkSuQmCC"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEVRK9T///9EEtLMxfBKHtOai+M/ANFCDdLk4PfSy/LZ0/RPKNRYM9bx7/tHGdLJwvCgkeWyp+mVhOLt6vpMI9Pf2vZ+aN2qnOiOfOCrn+iHc9/n4/jBt+7b1fWKd+B1XdtkRti6r+z5+P1yWNtePdeTguJ6YtxnS9htUtr29P23q+upneeDbt7xWqHzAAADn0lEQVR4nO3a7VraMBiA4bSUFKgUxagoooKfOM//+KaMvgk0NFxOXM2e+yeWJc+sTWlQCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4H+SpSJrOMxUB5Xuq2XaaOONQaV/5L8OvOx31vrj3WOYq+qwE+egct5p0n9PNJN+4zGO18Mkpv3EOip2HZYdV8fMcvtqPk0a6ff/hMvmQxy9fNfoX1c40OHCgVvYCxde7F149g2Fyc2uP8VoChfpjvM0msLkesco8RQm9yb2wlP/xebzhe26ln648K5KocLhyKOzWg87W6/a39nW0SffsB6ueBfFUGFf73lPk2cy0HjrPQe6p6kXznznaahwsO8ZVhzJQN2mu8SvUy9MJp6RoyiU2S6y+nkaReFYhvYsilEU3tjztb4oRlHYtWMPaxebKAovtF2cL9Otw6IovCz1UEZ/2LrYRFJobmX0s63zNIrC95um/FqGf9y8w4ilsEgXMv7mohhLocpuZPzRxnkaTaHSA5nAk7soxlNY7FgU4ylUpaQkJ86iGP70VOd9WvDvC5W2z0Dv7MUmVLg4rRle+RJbUGieZQrOoviZpxi+T2FtKFTpq8zBPuaPqlDl9ubNVOdpXIXmSSbRqc7TuAqVts/DztdXi8gKCyOzWK57IitU2aNM4/XPoviZwscWFyo9k3ncrc7TUGFv3N12/Ox78NqWQmcevdXFJnxPk9V4t7HaUuhuqHQ/Xo/ovrTi3LypIspC8yIz6esoC1U+l6mcZ1EWKr2sfvK+KGbdCAuzN5nLPI+yUOmOTOa5HMdYWBQymamexFio7C8u6T5FWaj0mUznJc7C4kGmM4qzUKX174q0vrAwZuOOuLlQ6dMfVljkxfnbg/skM1Bo7n9WoTla9UxvbUyg0N2Oair0fXryfoA6bKGRC8dEakKFRWm3oxoKe5OxR3d7o/XQhc5jQnmcHSpU2dU+hTuc1x57H7Qwm9ihR9WeRLBQ6c3vFLW5sHT+pGRjKVxYqB9TmNrHoMli/0JVdt1Jt7mwPLFDy3c59yhU2g1pc2FxZ4c+rv71fQqN88ZWFzq7SlPZN9unUKXOb3/W5kKl5+tZ2qU4HS2HK8tfDQPq6XBt2XF2htPBcthk8eQpXFQ/HB/iri1/uZ6djd60sxCn1aZ043i57F1vfB8s9WxuBza6C/nhYW68TZnnqf/r+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Ei/AfHYTPUXy/PDAAAAAElFTkSuQmCC"
            alt=""
            className="h-10 w-10 rounded-full"
          />
        </div>
        <p className="uppercase text-gray-300 py-5">start work to end</p>
        <ul className="list-disc space-y-4 text-lg">
          <li>DOING ?</li>
          <li>DOING ?</li>
          <li>DOING ?</li>
          <li>DOING ?</li>
          <li>DOING ?</li>
          <li>DOING ?</li>
        </ul>
      </div>
    </article>
  );
}
