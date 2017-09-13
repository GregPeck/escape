function SfxrP(){this.set=function(a){for(var b=0;b<24;b++)this[String.fromCharCode(97+b)]=a[b]||0;this.c<.01&&(this.c=.01);var c=this.b+this.c+this.e;if(c<.18){var d=.18/c;this.b*=d,this.c*=d,this.e*=d}}}function sy(){this._p=new SfxrP;var a,b,c,d,e,f,g,h,i,j,k,l;this.reset=function(){var a=this._p;d=100/(a.f*a.f+.001),e=100/(a.g*a.g+.001),f=1-a.h*a.h*a.h*.01,g=-a.i*a.i*a.i*1e-6,a.a||(k=.5-a.n/2,l=5e-5*-a.o),h=1+a.l*a.l*(a.l>0?-.9:10),i=0,j=1==a.m?0:(1-a.m)*(1-a.m)*2e4+32},this.totalReset=function(){this.reset();var d=this._p;return a=d.b*d.b*1e5,b=d.c*d.c*1e5,c=d.e*d.e*1e5+12,3*((a+b+c)/3|0)},this.sW=function(m,n){var o=this._p,p=1!=o.s||o.v,q=o.v*o.v*.1,r=1+3e-4*o.w,s=o.s*o.s*o.s*.1,t=1+1e-4*o.t,u=1!=o.s,v=o.x*o.x,w=o.g,x=o.q||o.r,y=o.r*o.r*o.r*.2,z=o.q*o.q*(o.q<0?-1020:1020),A=o.p?((1-o.p)*(1-o.p)*2e4|0)+32:0,B=o.d,C=o.j/2,D=o.k*o.k*.01,E=o.a,F=a,G=1/a,H=1/b,I=1/c,J=5/(1+o.u*o.u*20)*(.01+s);J>.8&&(J=.8),J=1-J;for(var Q,S,U,W,Y,Z,K=!1,L=0,M=0,N=0,O=0,P=0,R=0,T=0,V=0,X=0,$=0,_=new Array(1024),aa=new Array(32),ba=_.length;ba--;)_[ba]=0;for(var ba=aa.length;ba--;)aa[ba]=2*Math.random()-1;for(var ba=0;ba<n;ba++){if(K)return ba;if(A&&++X>=A&&(X=0,this.reset()),j&&++i>=j&&(j=0,d*=h),f+=g,d*=f,d>e&&(d=e,w>0&&(K=!0)),S=d,C>0&&($+=D,S*=1+Math.sin($)*C),S|=0,S<8&&(S=8),E||(k+=l,k<0?k=0:k>.5&&(k=.5)),++M>F)switch(M=0,++L){case 1:F=b;break;case 2:F=c}switch(L){case 0:N=M*G;break;case 1:N=1+2*(1-M*H)*B;break;case 2:N=1-M*I;break;case 3:N=0,K=!0}x&&(z+=y,U=0|z,U<0?U=-U:U>1023&&(U=1023)),p&&r&&(q*=r,q<1e-5?q=1e-5:q>.1&&(q=.1)),Z=0;for(var ca=8;ca--;){if(T++,T>=S&&(T%=S,3==E))for(var da=aa.length;da--;)aa[da]=2*Math.random()-1;switch(E){case 0:Y=T/S<k?.5:-.5;break;case 1:Y=1-T/S*2;break;case 2:W=T/S,W=6.28318531*(W>.5?W-1:W),Y=1.27323954*W+.405284735*W*W*(W<0?1:-1),Y=.225*((Y<0?-1:1)*Y*Y-Y)+Y;break;case 3:Y=aa[Math.abs(32*T/S|0)]}p&&(Q=R,s*=t,s<0?s=0:s>.1&&(s=.1),u?(P+=(Y-R)*s,P*=J):(R=Y,P=0),R+=P,O+=R-Q,O*=1-q,Y=O),x&&(_[V%1024]=Y,Y+=_[(V-U+1024)%1024],V++),Z+=Y}Z*=.125*N*v,m[ba]=Z>=1?1:Z<=-1?-1:Z}return n}}var synth=new sy;window.jsfxr=function(a){window._audioContext=window._audioContext||new AudioContext;var b=window._audioContext;synth._p.set(a);var c=synth.totalReset(),d=c+1>>1<<1,e=b.createBuffer(1,d,b.sampleRate),f=e.getChannelData(0);2*synth.sW(f,c);return e},window.playSound=function(n){jsfxr(n);var o=window._audioContext,e=o.createBufferSource();e.buffer=jsfxr(n),e.loop=!1,e.connect(o.destination),e.start(o.currentTime);return [e.buffer,o,e]};
										
glMatrixArrayType="undefined"!=typeof Float32Array?Float32Array:"undefined"!=typeof WebGLFloatArray?WebGLFloatArray:Array;var mat3={};mat3.create=function(r){var t=new glMatrixArrayType(9);return r&&(t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9]),t},mat3.transpose=function(r,t){if(!t||r==t){var a=r[1],n=r[2],e=r[5];return r[1]=r[3],r[2]=r[6],r[3]=a,r[5]=r[7],r[6]=n,r[7]=e,r}return t[0]=r[0],t[1]=r[3],t[2]=r[6],t[3]=r[1],t[4]=r[4],t[5]=r[7],t[6]=r[2],t[7]=r[5],t[8]=r[8],t};var mat4={};mat4.create=function(r){var t=new glMatrixArrayType(16);return r&&(t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t},mat4.identity=function(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r},mat4.toInverseMat3=function(r,t){var a=r[0],n=r[1],e=r[2],u=r[4],i=r[5],o=r[6],f=r[8],m=r[9],c=r[10],v=c*i-o*m,y=-c*u+o*f,l=m*u-i*f,s=a*v+n*y+e*l;return s?(s=1/s,t||(t=mat3.create()),t[0]=v*s,t[1]=(-c*n+e*m)*s,t[2]=(o*n-e*i)*s,t[3]=y*s,t[4]=(c*a-e*f)*s,t[5]=(-o*a+e*u)*s,t[6]=l*s,t[7]=(-m*a+n*f)*s,t[8]=(i*a-n*u)*s,t):null},mat4.translate=function(r,t,a){var n=t[0],e=t[1];if(t=t[2],!a||r==a)return r[12]=r[0]*n+r[4]*e+r[8]*t+r[12],r[13]=r[1]*n+r[5]*e+r[9]*t+r[13],r[14]=r[2]*n+r[6]*e+r[10]*t+r[14],r[15]=r[3]*n+r[7]*e+r[11]*t+r[15],r;var u=r[0],i=r[1],o=r[2],f=r[3],m=r[4],c=r[5],v=r[6],y=r[7],l=r[8],s=r[9],M=r[10],p=r[11];return a[0]=u,a[1]=i,a[2]=o,a[3]=f,a[4]=m,a[5]=c,a[6]=v,a[7]=y,a[8]=l,a[9]=s,a[10]=M,a[11]=p,a[12]=u*n+m*e+l*t+r[12],a[13]=i*n+c*e+s*t+r[13],a[14]=o*n+v*e+M*t+r[14],a[15]=f*n+y*e+p*t+r[15],a},mat4.rotate=function(r,t,a,n){var e=a[0],u=a[1];a=a[2];var i=Math.sqrt(e*e+u*u+a*a);if(!i)return null;1!=i&&(e*=i=1/i,u*=i,a*=i);var o=Math.sin(t),f=Math.cos(t),m=1-f;t=r[0],i=r[1];var c=r[2],v=r[3],y=r[4],l=r[5],s=r[6],M=r[7],p=r[8],A=r[9],d=r[10],h=r[11],F=e*e*m+f,g=u*e*m+a*o,x=a*e*m-u*o,T=e*u*m-a*o,b=u*u*m+f,w=a*u*m+e*o,G=e*a*m+u*o;return e=u*a*m-e*o,u=a*a*m+f,n?r!=n&&(n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15]):n=r,n[0]=t*F+y*g+p*x,n[1]=i*F+l*g+A*x,n[2]=c*F+s*g+d*x,n[3]=v*F+M*g+h*x,n[4]=t*T+y*b+p*w,n[5]=i*T+l*b+A*w,n[6]=c*T+s*b+d*w,n[7]=v*T+M*b+h*w,n[8]=t*G+y*e+p*u,n[9]=i*G+l*e+A*u,n[10]=c*G+s*e+d*u,n[11]=v*G+M*e+h*u,n},mat4.frustum=function(r,t,a,n,e,u,i){i||(i=mat4.create());var o=t-r,f=n-a,m=u-e;return i[0]=2*e/o,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*e/f,i[6]=0,i[7]=0,i[8]=(t+r)/o,i[9]=(n+a)/f,i[10]=-(u+e)/m,i[11]=-1,i[12]=0,i[13]=0,i[14]=-u*e*2/m,i[15]=0,i},mat4.perspective=function(r,t,a,n,e){return r=a*Math.tan(r*Math.PI/360),t*=r,mat4.frustum(-t,t,-r,r,a,n,e)};

