export const convertSignToHtml = sigh => {
  console.log("convert!!");
  if(sigh==="CODEA"){
    return `<?xml version="1.0" encoding="utf-8"?>
    <!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="レイヤー_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
       y="0px" viewBox="0 0 1600 1000" style="enable-background:new 0 0 800 500;" xml:space="preserve">
    <style type="text/css">
      .st0{fill:#cccccc;}
      .st1{font-family:'Lato-Bold';}
      .st2{font-size:40px;}
      .st3{fill:#FC0FC0;}
    </style>
    <rect x="170" y="100" class="st0" width="60" height="300"/>
    <text transform="matrix(1 0 0 1 160.0505 451.5298)" class="st1 st2">item</text>
    <text transform="matrix(1 0 0 1 260.0505 451.5298)" class="st1 st2">item</text>
    <text transform="matrix(1 0 0 1 360.0505 451.5298)" class="st1 st2">item</text>
    <text transform="matrix(1 0 0 1 460.0505 451.5298)" class="st1 st2">item</text>
    <text transform="matrix(1 0 0 1 560.0505 451.5298)" class="st1 st2">item</text>
    <rect x="170" y="350" class="st3" width="60" height="50"/>
    <rect x="270" y="100" class="st0" width="60" height="300"/>
    <rect x="270" y="150" class="st3" width="60" height="250"/>
    <rect x="370" y="100" class="st0" width="60" height="300"/>
    <rect x="370" y="250" class="st3" width="60" height="150"/>
    <rect x="470" y="100" class="st0" width="60" height="300"/>
    <rect x="470" y="100" class="st3" width="60" height="300"/>
    <rect x="570" y="100" class="st0" width="60" height="300"/>
    <rect x="570" y="300" class="st3" width="60" height="100"/>
    </svg>
    `;
  }
  else if(sigh==="CODEB"){
    return "<p>bbb</p>";
  }
};
