const coding = {
    basic_auto_setup: [
        "<p>Programming autonomous is one of the core parts of FRC, and along with that, one of the most complex and challenging. However, if you research enough code and learn enough to understand about the systems that are used at Torque, you would be surprised at how fast and simple it really is.</p>",

        "<h3>Calling Autonomous Mode</h3>",

        "<p>When you first select autonomous mode from driver station, a proper Texas Torque repository will first trigger the autoInit() function and then the autoContinous() method. The autoInit() function will call AutoManager.java and more specifically, the chooseCurrentSequence function of AutoManager. That function will then send the auto sequence that you chose from Smart Dashboard to Sequence.java where the individual blocks of the selected sequence will be run, and counted until they are all done. For parsing through the commands that are in the blocks that are in the sequences of your selected sequence, Command.java is used.</p>",

        "<h3>Writing Commands</h3>",

        "<p>To write a command, you first need to make a new file inside of the command folder which should be inside of the auto folder. Every command needs to extend the main Command class, and because Command.java has required methods to be overridden, they should be autofilled into your new command file. (Code 1) These methods are init(), continuous(), endCondition(), and end(). In addition to these you should also write out a constructor for your command. If you have variables that you want to be passed into your command from a sequence, you should first define them at the top of your class. In the constructor, pass those variables in the parameters and then set each variable with this.  = the variable inside of the constructor.(Code 2) The next thing to write out is the init(), or initialization function. Override public void init(), and then write out the code that you want to have run one time once the command gets called.(Code 3) Do the same for continuous(), but instead put the code that you want to have continuously happen over and over again inside of it. Do the same for public boolean endCondition and put the if statement inside of it and return the condition. (It should be false until you have a condition that will decide if the command can end). Lastly, override end() and write out the code that should run one time once the command ends.</p>",

        "<pre class='codeBlock'>",
        "public class DriveForTime extends Command {}",
        "</pre>",

        "<pre class='codeBlock'>",
        "<p>public DriveForTime(double speed, double length) {</p>",
        "<p>    this.speed = speed;</p>",
        "<p>    this.length = length;</p>",
        "<p>}",
        "</pre>",



        "<h3>Writing Sequences</h3>",

        "<p>To write a sequence, you need to first create a new sequence inside of the sequence folder inside of the auto folder. Define the package at the top of the file and then extend the Sequence class in the class declaration. Just like Command, there are required methods to be overridden, so ensure that you are overriding public void init(). Inside of init, you call blocks that are full of commands. The init() function will run all of the blocks that you call inside of it, and you are able to have multiple blocks in each sequence. After the method is called in init(), define the method outside of init() with a void return type. The first line of the block should contain a new ArrayList of the type Command. The next line can then have the name of the ArrayList '.add(', and then write out 'new”, the name of a command, '(' the numbers to be passed in as parameters for the command, and then '));”. The next line just needs 'addBlock()”, with the name of the ArrayList inside of the parenthesis.(Code 4)</p>",

        "<pre class='codeBlock'>",
        "<p>public class DriveForTimeSequence() {</p>",
        "<p>   ArrayList<Command> a = new ArrayList<Command>(); // ArrayList<Command> constructors everything in commands folder</p>",
        "<p>   a.add(new DriveForTime(.5, .25, .25)); // Goes forward at 25% power for .5 second</p>",
        "<p>   addBlock(a);</p>",
        "<p>}</p>",
        "</pre>",
    ],
    coding_standards: [
        "<h3>Important Advice</h3>",

        "<ul>",
        "<li>Simple > Complicated</li>",
        "<li>Explicit > Implicit</li>",
        "<li>Ability to read code > Ability to write code</li>",
        "<li>Comments don't explain your code to humans, code explains your comments to the computer</li>",
        "<li>The best procedure is no procedure</li>",
        "<li>Don't overuse a programming paradigm (OOP, functional)</li>",
        "<li>It's not what you know, it's what you do with what you know</li>",
        "<li>Leet Code doesn't mean much of anything</li>",
        "<li>The most valuable skill is the ability to figure things out</li>",
        "<li>Before you ask what something does, think through it</li>",
        "<li>That said, if you are really stuck, *please* ask questions</li>",
        "</ul>",

        "<h3>Best Practices</h3>",

        "<h4>Use getters and setters</h4>",

        "<p>Avoid unnecessary public variables, getters, and setters, but use getters and setters to control access to private members.</p>",

        "<h4>Curly braces go on the same line as the statement they are tied to</h4>",

        "<p>Except for really long function declarations</p>",

        "<pre class='codeBlock'>",
        "<p>public class Example() {</p>",
        "<p>    public static void main(String[] args) {</p>",
        "<p>        if (args.length > 5) {</p>",
        "<p>            System.out.printf('Hello World!');</p>",
        "<p>        }</p>",
        "<p>    }</p>",
        "<p>}</p>",
        "</pre>",

        "<h4>Lines should not extend over 80 characters</h4>",

        "<p>Examples of how to deal with long lines. This doesn't matter too much, you can do it many ways.</p>",

        "<pre class='codeBlock'>",
        "<p>public static ArrayList<String> reallyLongFunction(double thisArgument, </p>",
        "<p>    const String thatArgument, ThisClass anArgument) {</p>",
        "<p>}</p>",
        "</pre>",

        '<br>',

        "<pre class='codeBlock'>",
        "<p>// This is one of the only time to put</p>",
        "<p>// the curly brace on the next line</p>",

        "<p>private ArrayList<double></p>",
        "<p>anotherFunction(double thisArgument,</p>",
        "<p>    const String thatArgument,</p>",
        "<p>    ThisClass anArgument) {</p>",
        "<p>    // Code goes here</p>",
        "<p>}</p>",
        "</pre>",

        "<h4>Constants are named in screaming case</h4>",


        "<pre class='codeBlock'><p>String THIS_IS_SCREAMING_CASE = 'Helicopter';</p></pre>",


        "<h4>Classes start with a capital letter, variables start with lower case</h4>",
        "<pre class='codeBlock'>",
        "<p>ThisIsAClass thisIsAVariable = new ThisIsAClass();</p>",
        "</pre>",

        "<h4>Use JavaDoc when you can</h4>",

        "<pre class='codeBlock'>",
        "<p>/*</p>",
        "<p>* This says what the functions does</p>",
        "<p>*</p>",
        "<p>* @param int This describes the parameter</p>",
        "<p>* @return This describes the return</p>",
        "<p>*</p>",
        "<p>* @author Just don't use this w/o asking</p>",
        "<p>*/</p>",
        "<p>int thisIsAFunction(int a) {</p>",
        "<p>    return -a;</p>",
        "<p>}</p>",
        "</pre>",
    ],
    digital_io: [
        "<h2>Using RoboRIO DIO</h2>",

        "<p>This is a tutorial on how to output the Digital I/O (DIO) pins on the RoboRIO, and accept input on an Arduino.</p>",

        "<h3>On the RoboRIO</h3>",

        "<p>First, import the DigitalOutput class from wpilib as shown below.</p>",

        "<br>",
        "<pre class='codeBlock'><p>import edu.wpi.first.wpilibj.DigitalOutput;</p></pre>",
        "<br>",

        "<p>Then, set up your instances</p>",

        "<br>",
        "<pre class='codeBlock'>",
        "<p>DigitalOutput a;</p>",
        "<p>DigitalOutput b;</p>",

        "<p>private Constructor() {</p>",
        "<p>    // DIO pin numbers, printed on RoboRIO</p>",
        "<p>    a = DigitalOutput(0);</p>",
        "<p>    a = DigitalOutput(1);</p>",
        "<p>}</p>",
        "</pre>",


        "<p>Then, in another method, set the state of your DIO pins with booleans.</p>",

        "<pre class='codeBlock'>",
        "<p>public method() {</p>",
        "<p>    a.set(true);</p>",
        "<p>    b.set(false);</p>",
        "<p>}</p>",
        "</pre>",


        "<h3>On the Arduino</h3>",

        "<p>To make sure we aren't constantly re-declaring variables, let's define some booleans globally.</p>",

        "<pre class='codeBlock'>",
        "<p>bool thing;</p>",
        "<p>bool that;</p>",
        "</pre>",

        "<p>First in `setup`, set your pin modes</p>",

        "<pre class='codeBlock'>",
        "<p>// pins here don't have to be the same</p>",
        "<p>// as the ones on the RoboRIO</p>",
        "<p>// as long as they are physically</p>",
        "<p>// connected</p>",
        "<p>pinMode(1, INPUT)</p>",
        "<p>pinMode(2, INPUT)</p>",
        "</pre>",

        "<br>",
        "<p>Then in `loop` we can do what we need.</p>",
        "<br>",

        "<pre class='codeBlock'>",
        "<p>// make sure the pins are the same</p>",
        "<p>// as the ones you set the mode</p>",
        "<p>// on</p></p>",
        "<p>thing = digitalRead(1)</p></p>",
        "<p>that = digitalRead(2)</p></p>",
        "</pre>",

        "<br>",
        "<p>You can treat your read values as true/false, 1/0, or HIGH/LOW.</p>"
    ],
    jacks_plan_for_success: [
        "<p>During a competition, programmers are usually only given a couple days with the robot to get it fully operational. As such, it is imperative to create a streamlined development procedure.</p>",

        "<h3>Roles</h3>",

        "<p>Each programmer requires a <b>role</b>. Roles dictate what their duties. Below is a list of the usual roles:</p>",

        "<ul>",
        "<li><b>Lead</b> - The Lead orchestrates development of the entire robot.</li>",
        "<li><b>Assistant Lead</b> - The Assistant Lead assists the Lead in managing the programmers.</li>",
        "<li><b>Programmer</b> - A Programmer is a general role that is further divided into sub-roles:",
        "<ul>",
        "<li><i>Ports and Constants</i> - Responsible for determining the robot's ports and constants.</li>",
        "<li><i>Input</i> - Responsible for setting up the Input.java file.</li>",
        "<li><i>Robot.java</i> - Responsible for setting up the Robot.java file.</li>",
        "<li><i>Feedback</i> - Responsible for setting up the Feedback.java file.</li>",
        "<li><i>Subsystem</i> - Responsible for setting up the specified subsystem.</li>",
        "</ul>",
        "</li>",
        "<li><b>Rookie</b> - A Rookie is a general role for new additions to the programming team which may lack enough knowledge to beneficially contribute during the short time frame. They can shadow the programming section.</li>",
        "</ul>",

        "<h3>Boilerplate</h3>",

        "<p>Each programmer should implement _boilerplate_ code first, instead of aiming for functionality first. This includes creating all instance variables and getters/setters before writing main logic as this enables other programmers to interface with your part instantly.</p>",

        "<h3>Asking for help</h3>",

        "<p>Do that. :)</p>"
    ],
    network_tables: [
        "<p>Some basic examples to get you started in various languagues with Network Tables (as a client)</p>",

        "<h2>C++</h2>",

        "<p>Including the header:</p>",

        "<pre class='codeBlock'>",
        "<p>#include \"networktables/NetworkTable.h\"</p>",
        "<p>#include \"networktables/NetworkTableInstance.h\"</p>",
        "</pre>",

        "<br>",
        "<p>Instatiating object and setup:</p>",
        "<br>",

        "<pre class='codeBlock'>",
        "<p>auto ntinst = nt::NetworkTableInstance::GetDefault();</p>",
        "<p>// attempts to establish connection to server</p>",
        "<p>// over common IPs based on team number</p>",
        "<p>// use YOUR team number</p>",
        "<p>ntinst.StartClientTeam(1477);</p>",
        "<p>// starting the client</p>",
        "<p>ntinst.StartDSClient();</p>",
        "</pre>",

        "<br>",
        "<p>Manipulating a table:</p>",
        "<br>",

        "<pre class='codeBlock'>",
        "<p>// grab the table by name</p>",
        "<p>// this is a ptr</p>",
        "<p>// so you have to use</p>",
        "<p>// -> to get members</p>",
        "<p>std::shared_ptr<nt::NetworkTable> table = ntinst.GetTable(\"tbl\");</p>",
        "<p>// put a number to entry!</p>",
        "<p>table->PutNumer(\"entry_name\", 0.5);</p>",
        "<p>// grab an entry from the table</p>",
        "<p>auto entry = table->GetEntry(\"keyuwu\");</p>",
        "<p>// grab a value from the table</p>",
        "<p>// (if it's a boolean)</p>",
        "<p>entry.GetBoolean(false);</p>",
        "</pre>",

        "<h2>Java</h2>",

        "<p>Imports:</p>",
        "<br>",

        "<pre class='codeBlock'>",
        "<p>import edu.wpi.first.networktables.NetworkTable;</p>",
        "<p>import edu.wpi.first.networktables.NetworkTableEntry;</p>",
        "<p>import edu.wpi.first.networktables.NetworkTableInstance;</p>",
        "</pre>",

        "<br>",
        "<p>Instantiate and setup:</p>",
        "<br>",

        "<pre class='codeBlock'>",
        "<p>// should work fine in most cases</p>",
        "<p>NetworkTableInstance ntinst = NetworkTableInstance.getDefault();</p>",
        "<p>// setup/start the client</p>",
        "<p>ntinst.startClientTeam(1477); // YOUR team number</p>",
        "<p>ntinst.startDSClient();</p>",
        "</pre>",

        "<br>",
        "<p>Maniupulating a table:</p>",
        "<br>",

        "<pre class='codeBlock'>",
        "<p>// grab the table</p>",
        "<p>NetworkTable table = ntinst.getTable(\"tbl\");</p>",
        "<p>NetworkTableEntry one = table.getEntry(\"entryuwu\");</p>",
        "<p>one.getDouble(0.0); // grab whatevers in the entry (as a double)</p>",
        "<p>one.setDouble(10.0); // set it to 10.0, compatible with many Java types</p>",
        "</pre>",
    ],
    project_structure: [
        "<p>To control and code the robot, you should know where the critical components are. There are 3 main folders: Constants, Inputs and Subsystems.</p>",

        "<h2>Constants</h2>",

        "<p>The Constants folder has 2 files under it: Constants.java and Ports.java. Every motor on the robot is connected to a port. Ports.java is where we specify which motor is connected to which port. Constants.java has standard constants we use throughout the project, most notably the speeds of the motors.</p>",

        "<h2>Inputs</h2>",

        "<p>The Inputs folder has the Inputs.java file. First, at the top of the input file, are where the default speeds and booleans are set, usually 0 and false respectively. We make a variable called controller, which represents our Xbox One controller. With controller, we can actually see what buttons are being pressed, and we can specify what the robot should do if a specific button is pressed.</p>",

        "<pre class='codeBlock'>",
        "<p>boolean shootingSequence = false;</p>",

        "<p>if (controller.getLeftTrigger()) {</p>",
        "<p>    shootingSequence = true;</p>",
        "<p>}</p>",
        "</pre>",

        "<p>The above code checks if we are pressing the left trigger on the controller. If we are, we are telling the robot to start the shooting sequence. Most of the input methods are structured like this, though not exactly.</p>",
    ],
    style_guide: [
        "<h2>Contents</h2>",

        "<ul>",
        "<li><a href=\"#file-struture\">File Struture</a></li>",
        "<li><a href=\"#formatting\">Formatting</a></li>",
        "<li><a href=\"#naming\">Naming</a></li>",
        "<li><a href=\"#programming-practices\">Programming Practices</a></li>",
        "<li><a href=\"#javadoc\">Javadoc</a></li>",
        "</ul>",

        "<h2 id=/file-structure>File Struture</h2>",

        "<h3>File name</h3>",

        "<p>The source file name consists of the case-sensitive name of the top-level class it contains (of which there is exactly one), plus the `.java` extension.</p>",

        "<h3>Characters</h3>",

        "<p>Files are encoded in UTF-8.</p>",
        "<p>Indentation is to be done with <strong>spaces only</strong>.</p>",
        "<p>For any character that has a special escape sequence (`\\b`, `\\t`, `\\n`, `\\f`, `\\r`, `\\\"`, `\\'` and `\\\\`), that sequence is used rather than the corresponding octal (e.g. `\\012`) or Unicode (e.g. `\\u000a`) escape.</p>",
        "<p>For the remaining non-ASCII characters, either the actual Unicode character (e.g. `∞`) or the equivalent Unicode escape (e.g. `\\u221e`) is used. The Unicode character is preferred, but the escape is to be used if there is no suitable character, and must be accompanied with a comment.</p>",

        "<h3>Source Structure</h3>",

        "<p>A source file must be structured as follows:</p>",
        "<ul>",
        "<li>License or package information.</li>",
        "<li>Package statement (not line-wrapped).</li>",
        "<li>Import statements (not line-wrapped).</li>",
        "<li>Exactly one top-level class.</li>",
        "</ul>",
        "<p><strong>Exactly one</strong> blank line between the sections.</p>",

        "<h3>Import Statements</h3>",

        "<p>Import statements are not line-wrapped.</p>",
        "<p>Do not use wildcard imports on classes.</p>",
        "<p>Do not use static imports on classes.</p>",
        "<p>Put static imports before plain imports.</p>",

        "<h3>Class Layout</h3>",

        "<p>Layout beyond what specified below is left to the author.</p>",
        "<ul>",
        "<li>Singleton instance if applicable.</li>",
        "<li>`public static final` constants.</li>",
        "<li>Class variable fields.</li>",
        "<li>Constructors.</li>",
        "<li>Methods.</li>",
        "</ul>",

        "<h2 id='formatting'>Formatting</h2>",

        "<p>You don't need to worry about too much formatting because we use Clang-Format. The Texas Torque Clang-Format for Java is specified as below:</p>",

        "<pre class='codeBlock'>",
        "<p>Language: Java</p>",
        "<p>AlignConsecutiveAssignments: false</p>",
        "<p>AlignConsecutiveDeclarations: false</p>",
        "<p>ColumnLimit: 120</p>",
        "<p>ContinuationIndentWidth: 8</p>",
        "<p>AllowShortBlocksOnASingleLine: true</p>",
        "<p>AllowShortCaseLabelsOnASingleLine: true</p>",
        "<p>AllowShortEnumsOnASingleLine: true</p>",
        "<p>AllowShortFunctionsOnASingleLine: true</p>",
        "<p>AllowShortIfStatementsOnASingleLine: AllIfsAndElse</p>",
        "<p>AllowShortLoopsOnASingleLine: true</p>",
        "<p>AllowShortIfStatementsOnASingleLine: true</p>",
        "<p>IndentRequires: true</p>",
        "<p>BreakBeforeBraces: Attach</p>",
        "<p>UseTab: Never</p>",
        "<p>BreakAfterJavaFieldAnnotations: true</p>",
        "<p>AlignOperands: true</p>",
        "<p>AlignTrailingComments: true</p>",
        "</pre>",

        "<h3>Quick rules</h3>",

        "<p>Braces <strong>always</strong> go on the same line as the statement.</p>",
        "<p>If braces are optional, you don't have to use them, just be consistent with that block of code.</p>",
        "<p>One line <code>methods</code>/<code>if</code>/<code>else</code>/<code>for</code>/<code>while</code> are allowed.</p>",
        "<p>The line limit is 120 characters.</p>",
        "<p>Indentation is 4 spaces.</p>",
        "<p>A continuation of the previous line is indented 8 spaces.</p>",
        "<p>Always break a line on an operator, start the next line with the operator.</p>",
        "<p>Horizontal alignment is never required but is optional.</p>",
        "<p>Single line variable declarations with commas are allowed (ex: <code>int a, b = 5;</code>)</p>",
        "<p>Don't use <code>switch</code> statements.</p>",
        "<p>Grouping parentheses are recommended.</p>",

        "<h3>The order of field modifiers</h3>",

        "<p>You do need to worry about the order of field modifiers (from left to right):</p>",

        "<ul>",
        "<li><code>private</code>, <code>protected</code>, or <code>public</code></li>",
        "<li><code>static</code></li>",
        "<li><code>final</code></li>",
        "<li><code>volatile</code> or <code>synchronized</code></li>",
        "</ul>",

        "<h3>Horizontal white space</h3>",

        "<p>This is usually taken care of by Clang-Format, but we pretty much use Google's rules.</p>",
        "<p>Beyond where required by the language or other style rules, and apart from literals, comments and Javadoc, a single ASCII space also appears in the following places only.</p>",

        "<ul>",
        "<li>Separating any reserved word, such as <code>if</code>, <code>for</code>, or <code>catch</code>, from an open parenthesis (() that follows it on that line</li>",
        "<li>Separating any reserved word, such as <code>else</code> or <code>catch</code>, from a closing curly brace (<code>}</code>) that precedes it on that line</li>",
        "<li>Before any open curly brace (<code>{</code>), with two exceptions:</li>",
        "<ul>",
        "<li><code>@SomeAnnotation({a, b})</code> (no space is used)</li>",
        "<li><code>String[][] x = {\"foo\"};</code> (no space is required between <code>{{</code>, by item 9 below)</li>",
        "</ul>",
        "<li>On both sides of any binary or ternary operator.</li>",
        "<li>After <code>,</code>, <code>:</code>, <code>;</code>, or the closing parenthesis (<code>)</code>) of a cast</li>",
        "<li>Between any content and a double slash (<code>//</code>) which begins a comment. Multiple spaces are allowed.</li>",
        "</ul>",

        "<h3>Annotations<h3>",

        "<p>We use:</p>",

        "<ul>",
        "<li><code>@Override</code> (Always use this!)</li>",
        "<li><code>@Deprecated</code></li>",
        "<li><code>@FunctionalInterface</code></li>",
        "<li><code>@SuppressWarnings</code></li>",
        "</ul>",

        "<h3>Comments</h3>",

        "<p>This section addresses implementation comments. Javadoc is addressed separately in Section 7, Javadoc.</p>",

        "<p>Any line break may be preceded by arbitrary whitespace followed by an implementation comment. Such a comment renders the line non-blank.</p>",

        "<p>4.8.6.1 Block comment style",

        "<p>Block comments are indented at the same level as the surrounding code. They may be in <code>/* ... */</code> style or <code>// ...</code> style. For multi-line <code>/* ... */</code> comments, subsequent lines must start with <code>*</code> aligned with the <code>*</code> on the previous line.</p>",

        "<pre class='codeBlock'>",
        "<p>/*</p>",
        "<p>* This is          // And so           /* Or you can</p>",
        "<p>* okay.            // is this.          * even do this. */</p>",
        "<p>*/</p>",
        "</pre>",

        "<h3>Naming</h3>",

        "<p>Identifiers use only ASCII letters and digits, and, in a small number of cases noted below, underscores. Thus each valid identifier name is matched by the regular expression \\w+ (matches letter, digits, and underscores).</p>",

        "<p>Identifier names must always begin with a lowercase letter.</p>",

        "<p>Invalid names:",

        "<ul>",
        "<li>`name_`</li>",
        "<li>`mName`</li>",
        "<li>`s_name`</li>",
        "<li>`kName`</li>",

        "<p>WPILib loves to use the `mInstanceVariable` and `kConstantOrEnum` bullshit, we do not.",

        "<p>Package names",
        "<p>Package names use only lowercase letters and digits (no underscores). Consecutive words are simply concatenated together. For example, com.example.deepspace, not com.example.deepSpace or com.example.deep_space.",

        "<h3>Class names</h3>",

        "<p>Class names are written in UpperCamelCase.",

        "<p>Class names are typically nouns or noun phrases. For example, `Character` or `ImmutableList`. Interface names may also be nouns or noun phrases (ex: `List`), but may sometimes be adjectives or adjective phrases instead (ex: `Readable`).",

        "<p>There are no specific rules or even well-established conventions for naming annotation types.",

        "<h3>Method names</h3>",

        "<p>Method names are written in lowerCamelCase.",

        "<p>Method names are typically verbs or verb phrases. For example, `sendMessage` or `stop`.",

        "<h3>Constant names</h3>",

        "<p>Constant names use UPPER_SNAKE_CASE: all uppercase letters, with each word separated from the next by a single underscore. But what is a constant, exactly? It's really not that deep, but if you care, read it from [Google](https://google.github.io/styleguide/javaguide.html#s5.2.4-constant-names).",

        "<p>These names are typically nouns or noun phrases.",

        "<h3>Non-constant field names</h3>",

        "<p>Non-constant field names (static or otherwise) are written in lowerCamelCase.",

        "<p>These names are typically nouns or noun phrases. For example, `computedValues` or `index`.",

        "<h3>Parameter names</h3>",

        "<p>Parameter names are written in lowerCamelCase.",

        "<p>One-character parameter names in public methods should be avoided.",

        "<h3>Local variable names</h3>",

        "<p>Local variable names are written in lowerCamelCase.",

        "<p>Even when final and immutable, local variables are not considered to be constants, and should not be styled as constants.",

        "<h3>Type variable names</h3>",

        "<p>Each type variable is named in one of two styles:",

        "<p>A single capital letter, optionally followed by a single numeral (such as `T`, `E`, `X`, `T2`).",
        "<p>A name in the form used for classes (see Section 5.2.2, Class names), followed by the capital letter `T` (examples: `RequestT`, `FooBarT`).",

        "<h2 id='programming-practices'>Programming Practices</h2>",

        "<h3>@Override`: always used</h3>",

        "<p>A method is marked with the @Override annotation whenever it is legal. This includes a class method overriding a superclass method, a class method implementing an interface method, and an interface method respecifying a superinterface method.",

        "<p>Exception: `@Override` may be omitted when the parent method is `@Deprecated`.",

        "<h3>Static members: qualified using class</h3>",

        "<p>When a reference to a static class member must be qualified, it is qualified with that class's name, not with a reference or expression of that class's type.",

        "<p>`Foo aFoo = ...;`",
        "<p>`Foo.aStaticMethod(); // good`",
        "<p>`aFoo.aStaticMethod(); // bad`",
        "<p>`somethingThatYieldsAFoo().aStaticMethod(); // very bad`",

        "<he>The use of `final`: liberal</h3>",

        "<p>We use `final` in every possible context.",

        "<ul>",
        "<li>To be overly explicit for readability purposes<li>",
        "<li>To prevent unwanted mutation</li>",
        "</ul>",

        "<h4>Why?</h4>",

        "<p>This mostly applies to fields and local variables. Declaring immutability is important.",
        "<p>It lets us know how a value will change over runtime, and how we can avoid side effects.",
        "<p>This is the same reason I use `final` in parameters declarations. If a parameter is *not* marked `final` in my code it *will* be mutated. To keep this connotation, we must use `final` everywhere else. I also use `final` when I can to explicitly specify extendibility. This is important in building a library, like [TorqueLib](https://github.com/TexasTorque/TorqueLib), and as a result of this, I use it in the entire Texas Torque codebase. The most extraneous uses is marking methods that are members of a `final` class or marking static methods as `final`. The reason I do this is just to maintain consistency with all function declarations. This is the only case in which I think I may overuse `final`, but it's a habit.",

        "<h3>Finalizers: not used</h3>",

        "<p>Don't do it.",

        "<h2 id='javadoc'>Javadoc</h2>",

        "<h3>Javadoc Formatting</h3>",

        "<p>The basic formatting of Javadoc blocks is as seen in this example:",

        "<pre class='codeBlock'>",
        "<p>/**",
        "<p>* Multiple lines of Javadoc text are written here,",
        "<p>* wrapped normally...",
        "<p>*/",
        "<p>public final int method(final String p1) { ... }",
        "</pre>",

        "<p>... or in this single-line example:",

        "<pre class='codeBlock'>",
        "<p>/** An especially short bit of Javadoc. */",
        "</pre>",

        "<p>The basic form is always acceptable. The single-line form may be substituted when the entirety of the Javadoc block (including comment markers) can fit on a single line. Note that this only applies when there are no block tags such as `@return`.",

        "<h3>Block tags</h3>",

        "<p>Any of the standard \"block tags\" that are used appear in the order `@param`, `@return`, `@throws`, `@deprecated`, and these four types never appear with an empty description. When a block tag doesn't fit on a single line, continuation lines are indented four (or more) spaces from the position of the `@`.",

        "<h3>Where Javadoc is used</h3>",

        "<p>At the minimum, Javadoc is present for every public class, and every public or protected member of such a class, with a few exceptions:",

        "<ul>",
        "<li>* Javadoc is optional for \"simple, obvious\" members like `getFoo()`, in cases where there really and truly is nothing else worthwhile to say but \"Returns the foo\".</li>",
        "<li>* Javadoc is not always present on a method that overrides a supertype method.</li>"
    ]

}