speedZ = frame = totalMove =0;
var doorTimer = false;
var respawn=[
	{x:-8.7,y:46.52,z:3,rotX:10,rotY:-412,rotZ:-3},
	{x:-1.3,y:35.9,z:2.2,rotX:-1.3,rotY:25.9,rotZ:9},
	{x:-15.53,y:10.2,z:6,rotX:-1.3,rotY:42,rotZ:19.4},
	{x:-37.35,y:29.75,z:3,rotX:-1.3,rotY:170.4,rotZ:-19.1},
	{x:-60,y:50.5,z:3,rotX:-1.3,rotY:-11.1,rotZ:4.1}
]
var lastRespawn = 0;

var font = [];
font[0] = "111101101101111";
font[1] = "010110010010111";
font[2] = "111001111100111";
font[3] = "111001111001111";
font[4] = "101101111001001";
font[5] = "111100111001111";
font[6] = "111100111101111";
font[7] = "111001010010010";
font[8] = "111101111101111";
font[9] = "111101111001111";
font["A"] = "111101111101101";
font["B"] = "110101110101110";
font["C"] = "111100100100111";
font["D"] = "110101101101110";
font["E"] = "111100111100111";
font["F"] = "111100111100100";
font["G"] = "111100101101111";
font["H"] = "101101111101101";
font["I"] = "111010010010111";
font["J"] = "011001001101010";
font["K"] = "101101110101101";
font["L"] = "100100100100111";
font["M"] = "101111111101101";
font["N"] = "101111111111101";
font["O"] = "010101101101010";
font["P"] = "110101110100100";
font["Q"] = "111101101111001";
font["R"] = "110101111110101";
font["S"] = "111100111001111";
font["T"] = "111010010010010";
font["U"] = "101101101101111";
font["V"] = "101101101101010";
font["W"] = "101101111111101";
font["X"] = "101101010101101";
font["Y"] = "101101010010010";
font["Z"] = "111001010100111";
font["-"] = "000000111000000";
font[":"] = "000010000010000";
font["."] = "000000000000010";
font[","] = "000000000010100";
font["'"] = "001010000000000";
font["?"] = "010101001010010";
font["+"] = "000010111010000";
font["="] = "000111000111000";
font["!"] = "010010010000010";

var gl, shaderProgram, shaderProgramLava, shaderProgramTorch, shaderProgramPortal, ctx, sol, mur, portal, textureDoor, textureKey;
delta = 0.012;
moveF = moveB = moveL = moveR = ctrl = false;
var UVW = [];
var mvMatrix = mat4.create();
var pMatrix = mat4.create();
var lights = new Float32Array([
	62.8,-30,8,16,
	4,-41.2,3.5,0,
	8.81,-60.8,2.2,0,
	8.81,-59.2,2.2,0,
	4.63,-55.21,3.5,0,
	8.05,-56.33,2.5,0,
	12.7,-32.8,3.5,0,
	1.3,-31.2,2.2,0,
	10.05,-17.2,4.5,0,
	14.68,-21,3.5,0,
	1.31,-24.2,3.5,0,
	8.7,-26,6,0,
	16.7,-15.7,6.5,0,
	20.7,-20,6.5,0,
	16,-1.3,6.5,0,
	38,-29.3,4.5,0,
	40,-48.7,6.5,0,
	36,-48.7,6.5,0,
	44.7,-56,5.5,0,
	31.3,-56,5.5,0,
	46,-59.2,4.5,0,
	30,-59.2,4.5,0,
	22,-25.3,3.5,0,
	60.7,-60,4.5,0,
	49.3,-45,3.5,0,
	52,-37.2,4.5,0,
	48,-37.2,4.5,0,
	43.3,-30,3.5,0,
	43.3,-32,3.5,0,
	43.3,-34,3.5,0,
	52,-34.8,4.5,0,
	48,-34.8,4.5,0,
]);
var lightsDisplayed = [];
drawText = function(posX, posY, text) {
	ctx.fillStyle = "#FFF";
	text = text.toString();
	ctx.lineWidth=0.5;
	ctx.strokeStyle="#000";
	pX = posX;
	pY = posY;
	n=0;
	for (var i=0; i<text.length; i++) {
		var index = 0;
		if (n%33==32||text[i]=="&") { 
			pX = posX;
			pY+=18;
			n=0;
			if (text[i]=="&") { continue; }
		}
		for (y=0; y<5; y++) {
			for (x=0; x<3; x++) {
				if (text[i]==" ") { continue; }
				if (font[text[i]][index++]=="1") {
					ctx.fillRect(pX+x*2,pY+y*2,1.6,1.6);
				}
			}
		}
		pX += 8;
		n++;
	}
}
function getShader(gl, id) {
	var shaderScript = document.getElementById(id);
	if (!shaderScript) { return null; }

	var str = "";
	var k = shaderScript.firstChild;
	while (k) {
		if (k.nodeType == 3) {
			str += k.textContent;
		}
		k = k.nextSibling;
	}

	var shader;
	if (shaderScript.type == "x-shader/x-fragment") {
		shader = gl.createShader(gl.FRAGMENT_SHADER);
	} else if (shaderScript.type == "x-shader/x-vertex") {
		shader = gl.createShader(gl.VERTEX_SHADER);
	}

	gl.shaderSource(shader, str);
	gl.compileShader(shader);

	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		alert(shaderScript.type+gl.getShaderInfoLog(shader));
		return null;
	}
	return shader;
}

