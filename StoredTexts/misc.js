const misc = {
    scouting: [
        "<p>Here's a guide to scouting. Tips and tricks.<p>",
        
        "<ol>",

        "<br><li>Keep your eye on the ball. A missed auto can be a huge pain.</li>",
        
        "<br><li>Say when you miss something, or just don't submit it.</li>",
        
        "<br><li>Sit next to scouters from other teams. That way you can ask them for information if you miss something.</li>",
        
        "<br><li>Make shifts, it reduces fatigue.</li>",
        
        "<br><li>When you make shifts, account for the fact that a match in week 1 takes twice as long as a match at champs (longer shifts as the season goes on).</li>",
        
        "<br><li>Don't rely on internet.</li>",
        
        "<br><li>When you get up to go to the bathroom or whatever, have someone else scout the round for you.</li>",
        
        "<br><li>Always have at least 2 backups in the stands.</li>",
        
        "<br><li>Make sure everyone knows the shift schedule, and how to operate the scouting software.</li>",
        
        "<br><li>Add text comments. If the intake falls off, write that down. Seriously.</li>",
        
        "<br><li>Make sure people know how important scouting is. Scouting is not punishment, it's an important part of being on the team. Everyone has done it.</li>",

        "</ol>"
    ],
    deploying_code: [
        "<p>Deploying and running/controlling code on a robot is typically seen as a daunting task for beginners. However, as you'll soon read, it is not nearly as complicated as it might seem.</p>",
        
        "<p>The first thing that you should do before you even turn on the robot tso send your code to, is to open the WPILib Command Palette (Click on the white double with the red circle around it) and typing 'Build Robot Code'. What this will do is essentially a compile but with WPILib repos in mind. If your compile fails, check your code to see what is causing your error. This will ensure that you don't waste battery, time on the field, etc. If your code does compile/build succesfully, then you can move onto the next step.</p>",
        
        "<p>The next step is to turn on the robot, go onto the computer with the changed code that had the successful build (It doesn't matter the OS, only that it has Wifi and preferrably isn't hosting a Live Share) and then connecting to the robots Wifi network. It should be 1477_RobotName. Once you get a connection, open up Visual Studio and again, click on the WPILib logo in the top right and type 'Deploy Robot Code'. Once you see a succesful message, you can now disconnect from the robot if you are on a Mac or Linux machine and then connect to the robots Wifi network on your driver station Windows machine. If you do not know what FRC Driver Station is, then you can read the documentation in the 'Install FRC Gametools' file. </p>",
        
        "<p>The way that Torque robots run code is by having the code that it runs be kept on its RoboRio that lives on the robot. When you deploy new code, it overwrites the old code and keeps it in memory. This means that regardless of whether you turn the robot on or off, leave it in storage for 10 years, or use a different driver station computer with the robot than the one that you used to send the code, the robot will always have the code. The driver station computer merely sends controller signals to the robot and the robot itself will then interpret the signals. Ex: Driver Station: 'A Button' Robot: 'A Button' means 'Shoot ball'.</p>", 
        
        "<p>From here, all that you need to do is open FRC Driver Station, plug in an XBox controller, go to the USB devices tab on the left side and verify that when you perform inputs on the controller the computer sees them. If the computer is not seeing input, then change the USB port that FRC Driver Station is looking for the controller with. Next, you can go back to the first tab and ensure that all three of the boxes are green. If so, you can shout 'Clear! and either click the Enable button, or simultaneously press the open bracket, close bracket, and backslash key to enable the robot. To disable the robot (Which is something that you should always do before stepping onto the field to mess with or observe the robot), you can either press your Enter button or click the Disable button.</p>"
    ]
}