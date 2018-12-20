export const convertSignToHtml = sigh => {
  if(sigh==="CODEA"){
    return(
`<svg width="200px" height="200px" viewbox="0 0 200 200">
  <!-- 直線 -->
  <line x1="10" y1="50" x2="200" y2="50" stroke="black" stroke-width="4" />
</svg>
`);
  }
  else if(sigh==="CODEB"){
    return(
`<svg width="200px" height="200px" viewbox="0 0 200 200">
  <!-- 四角 -->
  <rect x="50" y="50" width="100" height="100" stroke="black" stroke-width="4" fill="none" />
</svg>
`);
  }
  else if(sigh==="CODEC"){
    return(
`<svg width="200px" height="200px" viewbox="0 0 200 200">
  <!-- 円 -->
  <circle cx="100" cy="100" r="50" stroke="black" stroke-width="4" fill="none"/>
</svg>
`);
}

  else if(sigh==="CODED"){
    return(
      `
<svg width="200px" height="200px" viewbox="0 0 200 200">
  <!-- 円 -->
  <circle cx="100" cy="100" r="50" stroke="black" stroke-width="4" fill="#ff1493">
    <animate attributeName="r" from="50" to="80" dur="1s" fill="freeze">
    </animate>
  </circle>
</svg>
      `
    )
  }

  else if(sigh==="CODEE"){
    return(
      `
<svg width="200px" height="200px" viewbox="0 0 200 200">
  <!-- 円 -->
  <circle class="c" cx="100" cy="100" r="50" stroke="black" stroke-width="4" fill="#ff1493">
  </circle>
</svg>

<style>
  .c{
    r: 50;
    animation-name: scaleAnime;
    animation-duration: 1s;
    animation-timing-function:linear;
    animation-fill-mode: forwards;
  }

  @keyframes scaleAnime{
    100%{
      r:80;
    }
  }
</style>
      `
    )
  }
};