function initShaders() {
	var vertexShader = getShader(gl, "shader-vs");
	var fs = getShader(gl, "shader-fs");
	var fsL = getShader(gl, "lava-fs");
	var fsT = getShader(gl, "torch-fs");
	var fsP = getShader(gl, "portal-fs")

	var shaders = [["shaderProgram", fs],["shaderProgramLava", fsL], ["shaderProgramTorch", fsT], ["shaderProgramPortal", fsP]];

	for (var i=0; i<shaders.length; i++) {
		var sh = shaders[i];
		s = gl.createProgram();
		gl.attachShader(s, vertexShader);
		gl.attachShader(s, sh[1]);
		gl.linkProgram(s);

		if (!gl.getProgramParameter(s, gl.LINK_STATUS)) {
		    alert("Could not initialise shaders");
		}

		gl.useProgram(s);

		s.vertexPositionAttribute = gl.getAttribLocation(s, "aVertexPosition");
		gl.enableVertexAttribArray(s.vertexPositionAttribute);
		s.textureCoordAttribute = gl.getAttribLocation(s, "aTextureCoord");
		gl.enableVertexAttribArray(s.textureCoordAttribute);
		s.iTime = gl.getUniformLocation(s, "iTime");
		s.resolution = gl.getUniformLocation(s, "resolution");
		s.fTime = gl.getUniformLocation(s, "fTime");
		s.pMatrixUniform = gl.getUniformLocation(s, "uPMatrix");
		s.mvMatrixUniform = gl.getUniformLocation(s, "uMVMatrix");
		//s.nMatrixUniform = gl.getUniformLocation(s, "uNMatrix");
		s.samplerUniform = gl.getUniformLocation(s, "uSampler");
		s.isLava = gl.getUniformLocation(s, "isLava");
		s.cameraPosition = gl.getUniformLocation(s, "cameraPosition");
		s.lights = gl.getUniformLocation(s, "lights");
		s.nbLights = gl.getUniformLocation(s, "nbLights");
		s.ambientColor = gl.getUniformLocation(s, "ambientColor");
		window[sh[0]] = s;
	}
	initBuffers();
}

function handleLoadedTexture(texture) {
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
	gl.generateMipmap(gl.TEXTURE_2D);
}
function handleLoadedTextureFromCanvas(name, textureCanvas) {
	texture = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureCanvas);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
	gl.generateMipmap(gl.TEXTURE_2D);
	gl.bindTexture(gl.TEXTURE_2D, null);
	window[name] = texture;
}
function initTexture() {
	sol = gl.createTexture();
	sol.image = new Image();
	sol.image.onload = function () { handleLoadedTexture(sol) }
	sol.image.src = "boue.png";
}

function setMatrixUniforms(shader) {
	gl.uniformMatrix4fv(shader.pMatrixUniform, false, pMatrix);
	gl.uniformMatrix4fv(shader.mvMatrixUniform, false, mvMatrix);
}

function degToRad(d) {
	return d * Math.PI / 180;
}

getCube = function(d) {
	return [
		-1, -1, d,
		1, -1, d,
		1, 1, d,
		-1, 1, d,
		-1, -1, 0,
		-1, 1, 0,
		1, 1, 0,
		1, -1, 0,
		-1, 1, 0,
		-1, 1, d,
		1, 1, d,
		1, 1, 0,
		-1, -1, 0,
		1, -1, 0,
		1, -1, d,
		-1, -1, d,
		1, -1, 0,
		1, 1, 0,
		1, 1, d,
		1, -1, d,
		-1, -1, 0,
		-1, -1, d,
		-1, 1, d,
		-1, 1, 0
	];
}

getUVW = function(h) {
	return [
		0,0,
		4,0,
		4,4,
		0,4,
		
		-1,0,
		-1,-1,
		0,-1,
		0,0,
		
		0,h,
		0,0,
		1,0,
		1,h,
		1,h,
		0,h,
		0,0,
		1,0,
		0,0,
		-1,0,
		-1,-h,
		0,-h,
		
		-1,0,
		-1,-h,
		0,-h,
		0,0
	];
}
var cubeVertexIndexBuffer;
function initBuffers() { 
	for (var i=0; i<16; i++) {
		UVW[i] = new Float32Array(getUVW(i/2));
		for (var j=8; j<UVW[i].length; j++) {
			UVW[i][j]*=2;
		}
	}
	UVW["key"] = new Float32Array(getUVW(0.2));
	UVW["key"][2] = 1;
	UVW["key"][4] = 1;
	UVW["key"][5] = 1;
	UVW["key"][7] = 1;

	cubeVertexIndexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
	var cubeVertexIndices = [
	    0, 1, 2,      0, 2, 3,    // Front face
	    4, 5, 6,      4, 6, 7,    // Back face
	    8, 9, 10,     8, 10, 11,  // Top face
	    12, 13, 14,   12, 14, 15, // Bottom face
	    16, 17, 18,   16, 18, 19, // Right face
	    20, 21, 22,   20, 22, 23  // Left face
	];
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndices), gl.STATIC_DRAW);
	cubeVertexIndexBuffer.itemSize = 1;
	cubeVertexIndexBuffer.numItems = 36;
}
function drawTorch(x, y, z, height, IDTorch) {
	var shader = shaderProgramTorch;
	gl.useProgram(shader);
	gl.uniform3f(shader.cameraPosition, x, y, z);

	x+=camera.x;
	y+=camera.y;
	z+=-1.2 - camera.z;
	mat4.identity(mvMatrix);
	mat4.rotate(mvMatrix, degToRad(camera.rotation.z), [1, 0, 0]);
	mat4.rotate(mvMatrix, degToRad(camera.rotation.x), [1, 0, 0]);
	mat4.rotate(mvMatrix, degToRad(camera.rotation.y), [0, 1, 0]);
	mat4.rotate(mvMatrix, degToRad(-90), [1, 0, 0]);
	mat4.translate(mvMatrix, [x, y, z]);

	//Tourne la toche facecam
	mat4.rotate(mvMatrix,  Math.PI-Math.atan(x/y), [0, 0, 1]); 
	
	buffer = getCoord('torch');
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.vertexAttribPointer(shader.vertexPositionAttribute, buffer.itemSize, gl.FLOAT, false, 0, 0);
	
	buffer = getUVWBuffer("torch",new Float32Array([
		-0.5,1.5,
		-0.5,0,
		0.5,0,
		0.5,1.5
	]));
	
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.vertexAttribPointer(shader.textureCoordAttribute, buffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.uniform1i(shader.isLava, true);
	gl.uniform1f(shader.iTime, frame+IDTorch);
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
	setMatrixUniforms(shader);

	gl.bindTexture(gl.TEXTURE_2D, mur);
	gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
}
coordBuffer = [];
UVWBuffer = [];
getCoord = function(cubeIndex, cube) {
	if (!coordBuffer[cubeIndex]) {
		if (cubeIndex=="torch") {
			cube = [
				-0.5,0,3,
				-0.5,0,0,
				0.5,0,0,
				0.5,0,3
			];
		}
		coordBuffer[cubeIndex] =  gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, coordBuffer[cubeIndex]);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cube), gl.STATIC_DRAW);
		coordBuffer[cubeIndex].itemSize = 3;
		coordBuffer[cubeIndex].numItems = 24;
	}
	return coordBuffer[cubeIndex];
}
getUVWBuffer = function(UVWIndex, data) {
	if (!UVWBuffer[UVWIndex]) {
		UVWBuffer[UVWIndex] =  gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, UVWBuffer[UVWIndex]);
		gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
		UVWBuffer[UVWIndex].itemSize = 2;
		UVWBuffer[UVWIndex].numItems = 24;
	}
	return UVWBuffer[UVWIndex];
}

