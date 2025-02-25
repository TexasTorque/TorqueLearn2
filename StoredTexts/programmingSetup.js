const programmingSetup = {
    frc_gametools_guide: [
        "<p>FRC Gametools allow you to communicate and interact with your robot. FRC Gametools is a Windows-only software, which cannot run on Mac. To download Gametools, head to <a href='https://www.ni.com/en-us/support/downloads/drivers/download.frc-game-tools.html'>NI downloads</a>, and install the software. FRC Driver Station, a software that comes with the Gametools download, is what allows you to connect to your robot. To connect your robot to your laptop, follow the rules below:",
        
        "<ol>",

        "<br><li>Turn on your robot.</li>",
        
        "<br><li>Disconnect your laptop from your current Wi-Fi and connect to the robot's Wi-Fi. Make sure no one else is connected to the robot.</li>",
        
        "<br><li>To deploy your code to the robot, in VSCode, go to the top search bar and type 'Deploy Code', and click the option to deploy.</li>",
        
        "<br><li>After you've deployed, search for your FRC Driver Station software in the Windows search bar.</li>",
        
        "<br><li>After you've opened Driver Station, the window should say 'Teleoperated Disabled'. Disabled means that the robot cannot move or be controlled. If it says 'No Robot Communication', it means that the laptop can't connect to the robot. Check to see if you're connected to the right network. If you are, disconnect and rejoin to see if a connection is established. If that doesn't work, turn your robot on and off again and then reconnect (it will take a while for the network to show up on your list of Wi-Fis, please be patient). If that doesn't work, please contact the programming lead.</li>",
        
        "<br><li>Plug your Xbox controller into a USB port on your computer. After you've done that, click the USB icon on the Control Panel on the left-hand side. Check to see if the laptop is taking input from the USB port connected to your controller. There are three colors that indicate the status of your ports: Black (not connected), Gray (being used, but not what the computer is taking input from), and Green (the port the computer is taking input from). Make sure your port is highlighted in green. If it isn't, just switch the selected (or green) port to your port.</li>",
        
        "<br><li>After your computer is connected to your controller, go back to the main icon on the control panel. This is where you will enable your robot. Before you enable it, you MUST yell 'CLEAR!' This will tell everyone that your robot is on and they will exit the field. To enable, press the green Enable button.</li>",
        
        "<br><li>You are now free to control your robot. If you would like to pause or stop controlling the robot, just click the Disable button on your Driver Station Window.</li>",
        
        "</ol>",
    ],
    wpilib_tools_guide: [
        "<p>The first thing you want to do is install <a href='https://docs.wpilib.org/en/stable/'>WPILib</a> tools. These tools allow you to build code for the RoboRio. This program will want to install it's own instance of Visual Studio code with WPILib extensions built in. You can delete this application if you'd like to use a different version of Visual Studio Code because all the tools you installed will still exist. If you choose to use your own version of Visual Studio code, then you will need to install the WPILib extnsion in addition to the other required extensions.</p>"
    ],
    vscode_guide: [
        "<h3>Configuring Visual Studio Code</h3>",
        
        "<p><b>Note, VS Code Docs located <a href='https://code.visualstudio.com/docs'>here</a>, please use this for questions</b><p>",
        
        "<p>Visual Studio Code is the code editor used at Texas Torque. The reason for this is the fact that it is easy to use with WPILib and has an incredible amount of tools available to us. VS Code allows you to install extensions and themes from the extensions menu. Control (Command on Mac) + P gives a list of files, while Control (Command on Mac) + Shift + P gives a list of commands called the command palette. This is how we use WPILib and other extensions.</p>",
        
        "<h3>Extensions</h3>",
        
        "<p>The extensions tab is the icon on the far left that has the 4 blocks.</p>",
        
        "<p>You <b>must</b> have the following extensions installed:</p>",
        
        "<ul>",
        "<li>WPILib</li>",
        "<li>Live Share</li>",
        "</ul>",

        "<p>To avoid random annoying import errors, <b>do not have</b>:",
        
        "<ul><li>Java Language support by George Fraser</li></ul>",
        
        "<p>You <b>really should have</b>:</p>",

        "<ul>",
        "<li>Extensions Pack for Java, which includes:</li>",
            "<ul>",
            "<li>Language Support for Java(TM) by Red Hat</li>",
            "<li>Debugger for Java</li>",
            "<li>Maven for Java</li>",
            "<li>Project Manager for Java</li>",
            "<li>Test Runner for Java</li>",
        "</ul>", 
        "<li>Java Debugger by Jayamanne</li>",
        "<li>Tabnine (we have Pro if you log in with your school email)</li>",
        "</ul>",
        
        "<p>Extensions that <b>make everyone's life easier</b>:</p>",
        
        "<ul>",
        "<li>Bracket Pair Colorizer</li>",
        "<li>Tabout</li>",
        "<li>Prettier Code Formatter</li>",
        "</ul>",
        
        "<h3>Git and Source Control</h3>",
        
        "<p>Sign in to Visual Studio with GitHub. This allows you to access Git functions in the source control tab. More about Git integration [here](Git/How to Use VSCode Git).</p>",
        
        "<h3>WPILib</h3>",
        
        "<p>WPILib extension will add a red 'W' hexagon-shaped button in the top right of the editor pane. You can use that, or use the command palette to access all of the WPILib extensions.</p>",
    ],

    liveshare: [
        "<p>LiveShare is a real-time coding collaboration software developed by Microsoft to use in Visual Studio Code. LiveShare is very handy when multiple people need to work on a project simultaneously. Everyone on the LiveShare can read and edit code while seeing what others are working on.</p>",
        
        "<h3>Install</h3>",
        "<p>To get started, install the LiveShare by Microsoft extension in the Visual Studio Extensions. After you install, the Live Share extension icon should pop up on your main panel. When you first use LiveShare, you might be asked to login with your Git credentials. This way, editors can collaborate on their Git accounts rather than using anonymous guest accounts.</p>",
        
        "<h3>Start a Liveshare</h3>",
        "<p>To open a liveshare, open the project you'd like to work on and go to the LiveShare extension on your VSCode panel. Hit share, and a link will automatically be copied to your keyboard. Head to a link shortener and paste the link. Enter the name you want your LiveShare to be. The password to the site is \"lol\". You will be generated a URL. Anyone who would like to join the LiveShare session can enter that link, where they will be redirected to a VSCode desktop environment. The browser will then ask if they would like to open the project in VSCode. If this does not happen, they can copy the link and go to the LiveShare extension on VSCode and paste it in Join Session. You have now made a LiveShare session!</p>",
        
        "<h3>Managing the LiveShare</h3>",
        "<p>When users enter the session, the host will have to accept them in with either \"Read-Write\" or \"Read-Only\" permissions. The host must always be connected to the internet, otherwise, the LiveShare will end. This is particularly a problem when the host is also the Driver Station for robot deployment. To circumvent this, try having a seperate device for the LiveShare host and the Driver Station. If this isn't a possibility, the host will have to restart the session after they connect to the Internet.</p>",
        
    ]   
    
}