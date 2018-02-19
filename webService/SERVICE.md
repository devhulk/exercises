### (hard)

## Creating Your Own basic Webservice utilizing Heroku and MLab

In this exercise I want to walk through building a data access layer that can be accessed from multiple clients.

This may seem difficult but is actually not that bad when you understand the purpose of what we are trying to do.

So here is the story...

We have a lot of devices, these devices are mini computers that are used to control the world around us through sensors and actuators. (this is a one sentence explanation of IoT lol) This gives us the ability to collect data and analyze it in a lot of amazing ways. That isn't what we are worried about though... We have a problem... We have a lot of these mini computers, made from different people and with different specifications. I need a place to store all of that data. Also I need to be able to control what data is accessible by the outside world. This data needs to be available to anything (or any application) that needs it.

Here is what your going to do...

  1. Create and deploy a mongoDB instance in order to store all of the devices using Mlab... 

  2. Create an Express API with 1 route "/devices" and deploy to heroku 

  3. After all that your going to build a local web app and using XMLHttpRequest your going to pull the device data from your Service
## Tools

[mLab](http://docs.mlab.com/)

[heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)

[express](https://www.npmjs.com/package/express)

[xmlHTTPRequest Example](https://stackoverflow.com/questions/3038901/how-to-get-the-response-of-xmlhttprequest)