function drawCube(x, y, z, height, type, decal, decalX) {
	var cube = getCube(height);
	

	if (type=="portal2") {
		var shader = shaderProgramPortal;
	} else if (type=="portal") {
		var shader = shaderProgramPortal;
	} else if (height===1) {
		var shader = shaderProgramLava;
	} else {
		var shader = shaderProgram;
	}

	gl.useProgram(shader);
	gl.uniform3f(shader.cameraPosition, x, y, z);
	
	//Lights
	if (lightsDisplayed.length) {
		gl.uniform4fv(shader.lights, lightsDisplayed);
	}
	gl.uniform1i(shader.nbLights, lightsDisplayed.length/4);
	
	z+=decal ? decal.z : 0;
	x+=decalX ? decalX : 0;
	var UVWIndex = height;
	if (type==="door") {
		y--;
		cubeIndex = "door";
		UVWIndex = 1;
	} else if (type==="key") {
		for (var i=0; i<cube.length; i+=3) {
			cube[i]/=6;
			cube[i+2]/=20;
			cube[i+1]/=6;
		}
		cubeIndex = "key";
		UVWIndex = "key";
	} else {
		cubeIndex = height;
		UVWIndex = height;
		if (type==="a") {
			cubeIndex = "a";
			for (var i=0; i<cube.length; i+=3) {
				cube[i]/=3;
				cube[i+2]/=20;
				cube[i+1]/=6;
			}
		}
	}
	
	buffer = getUVWBuffer(UVWIndex, UVW[UVWIndex]);
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.vertexAttribPointer(shader.textureCoordAttribute, buffer.itemSize, gl.FLOAT, false, 0, 0);

	x+=camera.x;
	y+=camera.y;
	z+= -1.2 - camera.z;
	mat4.identity(mvMatrix);
	mat4.rotate(mvMatrix, degToRad(camera.rotation.z), [1, 0, 0]);
	mat4.rotate(mvMatrix, degToRad(camera.rotation.x), [1, 0, 0]);
	mat4.rotate(mvMatrix, degToRad(camera.rotation.y), [0, 1, 0]);
	mat4.rotate(mvMatrix, degToRad(-90), [1, 0, 0]);
	mat4.translate(mvMatrix, [x, y, z]);

	if (!GAME.player.isBorn) {
		gl.uniform3f(shader.ambientColor, -2,-2,-2);
		return;		
	} else if (GAME.ending) {
		var c = 0-(1/440*GAME.ending);
		camera.rotation.z = camera.rotation.z + (90 - camera.rotation.z)/3000;
		camera.rotation.y = camera.rotation.y + (74.6 - camera.rotation.y)/3000;
		gl.uniform3f(shader.ambientColor, c, c, c);
	} else if (GAME.player.isDied) {
		var c=-2/600*GAME.player.isDied;
		if (c<=-1.5) {
			showText("YOU ARE DIED...");
		}
		gl.uniform3f(shader.ambientColor, c+0.5, c-0.2, c-0.2);
	} else {
		gl.uniform3f(shader.ambientColor, 0,0,0);
	}

	if (type==="key") { 
		mat4.rotate(mvMatrix, degToRad(frame*2), [0, 0, 1]);
	} else if (type=="door") {
		mat4.translate(mvMatrix, [0, 1, 0]);
		mat4.translate(mvMatrix, [0, -1, 0]);
	}

	buffer = getCoord(cubeIndex, cube);
	gl.bindBuffer(gl.ARRAY_BUFFER,buffer);
	gl.vertexAttribPointer(shader.vertexPositionAttribute, buffer.itemSize, gl.FLOAT, false, 0, 0);
	
	gl.uniform2f(shader.resolution, 1920.0,1000.0);
	gl.uniform1i(shader.samplerUniform, 0); //Déclare la texte 0 sur uSampler
	
	if (height==1) {
		gl.uniform1i(shader.isLava, true);
		gl.uniform1f(shader.iTime, frame);
	}
	gl.uniform1f(shader.fTime, frame);
	gl.uniform1f(shader.iTime, frame);

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
	setMatrixUniforms(shader);

	gl.activeTexture(gl.TEXTURE0);
	if (type=="key") {
		gl.bindTexture(gl.TEXTURE_2D, textureKey);
		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
		gl.bindTexture(gl.TEXTURE_2D, mur);
		gl.drawElements(gl.TRIANGLES, 36-6, gl.UNSIGNED_SHORT, 12);
	}  else if (type=="door") {
		gl.bindTexture(gl.TEXTURE_2D, textureDoor);
		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 24);
	}  else if (type=="portal") {
		gl.bindTexture(gl.TEXTURE_2D, portal);
		i = 24;
		//gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 12);  //12 36 fond //24 24 les 2
		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 60);  //12 36 fond //24 24 les 2
		//
		//6 0 up
		//6 12 bottom
		//6 24 left
		//6 36 right
		//6 48 back
		//6 60 front
		
		//gl.uniform1i(shader.isLava, true);
	}  else if (type=="portal2") {
		gl.bindTexture(gl.TEXTURE_2D, portal);
		i = 24;
		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 12);  //12 36 fond //24 24 les 2
		//gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 60);  //12 36 fond //24 24 les 2
		//
		//6 0 up
		//6 12 bottom
		//6 24 left
		//6 36 right
		//6 48 back
		//6 60 front
		
		//gl.uniform1i(shader.isLava, true);
	} else {
		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, sol);
	
		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
		if (height!=1) {
			gl.bindTexture(gl.TEXTURE_2D, mur);
			gl.drawElements(gl.TRIANGLES, 36-6, gl.UNSIGNED_SHORT, 12);
		}
	}
}

doorOpening = function(door) {
	door.status = "opening";
	if (doorTimer) { clearInterval(doorTimer); }
	doorTimer = setInterval(function() {
		playSound([3,,0.0675,,0.1125,0.6629,,-0.5659,,,,,,,,0.06,,,1,,,0.0299,,0.5]);
	}, 200);
}
doorClosing = function(door) {
	door.status = "closing";
	if (doorTimer) { clearInterval(doorTimer); }
	doorTimer = setInterval(function() {
		playSound([3,,0.0675,,0.1125,0.6629,,-0.5659,,,,,,,,0.06,,,1,,,0.0299,,0.5]);
	}, 200);
}

