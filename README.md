# pythonnodejs-lab-8.1

Lab Startup Stack:

![template1-designer (1)](https://github.com/jipx/pythonnodejs-lab-8.1/assets/4178277/e8d5fea1-a982-432a-b0e8-3030cfbc006c)

For this lab, it is not necessary for you to understand the details of how the application was built. However, the following details might be of interest to you:
The application was built with Express, which is a framework for building web applications.
The application runs on port 80 and is coded in node.js.
To install the application directly on the guest OS of the AppServerNode Ubuntu Linux EC2 instance, node.js and the node package manager (npm) were installed. Then, the code that you can see in resources/codebase_partner was placed on the server. 

userdata for EC2 hosting Nodejs APP
```
#!/bin/bash -xe
apt update -y
apt install nodejs unzip wget npm -y
wget https://aws-tc-largeobjects.s3-us-west-2.amazonaws.com/CUR-TF-200-ACCDEV-2/lab-06-containers/code.zip -P /home/ubuntu
cd /home/ubuntu
unzip code.zip -x "resources/codebase_partner/node_modules/*"
cd resources/codebase_partner
npm install
APP_DB_HOST=10.16.10.216 \
  APP_DB_USER=nodeapp \
  APP_DB_PASSWORD=coffee \
  APP_DB_NAME=COFFEE \
  APP_PORT=80 \
  npm start

```



The connection to the application's database was configured.


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
