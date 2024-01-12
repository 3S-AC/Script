// 2024-01-07 14:05

let header = $request.headers;
const isQuanX = typeof $task !== "undefined";

if (isQuanX) {
  header["MConfig-Info"] = '{"zr4bw6pKFDIZScpo":{"version":1259520,"appver":"9.0.10"},"tPJJnts2H31BZXmp":{"version":2615296,"appver":"2.0.30"},"c0Ve6C0uNl2Am0Rl":{"version":595968,"appver":"1.7.50"},"IuRPVVmc3WWul9fT":{"version":29243392,"appver":"9.0.10"}}';
  header["User-Agent"] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 CloudMusic/0.1.1 NeteaseMusic/9.0.10';
  header["Cookie"] = 'ntes_kaola_ad=1; EVNSM=1.0.0; NMCID=lkrqxb.1705065356000.01.3; NMDI=Q1NKTQcBDAD%2BpSnen2zwvu0XXh6VAAAA3rtxGAq1ErL52RdtpXmKGcv6H2zYLVj71Wm0Ka60mXb5T0GKm53QOx1jj4UH5PKBU048CU%2BmqUJWOQoLKR0UVkQlM0K0e15jgOkiDNHOgOICcs2nZ8%2FfUGBw7IrPFuBRhUV4cvCQYE9VZEjWk7qwMdCYMHHc5tE%2BK8unw1UN5yU0vVi7LoUTJJduJQzgxLTKn4DpvEE%3D; URS_APPID=398212144AC2965C25217D571CA371E69E0077E65F9DF443776369D790A3D7DDB6293116B121D6872A9FEA6913295501; appkey=IuRPVVmc3WWul9fT; appver=9.0.10; buildver=4712; caid={"lastIyunId":"f68849b289bfcc2fe6e80518772cf406","iyunId":"3c30513052fe389b7210e2bdcff4826b","iyunVersion":"20230330","lastIyunVersion":"20220111"}; channel=distribution; deviceId=e2723c98c9b87ba8012f2e8d1a6c4f24; idfa=00000000-0000-0000-0000-000000000000; idfv=4A616706-7328-4179-8DC7-2256F75D767D; machineid=iPhone14.2; os=iPhone OS; osver=17.0; packageType=release; sDeviceId=e2723c98c9b87ba8012f2e8d1a6c4f24; NMTID=00OOXg3ytvlUrBsB0h6p3L0Sk10z7EAAAGM_eMveA; MUSIC_U=0022D8AD0606B12765315DD9B82D0996D801858155FBECFA9D2B8AD780F1E79CF4F152A0CF6F460DB72F7569B846C3173B8F9995C72AD492A6E64A71CAC190320811133E5EE1736F803D4D810B326F208C3149F889A6DDA932915CCA935C8F59AA31821B738FD717828F13B0079D1B631B4F7EB70CC37EE31F6F0199E0EAF8849341AF96D212018767389B8611A8809345279DF9900418F4C6FBD658ABB67073D0697A2CAAEAA15BCC48382A9F998DBF340A225C8370E8163ED65C2003DCF75BA0994E28A097F900FD975FBB133E7CB4FAF290E0B215F3A9AA5501A270DBDAB47FD5CB9DA05A8574DBAE562BC4C028A78C5259FD296AAC7D61F08F6BCF60BC6181FA04EEFB12D76BCB0E71D5CD54750BE26E9E61643466517DE6DCFEE088569AD4; __csrf=8927426f780298b2d28140d0fa995147; _ntes_nnid=db0d3eb92109f586254e6bfb37878817,1705065559578; _ntes_nuid=db0d3eb92109f586254e6bfb37878817; JSESSIONID-WYYY=c5hB%5CwV2Vd%2Fu30%5CrFdmjF20CIf0nW1DD1zXdG2kkebTpxevfnPUmduQ3yDjP4%2B5d%2BmP%2BNt12NGV9AKd3GpNkOgkIdr94Oazl6jFlUyu47yX%2FHJAaB0TUC0f%5Caj7jwER2iOXe1dCrEuKEzb6A9DgFBBaXsJfoGht5Ns%5CTozkriVpMck4U%3A1705067359455; _iuqxldmzr_=33';
} else {
  headers["mconfig-info"] = '{"zr4bw6pKFDIZScpo":{"version":1259520,"appver":"9.0.10"},"tPJJnts2H31BZXmp":{"version":2615296,"appver":"2.0.30"},"c0Ve6C0uNl2Am0Rl":{"version":595968,"appver":"1.7.50"},"IuRPVVmc3WWul9fT":{"version":29243392,"appver":"9.0.10"}}';
  headers["user-agent"] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 CloudMusic/0.1.1 NeteaseMusic/9.0.10';
  headers["cookie"] = 'ntes_kaola_ad=1; EVNSM=1.0.0; NMCID=lkrqxb.1705065356000.01.3; NMDI=Q1NKTQcBDAD%2BpSnen2zwvu0XXh6VAAAA3rtxGAq1ErL52RdtpXmKGcv6H2zYLVj71Wm0Ka60mXb5T0GKm53QOx1jj4UH5PKBU048CU%2BmqUJWOQoLKR0UVkQlM0K0e15jgOkiDNHOgOICcs2nZ8%2FfUGBw7IrPFuBRhUV4cvCQYE9VZEjWk7qwMdCYMHHc5tE%2BK8unw1UN5yU0vVi7LoUTJJduJQzgxLTKn4DpvEE%3D; URS_APPID=398212144AC2965C25217D571CA371E69E0077E65F9DF443776369D790A3D7DDB6293116B121D6872A9FEA6913295501; appkey=IuRPVVmc3WWul9fT; appver=9.0.10; buildver=4712; caid={"lastIyunId":"f68849b289bfcc2fe6e80518772cf406","iyunId":"3c30513052fe389b7210e2bdcff4826b","iyunVersion":"20230330","lastIyunVersion":"20220111"}; channel=distribution; deviceId=e2723c98c9b87ba8012f2e8d1a6c4f24; idfa=00000000-0000-0000-0000-000000000000; idfv=4A616706-7328-4179-8DC7-2256F75D767D; machineid=iPhone14.2; os=iPhone OS; osver=17.0; packageType=release; sDeviceId=e2723c98c9b87ba8012f2e8d1a6c4f24; NMTID=00OOXg3ytvlUrBsB0h6p3L0Sk10z7EAAAGM_eMveA; MUSIC_U=0022D8AD0606B12765315DD9B82D0996D801858155FBECFA9D2B8AD780F1E79CF4F152A0CF6F460DB72F7569B846C3173B8F9995C72AD492A6E64A71CAC190320811133E5EE1736F803D4D810B326F208C3149F889A6DDA932915CCA935C8F59AA31821B738FD717828F13B0079D1B631B4F7EB70CC37EE31F6F0199E0EAF8849341AF96D212018767389B8611A8809345279DF9900418F4C6FBD658ABB67073D0697A2CAAEAA15BCC48382A9F998DBF340A225C8370E8163ED65C2003DCF75BA0994E28A097F900FD975FBB133E7CB4FAF290E0B215F3A9AA5501A270DBDAB47FD5CB9DA05A8574DBAE562BC4C028A78C5259FD296AAC7D61F08F6BCF60BC6181FA04EEFB12D76BCB0E71D5CD54750BE26E9E61643466517DE6DCFEE088569AD4; __csrf=8927426f780298b2d28140d0fa995147; _ntes_nnid=db0d3eb92109f586254e6bfb37878817,1705065559578; _ntes_nuid=db0d3eb92109f586254e6bfb37878817; JSESSIONID-WYYY=c5hB%5CwV2Vd%2Fu30%5CrFdmjF20CIf0nW1DD1zXdG2kkebTpxevfnPUmduQ3yDjP4%2B5d%2BmP%2BNt12NGV9AKd3GpNkOgkIdr94Oazl6jFlUyu47yX%2FHJAaB0TUC0f%5Caj7jwER2iOXe1dCrEuKEzb6A9DgFBBaXsJfoGht5Ns%5CTozkriVpMck4U%3A1705067359455; _iuqxldmzr_=33;
}

$done({ headers: header });
