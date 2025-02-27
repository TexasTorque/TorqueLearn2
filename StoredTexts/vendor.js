const vendor = {
    arduino: {
        pin4LED: [
                "<p>Controlling a 4 pin LED strip</p>",
                "<p>If your LED strip has 4 pins, RGB and a Ground, this is probably the right way.</p>",

                "<h3>What you need?</h3>",

                "<p><ul>",
                    "<p><li>Arduino (we used Arduino UNO)</li>",
                    "<p><li>The strip</li>",
                    "<p><li>Jumper wires</li>",
                    "<p><li>A 12v power supply (your strip is probably 12v, also you might need to sacrifice this)</li>",
                    "<p><li>A breadboard (for your first build)</li>",
                    "<p><li>3x N-channel MOSFETS (per control circuit) Try <a href='https://www.amazon.com/WeiMeet-RFP30N06LE-N-Channel-Mosfet-Arduino/dp/B07CTF1JVD/'>these</a></li>",
                    "<p><li>Soldering stuff</li>",
                    "<p><li>Basic knowledge of breadboarding</li>",
                "<p></ul>",

                "<h3>Why use these? Why not?</h3>",

                "<p>The strips are super cheap, but the electronics are bulky and annoying sometimes. These are dead easy to program with Arduino though. They're not individually addressable because there's effectively no logic on board the strip, everything's just wired in parallel. That means these strips are cuttable, which is cool.</p>",
                "<p>We're using these as a simple and cheap way to spice up our driver stations in the 2022 season.</p>",

                "<h3>Hardware setup</h3>", 

                "<p>First, separate out each of the pads on the strip into a separate Arduino compatible male jumper. Then plug in three sockets on the Arduino (they must have the \"~\" PWM symbol next to them for this to work properly.) Just use the pins, 3, 5, and 6 on the Arduino UNO for now.</p>",
                "<p>Then on the breadboard place three N-channel MOSFETS near the center, facing out away from the center. Give them some space between each other to make wiring easier. Position the breadboard so that the MOSFETS are lined up vertically in front of you with the longer \"tab\" part facing towards your right hand, and the darker short part facing to your left. Each of the MOSFETS controls one color.</p>",
                "<p>Now connect one jumper each from the Arduino to the \"top\" pin of each MOSFET. Then, connect the jumpers from the RGB strips to the \"middle\" of each MOSFET. Make sure to color code your jumpers so you know what color is controlled by what pin.</p>",
                "<p>Now it's time for power. Cut your 12v power supply so it branches out into two leads, expose some metal on each lead. Connect a jumper from the \"bottom\" of each MOSFET to one jumper. Then grab your single ground and single power in and touch them to each side of the power supply until the strip shows some sign of activity. Then you know you've got the polarity right.</p>",

                "<h3>Programming!</h3>",

                "<p>In the Arduino software first define three pins, make sure to match color to pin number. Keep in mind these are pre-processor directives, not variable declarations</p>",

                "<pre class='codeBlock'></p>",
                "<p>#define RED 3</p>",
                "<p>#define GREEN 5</p>",
                "<p>#define BLUE 6</p>",

                "<p>The default program should look something like</p>",
                "<pre class='codeBlock'></p>",
                "<p>void setup() {</p>",
                "<p>   // code here</p>",
                "<p>}</p>",

                "<p>void loop() {</p>",
                "<p>   // code here</p>",
                "<p>}</p>",
                "</pre></p>",
    
                "<p>First set the mode of each pin with</p>",
                "<pre class='codeBlock'>",
                "<p>void setup() {</p>",
                "<p>   pinMode(RED, OUTPUT);</p>",
                "<p>   pinMode(GREEN, OUTPUT);</p>",
                "<p>   pinMode(BLUE, OUTPUT);</p>",
                "<p>}</p>",
                "</pre></p>",
                
                "<p>Then the loop function (which runs continuously) you can simply write an 8-bit RGB value (0-255) to each pin to change the color. For example...</p>",
                
                "<pre class='codeBlock'>",
                "<p>void loop() {</p>",
                "<p>   analogWrite(RED, 0);</p>",
                "<p>   analogWrite(GREEN, 255);</p>",
                "<p>   analogWrite(BLUE, 0);</p>",
                "<p>   delay(5000);</p>",
                "<p>   analogWrite(RED, 255);</p>",
                "<p>   analogWrite(GREEN, 255);</p>",
                "<p>   analogWrite(BLUE, 255);</p>",
                "<p>   delay(5000);</p>",
                "<p>}</p>",
                "</pre>",
    
                "<p>Try to figure out what this does.</p>",

                "<p>There's a lot of fun math you can do to make cool effects, like a sort of rainbow shift, try to program that :D.</p>",

                "<p>Btw if you need some help with wiring see the diagram below, but keep in mind it doesn't incorporate the need for an external 12v power supply.</p>",

                "<p><img src=\"https://cdn-learn.adafruit.com/assets/assets/000/002/692/large1024/led_strips_ledstripfet.gif?1448059609\"></p>",

        ],

        adata_neopixel: [
            "<h3>What you need</h3>",
            
            "<p><ul>",
            "<p><li>An Arduino (any kind will probably work but we use Arduino UNO)</li>",
            "<p><li>Jumper cables</li>",
            "<p><li>A 5v power supply (if you have a lot of LEDs and can't just power it off the Arduino)</li>",
            "<p><li>The strip</li>",
            "<p><li>USB-B cable</li>",
            "<p><li>Computer (bruh)</li>",
            "<p></ul>",
            
            "<h3>Why NeoPixel?</h3>",

            "<p><img src=\"https://cdn-learn.adafruit.com/guides/images/000/000/350/medium800/glamour.jpg\" alt=\"image of the above\" width=400/>",
            
            "<p>This is the led strip we have chosen to light our robot with for the 2020 season. It features an easy way to individually address the color of each LED, rather than address the whole strip at once. Oh and for bonus points it has an easy-to-use Arduino library that you can download right from the Arduino IDE. It also requires only one data pin connected to the Arduino which isn't that big of a deal but it makes things look less cluttered.",
            "<p>KEEP IN MIND YOU CAN DRIVE THIS LED STRIP (DATA WISE) DIRECTLY OFF OF THE ROBORIO",
            
            "<h3>Installing the software</h3>"
            ,
            "<p>To download the library needed to control the Arduino, go to tools > manage libraries > search \"Adafruit NeoPixel\" and install it. [Here's](https://www.arduino.cc/reference/en/libraries/adafruit-neopixel/) a link to some source on the Arduino website to verify you have the right stuff.",
            
            "<h3>Setting up the hardware</h3>",
            "<p>You might need to solder out the power leads into jumpers, so have someone who knows what they are doing do that.",
            "<p>One side of the led strip will have a power and ground (probably red and black). Attach the red one to the \"5v\" pin on the Arduino, and the black one to one of the \"GND\" sockets. Then depending on your strip, you might have 1 OR 2 more pins. The black one is just a ground, but as far as I can tell you only need one ground connected, so you can probably just leave it alone. Attach the data pin to the socket labeled \"6\" on the Arduino, or whatever pin you want just make sure to set it in code. At the end, you should have 3 pins connected to the Arduino if you're powering off of the Arduino itself. You can also use the 5v on the VRM to power it.",
            "<p>Use a USB-B cable to connect the Arduino to your computer.",
            
            "<h3>Programming time</h3>",
            "<p>At the top of ANY NeoPixel file you'll need to \"import\" the library with the following. This gives you all the stuff you need to interface with the strip.",
            
            "<pre class='codeBlock'>#include <Adafruit_NeoPixel.h></pre>",

            
            "<p>Also at the top of the file, you're going to want to do the following. Think of this as a fancy variable declaration. The compiler goes through and sees wherever \"DATA_PIN\" appears and replaces it with 6.",
            
            "<pre class='codeBlock'>",
            "<p>#define DATA_PIN 6 // change this to whatever data pin you need",
            "<p>#define PIXEL_COUNT 60 // number of LEDs on the strip",
            "</pre>",
            
            "<p>Finally in the global space, let's create the strip object as \"strip.\" Create more instances of strip as you need to control more strips separately.",
            
            "<pre class='codeBlock'>",
            "<p>Adafruit_NeoPixel strip(PIXEL_COUNT, DATA_PIN, NEO_GRB + NEO_KHZ800);",
            "</pre>",
            
            "<p>The rest of your program will probably look like the following at this point.",
            
            "<pre class='codeBlock'>",
            "<p>void setup() {",
            "<p>   // code here",
            "<p>}",
            "<p>void loop() {",
            "<p>   // code here",
            "<p>}",
            "</pre>",
            
            
            "<p>In setup we want to run functions that don't return values we need for the rest of the program's operation. We want to tell Arduino to set the mode of the data pin to output, and run some setup functions for the strip itself. At the most basic level it should look like this.",
            "<pre class='codeBlock'>",
            "<p>void setup() {",
                "<p>pinMode(DATA_PIN, OUTPUT);",
                "<p>strip.begin();",
                "<p>strip.show(); // this tells the library to write whatever changes you've made to the instance 'strip' to the physical strip, which as this point is nothing so it will show that",
            "<p>}",
            "</pre>",
            
            "<p>Then in loop, which runs as fast as the Arduino can manage automatically, we write code that sets the color of the strip. For example",
            
            "<pre class='codeBlock'>",
            "<p>void loop() {",
                "<p>// iterates through and sets every pixel to green (pixels.Color takes in an RGB value)",
                "<p>for (int i = 0; i < PIXEL_COUNT; i++) {",
                "<p>    strip.setPixelColor(i, pixels.Color(0, 255, 0)) // set pixel at index i along the strip to color",
                "<p>}",
                "<p>strip.show(); // show changes all at once",
                "<p>delay(5000) // wait 5 seconds",
                "<p>// same thing but for white",
                "<p>for (int i = 0; i < PIXEL_COUNT; i++) {",
                "<p>    strip.setPixelColor(i, pixels.Color(255, 255, 255))",
                "<p>}",
                "<p>strip.show(); // show changes all at once",
                "<p>delay(5000) // wait 5 seconds",
            "<p>}",
            "</pre>",
            
            "<p>This code switches the color of the strip every 5 seconds. This doesn't really take advantage of the individual addressability of the LEDs. If you did want to do that you could do a color wipe with something like this, which sets a pixel every 10th of a second.",
            
            "<pre class='codeBlock'>",
            "<p>for (int i = 0; i < PIXEL_COUNT; i++) {",
            "<p>    strip.setPixelColor(i, pixels.Color(0, 255, 0))",
            "<p>    strip.show(); // show changes one pixel at a time",
            "<p>    delay(100);",
            "<p>}",
            "</pre>",
            
            "<p>You can find more code examples <a href='https://github.com/adafruit/Adafruit_NeoPixel/tree/master/examples'>here</a>."
        ],
        starting_arduino: [
            "<p>A basic programming-focused starter's guide to Arduino! You'll need a two-terminal button, like shown below, an Arduino, a computer, Arduino jumpers, and some wire strippers.",
            
            "<p>Oh, if you're curious, an example of a two-terminal button is shown below.",
            "<img src=\"https://m.media-amazon.com/images/I/71j74bPl+HL._SL1500_.jpg\" alt=\"image of the above\" width=200/>",
            
            "<h3>Hardware Setup</h3>",
            
            "<p>Get two jumpers, strip one end off of each leaving a decent amount of bare metal. Make sure to leave one male end on each (if they are m/f jumpers). Twist the strands of each jumper tight, and wrap one jumper around the hole in each terminal of the button. Plug one jumper into the 5v pin on the Arduino and the other into any data pin (numbered on the opposite side of the board) other than 0 or 1.</p>",
            
            "<p>Plug the Arduino with a USB cable into the computer.</p>",
            
            "<h3>Software Setup</h3>",
            
            "<p>The Arduino IDE is available [here](https://www.arduino.cc/en/software). Just download the latest version and install normally (you can do that right?). By the way, the language is weird C++, but you probably won't do any OOP since it provides a functional structure with init (\"setup\") and continuous (\"loop\"). Even a rudimentary knowledge of C/C++ and you'll be up and coding in no time, and it's easy even if you have no experience in a language like that.</p>",
            
            "<p>Open the program when you're done installing.</p>",
            
            "<h3>Programming</h3>",
            
            "<p>When you open your first sketch, you will be met with something similar to the following.</p>",
            
            "<pre class='codeBlock'>",
            "<p>void setup() {</p>",
            "<p>   // code here</p>",
            "<p>}</p>",
            "<p>void loop() {</p>",
            "<p>   // code here</p>",
            "<p>}</p>",
            "</pre>",
            
            "<p>Let's dissect this. The space above setup is the global space. Anything you do there will happen once, and any variables declared here will be accessible in both `setup` and `loop`. Here's where you want to declare any variables that you'll be setting later. In `setup` we run stuff that only needs to be run once, and we don't need any data from it for the rest of the runtime of the program. `loop` is where most of the action happens. This is where we'll manage what the Arduino is taking for input/outputting, using everything we did in the global space and `setup`.</p>",
            
            "<p>Let's code our project. First, we need to set up a global variable to hold the state of the data pin the button is connected to. Then we can set this variable later without wasting the time it takes to declare the variable again every loop.</p>",
            "<pre class='codeBlock'><p>bool name;</p></pre>",

            "<p>Then in `setup`, we need to tell the Arduino to get ready to accept input from the button. We can do that with a call to `pinMode` and some automatically added global values. Oh, we also need to call `Serial.begin(9600)` to tell the Arduino to get ready to output whatever we print to the computer at a baud rate of 9600.</p>",
            
            "<pre class='codeBlock'>",
            "<p>void setup() {</p>",
            "<p>    // arguments to pinMode are pin number and mode</p>",
            "<p>    // make sure to put whatever pin you hooked the</p>",
            "<p>    // button up to for the first argument</p>",
            "<p>    pinMode(3, INPUT)</p>",
            "<p>}</p>",
            "</pre>",
            
            "<p>Then in the `loop` function, which is called as fast as the Arduino can manage, we need to `digitalRead` the value of the pin (whether the button is pressed or not) and manage it. We can use that global variable we set earlier.</p>",
            
            "<pre class='codeBlock'>",
            "<p>void loop() {</p>",
            "<p>   // use YOUR pin #</p></p>",
            "<p>   name = digitalRead(3);</p>",
            "<p>   // now we can send the value back to the Serial Monitor</p>",
            "<p>   // (in tools) on the computer</p>",
            "<p>   Serial.println(name)</p>",
            "<p>}</p>",
            "</pre>",
            
            "<h3>Uploading Your Code</h3>",
            
            "<p>First, make sure you have the correct Arduino selected. Go to Tools > Ports and make sure to select COM#. Then, hit the \"play\" button in the IDE. This will compile and upload your code. Open the Serial Monitor (under Tools) and try pressing the button. It should change from `false` to printing `true` when you hold the button down.</p>"
        ],
    },
    limelight: [
        "<img class='image' src='imgs/vendors/limelight.png'>",
        
        "<h3>What is Limelight?</h3>",
        
        "<p>Limelight is a plug-and-play smart camera purpose-built for the FIRST Robotics Competition. It is also one of the most effective and easy-to-use cameras with arguably the simplest and easiest-to-use user interface.</p>",
        
        "<h3>Setup</h3>",
        
        "<p>To initially set up the networking on Limelight, you first need to connect to your robot's network on a Windows device. Next, go to http://limelight.local:5801, click “Settings”, enter your team number, update the number, and then set your Limelight’s IP address to “10.TE.AM.11”. Then set the Netmask to “255.255.255.0” and the Gateway to “10.TE.AM.1”. Power-cycle your robot. Now you will be able to access your config panel at http://10.TE.AM.11:5801, and your camera stream at http://10.TE.AM.11:5800.</p>",
        
        "<p>A Limelight device communicates its values over NetworkTables, a system that is already set up with a WPILib robot code base. Furthermore, the tables that WPILib uses are using a Hashmap, meaning that there are values and keys for all of the data being sent (you will see why this is important later). The values being sent are “tv” (whether or not Limelight sees any targets), “tx” (horizontal offset from the reflective target), “ty” (vertical offset from the target), and “ta” (the target area).</p>",
        
        "<h3>Programming</h3>",
        
        "<p>If you are writing your robot code in Java, you first need to have the following imports:</p>",
        "<pre class='codeBlock'>",
        "<p>import edu.wpi.first.wpilibj.smartdashboard.SmartDashboard;</p>",
        "<p>import edu.wpi.first.networktables.NetworkTable;</p>",
        "<p>import edu.wpi.first.networktables.NetworkTableEntry;</p>",
        "<p>import edu.wpi.first.networktables.NetworkTableInstance;</p>",
        "</pre>",
        
        "<p>Next, you need to initialize the variables to hold your tv, tx, ty, and ta from NetworkTables. Here at Texas Torque, we have a singleton method that updates periodically every second, so we put our tx, ty, and ta inside our update method to get accurate and almost real-time values.</p>",
        
        "<pre class='codeBlock'>",
        "<p>NetworkTable table = NetworkTableInstance.getDefault().getTable('limelight');</p>",
        "<p>NetworkTableEntry tx = table.getEntry('tx')</p>;",
        "<p>NetworkTableEntry ty = table.getEntry('ty');</p>",
        "<p>NetworkTableEntry ta = table.getEntry('ta');</p>",
    
        "<p>public void update() {</p>",
        "<p>    NetworkTable table = NetworkTable.getTable('limelight');</p>",
        "<p>    double targetOffsetAngle_Horizontal = table.getNumber('tx', 0);</p>",
        "<p>    double targetOffsetAngle_Vertical = table.getNumber('ty', 0);</p>",
        "<p>    double targetArea = table.getNumber('ta', 0);</p>",
        "<p>    double targetSkew = table.getNumber('ts', 0);</p>",
        "<p>}</p>",
        "</pre>",
        
        "If you would like to change the LEDs on Limelight (on, off, blink), you can set them with another table. The last integer will change with 0 setting the LED Mode set in the current pipeline, 1 to force off, 2 to force blink, and 3 to force on.",
        "<pre class='codeBlock'>",
        "<p>NetworkTableInstance.getDefault().getTable('imelight').getEntry('ledMode').forceSetNumber(3);</p>",
        "</pre>",

        "<h3>Finding Targets</h3>",
        
        "<p>To have Limelight lock onto a target, you need to aim a robot with a Limelight camera at a reflective tape strip. These are usually found on goals in FRC matches. After that, connect to the robot's Wi-Fi network and go to http://10.TE.AM.11:5801. From here, ensure that you have a live feed from the Limelight. You should see the reflective tape strips on the feed glowing a bit. To tune the camera, go to the Thresholding tab and then click on the eyedropper. Now click on the pixels for the glowing vision strips, and then you should see a red dot on the strip. You should also be able to see updating t-values underneath the stream. If you are getting interference with your stream, edit the sliders in the Thresholding tab until your t-values are consistent.</p>",
        
        "<img class='image' src='/imgs/vendors/LimelightDistance.jpg>",

        "<h3>Measuring Distances</h3>",
        
        "<p>If you need to be able to calculate the distance between a target and your robot, there is a simple way to do this. The first thing that you will need is to get a few measurements. The height up to the middle of the Limelight lens from the ground (h1), the height of the vision tape strips (h2), the angle that the Limelight is mounted at (a1), the ty value from the Limelight, and for testing purposes, the horizontal distance from the vision strips to the Limelight camera (d). You can now plug these values into the equation d = (h2 - h1) / tan(a1 + a2). If the distance output you are getting is not accurate to the actual measured distance, try adjusting your a1 value by a few degrees.</p>",
    ],
    motor_controllers: [
        "<h3>What are PWM Motor Controllers?</h3>",
        
        "<p>Let's say that you were to run a motor without any kind of motor controller, voltage setter, or anything, just simply plugged into a power supply. The motor would continuously speed up and up as it continued to get power and would not stay at a continuous, constant speed. Try and imagine an autonomous robot sequence where the robot has to drive forward at a certain speed; without a motor controller for the drive train, the robot would speed up much too fast and likely crash into something, hurting other people or itself.</p>",
        
        "<p>How exactly does a motor controller actually manage to keep a constant speed? The answer is pulse width modulation, or PWM for short. The basic function of a PWM motor controller is to send small pulses of power to the motor to keep it going at a constant speed. It is similar to turning on a switch for a motor and then quickly turning it off. Being able to perfectly control a motor through this means would be nearly impossible for a human, but because the motor controller is based on a computer, it is able to calculate the perfect length and strength of the pulses to keep the motor at a consistent speed. The pulses are not powerful or long enough to make the motor go too fast, nor are they too weak and short to make the motor underperform.</p>",
        
        "<h3>Differences between motor controllers</h3>",
        
        "<p>What are the differences between different motor controllers? There are a wide variety of motor controllers that are used in different scenarios for different purposes. The motor controllers that are most commonly used are CTRE VictorSPX, VictorSP, Talon SRX, and RevRobotics SparkMax. The main practical difference between the three is the price and the electrical wiring between the controllers. VictorSPXs are smaller and lighter than SPs and support CAN. SparkMaxs and Talons can also be linked by CAN and support encoders.</p>",
        
        "<h3>Code</h3>",
        
        "<p>Here at Texas Torque, we utilize wrapper classes for motor controllers to handle our vendordeps, so we can write out TorqueSparkMax to define a SparkMax, VictorSPX for VictorSPXs, and TalonSRX for TalonSRXs. But for other teams, you can define your controller object class with either a PWMSparkMax, CANSparkMax, TalonSRX, VictorSP, or VictorSPX. Torque’s wrapper classes allow us to add a follower to a motor, so simply rewrite the motor name on a new line with the .addFollower command afterwards with the motor that you wish to have be a follower in parentheses. It is not necessary to define the follower motor; it will automatically be done.</p>",
        
        "<pre class='codeBlock'>",
        "<p>TorqueSparkMax leftDB1 = new TorqueSparkMax(Ports.LEFT_DB_1);</p>",
        "<p>leftDB1.addFollower(Ports.LEFT_DB_2);</p>",
        "</pre>",
        
        "<h3>Problems and Solutions</h3>",
        
        "<ul>",
        "<li>Problem: The motor is moving strangely (rolling after input is false, stuttering, etc.)</li>",
        "<li>Solution: Try to reconfigure the PID.</li>",
    ],
    motors_and_types: [
        "<h3>Brands and Models</h3>",
    
        "<p>As of the 2021 off-season, Texas Torque currently makes extensive use of RevRobotics NEO, NEO 550, VEX 775 Pro, and is looking to incorporate the VEX Falcon 500 soon. In the past, the team made use of the AndyMark CIM, but have since all but stopped using them in anything. All of these motors have features and quirks that make them suitable or unsuitable for specific roles.</p>",
    
        "<h3>Brushless vs Brushed</h3>",
    
        "<p>These are the two main categories of DC motors. Both operate on the principles of electromagnetism and magnetism. The stator is the stationary part surrounding the rotor, the rotating part.</p>",
    
        "<p>In a brushed motor, the stator is made up of two oppositely charged magnets facing inwards toward the rotor. The rotor is made up of coils that function as electromagnets. Attached to the rotor is the commutator, a periodically interrupted cylinder of metal. Two carbon brushes contact the commutator, passing current through it and into the coils on the rotor, attracting them towards the stator, producing rotational motion. At some point during the rotation of the motor, the brushes lose contact with the commutator, stopping the flow of current through the rotor and sending the motor into free spin. Then the brushes re-initiate contact with the commutator, causing current to flow in the opposite direction, reversing the polarity of the rotor's electromagnetic coils, and yet again attracting it to the stator. This finely tuned mechanical process ensures that the motor will keep spinning smoothly in the same direction.</p>",
    
        "<p>In a brushless motor, the rotor is still surrounded by the stator, but the roles are reversed. The rotor is made up of a cylindrical magnet, attached to the load. An array of electromagnets point in from the stator towards the rotor (at least 3). A computer timing system switches the electromagnets on the stator on and off at the right time to continue attracting the rotor in the same direction.</p>",
    
        "<p>For all intents and purposes, brushless motors are better than brushed motors. There are fewer durability concerns and less heat due to the lack of fragile brushes. They generally just perform better. For example, brushless motors have a higher torque-to-weight ratio.</p>",
    
        "<h3>Performance Metrics</h3>",
    
        "<p>There are many ways to measure the performance of a motor.</p>",
    
        "<p>The heat performance of a motor is important for motors that run all the time. Running a loaded motor for too long can quickly cause it to overheat; this is especially true for brushed motors. Be sure to monitor a motor’s temperature; otherwise, you could have a poorly performing motor on your hands. The Falcon 500 comes with a dedicated pneumatic cooling port, which allows for the issue of heat to be almost entirely avoided.</p>",
    
        "<p>A motor's efficiency can indicate how much of the 40A of current available through the robot PDP that the robot can take advantage of.</p>",
    
        "<p>Free spin speed is the maximum speed the motor will spin with no additional load. At this speed, the motor is practically useless because torque (and therefore output power) is 0.</p>",
    
        "<p>Torque is the rotational equivalent of linear force. An object that weighs 50 kg (ignoring friction) will take more than 50 kg of linear force to break equilibrium and cause movement. Torque can be conceptualized similarly—force, but applied during a rotation. Torque is measured in Newton-meters (Nm). 1 Nm is equal to the amount of force the rotational axis experiences when attached to 1 N (~100 g) at the end of a 1-meter-long arm. The greater the torque, the less slowdown the motor will experience when under heavy load.</p>",
    
        "<p>Output power is equal to torque times speed. Output power can be misleading. For example, a motor that spins extremely quickly but has almost no torque could still have a high output power but be useless for most things. For FRC motors, generally, the peak output power is good enough for comparing the performance of motors in typical FRC applications.</p>"
    ],
    pneumatics_and_solenoids: [
        "<p>Pneumatics are pressurized air cylinders that are controlled by solenoids to either extend or retract. They are powered by compressors and can be used all over a robot to perform a variety of tasks. The difference between the two is that a double solenoid can be manually retracted from the extended position and also be set off, whereas a single solenoid will only be able to push out and when the solenoid is set to 0 it will retract.</p>",
    
        "<h3>Programming</h3>",
    
        "<p>To program a pneumatic cylinder, you control the solenoid which controls the pneumatic device.</p>",
    
        "<pre class='codeBlock'>",
        "<p>import edu.wpi.first.wpilibj.Solenoid;</p>",
        "<p>Solenoid solenoid = new Solenoid(PneumaticsModuleType.CTREPCM, Ports.SOLENOID);</p>",
        "<p>if (controller.getSolenoidButton()) solenoid.set(true);</p>",
        "<p>else solenoid.set(false);</p>",
    
        "<p>import edu.wpi.first.wpilibj.DoubleSolenoid;</p>",
        "<p>import edu.wpi.first.wpilibj.DoubleSolenoid.Value;</p>",
        "<p>DoubleSolenoid doubleSolenoid = new DoubleSolenoid(PneumaticsModuleType.CTREPCM, Ports.DOUBLE_SOLENOID_OUT, Ports.DOUBLE_SOLENOID_IN);</p>",
        "<p>if (controller.getSolenoidButton()) doubleSolenoid.set(Value.kForward);</p>",
        "<p>else doubleSolenoid.set(Value.kReverse);</p>",
        "</pre>",
    
        "<h3>Wiring</h3>",
    
        "<p>To wire your pneumatics, you will first need to have a basic electronics setup including a PCM (Pneumatics Control Module). You can reference this article: https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-1/how-to-wire-a-robot.html. The PCM will be used to provide an output for the compressor, input for the pressure switch, and outputs for up to 8 solenoid channels (12V or 24V selectable). The PCM is connected to the roboRIO over the CAN bus and powered via 12V from the PDP. If there are not enough ports on the PCM for a robot, an additional one can be used.</p>",
    
        "<h3>Compressor</h3>",
    
        "<p>The compressor can be wired from the Compressor Out port on the PCM and should use no higher than 18 gauge wire.</p>",
    
        "<h3>Pressure Switch</h3>",
    
        "<p>The polarity of the terminals for the pressure switch are not important when connecting them to the input ports on the PCM. A pressure switch is required to compete in an FRC competition as it is what prevents a compressor from over-compressing and causing a rupture.</p>",
    
        "<h3>Solenoids</h3>",
    
        "<p>Each solenoid channel should be wired directly to a numbered pair of terminals on the PCM. A single-acting solenoid will use one numbered terminal pair. A double-acting solenoid will use two pairs. If your solenoid does not come with color-coded wiring, check the datasheet to make sure to wire with the proper polarity.</p>",
    
        "<h3>Solenoid Voltage Jumper</h3>",
    
        "<p>The PCM is capable of powering either 12V or 24V solenoids, but all solenoids connected to a single PCM must be the same voltage. The PCM ships with the jumper in the 12V position. To use 24V solenoids, move the jumper from the left two pins to the right two pins. You may need to use a tool such as a small screwdriver, small pair of pliers, or a pair of tweezers to remove the jumper.</p>",
    
        "<h3>Problems and Solutions</h3>",

        "<ul>",
        "<li>Problem: The solenoid light is turning on when the controller sends the signal, but the cylinder is not actuating.</li>",
        "<li>Solution: Did you change the Voltage Jumper to the correct voltage?</li>",
        "</ul>",
    ],
    roboRIO: [
        "<img class='image' src='imgs/vendors/roborio.png'>",

        "<h3>What is a RoboRIO?</h3>",
    
        "<p>A roboRIO is the only FRC legal reconfigurable robotics controller that includes built-in ports for inter-integrated circuits (I2C), serial peripheral interfaces (SPI), RS232, USB, Ethernet, pulse width modulation (PWM), and relays to quickly connect the common sensors and actuators used in robotics. A RoboRIO includes built-in LEDs, buttons, an onboard accelerometer, and a custom electronics port and is the central hub for all other external sensors, motors, or lights to be wired to.</p>",
    
        "<h3>Setting Up and Using WiFi:</h3>",
    
        "<p>Out of the box, a RoboRIO is not fully set up as it does NOT include a built-in WiFi module, a part that is essential to controlling your robot remotely. Note: *It IS possible to run a RoboRIO with all functionality hardwired to it over USB; you can deploy code and even enable the robot and have full motor and sensing functionality. However, you do need to have actual wireless connectivity to compete in an official FRC competition.* To interface with the RoboRIO over WiFi, you need to wire an external WiFi router and then configure it by connecting to the RoboRIO’s Ethernet port and using the <a href='https://firstfrc.blob.core.windows.net/frc2020/Radio/FRC_Radio_Configuration_20_0_0.zip'>WPILibs router imaging tool</a> to set the robot’s network name. Note: *It is necessary to disable all other network adapters on your PC besides the Ethernet adapter when doing this.*</p>",
    
        "<h3>What Should Be Wired to a RoboRIO?</h3>",
    
        "<p>The Power Distribution Panel (PDP), Pneumatics Control Module (PCM), Voltage Regulator Module (VRM), OpenMesh Radio, Robot signal light, motor controllers, 120A circuit breaker, WiFi radio, and battery connector are all parts that are needed to successfully and FRC legally wire a robot. However, not all of these are actually wired to the RoboRIO.</p>",
    
        "<p>The first step is to actually wire power to the RoboRIO, which requires inserting 10 and 20 amp fuses at the bottom of the PDP and then using 18 gauge wire to connect the “Vbat controller PWR” terminals on the PDP to the power input connector on the RoboRIO.</p>",
    
        "<p>For the WiFi radio, first connect the radio to the 12V port on the VRM, then connect a male-to-female Ethernet adapter to the radio, followed by a regular Ethernet cable between the radio and the RoboRIO.</p>",
    
        "<p>For CAN wiring, simply connect one end of each wire to the CAN port on the RoboRIO and then the other ends to the correspondingly color-coded ports on the PCM.</p>",
    
        "<p>For PWM devices, the simplest wiring method is to connect the PWM adapter to the motor controller (and if necessary, PWM extension cables) and then connect the other end to one of the many PWM ports on the RoboRIO, ensuring that the black wire faces out.</p>",
    
        "<p>For the signal light, first bridge the La and Lb terminals on the light, then insert wire into the N (Negative) terminal and the Lb terminal and connect the two wires to the corresponding positive and negative RSL port on the RoboRIO.</p>",
    
        "<img class='image' src='https://docs.wpilib.org/en/stable/_images/frc-control-system-layout-rev.svg' alt='Full Diagram'>",
    
        "<h3>Formatting a RoboRIO Over USB</h3>",
    
        "<p>Every year, National Instruments releases a new edition of FRC Game Tools, and it is required to update your RoboRIO with the new firmware.</p>",
    
        "<ul>",
        "<li>Go to <a href='https://www.ni.com/en-us/support/downloads/drivers/download.frc-game-tools.html#440024'>National Instruments website</a> and download the software.</li>",
        "<li>Run the installer and allow all new programs to download.</li>",
        "<li>Open the RoboRIO Imaging Tool.</li>",
        "<li>Turn on the robot whose firmware you want to update.</li>",
        "<li>Use an I2C cable to connect to the I2C port on the RoboRIO.</li>",
        "<li>Once the target is detected on the PC, click on the proper firmware to deploy.</li>",
        "<li>If you have a RoboRIO 2 (released in 2021 with twice the RAM of the original), select the appropriate firmware.</li>",
        "<li>Click 'Reformat'.</li>",
        "<li>Note: If deployment fails, ensure that there is not a dash in your PC’s name.</li>",
        "</ul>",
    
        "<h3>Formatting a RoboRIO Over SD</h3>",
    
        "<p>There have been recent issues updating firmware or reformatting a RoboRIO 2 over USB. However, you can reformat the RoboRIO’s microSD card instead.</p>",
    
        "<ul>",
        "<li>Turn off your RoboRIO and remove the microSD card by pushing down on it with a fingernail or small flat-head screwdriver.</li>",
        "<li>Insert the microSD card into your computer using a USB adapter.</li>",
        "<li>Download the RoboRIO formatting tool from <a href='https://www.ni.com/en-us/support/downloads/drivers/download.frc-game-tools.html#440024'>here</a>.</li>",
        "<li>Install BalenaEtcher or another application that can flash firmware onto microSD cards.</li>",
        "<li>Open the RoboRIO formatting tool and navigate to the SD images folder.</li>",
        "<li>Move the SD image file to your desktop.</li>",
        "<li>Open BalenaEtcher, select 'Flash from File', and choose the SD image.</li>",
        "<li>Select the microSD card as the target and flash the image.</li>",
        "<li>Once complete, eject the microSD card and insert it back into the RoboRIO before powering it on.</li>",
        "</ul>",
    
        "<p>Note: You must set the team number from the software, or you will need to use '0000' in your Driver Station and WPILib extension in VSCode. It is highly recommended to change the number.</p>",
    
        "<h3>Setting Team Number</h3>",
    
        "<p>To change the team number of a RoboRIO:</p>",
    
        "<ul>",
        "<li>Turn it on and connect it to your computer via a USB B cable.</li>",
        "<li>Open the RoboRIO Imaging Tool.</li>",
        "<li>Click on the 'Team Number' box and enter your number.</li>",
        "<li>Click 'Edit Startup Settings' and enter your team number again.</li>",
        "<li>Click 'Apply' to reset the RoboRIO’s team number.</li>",
        "<li>If changing from the default '0000', the first attempt will only change it to '0000'. You must apply the change a second time for the new number to take effect.</li>",
    
        "<p>It is crucial to use the correct number; otherwise, your Driver Station will be unable to connect, and you won't be able to deploy code from VSCode.</p>",
    
    ],
    wifi_configuration: [
        "<h3>Setting The Network Name For a Robot:</h3>",
    
        "<p>Setting up your robot's network is a required step for having wireless robot connectivity, and there are more features than you might think. Finding your robot at competition, preventing other people from connecting to your robot, enabling a firewall for more security, and even more can all be accomplished.</p>",
    
        "<h3>Initial Setup</h3>",
    
        "<p>The first step for setting up your robot's OpenMesh router is to download the <a href='https://firstfrc.blob.core.windows.net/frc2020/Radio/FRC_Radio_Configuration_20_0_0.zip'>FRC Radio Configuration Tool</a> on a Windows 10 device. Once you open the tool, click through the setup utility until it is fully installed. Before you open the application, make sure to disable all other network adapters in Control Panel besides your Ethernet adapter. The FRC Radio Configuration tool is notoriously bug-filled, and having more than one network adapter enabled will cause compiling errors.</p>",
    
        "<p>After you have installed and set up the FRC Radio Configuration application, plug an Ethernet cable into the Ethernet port closer to the power adapter on your radio and the other end to your PC. Next, open the application and ensure that you only see Ethernet as one of the connection options. Now turn on your robot and click 'OK' on your PC. You should now see a similar settings menu to the image below.</p>",

        "<img class='image' src='/imgs/Correct_Ethernet_Port.png' alt='Correct Ethernet Port'>",
        "<img class='image' src='/imgs/FRC_Radio_Config_Options.jpg' alt='Settings Options'>",

        "<p>The fields that you would want to fill out are the team number, robot name, and perhaps making a WPA key, which would necessitate a password to connect to your robot. It is not recommended to enable the firewall, as it leads to more complications with deploying code. The software will automatically combine your team number and robot name to make the SSID with the TEAMNUMBER_ROBOTNAME format.</p>",
    
        "<p>To deploy the changes, click the 'Configure' button, and you should see a similar popup on the left-hand side of the screen as the one below. If it all goes well, you should see an orange progress bar and then a success message when it is complete. You can now disconnect from the robot’s Ethernet and then power cycle the radio in order for the WiFi light to update.</p>",
    
        "<h3>Problems and Solutions</h3>",
    
        "<p>It is likely that you will run into errors while trying to deploy the changes. The best thing to do is to JUST KEEP TRYING AGAIN AND AGAIN!</p>",
    
        "<p>If you run into error messages, try the following:</p>",

        "<ul>",
        "<li>Ensure that you have a complete connection on both sides of the Ethernet cable and perhaps try using a different cable.</li>",
        "<li>Ensure that you are plugged into the right Ethernet port on the radio.</li>",
        "<li>Power cycle your PC and radio.</li>",
        "<li>If none of the above work, try using a different PC.</li>",
        "</ul>",
    ],
    navX: [
        "<p>The navX is an integrated accelerometer, gyroscope, and magnetometer that allows tracking the position of the robot.</p>",
    
        "<img class='image' src='/imgs/vendors/navx.png' alt='navX'>",
    
        "<h3>Board</h3>",
    
        "<p>The board is located on the kMXP port on the RoboRIO, which is the large one in the center.</p>",
    
        "<p>The navX has two on-board buttons, calibrate (CAL) and reset (RESET). Holding down reset for three seconds and waiting for the orange light to turn on and off will zero the gyro. Holding down CAL for 10 seconds and then pressing the reset button will recalibrate the sensors.</p>",
    
        "<h3>Code</h3>",
    
        "<p>We use the AHRS class for interfacing with the navX. The gyro can be instantiated with:</p>",
    
        "<pre class='codeBlock'>",
        "<p>AHRS gyro = new AHRS(SPI.Port.kMXP);</p>",
        "</pre>",
    
        "<p>Below is a list of common methods:</p>",
    
        "<pre class='codeBlock'>",
        "<p>double pitch = gyro.getPitch(); // Get the pitch</p>",
        "<p>double yaw = gyro.getYaw(); // Get the yaw</p>",
        "<p>double roll = gyro.getRoll(); // Get the roll</p>",
    
        "<p>gyro.reset(); // Zero the gyro</p>",
    
        "<p>gyro.getFusedHeading() // Get a more accurate yaw, [0,360]</p>",
        "</pre>",
    
        "See the section Fused Heading for more in-depth details on the difference in headings.",
    
        "<h3>Magnetometer</h3>",
    
        "<p>The magnetometer on the NavX informs the NavX of the Earth's gravitational field. It must be calibrated using <a href='https://www.kauailabs.com/support/navx-mxp/kb/faq.php?id=25'>this</a> software.</p>",
    
        "<p>Unplug the NavX from the SPI port, and plug the NavX with a mini-B to a computer running the software. Align the NavX according to the included pictures (12 data points). Flash to the controller once done.</p>",
    
        "<h3>Problems & Solutions</h3>",
    
        "<ul>",
        "<li>Problem: The gyro is giving wildly inaccurate values!</li>",
        "<li>Solution: Have you tried recalibrating it?</li>",
        "</ul>"
    ]    
}