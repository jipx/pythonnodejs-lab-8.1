# pythonnodejs-lab-8.1

Lab Startup Stack:

![template1-designer (1)](https://github.com/jipx/pythonnodejs-lab-8.1/assets/4178277/e8d5fea1-a982-432a-b0e8-3030cfbc006c)

```
// define default config, but allow overrides from ENV vars
let config = {
  APP_DB_HOST: "3.82.161.206",
  APP_DB_USER: "nodeapp",
  APP_DB_PASSWORD: "coffee",
  APP_DB_NAME: "COFFEE"
}

Object.keys(config).forEach(key => {
  if(process.env[key] === undefined){
    console.log(`[NOTICE] Value for key '${key}' not found in ENV, using default value.  See app/config/config.js`)
  } else {
    config[key] = process.env[key]
  }
});

module.exports = config;
```
