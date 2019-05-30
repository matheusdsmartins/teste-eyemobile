import { css } from '@emotion/core'

import AvenirMedium from './assets/fonts/Avenir-Medium-09.ttf'
import AvenirHeavy from './assets/fonts/Avenir-Heavy-05.ttf'
import AvenirRoman from './assets/fonts/Avenir-Roman-12.ttf'
import AvenirBlack from './assets/fonts/Avenir-Black-03.ttf'
import DINCondensedBold from './assets/fonts/DINCondensedBold.ttf'

export default css`
  @font-face {
    font-family: Avenir;
    src: url(${AvenirMedium}) format('truetype');
  }
  @font-face {
    font-family: Avenir;
    font-weight: 900;
    src: url(${AvenirHeavy}) format('truetype');
  }
  @font-face {
    font-family: 'Avenir Roman';
    src: url(${AvenirRoman}) format('truetype');
  }
  @font-face {
    font-family: 'Avenir Black';
    src: url(${AvenirBlack}) format('truetype');
  }
  @font-face {
    font-family: 'DIN Condensed';
    font-weight: bold;
    src: url(${DINCondensedBold}) format('truetype');
  }
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)*/
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }
  html {
    font-family: Avenir,sans-serif;
  }
  html, body {
    height: 100%;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  strong {
    font-weight: bold;
  }
  #app {
    height: 100%;
  }
`
