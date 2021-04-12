const wdio = require("webdriverio");
const assert = require("assert");

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: 
  {
    "platformName": "Mac",
    "automationName": "safari"
  }
};

async function test () {
  const client = await wdio.remote(opts);

  await client.navigateTo('http://localhost:8080');
  const field = await client.$("#x");
  await field.setValue("4");
  const field2 = await client.$("#y");
  await field2.setValue("5");
  const knop = await client.$("#knop");
  await knop.click();
  const resultField = await client.$("#result");
  const result = await resultField.getText();
  assert.strictEqual(result,"9");

  await client.deleteSession();
}

test();
