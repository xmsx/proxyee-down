(function(window){var svgSprite='<svg><symbol id="el-icon-task-tool" viewBox="0 0 1024 1024"><path d="M850.731472 276.518642 906.993509 253.894038 957.807094 185.575849 890.010566 117.856604 821.595774 168.747472 799.145057 224.874264 630.320302 393.756981 685.461736 441.807698Z"  ></path><path d="M949.904906 736.120755 644.192604 469.822792l-10.858264-9.46717-87.175245-75.930566c10.587774-51.740981 29.696-190.483321-47.529057-267.669736-50.774943-50.832906-118.358943-78.828679-190.232151-78.828679-17.601208 0-35.260377 1.758189-52.47517 5.158642-4.791547 0.966038-8.636377 4.443774-10.066113 9.119396-1.410415 4.636981-0.154566 9.71834 3.284528 13.138113l115.19034 115.20966 23.068981 111.422792-94.092075 94.053434-111.403472-23.04966-115.19034-115.151698c-3.477736-3.458415-8.520453-4.714264-13.176755-3.303849-4.636981 1.391094-8.153358 5.235925-9.100075 10.066113-17.504604 88.373132 10.046792 179.084075 73.670038 242.726642 37.849358 37.830038 96.854943 57.827019 170.679547 57.827019l0.019321 0c30.97117 0 64.357434-3.555019 97.009509-10.317283l351.058113 403.030943c28.981132 29.019774 66.675925 44.630943 106.785811 44.630943s77.843321-15.61117 106.225509-43.993358C1008.427472 889.933283 1008.446792 794.662642 949.904906 736.120755zM870.187472 868.796377c-14.645132 14.664453-38.351698 14.664453-52.99683 0.019321l-0.019321-0.019321c-14.625811-14.645132-14.625811-38.39034 0-53.016151 14.645132-14.606491 38.371019-14.606491 53.016151 0.038642l0.019321 0C884.813283 830.444679 884.813283 854.151245 870.187472 868.796377z"  ></path><path d="M366.978415 617.761811c-13.369962-13.369962-35.047849-13.369962-48.437132 0L94.014792 842.326943c-13.369962 13.350642-13.369962 35.028528 0 48.437132L181.615094 978.403019c13.369962 13.350642 35.047849 13.350642 48.456453 0l217.899472-217.880151c13.369962-13.369962 13.369962-35.06717 0-48.456453L366.978415 617.761811z"  ></path></symbol><symbol id="el-icon-task-delete" viewBox="0 0 1024 1024"><path d="M923.834762 179.579111 919.045986 179.579111c-20.751364 0-38.31021 16.760717-38.31021 38.31021l0 715.123928c0 50.282151-38.31021 90.98675-85.399844 90.98675L241.434139 1024c-47.089634 0-85.399844-40.704599-85.399844-90.98675L156.034295 217.091193c0-20.751364-16.760717-38.31021-38.31021-38.31021L112.935308 178.780982c-23.943882 0-42.300857-19.953235-42.300857-44.695246 0-24.742011 19.155105-44.695246 42.300857-44.695246l303.289166 0c20.751364 0 38.31021-16.760717 38.31021-38.31021l0 0c0-27.934528 19.155105-51.080281 42.300857-51.080281l42.300857 0c23.943882 0 42.300857 22.347623 42.300857 51.080281l0 0c0 20.751364 16.760717 38.31021 38.31021 38.31021l303.289166 0c23.943882 0 42.300857 19.953235 42.300857 44.695246C966.13562 159.625877 946.980514 179.579111 923.834762 179.579111L923.834762 179.579111zM795.335931 179.579111 539.934528 179.579111l-42.300857 0L278.94622 179.579111c-20.751364 0-38.31021 16.760717-38.31021 38.31021l0 669.630553c0 25.54014 19.155105 45.493375 42.300857 45.493375l469.300078 0c23.943882 0 42.300857-20.751364 42.300857-45.493375L794.537802 179.579111 795.335931 179.579111zM625.334373 886.721746c-23.943882 0-42.300857-20.751364-42.300857-45.493375L583.033515 294.509743c0-25.54014 19.155105-45.493375 42.300857-45.493375 23.943882 0 42.300857 20.751364 42.300857 45.493375l0 546.718628C667.63523 865.970382 648.480125 886.721746 625.334373 886.721746L625.334373 886.721746zM411.435698 886.721746c-23.943882 0-42.300857-20.751364-42.300857-45.493375L369.13484 294.509743c0-25.54014 19.155105-45.493375 42.300857-45.493375 23.943882 0 42.300857 20.751364 42.300857 45.493375l0 546.718628C454.534684 865.970382 435.379579 886.721746 411.435698 886.721746L411.435698 886.721746zM411.435698 886.721746"  ></path></symbol><symbol id="el-icon-task-start" viewBox="0 0 1024 1024"><path d="M920.30255673 558.10026269L538.33693639 779.68191147 155.03936171 999.42513778c-24.96714297 14.96701269-56.80595513 7.49456725-72.37490916-18.73467165-3.81306653-7.47710237-6.2941787-17.51914723-6.2941787-26.211774L76.37027385 512.53324686 76.37027385 70.00565533c0-29.37749277 23.10427079-53.06041799 52.46080682-53.060418 10.59741355 0 21.19948402 3.66403698 29.31578539 8.69611976L538.33693639 245.38109042l2.48111332 1.84307939 380.10857016 220.30092402c25.59004103 13.78874595 34.36882603 46.24929223 19.3773625 71.21760028C935.29402027 546.85782926 929.04175502 553.72949845 920.30255673 558.10026269L920.30255673 558.10026269zM485.21248199 688.58979442L485.21248199 688.58979442l305.28514844-176.05654756L487.69243022 337.71667342l-2.48111331-1.20155249L181.29072242 160.49815893l0 352.03392398 0 350.7904569 219.24723712-126.03959638L485.21248199 688.58979442 485.21248199 688.58979442 485.21248199 688.58979442 485.21248199 688.58979442z"  ></path></symbol><symbol id="el-icon-task-pause" viewBox="0 0 1024 1024"><path d="M839.314286 86.893714v773.558857c0 59.757714 17.92 90.404571-90.331429 90.404572s-90.331429-30.72-90.331428-90.404572V86.893714C658.651429 28.964571 640.731429 0 748.982857 0s90.331429 28.964571 90.331429 86.893714z m-511.268572 0v773.558857c0 59.757714 17.993143 90.404571-90.770285 90.404572-108.836571 0-89.673143-30.72-89.673143-90.404572V86.893714C147.602286 28.964571 128.438857 0 237.275429 0c108.763429 0 90.697143 28.964571 90.697142 86.893714z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)