function drawScene() {
	if (GAME.ended) {
		return;
	}
	if (GAME.player.isDied) {
		GAME.player.isDied++;
		fov=Math.min(170, fov+(170-fov)/100);
		camera.rotation.z += (-90 - camera.rotation.z)/60;
	}
	gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	if (!GAME.player.isBorn) {
		return false;
	}
	mat4.perspective(fov, gl.viewportWidth / gl.viewportHeight, 0.001, 100, pMatrix);
	mat4.identity(mvMatrix);

	for (var x=0; x<levelWidth; x++) {
		for (var y=0; y<levelHeight; y++) {
			var h = level[x][y].h;
			if (!h) { continue; }

			var distance = Math.abs(GAME.player.tile.x - x);
			distance += Math.abs(GAME.player.tile.y - y);
			if (distance<10) {
				if ((x==25 && y==20) || (x==24 && y==16) || (x==24 && y==14)) {
					drawCube(x*2, -y*2, 0, h, "", {z:0.25+Math.sin(x+(frame/20))*0.5});
					level[x][y].z = 0.25+Math.sin(x+(frame/20))*0.5;
				} else if ((x==27 && y==15)) {
					drawCube(x*2, -y*2, 0, h, "", {z:-0.25+Math.cos(x+(frame/20))*1});
					level[x][y].z = -0.25+Math.cos(x+(frame/20))*1;
				} else if ((x==27 && y==15) || (x==28 && y==15)) {
					drawCube(x*2, -y*2, 0, h, "", {z:-0.5+Math.cos(x+(frame/20))*1.5});
					level[x][y].z = -0.5+Math.cos(x+(frame/20))*1.5;
				} else {
					drawCube(x*2, -y*2, 0, h);
				}
				
				if (level[x][y].c) {
					drawCube(x*2, -y*2, level[x][y].c, 5);
				}
			}
		}
	}
	var distance = Math.abs(GAME.player.tile.x - 32);
	distance += Math.abs(GAME.player.tile.y - 15);
	if (distance<10) {
		drawCube(64, -30, 7, 2,"portal",false,-0.5);
	}
	if (GAME.ending) {
		for (var i=50; i>=0; i--) {
			drawCube(64, -GAME.player.tile.y*2, 5, 2,"portal2",{z:-i*10},-64-camera.x);
		}
		if (camera.z<-500) {
			GAME.textInfo = "TO BE CONTINUED...";
			GAME.ended = true;
			playSound([3,,0.3639,0.16,1.3,0.0833,,-0.26,-0.42,,,0.7958,0.8154,,,0.6421,0.1981,-0.2936,1,,,,,0.5]);
			setTimeout("GAME.textInfo += 'NEXT YEAR ?'", 5000);
		}
		GAME.ending++;
	}
	
	var IDTorch = 0;
	
	lightsDisplayed = [];
	for (i=0; i<lights.length; i+=4) {
		var distance = Math.abs(GAME.player.tile.x - lights[i]/2);
		distance += Math.abs(GAME.player.tile.y -  - lights[i+1]/2);
		IDTorch+=2210;
		if (distance<10) {
			lightsDisplayed.push(lights[i]);
			lightsDisplayed.push(lights[i+1]);
			lightsDisplayed.push(lights[i+2]);
			lightsDisplayed.push(lights[i+3]);
			if (lights[i+3]<1) {
				drawCube(lights[i], lights[i+1], lights[i+2], 2, "a");
				drawTorch(lights[i], lights[i+1], lights[i+2], 2, IDTorch);
			}
		}
	}
	for (var i=0; i<doors.length; i++) {
		var d=doors[i];
		if (d.status=="opening") {
			d.decal.z+=0.01;
			if (d.decal.z>2) {
				d.status = "opened";
				index = d.x + (levelWidth * d.y);
				levelObj = levelObj.substr(0, index) + " " + levelObj.substr(index + 1);
				clearInterval(doorTimer);
				playSound([0,,0.0317,,0.17,0.2723,,-0.3311,,,,,,0.1324,,,,,1,,,,,0.5]);
			}
		}
		if (d.status=="closing") {
			d.decal.z-=0.01;
			levelObj = levelObj.substr(0, index) + "D" + levelObj.substr(index + 1);
			if (d.decal.z<=0) {
				d.status = "closed";
				index = d.x + (levelWidth * d.y);
				
				clearInterval(doorTimer);
				playSound([0,,0.0317,,0.17,0.2723,,-0.3311,,,,,,0.1324,,,,,1,,,,,0.5]);
			}
		}
		drawCube(d.x*2, -d.y*2, d.z, 2, "door", {z:d.decal.z});
	}

	for (i=0; i<keys.length; i++) {
		if (keys[i].visible) {
			drawCube(keys[i].x*2, -keys[i].y*2, keys[i].z, 3, "key");
		}
	}
}

endPlayedSnd = null;
function drawGUI() {
	ctx.clearRect(0,0,window.innerWidth,window.innerHeight);

	if (GAME.player.isBorn && !GAME.ending) {
		updatePreviewBackground();
		ctx.beginPath();
		ctx.arc(canvasGUI.width-128, canvasGUI.height-128, 100, 0, 2 * Math.PI, false);
		ctx.lineWidth = 10;
		ctx.strokeStyle = "#FFF";
		ctx.fillStyle = "rgba(0,0,0,0.3)";
		ctx.fill();
		ctx.stroke();
	}

	if (GAME.textInfo) {
		drawText(window.innerWidth/2-130,window.innerHeight/2-80,GAME.textInfo);
		if (!GAME.ended) {
			drawText(window.innerWidth/2-60,window.innerHeight/2+70,"- CLICK TO HIDE - ");
		}
	} else if (!GAME.ending) {
		ctx.beginPath();
		ctx.arc(window.innerWidth/2, window.innerHeight/2, 10, 0, 2 * Math.PI, false);
		ctx.lineWidth = 1;
		ctx.strokeStyle = "#FFF";
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(window.innerWidth/2, window.innerHeight/2, 2, 0, 2 * Math.PI, false);
		ctx.lineWidth = 1;
		ctx.strokeStyle = "#FFF";
		ctx.stroke();
	}
}

function updatePreviewBackground() {
	previewID = ctx.createImageData(256, 256);
	col = [];
	col[0] = {r: 0, g: 0, b: 255};
	col[1] = {r: 86, g: 68, b: 47};
	col[2] = {r:81,g:106,b:102};
	col[3] = {r:148,g:76,b:62};
	col[4] = {r:158,g:146,b:94};
	col[5] = {r:138,g:126,b:144};
	col[6] = {r:128,g:12,b:32};
	col[7] = {r:148,g:32,b:62};
	col[8] = {r:184,g:17,b:154};
	col[9] = {r:184,g:17,b:154};

	for (x = 0; x < levelWidth; x++) {
		for (y = 0; y < levelHeight; y++) {
			if (!level[x][y].v) { continue; }
			var t = levelTmp[x+(y*levelWidth)];
			if (t==" ") { continue; }
			c = col[t];
			setPixel(previewID, x, y, c.r, c.g, c.b);
		}
	}
	ctx.putImageData(previewID, canvasGUI.width-192, canvasGUI.height-192);

	ctx.beginPath();
	ctx.arc(-camera.x*2+canvasGUI.width-192, camera.y*2+canvasGUI.height-192, 10+Math.sin(frame/16)*4, 0, 2 * Math.PI, false);
	ctx.lineWidth = 1;
	ctx.strokeStyle = "#FFF";
	ctx.stroke();
}

function setPixel(iD, posX, posY, r, g, b) {
	posX*=4;
	posY*=4;

	posX+=(128-(4*levelWidth));
	posY+=(128-(4*levelHeight));

	for (var x=posX; x<posX+4; x++) {
		for (var y=posY; y<posY+4; y++) {
			i = (x + y * iD.width) * 4;
			iD.data[i+0] = r;
			iD.data[i+1] = g;
			iD.data[i+2] = b;
			iD.data[i+3] = 255;
		}
	}
}




