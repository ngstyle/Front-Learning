const fetch = require("node-fetch");

// https://losadhwselfff2332dasd.xyz/link/MmyWHB2qZ9aYHVBM?sub=1
const HOST = "https://losadhwselfff2332dasd.xyz";

async function fetchSubscribe() {
  let randomCode = generateRandomCode();
  // const headers = { "content-type": "application/json" };
  const url = `${HOST}/link/${randomCode}?sub=1`;
  const res = await fetch(url, {
    method: "HEAD",
    // headers,
  });

  let matched = false;
  for (const header of res.headers) {
    let [key, value] = header;

    if (key === "content-length") {
      matched = true;
      console.log("============== 有效订阅 ==============：" + url);
      console.log("文件长度：" + value);
      break;
    }
  }

  if (!matched) {
    console.log("无效订阅：" + url);
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generateRandomCode() {
  let code = "";
  for (let i = 0; i < 16; i++) {
    //产生0-2的3位随机数
    let type = getRandomInt(3);
    switch (type) {
      case 0:
        //0-9的随机数
        code += getRandomInt(10);
        break;
      case 1:
        //ASCII在65-90之间为大写,获取大写随机
        code += String.fromCharCode(getRandomInt(26) + 65);
        break;
      case 2:
        //ASCII在97-122之间为小写，获取小写随机
        code += String.fromCharCode(getRandomInt(26) + 97);
        break;
      default:
        break;
    }
  }

  return code;
}

// fetchSubscribe();

for (let i = 0; i < 10; i++) {
  // console.log(generateRandomCode());
  fetchSubscribe();
}
