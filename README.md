# Working with the Winno Sample Code

I'll use this repo to post samples and code to demonstrate how to use Ionic.  I'll create a new separate repo for actual development in the event the team wants to work on this as a real project.  

## Setting Up A Dev Environment

Ionic has a CLI (command line interface) for generating projects and new components within your projects.  Via the CLI, all the orchestration of the various module loaders, transpilers, linters, etc. is done in the background so you don't have to worry about any of the technical details around these tools in order to start using Ionic. 


>:triangular_flag_on_post: FYI  
>Angular has it's own separate CLI for pure Angular projects.


Follow these steps to install the CLI and Visual Studio Code (you'll only install these once):

### 1. Install Node: https://nodejs.org/en/download/ 

You can check if node is already installed by typing `node -v` in your terminal on Mac (`Applications > Utilities > Terminal` or type `terminal` in spotlight) or command window on Windows (`All Apps > Windows System > Run` or just type `run` in the Cortana search]).  If you get a version number back from that command, it's installed.  The current version is 8.9.4, but I have 6.10.3 and I didn't have any issues installing the latest Ionic CLI.  You can always upgrade by going to the downloads page and reinstalling node with the new version.   

### 2. Make sure you have NPM (Node Package Manager) 

To check if npm is installed type `npm -v`.  It should be installed with node, but if not you can run: `npm install npm@latest -g` or if you have a mac you'll need to type `sudo npm install npm@latest -g`.  Doesn't matter what directory you're in because the -g part is telling it to install globally.

### 3. Install the CLI for Ionic (and Cordova, I'll explain about this later)

Run the command `npm install -g ionic cordova`.  Don't forget, if you have a Mac you'll need to type `sudo npm install -g ionic cordova`.  It'll take a few minutes to install.  

### 4. Install Visual Studio Code: https://code.visualstudio.com/download

Visual Studio Code is a completely free IDE.  Even if you're comfortable with another code editor, *trust me* and use Visual Studio Code for your Angular and Ionic projects.  It has built in support for all of the things you'll want, including TypeScript (this is a subset of Javascript that you'll learn to use for writing your Angular and Ionic apps).  

:checkered_flag: Now you're finished with the set up and you're ready to create your own projects and run them locally. :checkered_flag:

## Running the Project Locally

To run the project locally, follow these steps:

1. Download the project src folder and unzip it. 
2. In Visual Studio Code (VSC), choose `File > Open` and navigate to a directory where you want to store your project.  *When you run the CLI, it will create a new separate project folder inside the directory that you have open.*
3. Go to `View > Integrated Terminal` to open the integrated terminal inside VSC.  
4. In the integrated terminal, you should see from the prompt that you're inside the directory you opened in the step above. To create the project inside this directory, type `ionic start`. The start command will run some scripts that will prompt you with the following questions:
 - `? What would you like to name your project:` Call it whatever you like for now. 
 - `? What starter would you like to use:` A starter is just a template.  For now, you can just choose blank. You're going to replace the contents of the source files that are created automatically for the project anyway with the source files I uploaded for you anyway.
 - `? Would you like to integrate your new app with Cordova to target native iOS and Android? (y/N)` I'll explain about this later, but for now, you can just type `N` for no.
 - `? Install the free Ionic Pro SDK and connect your app? (Y/n)` Again, just for this time, you can answer `n` for no.  Later, you can set up an Ionic account and try out some of the features they offer, such as running your app on an actual device.  
 When complete, you should see a message similar to this:
 ```
 Next Steps:
* Go to your newly created project: cd ./[whatever you named your project]
* Get Ionic DevApp for easy device testing: https://bit.ly/ionic-dev-app
```
5. Normally, at this point you could run the project and start developing your app, but I want you to first navigate to the newly created folder in your Windows Explorer or Mac Finder and copy the entire src folder that you unzipped in step 1 above, into the project folder and **replace the entire src folder** that was created for you.
6. Now, go back into VSC, open the project you created by choosing `File > Open`.  In the integrated terminal (`View > Integrated Terminal` if it's not open already), type `ionic start`
This is going to run a bunch of build scripts that will compile your project files and start up a server locally on your machine.  When it's done, you'll see some kind of message like:
```
[OK] Development server running!
     Local: http://localhost:8100
     External: http://172.20.20.20:8100
     DevApp: test@8100 on My-MacBook-Pro.local
```
7. Open up Chrome browser (if you don't have Chrome, you should install it for development).  Enter the url: `http://localhost:8100/ionic-lab`.  

Inside Ionic Lab, there's a dropdown link on the top left that reads "Platforms".  You can choose to show multiple versions of the app side-by-side on different device platforms.  (This is why you want to use Chrome, the lab features only work in Chrome AFAIK).  

:tada: **Awesome!** :tada: You've installed the tools needed for Ionic development and learned how to create and run projects.  When you're done looking at the starter app I created for you, you can go on to the next step and learn about the file structure and how to make some simple changes to add some of the features we need.

To stop the local server from running, go back to VSC and type `CTRL+C` in the integrated terminal.