function tick() {
	frame++;
	
	//stats.begin();
	if (GAME.player.isBorn) {
		if (!GAME.ending) {
			var tile = {
				x:0-Math.round(camera.x/2),
				y:Math.round(camera.y/2)
			}		
			tile.z = levelTmp[tile.x+(tile.y*levelWidth)];

			//Marquer comme visité
			if (!level[tile.x][tile.y].dv) {
				level[tile.x][tile.y].dv = true;
				for (var x=-2; x<=2; x++) {
					for (var y=-2; y<=2; y++) {
						if (level[tile.x+x] && level[tile.x+x][tile.y+y]) {
							level[tile.x+x][tile.y+y].v = true;
						}
					}
				}
			}

			camera.x+=(velocity.x);
			camera.y+=(velocity.y);
			camera.z-=velocity.z;
			
			if (!GAME.player.inJump) { //Son des pas
				totalMove += Math.abs(velocity.x)+Math.abs(velocity.y);
				if (totalMove>2.5) {
					totalMove = totalMove - 2.5;
					playSound([2,,0.0785,,0.1031,0.263+Math.random()*0.01,,-0.3617,,,,,,0.013,,,,,1,,,0.2434,,0.5]);
				}
			} else if (camera.z > level[tile.x][tile.y].c-1) {
				camera.z = level[tile.x][tile.y].c-1.21;
				velocity.z = 0;
				playSound([0,,0.023,,0.1569,0.5238,,-0.6165,,,,,,0.387,,,,,1,,,,,0.5]);
			}
			speedZ = 0;
			if (camera.z < level[tile.x][tile.y].h + level[tile.x][tile.y].z && level[tile.x][tile.y].h!=0) { //Atterissage
				speedZ = camera.z;
				camera.z = level[tile.x][tile.y].h + level[tile.x][tile.y].z;
				speedZ = (camera.z-speedZ);

				GAME.player.inJump = false;
				if (!level[tile.x][tile.y].z) {
					playSound([0,0,0.016381476748580037,0.4,0.16687619143276416,0.4082078254149436,0,-0.5507417605915748,0,0,0,0,0,0.18724223849979407,0,0,0,0,1,0,0,0,0,0.5]);
				}
				velocity.z = 0;
				if (level[tile.x][tile.y].h==1) {
					camera.rotation.y = camera.rotation.y%360;
					GAME.player.isDied = 1;
					playSound([0,,0.387,,0.88,0.4742,,-0.12,-0.0999,,0.079,,,0.4625,,0.07,,,1,,,,,0.5]);
				}
			} else if (camera.z>level[tile.x][tile.y].h + level[tile.x][tile.y].z) { //Chute libre
				velocity.z += 0.004;
				GAME.player.inJump = true;
			}

			var tile2 = {
				x:0-Math.round((camera.x+(velocity.x>0 ? 0.3 : -0.3))/2),
				y:Math.round((camera.y+(velocity.y>0 ? 0.3 : -0.3))/2)
			}

			tile2.z = level[tile2.x][tile2.y].h + level[tile2.x][tile2.y].z;
			tile3z =  levelObj[tile2.x+(tile2.y*levelWidth)];

			if (tile3z=="D" || (tile2.z>tile.z && camera.z<tile2.z)) { //false temporaire pour ne pas gérer les colisions
				camera.x-= velocity.x;
				camera.y-= velocity.y;
				velocity.x = 0;
				velocity.y = 0;
			} else {
				if (tile.x!=GAME.player.tile.x || tile.y!=GAME.player.tile.y) {
					if (level[tile.x][tile.y].t) {
						level[tile.x][tile.y].t.action();
						if (level[tile.x][tile.y].t.type=="once") {
							level[tile.x][tile.y].t = false;
						}
					}
				}
			}
			GAME.player.tile = tile;
			
			if ( moveF ) {
				velocity.y += Math.cos(camera.rotation.y * 0.017453292519943295 ) * delta;
				velocity.x += Math.sin(camera.rotation.y * 0.017453292519943295 ) * delta;
			}
			if ( moveB ) {
				velocity.y -= Math.cos(camera.rotation.y * 0.017453292519943295 ) * delta;
				velocity.x -= Math.sin(camera.rotation.y * 0.017453292519943295 ) * delta;
			}
			if ( moveL ) {
				velocity.y += Math.cos((camera.rotation.y + 90) * 0.017453292519943295 ) * delta;
				velocity.x += Math.sin((camera.rotation.y + 90) * 0.017453292519943295 ) * delta;
			}
			if ( moveR ) {
				velocity.y -= Math.cos((camera.rotation.y + 90) * 0.017453292519943295 ) * delta;
				velocity.x -= Math.sin((camera.rotation.y + 90) * 0.017453292519943295 ) * delta;
			}

		} else {
			camera.x+=(velocity.x);
			camera.y+=(velocity.y);
			camera.z-=velocity.z;
			velocity.z += 0.004;
		}
		velocity.x -= velocity.x * 0.1;
		velocity.y -= velocity.y * 0.1;
		if (velocity.z!=0) { velocity.z += 0.004; }
	}
	drawScene();
	//console.log(lightsDisplayed.length);
	
	drawGUI();
	requestAnimationFrame(tick);
	//stats.end();
}

