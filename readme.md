# TorqueLearn v2
A rookie's guide to Torque and the skills required for it.

# Running Server
To run this, utilize [NodeJS](https://nodejs.org/en) and [npm](https://npmjs.com). Downloading Node by itself should do the trick, as it downloads npm with it.

## Initial Startup
Once Node and npm have been downloaded, navigate to the file directory and run "npm install http-server -g".
Take care to include the -g argument, as this makes the http-server command work globablly, something you'll need.

## Launching
Upon any update to this code, the website must be stopped first, then relaunched.

To launch, run "http-server" in the file directory. The website can then be access using localhost, the host device's local IP, or the host devices' global IP. (Converting this to a URL instead of an IP is in progress.)