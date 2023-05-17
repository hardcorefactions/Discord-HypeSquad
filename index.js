function hypesquad(token, house) {
  fetch("https://discord.com/api/v9/hypesquad/online", {
    "headers": {
      "accept": "*/*",
      "accept-language": "es-ES,es;q=0.9",
      "authorization": `${token}`,
      "content-type": "application/json",
    },
    "body": "{\"house_id\":"+house+"}",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
}