var canvas2;
var canvasGUI;
//var stats = new Stats();
var GAME,camera,velocity,keys,doors,triggers,fov,level;
showText = function(s) {
	document.getElementById("textInfo").style.display = s ? "block" : "none";
	GAME.textInfo = s;
}
keys = [
	{x:4,y:30,z:2,visible:true},
	{x:9,y:30,z:5,visible:true},
	{x:13,y:14,z:2,visible:true},
	{x:10,y:10,z:5,visible:true},
	{x:30,y:5,z:2,visible:true},
]
initGame = function() {
	GAME = {
		player:{
			inJump:false,
			isDied:false,
			isBorn:false,
			tile:{
				x:0,
				y:0
			}			
		},
		ended:false,
		ending:0
	};
	if (lastRespawn==0) {
		showText("YOU ARE LOST IN A STRANGE MAZE.&&YOU HAVE TO FIND THE EXIT&&MOVE : WASD, ZQSD AND MOUSE&JUMP : SPACE&&OH...AND BE CAREFUL TO LAVA...");
		camera = {
			x:0,
			y:0,
			z:0,
			rotation:{
				x:10,
				y:0,
				z:0
			}
		}
		GAME.player.isBorn = false;
	} else {
		GAME.player.isBorn = true;
		
	}
	r = respawn[lastRespawn];
	camera = {rotation:{}};
	camera.x = r.x;
	camera.y = r.y;
	camera.z = r.z;
	camera.rotation.x = r.rotX;
	camera.rotation.y = r.rotY;
	camera.rotation.z = r.rotZ;
	console.log("init Camera");
	
	velocity = {x:0, y:0, z:0};
	
	doors = [
		{x:1,y:19,z:2,color:"b",status:"closed",decal:{z:0}},
		{x:8,y:6,z:5,color:"b",status:"closed",decal:{z:0}},
		{x:19,y:14,z:2,color:"b",status:"closed",decal:{z:0}},
		{x:30,y:27,z:2,color:"b",status:"closed",decal:{z:0}}
	];
	triggers = [
		{
			x:1,
			y:20,
			action:function() {
				if (keys[0].visible) {
					showText("YOU HAVE TO FIND A KEY TO OPEN&THIS DOOR");
					playSound([0,,0.05,0.4586,0.45,0.18,,,,,,-0.18,0.46,,,,,,1,,,,,0.5]);
				} else {
					doorOpening(doors[0]);
					triggers[0].type = "once";
				}
			},
			type:""
		},{
			x:1,
			y:18,
			action:function() {
				doorClosing(doors[0]);
				lastRespawn = 1;
			},
			type:"once"
		},{
			x:4,
			y:30,
			action:function() {
				if (keys[0].visible) {
					showText("YOU FOUND A KEY");
					keys[0].visible = false;
					playSound([0,,0.01,0.3153,0.4532,0.587,,,,,,0.526,0.5895,,,,,,1,,,,,0.5]);
				}
			},
			type:"once"
		},{
			x:8,
			y:7,
			action:function() {
				if (keys[3].visible) {
					playSound([0,,0.05,0.4586,0.45,0.18,,,,,,-0.18,0.46,,,,,,1,,,,,0.5]);
				} else {
					doorOpening(doors[1]);
					triggers[3].type = "once";
				}
			},
			type:""
		},{
			x:8,
			y:5,
			action:function() {
				doorClosing(doors[1]);
				lastRespawn = 2;
			},
			type:""
		},{
			x:19,
			y:13,
			action:function() {
				if (keys[4].visible) {
					playSound([0,,0.05,0.4586,0.45,0.18,,,,,,-0.18,0.46,,,,,,1,,,,,0.5]);
				} else {
					doorOpening(doors[2]);
					triggers[5].type = "once";
				}
			},
			type:""
		},{
			x:19,
			y:15,
			action:function() {
				doorClosing(doors[2]);
				lastRespawn = 3;
			},
			type:""
		},{
			x:9,
			y:30,
			action:function() {
				if (keys[1].visible) {
					keys[1].visible = false;
					playSound([0,,0.01,0.3153,0.4532,0.587,,,,,,0.526,0.5895,,,,,,1,,,,,0.5]);
				}
			},
			type:"once"
		},{
			x:30,
			y:5,
			action:function() {
				if (keys[4].visible) {
					keys[4].visible = false;
					playSound([0,,0.01,0.3153,0.4532,0.587,,,,,,0.526,0.5895,,,,,,1,,,,,0.5]);
				}
			},
			type:"once"
		},{
			x:13,
			y:14,
			action:function() {
				if (keys[2].visible) {
					keys[2].visible = false;
					playSound([0,,0.01,0.3153,0.4532,0.587,,,,,,0.526,0.5895,,,,,,1,,,,,0.5]);
				}
			},
			type:"once"
		},{
			x:10,
			y:10,
			action:function() {
				if (keys[3].visible) {
					keys[3].visible = false;
					playSound([0,,0.01,0.3153,0.4532,0.587,,,,,,0.526,0.5895,,,,,,1,,,,,0.5]);
				}
			},
			type:"once"
		},{
			x:30,
			y:28,
			action:function() {
				if (keys[1].visible || keys[2].visible) {
					showText("YOU HAVE TO FIND TWO KEY TO OPEN&THIS DOOR");
					playSound([0,,0.05,0.4586,0.45,0.18,,,,,,-0.18,0.46,,,,,,1,,,,,0.5]);
				} else {
					doorOpening(doors[3]);
					triggers[0].type = "once";
				}
				triggers[0].type = "once";
			},
			type:""
		},{
			x:12,
			y:26,
			action:function() {
				setTimeout(function() {
					if (GAME.player.tile.x==12 && GAME.player.tile.y==26) {
						showText("DID YOU EVER PLAY&ASSASSIN CREED ?&&HAVE FAITH !");
					}					
				},5000);
			},
			type:"once"
		},{
			x:30,
			y:26,
			action:function() {
				doorClosing(doors[3]);
				lastRespawn = 4;
			},
			type:"once"
		},{
			x:30,
			y:15,
			action:function() {
				velocity.x = -0.6;
				camera.x = -60;
				camera.y = 30;
				GAME.ending=1;
				endPlayedSnd.start(0);
			},
			type:"once"
		}	
	];
	fov = 45;
	
	levelWidth = 33;
	levelHeight = 32;

	levelTmp = "88888888888888888888888888888888 ";
	levelTmp+= "8      8511211111121111111111118 ";
	levelTmp+= "8      8511211111122222211111118 ";
	levelTmp+= "8      8511211111121111211111118 ";
	levelTmp+= "8      8511222222221111211111118 ";
	levelTmp+= "8      8511211112111111222222128 ";
	levelTmp+= "8      8581211112111111211111118 ";
	levelTmp+= "88888888581211111111111111111118 ";
	levelTmp+= "83452524581211122222222222221118 ";
	levelTmp+= "82222228588811121112111111111118 ";
	levelTmp+= "82222222555822221112111111111118 ";
	levelTmp+= "82222222888811111112111111111118 ";
	levelTmp+= "82888818888888888881999999999999 ";
	levelTmp+= "83456828121211111822281111111119 ";
	levelTmp+= "88888828111112111842481121111119 ";
	levelTmp+= "888888281211111118828821411341770";
	levelTmp+= "82223328121111111883882121111119 ";
	levelTmp+= "82888888121112111884882111111119 ";
	levelTmp+= "82811111111111111885882994999999 ";
	levelTmp+= "82811111111211111886881111111118 ";
	levelTmp+= "82888811111111111186811112111118 ";
	levelTmp+= "82212811111121111186811111111118 ";
	levelTmp+= "82222811212211111186888882222228 ";
	levelTmp+= "82222811111111114126211182222228 ";
	levelTmp+= "82888812211111114126211188888828 ";
	levelTmp+= "82882811111111111187811111111828 ";
	levelTmp+= "82222812211199988887888777111828 ";
	levelTmp+= "88282812111122281117111711111828 ";
	levelTmp+= "88282822111111183456543711111828 ";
	levelTmp+= "88288821111131173111111711188828 ";
	levelTmp+= "88222834551133333333333333333328 ";
	levelTmp+= "88888888888888888888888888888888 ";
	levelObj = levelTmp;

	ceil = "                                 ";
	ceil+= "                                 ";
	ceil+= "                                 ";
	ceil+= "                                 ";
	ceil+= "                                 ";
	ceil+= "                                 ";
	ceil+= "        7                        ";
	ceil+= "        7                        ";
	ceil+= "                                 ";
	ceil+= "                                 ";
	ceil+= " 6666555                         ";
	ceil+= " 6666555                         ";
	ceil+= " 6    5                          ";
	ceil+= " 688885                          ";
	ceil+= "      5           444            ";
	ceil+= "      5                        9 ";
	ceil+= " 455555                          ";
	ceil+= " 4                               ";
	ceil+= " 4                               ";
	ceil+= " 4                               ";
	ceil+= " 4                               ";
	ceil+= "                                 ";
	ceil+= "                                 ";
	ceil+= "                                 ";
	ceil+= " 4                            4  ";
	ceil+= " 4                            4  ";
	ceil+= " 6666                         4  ";
	ceil+= "  6 4                         4  ";
	ceil+= "  6 4                         4  ";
	ceil+= "  5                           4  ";
	ceil+= "  544                            ";
	ceil+= "                                 ";

	level = [];
	for (var x=0; x<levelWidth; x++) {
		level[x] = [];
		for (var y=0; y<levelHeight; y++) {
			level[x][y] = {
				h:levelTmp[x+(y*levelWidth)] ? parseInt(levelTmp[x+(y*levelWidth)]) : false,
				v:false,
				c:ceil[x+(y*levelWidth)] ? parseInt(ceil[x+(y*levelWidth)]) : false,
				t:false,
				z:0
			};
			for (var i=0; i<triggers.length; i++) {
				if (triggers[i].x==x && triggers[i].y==y) {
					level[x][y].t = {
						type:triggers[i].type,
						action:triggers[i].action
					}
				}
			}	
		}
	}
	for (var i=0; i<doors.length; i++) {
		var d=doors[i];
		index = d.x + (levelWidth * d.y);
		levelObj = levelObj.substr(0, index) + "D" + levelObj.substr(index + 1);
	}
}
function resize() {
	var canvas = document.getElementById("game");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	gl = canvas.getContext("webgl");
	gl.viewportWidth = canvas.width;
	gl.viewportHeight = canvas.height;
	
	canvasGUI.width = window.innerWidth;
	canvasGUI.height = window.innerHeight;
}
function webGLStart() {
	//stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
	//document.body.appendChild( stats.dom );
	//tmp = playSound([3,0.14,1,,2,0.37,0.3028,0.1,,,,,,0.2345,0.1275,,0.4399,-0.38,1,,,,,0.5]);
	//tmp = playSound([2,0.95,1,,1.2,0.37,0.3028,0.08,,0.08,0.24,,,0.2345,0.1275,,-0.4,0.3799,1,,0.99,0.81,,0.5]);
	
	// Init sound of the finish
	tmp = playSound([3,0.9573,0.7063,0.0608,1.8,0.5235,,,-0.0289,0.5725,,0.3533,,0.6858,0.0206,,0.0407,-0.2419,0.5566,0.0067,0.1186,0.0629,,0.5]);
	tmp[2].stop();
	endPlayedSnd = tmp[1].createBufferSource();
	endPlayedSnd.buffer = tmp[0];
	endPlayedSnd.connect(tmp[1].destination)

	
	
	//init GUI
	canvasGUI = document.getElementById("GUI");
	
	ctx = canvasGUI.getContext("2d");

	canvasGUI.requestPointerLock = canvasGUI.requestPointerLock || canvasGUI.mozRequestPointerLock;
	canvasGUI.onclick = function() {
		this.requestPointerLock();
		if (GAME.player.isDied || !GAME.player.isBorn) {
			initGame();
			GAME.player.isBorn = true;
		}
		showText(false);
	};

	//init canvas && webgl
	resize();
	
	if (!gl) {
		alert("Could not initialise WebGL, sorry :-(");
	}
	initShaders();
	initTexture();

	gl.clearColor(0, 0, 0, 1.0);
	gl.enable(gl.DEPTH_TEST);
	gl.enable(gl.BLEND);
	gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

	//create door texture
	canvas2 = document.getElementById("textureCanvas");
	canvas2.width=512;
	canvas2.height=512;

	var ctx2 = canvas2.getContext("2d");
	var iD = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);
	ctx2.clearRect(0,0,512,512);
	for (var i = 0; i < iD.data.length; i += 4) {
		for (var j=0; j<128; j+=4) {
			if (i<8192 || (i>65536 && i<73728) || (i>974848 && i<983040) || i>1040384) {
				var c = [209,82,6];
			} else if (i<65536 || i>983040) {
				var c = [124,7,15];
			} else {
				continue;
			}
			iD.data[i+j]=c[0];
			iD.data[i+j+1]=c[1]+Math.random()*40;
			iD.data[i+j+2]=c[2];
			iD.data[i+j+3]=255;
		}			
	}
	d = 64;
	for (var i = 65536; i < iD.data.length-65536; i += 256) {
		for (var j=0; j<128; j+=4) {
			if (j<16 || j>112 || i<8192) {
				var c = [209,82,6];
			} else {
				var c = [124,7,15];
			}
			iD.data[d+i+j]=c[0];
			iD.data[d+i+j+1]=c[1]+Math.random()*40;
			iD.data[d+i+j+2]=c[2];
			iD.data[d+i+j+3]=255;
		}
	}
	ctx2.putImageData(iD, 0, 0);
	handleLoadedTextureFromCanvas("textureDoor", document.getElementById("textureCanvas"));


	//Create key texture
	ctx2.clearRect(0,0,512,512);
	ctx2.textAlign = "center";
	ctx2.textBaseline = "middle"; 
	ctx2.font = "512px Arial";	
	ctx2.fillStyle = "rgba(255,255,255,0.5)";
	ctx2.fillRect(0,0,512,512);
	ctx2.fillStyle = "rgba(0,0,255,0.5)";
	ctx2.strokeStyle = "#000";
	ctx2.lineWidth = 8;
	ctx2.fillText("⚷", (canvas2.width/2), canvas2.height/2);
	ctx2.strokeText("⚷", (canvas2.width/2), canvas2.height/2);
	handleLoadedTextureFromCanvas("textureKey", document.getElementById("textureCanvas"));

	//Create wall texture
	for (var i = 0; i < iD.data.length; i += 4) {
		var c = Math.floor(Math.random()*255);
		iD.data[i]=(255-((255-c)/100*12)) * 193/255;
		iD.data[i+1]=(255-((255-c)/100*12)) * 171/255;
		iD.data[i+2]=(255-((255-c)/100*12)) * 146/255;
		iD.data[i+3]=255;
	}
	ctx2.putImageData(iD, 0, 0);
	handleLoadedTextureFromCanvas("mur", document.getElementById("textureCanvas"));
	
	//Create portal texture
	for (var i = 0; i < iD.data.length; i += 4) {
		var c = Math.floor(Math.random()*255);
		iD.data[i]=iD.data[i+1]=iD.data[i+2]=c;
		iD.data[i+3]=255;
	}
	ctx2.putImageData(iD, 0, 0);
	handleLoadedTextureFromCanvas("portal", document.getElementById("textureCanvas"));
	
	initGame();
	tick();
}

