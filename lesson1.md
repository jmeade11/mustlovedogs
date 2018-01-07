# Getting Started
In order to work with the Ionic framework, you'll need to install some tools on your machine.  Follow the steps below to set up your dev environment and test it out by creating and running a project locally. 

## Setting Up A Dev Environment

Ionic has a CLI (command line interface) for generating projects and new components within your projects.  Via the CLI, all the orchestration of the various module loaders, transpilers, linters, etc. is done in the background so you don't have to worry about any of the technical details around these tools in order to start using Ionic. 


>:triangular_flag_on_post: FYI  
>Angular has it's own separate CLI for pure Angular projects.


Follow these steps to install the CLI and Visual Studio Code (you'll only install these once):

### 1. Install Node: https://nodejs.org/en/download/ 

You can check if Node is already installed by typing `node -v` in your terminal on Mac (`Applications > Utilities > Terminal` or type `terminal` in spotlight) or command window on Windows (`All Apps > Windows System > Run` or just type `run` in the Cortana search]).  If you get a version number back from that command, it's installed.  The current version is 8.9.4, but I have 6.10.3 and I didn't have any issues installing the latest Ionic CLI.  If an older version of Node is installed and you would like to upgrade, download and install the current version from the link above (there's no separate 'upgrade' package).  

If Node is not installed, download the Windows installer or Mac installer found at the top of the Node download page under the LTS label (which will be the latest stable version), and run the installer.  

### 2. Make sure you have NPM (Node Package Manager) 

To check if npm is installed type `npm -v`.  It should be installed with Node, but if not you can run: `npm install npm@latest -g` or if you have a Mac you'll need to type `sudo npm install npm@latest -g`.  When you use sudo, which stands for *super user do*, it will prompt you to enter your password.  This is just the password that you use when you login on your machine. Also, don't worry about what directory you're in when you type these commands because the -g part is telling it to install globally. 

### 3. Install the CLI for Ionic (and Cordova, I'll explain about this later)

Run the command `npm install -g ionic cordova`.  Don't forget, if you have a Mac you'll likely need to sudo to install globally, so type `sudo npm install -g ionic cordova`.  It'll take a few minutes to install.  

### 4. Install Visual Studio Code: https://code.visualstudio.com/download

Visual Studio Code is a completely free IDE (integrated development environment).  Even if you're comfortable with another code editor, *trust me* and use Visual Studio Code for your Angular and Ionic projects.  It has built-in support for all of the things you'll want, including TypeScript (this is a subset of Javascript that you'll learn to use for writing your Angular and Ionic apps).  

:checkered_flag: Now you're finished with the set up and you're ready to create your own projects and run them locally. :checkered_flag:

### 5. (OPTIONAL, but highly recommended) Install Chrome browser https://www.google.com/chrome/browser/desktop/index.html

If you don't already have Chrome installed, you should install it for development purposes.  Ionic apps will run in all modern browsers, but Chrome has some special features that make Ionic development easier.


## Running the Project Locally

To run the project locally, follow these steps:

1. Download the project src folder and unzip it. 
2. In Visual Studio Code (VSC), choose `File > Open` and navigate to a directory where you want to store your project.  *When you run the CLI, it will create a new separate project folder inside the directory that you have open.*
3. Go to `View > Integrated Terminal` to open the integrated terminal inside VSC.  
4. In the integrated terminal, you should see from the prompt that you're inside the directory you opened in the step above. To create the project inside this directory, type `ionic start`. The start command will run some scripts that will prompt you with the following questions:
 - `? What would you like to name your project:` Call it whatever you like for now. 
 - `? What starter would you like to use:` A starter is just a template.  For now, you can just choose the starter named `blank`. You're going to replace the contents of the source files that are created automatically for the project anyway with the source files I uploaded for you anyway.
 - `? Would you like to integrate your new app with Cordova to target native iOS and Android? (y/N)` I'll explain about this later, but for now, you can just type `N` for no.
 - `? Install the free Ionic Pro SDK and connect your app? (Y/n)` Again, just for this time, you can answer `n` for no.  Later, you can set up an Ionic account and try out some of the features they offer, such as running your app on an actual device.  
 When complete, you should see a message similar to this:
 ```
 Next Steps:
* Go to your newly created project: cd ./[whatever you named your project]
* Get Ionic DevApp for easy device testing: https://bit.ly/ionic-dev-app
```
5. Normally, at this point you could run the project and start developing your app, but I want you to first navigate to the newly created folder in your Windows Explorer or Mac Finder and copy the entire folder named src that you unzipped in step 1 above, into the project folder and **replace the entire folder named src** that was created for you.
6. Now, go back into VSC, open the project you created by choosing `File > Open`.  In the integrated terminal (`View > Integrated Terminal` if it's not open already), type `ionic start`
This is going to run a bunch of build scripts that will compile your project files and start up a server locally on your machine.  When it's done, you'll see some kind of message like:
```
[OK] Development server running!
     Local: http://localhost:8100
     External: http://172.20.20.20:8100
     DevApp: test@8100 on My-MacBook-Pro.local
```
7. Open up Chrome browser.  Enter the url: `http://localhost:8100/ionic-lab`.  

Inside Ionic Lab, there's a dropdown link on the top left that reads "Platforms".  You can choose to show multiple versions of the app side-by-side on different device platforms.  (This is why you want to use Chrome, the lab features only work in Chrome AFAIK). 

To stop the local server from running, go back to VSC and type `CTRL+C` in the integrated terminal.

## Next Step

:tada: **Awesome!** :tada: You've installed the tools needed for Ionic development and learned how to create and run projects.  When you're done looking at the starter app I created for you, you can go on to the next step and learn about the file structure and how to make some simple changes to add some of the features we need.
