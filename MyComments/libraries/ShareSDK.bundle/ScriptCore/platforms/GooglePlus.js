var $pluginID = "com.mob.sharesdk.Google+";eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([4-9a-ce-hk-mp-zA-Z]|[1-3]\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('a GoogldPlusShareContentSet={};a w={"15":"21","16":"2E","17":"22","1q":"auth_type","1r":"covert_url"};c k(m){6.2F=m;6.r={"B":5,"C":5};6.18=5;6.1g=5;6.1F=5}k.l.m=c(){u 6.2F};k.l.I=c(){u"Google+"};k.l.D=c(){7(6.r["C"]!=5&&6.r["C"][w.15]!=5){u 6.r["C"][w.15]}h 7(6.r["B"]!=5&&6.r["B"][w.15]!=5){u 6.r["B"][w.15]}u 5};k.l.1s=c(){7(6.r["C"]!=5&&6.r["C"][w.16]!=5){u 6.r["C"][w.16]}h 7(6.r["B"]!=5&&6.r["B"][w.16]!=5){u 6.r["B"][w.16]}u 5};k.l.23=c(){u"2G-2H-"+6.m()+"-"+6.D()};k.l.24=c(){7(6.r["C"]!=5&&6.r["C"][w.1r]!=5){u 6.r["C"][w.1r]}h 7(6.r["B"]!=5&&6.r["B"][w.1r]!=5){u 6.r["B"][w.1r]}u $4.8.24()};k.l.19=c(){7(6.r["C"]!=5&&6.r["C"][w.17]!=5){u 6.r["C"][w.17]}h 7(6.r["B"]!=5&&6.r["B"][w.17]!=5){u 6.r["B"][w.17]}u 5};k.l.J=c(){7(6.1F){u"2I"}7(6.r["C"]!=5&&6.r["C"][w.1q]!=5){u 6.r["C"][w.1q]}h 7(6.r["B"]!=5&&6.r["B"][w.1q]!=5){u 6.r["B"][w.1q]}u $4.8.J()};k.l.2J=c(1h){7(2K.1i==0){u 6.r["B"]}h{6.r["B"]=6.25(1h);6.26(6.D())}};k.l.2L=c(1h){7(2K.1i==0){u 6.r["C"]}h{6.r["C"]=6.25(1h);6.26(6.D())}};k.l.saveConfig=c(){a b=6;a 1a="2G-2H";$4.E.2M("2N",1b,1a,c(9){7(9!=5){a 1t=9.1h;7(1t==5){1t={}}1t["plat_"+b.m()]=b.D();$4.E.2O("2N",1t,1b,1a,5)}})};k.l.isSupportAuth=c(){u 1G};k.l.authorize=c(p,F){a f=5;7(6.2P()){7(F==5){F={}}7(F["1j"]==5){F["1j"]=["1k://1H.1I.U/27/28.login","1k://1H.1I.U/27/28.me"]}a b=6;a J=6.J();7(J=="1u"||J=="2I"){$4.E.isMultitaskingSupported(c(9){7(9.K){b.2Q(c(10,1l){7(10){b.2R(p,1l,F)}h 7(J=="1u"){b.1m(p,F)}h{a f={"s":$4.8.v.UnsetURLScheme,"L":"分享平台［"+b.I()+"］尚未配置2S 2T:"+b.1g+"，无法进行授权!"};$4.z.A(p,$4.8.q.t,f)}})}h 7(J=="1u"){b.1m(p,F)}h{a f={"s":$4.8.v.1v,"L":"分享平台［"+b.I()+"］不支持["+J+"]授权方式!"};$4.z.A(p,$4.8.q.t,f)}})}h 7(J=="web"){b.1m(p,F)}h{f={"s":$4.8.v.1v,"L":"分享平台［"+6.I()+"］不支持["+J+"]授权方式!"};$4.z.A(p,$4.8.q.t,f)}}h{f={"s":$4.8.v.2U,"L":"分享平台［"+6.I()+"］应用信息无效!"};$4.z.A(p,$4.8.q.t,f)}};k.l.handleAuthCallback=c(p,1c){a f=5;a b=6;a 1J=$4.G.parseUrl(1c);7(1J!=5&&1J.1K!=5){a V=$4.G.parseUrlParameters(1J.1K);7(V!=5){7(V["f"]==5){a 2V={"1w":V["1w"],"21":6.D(),"2E":6.1s(),"grant_type":"authorization_code","22":6.19()};$4.E.29(6.m(),5,"1k://2W.2a.U/o/2b/1L","POST",2V,5,c(9){7(9!=5){7(9["s"]!=5){$4.z.A(p,$4.8.q.t,9)}h 7(9["1x"]!=5&&9["1x"]==2c){a O=$4.G.2d($4.G.2e(9["2f"]));7(O.f==5){a 2g=O;a 2X={"1M":O["1M"]};$4.E.29(b.m(),5,"1k://1H.1I.U/2b/v1/tokeninfo","2Z",2X,5,c(9){7(9!=5){7(9["s"]!=5){$4.z.A(p,$4.8.q.t,9)}h 7(9["1x"]!=5&&9["1x"]==2c){a O=$4.G.2d($4.G.2e(9["2f"]));7(O.f==5){2g["11"]=O["user_id"];b.2h(p,2g)}h{f={"s":$4.8.v.P,"12":O};$4.z.A(p,$4.8.q.t,f)}}h{f={"s":$4.8.v.P,"12":9};$4.z.A(p,$4.8.q.t,f)}}h{f={"s":$4.8.v.P};$4.z.A(p,$4.8.q.t,f)}})}h{f={"s":$4.8.v.P,"12":O};$4.z.A(p,$4.8.q.t,f)}}h{f={"s":$4.8.v.P,"12":9};$4.z.A(p,$4.8.q.t,f)}}h{f={"s":$4.8.v.P};$4.z.A(p,$4.8.q.t,f)}})}h{f={"s":$4.8.v.P,"12":V};$4.z.A(p,$4.8.q.t,f)}}h{f={"s":$4.8.v.30,"L":"无效的授权回调:["+1c+"]"};$4.z.A(p,$4.8.q.t,f)}}h{f={"s":$4.8.v.30,"L":"无效的授权回调:["+1c+"]"};$4.z.A(p,$4.8.q.t,f)}};k.l.handleSSOCallback=c(p,1c,31,32){a b=6;7(1c.33().indexOf(6.1g.33()+":")==0){$4.E.ssdk_googleplusHandleSSOCallback(6.D(),1c,31,32,c(9){b.2i(p,9)});u 1G}u 1b};k.l.cancelAuthorize=c(){a b=6;6.1N(5,5);$4.E.2j("U.4.2k.2l.2m",c(9){7(9.K){$4.z.ssdk_plugin_googleplus_cancelAuth(b.D())}})};k.l.addFriend=c(p,g,e){a f={"s":$4.8.v.1v,"L":"分享平台［"+6.I()+"］不支持添加好友!"};7(e!=5){e($4.8.q.t,f)}};k.l.getFriends=c(cursor,size,e){a f={"s":$4.8.v.1v,"L":"分享平台［"+6.I()+"］不支持获取好友列表!"};7(e!=5){e($4.8.q.t,f)}};k.l.share=c(p,H,e){a x=5;a y=5;a W=5;a M=5;a b=6;a 1O=H["@1O"];a X={"@1O":1O};a m=$4.8.S(6.m(),H,"m");7(m==5){m=$4.8.13.34}7(m==$4.8.13.34){m=6.35(H)}6.1y(c(g){2n(m){1d $4.8.13.36:{x=$4.8.S(b.m(),H,"x");7(x!=5){b.1P([x],c(9){x=9.K[0];$4.E.ssdk_googleplusShareText(b.D(),x,c(9){b.1Q(9,e,g,X,{"x":x})})})}h{f={"s":$4.8.v.P,"L":"分享参数x不能为空!"};7(e!=5){e($4.8.q.t,f,5,X)}}T}1d $4.8.13.37:{M=$4.8.S(b.m(),H,"M");7(1R.l.1S.1T(M)===\'[1U 1V]\'){W=M[0]}7(W!=5){x=$4.8.S(b.m(),H,"x");b.38(W,c(39){b.1P([x],c(9){x=9.K[0];$4.E.ssdk_googleplusShareImage(b.D(),x,39,c(9){b.1Q(9,e,g,X,{"x":x,"W":W})})})})}h{f={"s":$4.8.v.P,"L":"分享参数W不能为空!"};7(e!=5){e($4.8.q.t,f,5,X)}}T}1d $4.8.13.3a:{a 1e=$4.8.S(b.m(),H,"3b");y=$4.8.S(b.m(),H,"y");7(y!=5||1e!=5){x=$4.8.S(b.m(),H,"x");a 1n=$4.8.S(b.m(),H,"1n");a 1f=$4.8.S(b.m(),H,"1f");a 1z=5;M=$4.8.S(b.m(),H,"M");7(1R.l.1S.1T(M)===\'[1U 1V]\'){1W(a i=0;i<M.1i;i++){7(!/^(3c\\:\\/)?\\//.2o(M[i])){1z=M[i];T}}}b.1P([x,y,1f],c(9){x=9.K[0];y=9.K[1];1f=9.K[2];$4.E.ssdk_googleplusShareWebPage(b.D(),x,y,1e,1n,1f,1z,c(9){b.1Q(9,e,g,X,{"x":x,"y":y,"1e":1e,"1n":1n,"1f":1f,"1z":1z})})})}h{f={"s":$4.8.v.P,"L":"分享参数y不能为空!"};7(e!=5){e($4.8.q.t,f,5,X)}}T}3d:{a f={"s":$4.8.v.UnsupportContentType,"L":"不支持的分享类型["+m+"]"};7(e!=5){e($4.8.q.t,f,5,X)}T}}})};k.l.3e=c(1K,e){a b=6;6.1y(c(g){7(1K!=5){a f={"s":$4.8.v.1v,"L":"分享平台［"+b.I()+"］不支持获取其他用户资料!"};7(e!=5){e($4.8.q.t,f)}u}a y="1k://1H.1I.U/28/v1/people/";7(g!=5&&g.N!=5){y+=g.N.11}b.3f(y,"2Z",5,c(Y,9){a Q=9;7(Y==$4.8.q.1o){Q={"2p":b.m()};b.2q(Q,9);7(Q["11"]==g["11"]){Q["N"]=g["N"]}}7(e!=5){e(Y,Q)}})})};k.l.3f=c(y,3g,V,e){a f=5;a b=6;6.1y(c(g){7(g!=5&&b.3h(g)){7(V==5){V={}}7(g.N!=5){V["1M"]=g.N.1L}$4.E.29(b.m(),5,y,3g,V,5,c(9){7(9!=5){7(9["s"]!=5){7(e){e($4.8.q.t,9)}}h{a O=$4.G.2d($4.G.2e(9["2f"]));7(9["1x"]==2c){7(O["f"]==5){7(e){e($4.8.q.1o,O)}}h{a 1w=$4.8.v.P;f={"s":1w,"12":O};7(e){e($4.8.q.t,f)}}}h{f={"s":$4.8.v.P,"12":O};7(e){e($4.8.q.t,f)}}}}h{f={"s":$4.8.v.P};7(e){e($4.8.q.t,f)}}})}h{f={"s":$4.8.v.3i,"L":"尚未授权["+b.I()+"]用户"};7(e){e($4.8.q.t,f)}}})};k.l.createUserByRawData=c(R){a g={"2p":6.m()};6.2q(g,R);u $4.G.2r(g)};k.l.1P=c(2s,e){7(6.24()){a b=6;6.1y(c(g){$4.8.convertUrl(b.m(),g,2s,e)})}h{7(e){e({"K":2s})}}};k.l.38=c(y,e){7(!/^(3c\\:\\/)?\\//.2o(y)){$4.E.downloadFile(y,c(9){7(9.K!=5){7(e!=5){e(9.K)}}h{7(e!=5){e(5)}}})}h{7(e!=5){e(y)}}};k.l.35=c(H){a m=$4.8.13.36;a M=$4.8.S(6.m(),H,"M");a y=$4.8.S(6.m(),H,"y");a 1e=$4.8.S(6.m(),H,"3b");7(y!=5||1e!=5){m=$4.8.13.3a}h 7(1R.l.1S.1T(M)===\'[1U 1V]\'){m=$4.8.13.37}u m};k.l.26=c(D){$4.E.2j("U.4.2k.2l.2m",c(9){7(9.K){$4.z.ssdk_plugin_googleplus_setup(D)}})};k.l.2h=c(p,1A){a b=6;a N={"11":1A["11"],"1L":1A["1M"],"3j":(1X 1Y().1Z()+1A["expires_in"]*3k),"2t":1A,"m":$4.8.credentialType.OAuth2};a g={"2p":6.m(),"N":N};6.1N(g,c(){b.3e(5,c(Y,9){7(Y==$4.8.q.1o){9["N"]=g["N"];g=9;b.1N(g,5)}$4.z.A(p,$4.8.q.1o,g)})})};k.l.2q=c(g,R){7(g!=5&&R!=5){g["2t"]=R;g["11"]=R["id"];g["nickname"]=R["displayName"];g["gender"]=2;7(R["W"]!=5){g["icon"]=R["W"]["y"]}g["y"]=R["y"];g["about_me"]=R["aboutMe"];g["verify_type"]=R["verified"]?1:0;a 1p=R["1p"];a 2u=/^(\\d+)-(\\d+)-(\\d+)$/;a 1B=5;a 2v=5;7(1p!=5&&2u.2o(1p)){1B=2u.exec(1p);2v=1X 1Y(1B[1],1B[2]-1,1B[3],0,0,0);g["1p"]=2v.1Z()/3k}a Z=5;a 1C=R["1C"];7(1C!=5){a 2w=[];a 20=[];1W(a i=0;i<1C.1i;i++){Z={};a 9=1C[i];7(9["m"]=="3l"){Z["3l"]=9["I"];Z["classes"]=9["3m"];2w.3n(Z)}h 7(9["m"]=="work"){Z["company"]=9["I"];Z["dept"]=9["3m"];Z["position"]=9["1n"];20.3n(Z)}}g["educations"]=2w;g["20"]=20}}};k.l.1y=c(e){7(6.18!=5){7(e){e(6.18)}}h{a b=6;a 1a=6.23();$4.E.2M("3o",1b,1a,c(9){b.18=9!=5?9.1h:5;7(e){e(b.18)}})}};k.l.1N=c(g,e){6.18=g;a 1a=6.23();$4.E.2O("3o",6.18,1b,1a,c(9){7(e!=5){e()}})};k.l.2Q=c(e){a b=6;$4.E.getAppConfig(c(9){a 1l=5;a callbackScheme=5;a 2x="";a 10=1b;7(9!=5){b.1g=9.CFBundleIdentifier;7(9.2y!=5){1W(a i=0;i<9.2y.1i;i++){a 1D=9.2y[i];7(1D!=5&&1D.2z!=5){1W(a j=0;j<1D.2z.1i;j++){a 2A=1D.2z[j];7(2A==b.1g){10=1G;1l=2A;T}}}7(10){T}}}}7(!10){2x=b.1g}7(!10){$4.z.3p("#3q:尚未配置["+b.I()+"]2S 2T:"+2x+", 无法使用SSO授权, 将以Web方式进行授权。")}7(e!=5){e(10,1l)}})};k.l.2R=c(p,1l,F){a b=6;a J=b.J();$4.E.2j("U.4.2k.2l.2m",c(9){7(9.K){$4.E.ssdk_googleplusAuth(b.D(),F["1j"],c(9){7(9["s"]!=5){7(9["s"]==$4.8.v.NotYetInstallClient&&J=="1u"){b.1m(p,F)}h{$4.z.A(p,$4.8.q.t,9)}}h 7(9["Y"]!=5){b.2i(p,9)}})}h{7(J=="1u"&&!b.1F){b.1m(p,F)}h{a f={"s":$4.8.v.2U,"L":"分享平台［"+b.I()+"］尚未导入k.framework!无法进行授权!"};$4.z.A(p,$4.8.q.t,f)}}})};k.l.1m=c(p,F){a 2B="1k://2W.2a.U/o/2b/27?21="+6.D()+"&response_type=1w&22="+$4.G.2C(6.19())+"&Y="+1X 1Y().1Z()+"&request_visible_actions="+$4.G.2C("http://schemas.2a.U/AddActivity");7(F!=5&&F["1j"]!=5&&1R.l.1S.1T(F["1j"])===\'[1U 1V]\'){2B+="&scope="+$4.G.2C(F["1j"].join(" "))}$4.z.ssdk_openAuthUrl(p,2B,6.19())};k.l.2P=c(){7(6.D()!=5&&6.1s()!=5&&6.19()!=5){u 1G}$4.z.3p("#3q:["+6.I()+"]应用信息有误，不能进行相关操作。请检查本地代码中和服务端的["+6.I()+"]平台应用配置是否有误! \\n本地配置:"+$4.G.2r(6.2J())+"\\n服务器配置:"+$4.G.2r(6.2L()));u 1b};k.l.3h=c(g){u g.N!=5&&g.N.11!=5&&g.N.1L!=5&&g.N.3j>1X 1Y().1Z()};k.l.2i=c(p,9){2n(9.Y){1d $4.8.q.1o:{6.2h(p,9.K);T}1d $4.8.q.t:{a f={"s":$4.8.v.P,"12":9.K};$4.z.A(p,$4.8.q.t,f);T}3d:$4.z.A(p,$4.8.q.Cancel,5);T}};k.l.1Q=c(9,e,g,X,1E){a Q=9.K;2n(9.Y){1d $4.8.q.1o:{Q={};Q["2t"]=1E;Q["x"]=1E["x"];Q["M"]=[1E["W"]];Q["urls"]=[1E["y"]];T}1d $4.8.q.t:{6.1F=(Q["s"]==$4.8.v.3i);T}}7(e!=5){e(9.Y,Q,g,X)}};k.l.25=c(14){a D=$4.G.2D(14[w.15]);a 1s=$4.G.2D(14[w.16]);a 19=$4.G.2D(14[w.17]);14[w.15]=D;14[w.16]=1s;14[w.17]=19;u 14};$4.8.registerPlatformClass($4.8.platformType.k,k);',[],213,'||||mob|null|this|if|shareSDK|data|var|self|function||callback|error|user|else|||GooglePlus|prototype|type|||sessionId|responseState|_appInfo|error_code|Fail|return|errorCode|GooglePlusAppInfoKeys|text|url|native|ssdk_authStateChanged|local|server|clientId|ext|settings|utils|parameters|name|authType|result|error_message|images|credential|response|APIRequestFail|resultData|rawData|getShareParam|break|com|params|image|userData|state|item|hasReady|uid|user_data|contentType|appInfo|ClientId|ClientSecret|RedirectUri|_currentUser|redirectUri|domain|false|callbackUrl|case|deepLinkId|desc|_callbackURLScheme|value|length|scopes|https|urlScheme|_webAuthorize|title|Success|birthday|AuthType|ConvertUrl|clientSecret|curApps|both|UnsupportFeature|code|status_code|_getCurrentUser|urlImage|credentialRawData|res|organizations|typeObj|shareParams|_needShare|true|www|googleapis|urlInfo|query|token|access_token|_setCurrentUser|flags|_convertUrl|_shareHandler|Object|toString|apply|object|Array|for|new|Date|getTime|works|client_id|redirect_uri|cacheDomain|convertUrlEnabled|_checkAppInfoAvailable|_setupApp|auth|plus|ssdk_callHTTPApi|google|oauth2|200|jsonStringToObject|base64Decode|response_data|credRawData|_succeedAuthorize|_ssoCallbackHandler|isPluginRegisted|sharesdk|connector|googleplus|switch|test|platform_type|_updateUserInfo|objectToJsonString|contents|raw_data|exp|date|edus|warningLog|CFBundleURLTypes|CFBundleURLSchemes|schema|authUrl|urlEncode|trim|client_secret|_type|SSDK|Platform|sso|localAppInfo|arguments|serverAppInfo|getCacheData|currentApp|setCacheData|_isAvailable|_checkUrlScheme|_ssoAuthorize|URL|Scheme|InvaildPlatform|accessTokenParams|accounts|tokenInfoParams||GET|InvalidAuthCallback|sourceApplication|annotation|toLowerCase|Auto|_getShareType|Text|Image|_getImagePath|imageUrl|WebPage|deep_link_id|file|default|getUserInfo|callApi|method|_isUserAvaliable|UserUnauth|expired|1000|school|department|push|currentUser|log|warning'.split('|'),0,{}))