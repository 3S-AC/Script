let cs = JSON.parse($response.body);
if (cs.result) {
    cs.result = Object.values(cs.result).filter(item => (item["appCode"]=="file" || item["appCode"]=="video"));
}
$done({ body: JSON.stringify(cs) });
