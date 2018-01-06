# Working with the Winno Sample Code

I'll use this repo to post samples and code to demonstrate how to use Ionic.  I'll create a new separate repo for actual development in the event the team wants to work on this as a real project.  

## Setting Up A Dev Environment

Ionic has a CLI (command line interface) for generating projects and new components within your projects.  Via the CLI, all the orchestration of the various module loaders, transpilers, linters, etc. is done in the background so you don't have to worry about any of the technical details these tools in order to start using Ionic. 


>:triangular_flag_on_post: FYI  
>Angular has it's own separate CLI for pure Angular projects.


Follow these steps to install the CLI and Visual Studio Code (you'll only install these once):

### 1. Install Node: https://nodejs.org/en/download/ 

You can check if node is already installed by typing `node -v` in your terminal on Mac (`Applications > Utilities > Terminal` or type `terminal` in spotlight) or command window on Windows (`All Apps > Windows System > Run` or just type `run` in the Cortana search]).  If you get a version number back from that command, it's installed.  The current version is 8.9.4, but I have 6.10.3 and I didn't have any issues installing the latest Ionic CLI.  You can always upgrade by going to the downloads page and reinstalling node with the new version.   

### 2. Make sure you have NPM (Node Package Manager) 

Same here.  To check if npm is installed type `npm -v`.  It should be installed with node, but if not you can run: `npm install npm@latest -g` or if you have a mac you'll need to type `sudo npm install npm@latest -g`.  Doesn't matter what directory you're in because the -g part is telling it to install globally.

### 3. Install the CLI for Ionic (and Cordova, I'll explain about this later)

Run the command `npm install -g ionic cordova`.  Don't forget, if you have a Mac you'll need to type `sudo npm install -g ionic cordova`.  It'll take a few minutes to install.  

### 4. Install Visual Studio Code: https://code.visualstudio.com/download

Visual Studio Code is a completely free IDE.  Even if you're comfortable in some other code editor, *trust me* and use Visual Studio Code for your Angular and Ionic projects.  It has built in support for all of the things you'll want, including TypeScript (this is a subset of Javascript that you'll learn to use for writing your Angular and Ionic apps).  

:checkered_flag: Now you're finished with the set up and you're ready to create your own projects and run them locally. :checkered_flag:

## Running the Project Locally

To run the project locally, follow these steps:

1. Download the project and unzip it.
2. In Visual Studio Code (VSC), choose `File > Open` and navigate to the project folder.
3. When you've got the project open in VSC, you can go to `View > Integrated Terminal` to open the integrated terminal inside VSC.  
4. In the integrated terminal, you should see that you're already inside your project directory. From there, you can simply type `ionic serve`. This is going to run a bunch of build scripts that will compile your project files and start up a server locally on your machine.  When it's done, you'll see some kind of message like:
````
[OK] Development server running!
     Local: http://localhost:8100
     External: http://172.20.20.20:8100
     DevApp: test@8100 on My-MacBook-Pro.local
````
5. Open up Chrome browser (if you don't have Chrome, you should install it for development).  Enter the url: `http://localhost:8100/ionic-lab`.  

Inside Ionic Lab, there's a dropdown link on the top left that reads "Platforms".  You can choose to show multiple versions of the app side-by-side on different device platforms.  (This is why you want to use Chrome, the lab features only work in Chrome AFAIK).  

### LiveReload 

Now, as long as you have the local server running (which you can shut down by pressing `CTRL-C` in the integrated terminal in VSC), any changes you make to the files will automatically kick off a new build.  As soon as you save any changes, you'll see those automatically in Chrome without having to press refresh.   