document.onmousemove = function(e) {
	if (!GAME.player.isDied && !GAME.ending) {
		camera.rotation.y += (e.movementX)/10;
		camera.rotation.z += (e.movementY)/10;
	}
}
document.onkeydown = function(e) {
	if (!GAME.player.isDied) {
		switch(e.keyCode) {
			case 90:
			case 87:
			case 38: // up
				moveB = true;
				break;
			case 81:
			case 37: // left
				moveL = true; 
				break;
			case 40: // down
			case 83:
			case 65:
				moveF = true;
				break;
			case 68:
			case 39: // right
				moveR = true;
				break;
			case 17:
			case 32: //space
				if (!GAME.player.inJump) {
					velocity.z = -0.175 - speedZ;
					GAME.player.inJump = true;
					playSound([0,,0.2226,,0.2104,0.12,,0.252,,,,,,0.1856,,,,,1,,,,,0.5]);
					//playSound([0,0,0.3486942686020399,0.4,0.1841117537225248,0.3657271680390763,0,0.15692400407891627,0,0,0,0,0,0.356660836666373,0,0,0,0,1,0,0,0,0,0.5]);
				}
				break;
		}
	}
}
document.onkeyup = function(e) {
	switch(e.keyCode) {
		case 90:
		case 87:
		case 38: // up
			moveB = false;
			break;
		case 81:
		case 37: // left
			moveL = false;
			break;
		case 40: // down
		case 83:
		case 65:
			moveF = false;
			break;
		case 68:
		case 39: // right
			moveR = false;
			break;
	}
}