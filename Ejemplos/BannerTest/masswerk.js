

/*
 The Silent Sound Of Error
 (c) 2013 N. Landsteiner, www.masswerk.at
 all rights reserved.
*/
var TheSoundOfError= new function(){
    var epicycles,
        assets,
        img2load,
        cssPropertyTransform,
        cssPropertyOpacity,
        usesCssFilter=false,
        hasCanvas=false,
        usesExCanvas=false,
        rotators,
        reqAnimFrame,
        cancelReqAnimFrame,
        startTime,
        lastTime,
        title,
        legend,
        canvas1,
        ctx1,
        canvas2,
        ctx2,
        cycleScale,
        fading,
        plotted,
        streamWidth=350,
        cyclesWidth=500,
        cycleLap=3800;

    function configure(){
        var el=document.createElement('div'),
            s=el.style,vendors=['moz','webkit','ms','o'],
            b=document.getElementsByTagName('body')[0];
        b.appendChild(el);
        s.cssText='opacity:0.5;-webkit-opacity:0.5;-moz-opacity:0.5;-o-opacity:0.5;-ms-opacity:0.5;transform:rotate(10deg);-webkit-transform:rotate(10deg);-moz-transform:rotate(10deg);-o-transform:rotate(10deg);-ms-transform:rotate(10deg);';
        if(s.opacity){cssPropertyOpacity='opacity';}
        else if(s.webkitOpacity){cssPropertyOpacity='webkitOpacity';}
        else if(s.MozOpacity){cssPropertyOpacity='MozOpacity';}
        else if(s.OOpacity){cssPropertyOpacity='OOpacity';}
        else if(s.msOpacity){cssPropertyOpacity='msOpacity';}
        usesCssFilter=Boolean(el.filters);
        if(s.transform){cssPropertyTransform='transform';}
        else if(s.webkitTransform){cssPropertyTransform='WebkitTransform';}
        else if(s.MozTransform){cssPropertyTransform='MozTransform';}
        else if(s.OTransform){cssPropertyTransform='OTransform';}
        else if(s.msTransform){cssPropertyTransform='msTransform';}
        b.removeChild(el);
        if(window.G_vmlCanvasManager){hasCanvas=usesExCanvas=true;}
        else{el=document.createElement('canvas');
        if(el&&el.getContext&&el.getContext('2d')){hasCanvas=true;if(usesCssFilter)usesCssFilter=false;}}
        if(window.requestAnimationFrame){reqAnimFrame=window.requestAnimationFrame;cancelReqAnimFrame=window.cancelAnimationFrame;}
        else{
            for(var i=0;i<vendors.length;i++){
                var vend=vendors[i];reqAnimFrame=window[vend+'RequestAnimationFrame'];
                if(reqAnimFrame){cancelReqAnimFrame=window[vend+'CancelAnimationFrame']||window[vend+'CancelRequestAnimationFrame'];break;}
            }
        }
    }
    
    function setStatusCode(code){
        var ncode,img;
        if(!code.match(/^[0-9]{3}$/)||code=='000'){code='WTF';ncode='000';}
        else{ncode=code;}
        epicycles=[];
        assets=[];
        img2load=0;
        for(var i=0;i<3;i++){
            epicycles.push(parseInt(ncode.charAt(i)));
            img=new Image();
            img.src='/errorPages/images/'+code.charAt(i)+'.gif';
            if(!img.complete){img.onload=imgLoadHandler;img2load++;}
            assets.push(img);
        }
        if(hasCanvas){
            var assetNames=['scale.png','title.gif'];
            for(var i=0,l=assetNames.length;i<l;i++){
                img=new Image();
                img.src='/errorPages/images/'+assetNames[i];
                if(!img.complete){img.onload=imgLoadHandler;img2load++;}
                assets.push(img);
            }
        }
        addLegend();
        if(!cssPropertyTransform||!hasCanvas){document.getElementById('display').className='nosupport';}
        else if(window.IELT8){el=document.getElementById('display');if(el&&el.style)el.style.height=el.currentStyle.minHeight;}
        if(!img2load)initCodeDisplay();
    
    }
    function imgLoadHandler(){if(--img2load==0)initCodeDisplay();}
    
    function initCodeDisplay(){
        var display=document.getElementById('display');
        while(display.firstChild)display.removeChild(display.firstChild);
        if(usesExCanvas&&window.IELT8){
            rotators=[];
            for(var i=0;i<3;i++){
                var r=new ExCanvasRotator(assets[i]);
                rotators.push(r);
                display.appendChild(r.element);
                r.init();
                if(usesCssFilter&&r.element.currentStyle&&!r.element.currentStyle.hasLayout)r.element.style.zoom=1;
            }
        }
        else{
            for(var i=0;i<3;i++){
                var img=assets[i];
                img.id='statusCode'+i;img.className='statusCode';
                display.appendChild(img);
                if(usesCssFilter&&img.currentStyle&&!img.currentStyle.hasLayout)img.style.zoom=1;
            }
        }
        display.appendChild(document.createElement('br'));
        if(cssPropertyTransform||usesExCanvas){rotateStatusCode();}
        else if(hasCanvas){startCycle();}
        else{insertNoSupportMessage();}
    }
    
    function rotateStatusCode(){
        var cf,cf1,st,r,a=[0.85,0.7,0.45];
        if(!startTime){startTime=new Date().getTime();cf=1;}
        else{cf=Math.max(0,1-(new Date().getTime()-startTime)/900);}
        cf1=1-cf;
        for(var i=0;i<3;i++){
            if(usesExCanvas){
                if(window.IELT8){
                    r=rotators[i];r.rotate(Math.PI*a[i]*Math.sin(Math.PI*0.5*cf));
                    st=r.element.style;
                }
                else{st=assets[i].style;}
                var v=0.05+0.95*(easeInOutQuad(cf1,0,1,1)+cf1)*2;
                st[cssPropertyOpacity]=v;
                if(usesCssFilter)st.filter='Alpha(Opacity='+(v*100)+')';}
                else{
                    st=assets[i].style;
                    st[cssPropertyOpacity]=0.05+0.95*easeInOutQuad(cf1,0,1,1);
                    if(cssPropertyTransform)st[cssPropertyTransform]='rotate('+(360*a[i]*Math.sin(Math.PI*0.5*cf))+'deg)';
                }
            }
            if(cf){if(reqAnimFrame){reqAnimFrame(rotateStatusCode);}
            else{setTimeout(rotateStatusCode,20);}
        }
        else if(hasCanvas){startCycle();}
        else{insertNoSupportMessage();}
    }
    
    function easeInOutQuad(t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;}

    function ExCanvasRotator(img){
        this.img=img;
        this.w=img.width;
        this.h=img.height;
        var canvas=document.createElement('canvas');
        canvas.width=this.w;
        canvas.height=this.h;
        canvas.style.width=this.w+'px';
        canvas.style.height=this.h+'px';
        canvas.style.display='inline';
        this.element=canvas;
    }
    ExCanvasRotator.prototype={
        rotate:function(phi){
            var w=this.w,h=this.h;
            this.ctx.save();
            this.ctx.clearRect(0,0,w,h);
            this.ctx.translate(w/2,h/2);
            this.ctx.rotate(phi);
            this.ctx.translate(-w/2,-h/2);
            this.ctx.drawImage(this.img,0,0,w,h);
            this.ctx.restore();
        },init:function(){
            if(usesExCanvas)G_vmlCanvasManager.initElement(this.element);
            this.ctx=this.element.getContext('2d');
        }
    };
    
    function startCycle(){
        var display=document.getElementById('display');
        canvas1=document.createElement('canvas');
        if(usesExCanvas){
            document.getElementById('display').appendChild(canvas1);
            canvas1.style.display='block';
            G_vmlCanvasManager.initElement(canvas1);
        }
        canvas1.width=streamWidth+cyclesWidth;
        canvas1.height=cyclesWidth;
        canvas1.style.width=streamWidth+cyclesWidth+'px';
        canvas1.style.height=cyclesWidth+'px';
        canvas1.style.display='block';
        canvas1.id='epicycles';
        ctx1=canvas1.getContext('2d');
        if(!usesExCanvas)display.appendChild(canvas1);
        var r=0;
        for(var i=0;i<3;i++)r+=epicycles[i];
        cycleScale=(r>0)?Math.min(20,(cyclesWidth-10)/(2*r)):20;
        setUpLegend();
        title=assets[4];
        title.id='epicyclestitle';
        if(usesCssFilter&&title.currentStyle&&!title.currentStyle.hasLayout)title.style.zoom=1;
        if(window.IELT8)title.className='ie7';
        display.appendChild(title);
        if(cssPropertyOpacity){
            canvas1.style[cssPropertyOpacity]=canvas2.style[cssPropertyOpacity]=title.style[cssPropertyOpacity]=0;
            if(usesCssFilter)title.style.filter='Alpha(Opacity=0)';f
            ading=2;
        }
        plotted=new Array();
        startTime=0;
        setTimeout(cycle,50);
    }
    
    function setUpLegend(){
        var w=10*cycleScale;
        canvas2=document.createElement('canvas');
        if(usesExCanvas){
            document.getElementById('display').appendChild(canvas2);
            canvas2.style.display='block';
            G_vmlCanvasManager.initElement(canvas2);
        }
        canvas2.width=w;
        canvas2.height=21;
        canvas2.style.width=w+'px';
        canvas2.style.height=21+'px';
        canvas2.id='epicycleslegend';
        
        if(!usesExCanvas)document.getElementById('display').appendChild(canvas2);
        ctx2=canvas2.getContext('2d');
        ctx2.strokeStyle='#444444';
        ctx2.lineWidth=(usesExCanvas)?1:0;
        ctx2.beginPath();
        ctx2.moveTo(1,1.5);
        ctx2.lineTo(w,1.5);
        ctx2.stroke();
        var img=assets[3];
        for(var i=0;i<10;i++){
            var x=6+cycleScale*i;
            ctx2.beginPath();
            ctx2.moveTo(x+0.5,0);
            ctx2.lineTo(x-1,5);
            ctx2.stroke();
            ctx2.drawImage(img,1+i*14+1,0,12,12,x-6,9,12,12);
        }
    }
    
    function cycle(){
        var cf,px=0,py=0,phi,a,p,ofs,wl=120,lapped=false;
        if(!startTime){
            lastTime=startTime=new Date().getTime();
            cf=1;
        }
        else{
            var t=new Date().getTime(),d=t-startTime;
            while(d>cycleLap){
                d-=cycleLap;
                startTime+=cycleLap;
                lapped=true;
            }
            cf=Math.max(0,1-d/cycleLap);
            if(t-lastTime>600)plotted.length=0;lastTime=t;
        }
        if(fading==2){
            var v=(1-cf)*2.25;
            if(v>=1){
                canvas1.style[cssPropertyOpacity]=canvas2.style[cssPropertyOpacity]=1;
                fading=1;
            }
            else{
                canvas1.style[cssPropertyOpacity]=canvas2.style[cssPropertyOpacity]=v;
            }
        }
        else if(fading==1){
            var v=(1-cf)*2.25-1;
            if(v>=1){
                title.style[cssPropertyOpacity]=legend.style[cssPropertyOpacity]=1;
                if(usesCssFilter){title.style.filter='Alpha(Opacity=100)';
                    legend.style.filter='Alpha(Opacity=100)';
                }
                fading=0;
            }
            else{
                title.style[cssPropertyOpacity]=v;
                if(usesCssFilter)title.style.filter='Alpha(Opacity='+(v*100)+')';
                if(v>0.5){
                    v=(v-0.5)*2
                    legend.style[cssPropertyOpacity]=v;
                    if(usesCssFilter)legend.style.filter='Alpha(Opacity='+(v*100)+')';
                }
            }
        }
        a=Math.PI*2*cf;
        ctx1.save();
        ctx1.clearRect(0,0,cyclesWidth+streamWidth,cyclesWidth);
        ctx1.globalCompositeOperation='source-over';
        ctx1.fillStyle='#777777';
        ctx1.strokeStyle='#777777';
        ctx1.lineWidth=(usesExCanvas)?1:0;
        px=streamWidth+cyclesWidth/2;
        py=cyclesWidth/2;
        ctx1.beginPath();
        ctx1.moveTo(0,py);
        ctx1.arc(px,py,1,0,Math.PI*2);
        ctx1.closePath();ctx1.fill();
        phi=0;
        for(var i=0;i<3;i++){
            var r=epicycles[i]*cycleScale;
            phi+=a;
            if(r>0){
                ctx1.globalCompositeOperation='source-over';
                ctx1.strokeStyle='#777777';
                ctx1.beginPath();
                ctx1.arc(px,py,r,0,Math.PI*2);
                ctx1.closePath();
                ctx1.stroke();
                px+=Math.sin(phi)*r;
                py+=-Math.cos(phi)*r;
            }
            ctx1.globalCompositeOperation='lighter';
            ctx1.fillStyle='#dd4b39';
            ctx1.beginPath();
            ctx1.arc(px,py,2,0,Math.PI*2);
            ctx1.closePath();ctx1.fill();
        }
        if(fading<2){
            plotted.unshift([py,cf,lapped]);
            ctx1.beginPath();
            ctx1.arc(streamWidth,py,2,0,Math.PI*2);
            ctx1.closePath();
            ctx1.fill();
            ctx1.strokeStyle='rgba(211,75,57, 0.5)';
            ctx1.lineWidth=1;
            ctx1.beginPath();
            ctx1.moveTo(streamWidth,py);
            ctx1.lineTo(px,py);
            ctx1.stroke();
            ctx1.lineWidth=1.5;
            ofs=px=streamWidth+wl*cf;
            ctx1.beginPath();
            ctx1.moveTo(streamWidth,py);
            for(var i=0,l=plotted.length;i<l&&px>0;i++){
                p=plotted[i];
                px=ofs-wl*p[1];
                ctx1.lineTo(px,p[0]);
                if(p[2])ofs-=wl;
            }
            if(plotted.length>i)plotted.length=i;ctx1.stroke();
        }
        ctx1.restore();
        if(reqAnimFrame){setTimeout(reqAnimFrame(cycle),10);}
        else{setTimeout(cycle,20);}
    }
    
    function addLegend(){
        var p;legend=document.createElement('div');
        legend.id='legend';
        legend.className='message';
        if(hasCanvas){
            p=document.createElement('p');
            p.innerHTML='Q: What is this?<br />A: This is the status code with the individual digits shown as epicycles while synthesizing as a Fourier transformation. If you would like to know more about this, you could read <a href="http://nautil.us/blog/the-math-trick-behind-mp3s-jpegs-and-homer-simpsons-face" target=_blank">this article</a> or play with Lucas Vieira\'s marvelous &laquo;<a href="http://toxicdump.org/stuff/FourierToy.swf" target="_blank">Fourier Toy</a>&raquo;. Click here for a <a href="/status">list of common status codes</a> for more of the like. Click the title at the top of this page to explore any other 3-digit code.';
            legend.appendChild(p);
        }
        p=document.createElement('p');
        p.innerHTML='Q: Where is the page advertising a classic video game that used to be here?<br />A: <a href="/status/?410">410 Gone</a>.';legend.appendChild(p);p=document.createElement('p');p.innerHTML='Q: Will it be back?<br />A: Sorry. (<a href="/status/?451">Reasons</a>.)';
        legend.appendChild(p);
        var display=document.getElementById('display');
        display.parentNode.insertBefore(legend,display.nextSibling);
        if(cssPropertyOpacity){
            legend.style[cssPropertyOpacity]=0;
            if(usesCssFilter)legend.style.filter='Alpha(Opacity=0)';
        }    
    }
    
    function insertNoSupportMessage(){
        var p=document.createElement('p');
        p.innerHTML='Sorry, your browser doesn\'t support the required web standards.<br />You are missing some ...';
        document.getElementById('display').appendChild(p);
        if(cssPropertyOpacity){
            legend.style[cssPropertyOpacity]=1;
            if(usesCssFilter)legend.style.filter='Alpha(Opacity=100)';
        }
    }
    
    function init(statusCode){
        if(document.createElement){
            configure();
            setStatusCode(String(statusCode));
        }
    }
    this.init=init;
};
