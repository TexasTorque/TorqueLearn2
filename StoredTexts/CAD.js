const cad = {
    gears: [
        "<h3>Intro</h3>",
        "<p>Gears are a simple yet effective way to transfer rotational power. Gears are used in all sorts of mechanisms from drivetrains to jointed arms and elevators.</p>",

        "<h3>Concepts</h3>",
        "<ul>",
        "<li><a href='#positioning'>Positioning</a></li>",
        "<li><a href='#reductions'>Reductions</a></li>",
        "<li><a href='#inertia'>Inertia</a></li>",
        "</ul>",

        "<h3 id='positioning'>Positioning</h3>",
        "<p><b>Relevance:</b> Gears that are positioned too close together can bind up and cause teeth to wear away faster.</p>",
        "<p>Gears have an intrinsic property known as diametral pitch (dp). The diametral pitch is defined as the number of teeth on a gear (T) divided by the pitch diameter (D). Intuitively, diametral pitch can be understood as a conversion factor from diameter to tooth count. The pitch diameter is the diameter of a circle that intersects the teeth on the gear in the middle of the tooth height (technically it is when the tooth width is the same as the spacing between the teeth). Pitch diameter is easier explained with an image:</p>",
        "<img class='image' src='/imgs/CAD/ThreadDiagram.gif' alt='Thread Diagram'>",

        "<p>Finding the diameter of a gear from dp:</p>",
        "<p>\\[dp = \\frac{\\text{teeth}}{\\text{diameter}}\\]</p>",
        "<p>\\[dp = \\frac{T}{D}\\]</p>",
        "<p>\\[dpD = T\\]</p>",
        "<p>\\[D = \\frac{T}{dp}\\]</p>",
        "<p>The recommended distance (rd) between gears is the center distance (cd) plus 0.008 inches.</p>",
        "<p>\\[cd = \\frac{T1 + T2}{2dp}\\]</p>",
        "<p>\\[rd = \\frac{T1 + T2}{2dp} + 0.008\\]</p>",

        "<h3 id='reductions'>Reductions</h3>",
        "<p><b>Relevance:</b> Gears can alter the speed, direction, and torque of an input. Understanding reductions provides insight on how well a system can perform a task.</p>",
        "<h5>Rotational Velocity</h5>",
        "<p>Gears are typically arranged in two ways: side by side, or stacked.</p>",
        "<img class='image' src='/imgs/CAD/GearArrangementDiagram.gif' alt='Gear Arrangement Diagram'>",

        "<p>When gears are stacked, they have the same rotational velocity ω. When gears are side by side, they have the same tangential speed |v|.</p>",
        "<p>A reduction occurs when a small gear 'drives' a bigger gear aka. a small gear is next to a bigger gear.</p>",
        "<p>An upduction is the opposite of a reduction, a larger gear driving a smaller gear. This is inefficient and is typically something we want to avoid.</p>",

        "<p>Deriving the relation between side-by-side gears:</p>",
        "<p>Assume: T1 is the smaller gear</p>",
        "<p>\\[r = radius\\]</p>",
        "<p>\\[v = rω\\]</p>",
        "<p>\\[r = \\frac{T}{2dp}\\]</p>",
        "<p>since: \\(v1 = -v2\\)</p>",
        "<p>\\[r1ω1 = -r2ω2\\]</p>",
        "<p>\\[\\frac{T1}{2dp} * ω1 = \\frac{-T2}{2dp} * ω2\\]</p>",
        "<p>\\[T1ω1 = -T2ω2\\]</p>",
        "<p>\\[ω1 = \\frac{-T2}{T1} * ω2\\]</p>",

        "<h3 id='torque'>Torque</h3>",
        "<p>The benefit of using gears to reduce the speed of a motor rather than using less electrical power is that a gearbox will increase the torque of the output in exchange for the lower speed.</p>",

        "<p>EX: Deriving the relationship between gears and Torque:</p>",
        "<p>Let: \\(τ0 = \\text{motor torque}\\)</p>",
        "<p>Vector notation will be omitted to improve readability</p>",
        "<p>The following example continues off the previous one</p>",
        "<p>\\[τ = r * F\\]</p>",
        "<p>\\[τ0 = τ1\\]</p>",
        "<p>Since adjacent gears are touching at a point: F1 = F2 = F12</p>",
        "<img class='image' src='/imgs/CAD/GearTorqueDiagram.png' alt='Gear Torque Diagram'>",
        "<p>\\[F12 = \\frac{τ1}{r1}\\]</p>",
        "<p>\\[τ2 = -F12r2\\]</p>",
        "<p>\\[τ2 = \\frac{-r2}{r1} * τ1\\]</p>",

        "<h3 id='inertia'>Inertia</h3>",
        "<p><b>Relevance:</b> When a gear spins, it will have a tendency to stay in its current state. This continued spinning, or lack thereof, affects the motion of a gear.</p>",

        "<h4>Moment of Inertia</h4>",
        "<p>The moment of inertia is defined as:</p>",
        "<p>\\[I = ∫ r^2 * dm\\}\\]</p>",
        "<p>The closer mass is located to the axis of rotation, the lower the moment of inertia, and the easier it is for the object to spin.</p>",
        "<p>The following formula assumes that the gear has constant density and can be approximated as a cylinder.</p>",
        "<p>\\[Igear = \\frac{1}{2} mr^2\\}\\]</p>",

        "<p>Most Vex gears are half an inch wide and are made of 7075-T6 Aluminum. We can use this to find the mass of the gear in terms of the tooth count of the gear. Using the formula above in the 'positioning' section, we can also find the radius of the gear in terms of tooth count.</p>",

        "<h4>Inertia in Reductions</h4>",
        "<p>From before we have:</p>",
        "<p>\\[ω1 = \\frac{-T2}{T1} * ω2\\]</p>",
        "<p>\\[τ2 = \\frac{-r2}{r1} * τ1\\] </p>",
        "<p>Derivative with respect to time:</p>",
        "<p>\\[α1 = \\frac{-T2}{T1} * α2\\]</p>",
        "<p>By definition:</p>",
        "<p>\\[τ = Iα\\]</p>",
        "<p>\\[r = \\frac{T}{2dp}\\]</p>",
        "<p>Substituting:</p>",
        "<p>\\[τ1 = I1α1\\]</p>",
        "<p>\\[τ2 = I2α2\\]</p>",
        "<p>\\[I2α2 = \\frac{-r2}{r1} * I1α1\\]</p>",
        "<p>\\[I2α2 = \\frac{-T2}{T1} * I1α1\\]</p>",
        "<p>\\[I2α2 = \\frac{-T2}{T1} * I1 * (\\frac{-T2}{T1} * α2)\\]</p>",
        "<p>\\[I2α2 = (\\frac{T2}{T1})^2 * I1 * α2\\]</p>",
        "<p>\\[I2 = (\\frac{T2}{T1})^2 * I1\\]</p>",
        "<p>\\[I1 = (\\frac{T1}{T2})^2 * I2\\]</p>",

        "<p>Since the apparent moment of inertia is directly proportional to the square of the reduction, this derivation shows us that gear reductions allow inputs to drive systems with much larger moments as if they were small moments. In other words, reductions can help move a large flywheel with ease.</p>"
    ],
    ropes: [
        "<h3>Concepts</h3>",

        "<ul>",
        "<li><a href='#tension'>Tension</a></li>",
        "<li><a href='#capstan equation'>Capstan Equation</a></li>",
        "<li><a href='#fleet angle'>Fleet Angle</a></li>",
        "</ul>",

        "<h3 id='tension'>Tension</h3>",

        "<h4>Relevance:</h4>",

        "<p>In FRC, ropes are commonly used to lift an elevator, help a robot climb, or carry an alliance robot.</p>",

        "<p>Tension is a force associated with stretching things. To determine if a rope is strong enough to lift something, the tensile strength of the rope will need to be examined.</p>",

        "<p>At Torque, we often use Dyneema rope which is comparable to Spectra cord both of which are stronger than steel.</p>",

        "<b>7x7 Strand Stainless Steel Cable Tensile Strength</b>",

        "<table>",
            "<tr>",
                "<th>Diameter (in)</th>",
                "<th>Tensile Strength (lbf)</th>",
            "</tr>",
            "<tr>",
                "<td>3/64</td>",
                "<td>270</td>",
            "</tr>",
            "<tr>",
                "<td>1/16</td>",
                "<td>480</td>",
            "</tr>",
            "<tr>",
                "<td>3/32</td>",
                "<td>920</td>",
            "</tr>",
            "<tr>",
                "<td>1/8</td>",
                "<td>1700</td>",
            "</tr>",
            "<tr>",
                "<td>5/32</td>",
                "<td>2400</td>",
            "</tr>",
            "<tr>",
                "<td>3/16</td>",
                ",<td>3700</td>",
            "</tr>",
            "<tr>",
                "<td>1/4</td>",
                "<td>6100</td>",
            "</tr>",
        "</table>",

        "<b>12 Strand Spectra Tensile Strength</b>",

        "<table>",
            "<tr>",
                "<th>Diameter (in)</th>",
                "<th>Tensile Strength (lbf)</th>",
            "</tr>",
            "<tr>",
                "<td>1/8</td>",
                "<td>1800</td>",
            "</tr>",
            "<tr>",
                "<td>3/16</td>",
                "<td>3600</td>",
            "</tr>",
            "<tr>",
                "<td>1/4</td>",
                "<td>6000</td>",
            "</tr>",
        "</table>",

        "<p>\\[Tensile Strength = F_{tu} \\]</p>",

        "<p><b>EX:</b> What is the maximum mass that can be hung off of a 1/16 in diameter 7x7 steel cable?</p>",
        "<p>\\[F_{tu}=F_g\\]</p>",
        "<p>\\[480\\text{ lbf}=mg\\]</p>",
        "<p>\\[m=480\\text{ lb}\\]</p",

        "<p>Note: lbf is a measure of force while lb is a measure of mass.</p>",
        "<p>Despite the fiber's impressive tensile strength, it is susceptible to stretching and thus methods to tension the string over repeated use should be considered.</p>",


        // Capstan Equation
        "<h4 id='capstan equation'>Capstan Equation</h4>",

        "<p><b>Relevance:</b> The Euler-Eytelwein Equation aka. the Capstan Equation relates the tension of two sides of a rope wrapped around a tube. This had potential uses in Steamworks when robots needed to climb a rope and has uses on elevators and winches.</p>",

        "<p>Its derivation is quite elegant and can be found here: <https://www.youtube.com/watch?v=hsbNusf2N8Y></p>",

        "<p>The formula is:</p>",
        "<p>\\[T_{load}=T_{in}e^{μ \\theta}\\]</p>",

        "<p>where *T* is tension, μ is the coefficient of friction, and theta is how much the rope is wrapped around the pipe in radians.</p>",
        "<p>The number of wraps <b>exponentially</b> increases the amount of load an input force can hold.</p>",


        // Fleet Angle
        "<h4 id='fleet angle'>Fleet Angle</h4>",

        "<p><b>Relevance:</b> The angle at which a rope is spooled can affect the evenness of the wrapping. Uneven wrapping is more likely to tangle and is unpredictable.</p>",

        "<p>To understand how a rope will wrap around a pipe, this section will take a kinematic approach rather than a dynamic one as the differential equations become unwieldy.</p>",

        "<p>Let's start off with the parametric equation of a circle as we know that the pipe has a circular shape of radius _r_.</p>",

        "<p>Let's start off with the parametric equation of a circle as we know that the pipe has a circular shape of radius *r*.</p>",

        "<p>\\[x=rcos(t),\\;\\;y=rsin(t)\\]</p>",

        "<p>As a vector, this is:</p>",
        "<p>\\[[rcos(t),\\;rsin(t)]\\]</p>",

        "<p>To bring our rope into 3D space, we need to define the z component which for now we can define as some function *z(t)*. Let's call our postion function *R(t)*.</p>",

        "<p>\\[R(t)=[rcos(t),\\;rsin(t),\\;z(t)]\\]</p>",

        "<p>\\[\\text{Let}: z(t)=t\\]</p>",

        "<p>From geometry, we know that there are 360 degrees or 2\\pi radians in a circle. Thus, on the interval $t=[0, 2\\pi)$ *R(t)* makes one full circle. If $z(t)=t,$ then the rope will travel $2\\pi units per wrap which is known as pitch *p*.</p>",

        "<p>\\[p=2\\pi\\frac{z(t)}{t}\\]</p>",

        "<img class='image' src='/imgs/CAD/HelixDiagram.jpg' alt='Helix Diagram'>",

        "<p>So far, we have a helix but we still need to find a relation between _R(t)_ and the fleet angle.</p>",

        "<img class='image' src='/imgs/CAD/FleetAngleDiagram.png' alt='Fleet Angle Diagram'>",

        "<p>Using trigonometry, we can write:</p>",
        "<p>\\[\\tan\\theta=\\frac{pitch}{2*diameter}\\]</p>",

        "<p>Note: the '2' is because the rope spans one diameter on the front side plus an additional diameter on the backside.</p>",

        "<p>Solving for <i>pitch</i>:</p>",

        "<p>\\[p=\\tan(\\theta)(2*diameter)\\]</p>",
        "<p>\\[p=4r\\tan(\\theta)\\]</p>",

        "<p>From before:</p>",
        "<p>\\[p=2\\pi\\frac{z(t)}{t}\\]</p>",
        "<p>\\[z(t)=\\frac{p}{2\\pi}t\\]</p>",
        "<p>\\[z(t)=\\frac{4r\\tan(\\theta)}{2\\pi}t\\]</p>>",
        "<p>\\[z(t)=\\frac{2r\\tan(\\theta)}{\\pi}t\\]</p>",
        "<p>\\[R(t)=[rcos(t),\\;rsin(t),\\;z(t)]\\]</p>",
        "<p>\\[R(t)=[rcos(t),\\;rsin(t),\\;\\frac{2r\\tan(\\theta)}{\\pi}t]\\]</p>",

        "<p>Note: Theta can be a function of t.</p>",
    ],
    belts: [
        "<h3>Concepts</h3>",

        "<ul>",
        "<li><a href='#positioning'>Positioning</a></li>",
        "<li><a href='#slipping'>Slipping</a></li>",
        "<li><a href='#power-transfer'>Power Transfer</a></li>",
        "</ul>",

        "<h3 id='positioning'>Positioning</h4>",

        "<p><b>Relevance:</b> Belts are nifty devices to transport power over long distances. They can be used for reductions like gears but without the counter rotating property or as a conveyor belt to transport items.</p>",

        "<img class='image' src='/imgs/CAD/BeltPulleyDiagram.jpg' alt='Belt Pulley Diagram'>",

        "<p>The pitch diameter of a pulley is determined by the equation:</p>",

        "\\[\\text{pitch}=\\frac{p*T}{\\pi}\\]",

        "<p>Notice that the equation is different form that for gears!</p>",

        "<p>In words, the pitch diameter of the pulley is equal to the pitch of the pulley multiplied by the tooth count and divided by \\pi.</p>",

        "<p>In comparison with gears, \\pi divided by pitch can be seen as an analog to diametral pitch.</p>",

        "<h4>Gears:</h4>",

        "\\[dpD=T\\]",

        "<h4>Belts:</h4>",

        "\\[\\frac{\\pi}{p}D=T\\]",

        "<p>Unlike with gears, belts follow a path. Which is probably why the formula is based of off the arc length of the pitch circle (circumference = $\pi D$) than the diameter.</p>",

        "<p>Although the path length can be found by hand this can be time consuming and changes from problem to problem.</p>",

        "<p>I would recommend finding the path length of a custom path using Solidworks. Essentially, the path can be drawn out and dimensioned and then after selecting each part of the path (or fitting a spline) the total length should be reported in the bottom right.</p>",

        "<img class='image' src='/imgs/CAD/PathLengthDiagram.png' alt='Path Length Diagram'>",

        "<p>To find the tooth count from the path length, simply divide by the pitch like we did before.</p>",

        "\\[\\frac{L}{p}=T\\]",

        "<h4>Special Cases</h4>",

        "<h5>Equal Sized Pulleys</h5>",

        "<p>When a single belt loop is formed by equal sized gears the equation for the path length simplifies.</p>",

        "<img class='image' src='/imgs/CAD/PathLengthSpecialCaseDiagram.png' alt='Path Length Special Case Diagram'>",

        "<p><i>Note:</i> this derivation was not found mathematically but only visually.</p>",

        "<p>The path length can be calculated by the circumference of one pulley and the distance between the pulleys.</p>",

        "<p>The blue lines are equal to the distance between the centers of the circles. The red curves add up to the circumference of one circle.</p>",

        "\\[L=\\pi D+\\sum_{i=0}^{n}cd_i\\]",

        "<p>The path length is equal pi times the pitch diameter of the pulleys plus the sum of all the connecting center distances.</p>",

        "<h5>Two Pulleys</h5>",

        "<p>For when a belt is connecting different sized pulleys.</p>",

        "<img class='image' src='/imgs/CAD/BeltLengthDiagram.jpeg' alt='Belt Length Diagram'>",

        "\\[L=2cd+\\frac{\\pi}{2}(D+d)+\\frac{(D-d)^2}{4cd}\\]",

        "<p>An excellent walk-through is given here:</p>",

        "<a href='https://www.youtube.com/watch?v=qfZAFQ4so9c>'>https://www.youtube.com/watch?v=qfZAFQ4so9c</a>",
    ],
    arms: [
        "<h2>Intro</h2>",

        "<p>Arms can be a cool way to move pieces vertically and are often lighter than an elevator.</p>",

        "<h2>Concepts</h2>",

        "<ul>",
        "<li><a href='#4bar'>4 Bar</a></li>",
        "<li><a href='#virtual4bar'>Virtual 4 Bar</a></li>",
        "<li><a href='#weightedVirtual4bar'>Weighted Virtual 4 Bar</a></li>",
        "</ul>",

        "<h3 id='4bar'>4 Bar</h3>",

        "<p>Relevance: When placing a game piece at different heights, it is often useful if that piece keeps its current orientation. A 4 bar can help achieve this.</p>",

        "<p>A 4 bar is a type of linkage that consists of (you guessed it) four bars. When connected at movable joints like in the image below, the output member stays parallel as the beams form a parallelogram.</p>",

        "<p>4 bars can consist of beams that are not of corresponding length. In these cases, the motion of the system is more complex.</p>",

        "<h3 id='virtual4bar'>Virtual 4 Bar</h3>",

        "<p>Relevance: The 4 bar from the previous section is pretty useful, but it can be limiting in size and range of motion. Virtual 4 bars fix this.</p>",

        "<p>A virtual 4 bar replaces the parallel bars with a loop. This loop is typically made of chain and is connected by sprockets. When designed with clearances in mind, virtual 4 bars can go past vertical--giving the virtual 4 bar a larger range of motion.</p>",



        "<p>Key points of a virtual 4 bar:</p>",


        "<ul>",
        "<li>the sprockets must be the same size</li>",
        "<li>the base sprocket must be fixed</li>",
        "<li>the sprocket at the wrist must be free to rotate</li>",
        "</ul>",

        "<h3 id='weightedVirtual4bar'>Weighted Virtual 4 Bar</h3>",

        "<p>Relevance: A solution to when a manipulator needs to be in two different positions at two different heights.</p>",

        "<p>What I (Michael Menezes) am calling a 'weighted' or 'unbalanced' virtual 4 bar is a virtual 4 bar with different sized sprockets. When virtual 4 bars use sprockets of the same size, they keep the wrist sprocket in the same orientation in relation to the ground throughout its motion. When sprockets have different sizes, the wrist sprocket will rotate relative to the ground.</p>",

        "<p>Let's take a look at the math.</p>",

        "<p>When sprockets are chained together, they act similarly to gears (except they don't counter rotate). What I mean is that chained sprockets have the same tangential velocity 'v' but differing angular velocities \\omega.</p>",

        "<p>By inspection of a standard virtual 4 bar, it may seem like the sprockets are not rotating when in fact they are rotating relative to the bar that connects them. The diagram below demonstrates how a weighted 4 bar would function with angles measured relative to the bar.</p>",

        "<img class='image' src='/imgs/CAD/WeightedFourBarDiagram.png' alt='Weighted Four Bar Diagram'>",

        "<p>Let: the base sprocket be indicated by 1 and the wrist sprocket by 2</p>",
        "\\[v_1=v_2\\]",
        "\\[r_1\\omega_1=r_2\\omega_2\\]",
        "<p>Integrating with respect to time yields:</p>",
        "\\[r_1\\Delta\\theta_1=r_2\\Delta\\theta_2\\]",
        "\\[\\Delta\\theta_2=\\frac{r_1}{r_2}\\Delta\\theta_1\\]",


        "<p>Put into words, this means that the amount we rotate the base sprocket will rotate the wrist sprocket an amount that is proportional to the ratio of their radii relative to the bar.</p>",

        "<p>That's great but what about relative to the ground? We can see on the diagram that the angle of the bar is defined by \\theta_1 thus the angle of the wrist relative to the ground is \\theta_1-\theta_2.</p>",

        "<p>EX: Doing the reverse calculation.</p>",

        "<p>I want to design an arm that can:</p>",

        "<ul>",
        "<li><p>Position a game piece level to the ground when the arm is horizontal</p></li>",
        "<li><p>Position a game piece at 45 degrees above the horizontal when the arm is at max height (vertical)</p></li>",

        "<p>Alright, our first constraint can be taken care of simply by fastening the manipulator to the wrist while the arm is in that position. The second constraint gives us the angle the wrist should be to the horizontal as 45 degrees \\theta_1-\theta_2 and the angle the arm makes as 90 degrees \\theta_1.</p>",

        "<p>So:</p>",

        "\\[90 - \\theta_2=45\\]",
        "\\[\\theta_2=45\\]",

        "<p>We can plug this into our formula to get:</p>",

        "\\[r_1\\Delta\\theta_1=r_2\\Delta\\theta_2\\]",
        "\\[r_1(90)=r_2(45)\\]",
        "\\[r_1=\\frac{45}{90}r_2\\]",


        "<p>We do not have enough information to find the exact tooth counts but we do know that the base sprocket must be half the size of the wrist sprocket. The exact size can be whatever is most convenient like maybe 50 T and 100 T or 20 T and 40 T, etc.</p>",
    ],
    elevator: [
        "<h2>Intro</h2>",

        "<p>Elevators are an essential part of any FRC toolkit. They facilitate moving game pieces vertically over a large range of motion. If designed to do so, elevators can also act as climbers to help lift the robot up.</p>",

        "<h2>Concepts</h2>",

        "<ul>",
        "<li><a href='#relative-motion'>Relative Motion</a>",
        "<li><a href='#torque'>Torque</a>",
        "</ul>",

        "<h3 id='relative-motion'>Relative Motion</h3>",

        "<b>Relevance:</b> When designing an elevator, understanding how the stages move relative to each other is essential to choosing the right gearbox to power it.</p>",

        "<p>Elevators generally come in two styles of rigging: continuous and cascaded.</p>",

        "<img class='image' src='/imgs/CAD/ElevatorRiggingDiagram.jpg' alt='Elevator Rigging Diagram'>",

        "<p>Both can be powered up and down although it may useful to just let gravity or a spring return the elevator. Continuous elevators spool sting on the up run (the motion as the elevator moves up) and the down run (the motion as the elevator moves down) at the same rate. Cascades don't. The spool for an up run may need to spin at different rate compared to the down run or have a different diameter. Cascades are typically faster than a continuous but they also require more torque. Cascades are made by connecting each stage with a separate piece of string while continuous uses one long piece.</p>",

        "<h3 id='torque'>Torque</h3>",

        "<p><b>Relevance:</b> Elevators use gearboxes to move the stages. What follows is the math used to calculate the torque required to move an elevator.</p>",

        "<p><b>Continuous:</b> TBD",

        "<p><b>Cascade:</b>",

        "<img class='image' src='/imgs/CAD/CascadeElevatorDiagram.png' alt='Cascade Elevator Diagram'>",

        "<p>In the image above the numbers refer to 'objects'. Object 0 is the force generator: a weight, a gearbox, etc. Objects 1 through 3 are elevator frames and object 4 is the carriage. A three stage elevator is depicted as there are three moving stages.</p>",

        "<p>Assume that friction is negligible, that the string is generally the exact length and is taut, and that up is positive.</p>",

        "<p>First let's find F assuming static equilibrium.</p>",

        "<table>",
            "<tr>",
                "<th>Equation</th>",
                "<th>Comment</th>",
            "</tr>",
            "<tr>",
                "<td> \\(F=T_1\\) </td>",
                "<td> Net force eq. for free body 0 </td>",
            "</tr>",
            "<tr>",
                "<td> \\(F=2T_2+W_2\\) </td>",
                "<td> Substitute with free body 2 </td>",
            "</tr>",
            "<tr>",
                "<td> \\(F=2(2T_3+W_3)+W_2\\) </td>",
                "<td> Substitute with free body 3 </td>",
            "</tr>",
            "<tr>",
                "<td> \\(F=2(2W_4+W_3)+W_2\\) </td>",
                "<td> Substitute with free body 4 </td>",
            "</tr>",
            "<tr>",
                "<td> \\(F=4W_4+2W_3+W_2\\) </td>",
                "<td> Distribute </td>",
            "</tr>",
        "</table>",

        "<p>Generalizing this to n stages we get:</p>",

        "<table>",
            "<tr>",
                "<th>Equation</th>",
                "<th>Comment</th>",
            "</tr>",
            "<tr>",
                "<td> \\(F=W_2+2W_3+4W_4+...+2^{n-1}W_{n+1}\\) </td>",
                "<td> Nesting multiplicative 2s = power </td>",
            "</tr>",
        "</table>",

        "<p>Assuming the elevator is accelerating and not in dynamic equilibrium, find an equation for the acceleration of the final stage in terms of the acceleration of object 0 and other variables.</p>",

        "<table>",
            "<tr>",
                "<th>Equation</th>",
                "<th>Comment</th>",
            "</tr>",
            "<tr>",
                "<td>\\(L_j\\)</td>",
                "<td>Length of the jth object</td>",
            "</tr>",
            "<tr>",
                "<td>\\(\\Delta y_j\\)</td>",
                "<td>Change in displacement of the jth object</td>",
            "</tr>",
            "<tr>",
                "<td>\\(\\frac{\\Delta y_2}{L_1}=\\frac{\\Delta y_3}{L_2}=\\frac{\\Delta y_4}{L_3}\\)</td>",
                "<td>Cascade % of previous stage mechanic</td>",
            "</tr>",
            "<tr>",
                "<td>\\(\\frac{\\Delta y_2}{L_1}\\)</td>",
                "<td>% of stage traveled</td>",
            "</tr>",
            "<tr>",
                "<td>\\(\\Delta y_2=-\\Delta y_0\\)</td>",
                "<td>Same string/pulley mechanic</td>",
            "</tr>",
            "<tr>",
                "<td>\\(-\\frac{\\Delta y_0}{L_1}\\)</td>",
                "<td>% of stage traveled; \\(\\Delta y_0\\) is negative</td>",
            "</tr>",
            "<tr>",
                "<td>\\(h=(\\frac{\\Delta y_0}{L_1})L_1+(\\frac{\\Delta y_0}{L_1})L_2+(\\frac{\\Delta y_0}{L_1})L_3\\)</td>",
                "<td>Height from base of Object 1 to base of Object 4</td>",
            "</tr>",
            "<tr>",
                "<td>\\(h=(\\frac{\\Delta y_0}{L_1})(L_1+L_2+L_3)\\)</td>",
                "<td>Factoring</td>",
            "</tr>",
            "<tr>",
                "<td>\\(h=(\\frac{L_1+L_2+L_3}{L_1})(-\\Delta y_0)\\)</td>",
                "<td>Rearranging</td>",
            "</tr>",
            "<tr>",
                "<td>\\(h'=v_4=(\\frac{L_1+L_2+L_3}{L_1})(-v_0)\\)</td>",
                "<td>Derivative wrt. time</td>",
            "</tr>",
            "<tr>",
                "<td>\\(v'_4=a_4=(\\frac{L_1+L_2+L_3}{L_1})(-a_0)\\)</td>",
                "<td>Derivative wrt. time</td>",
            "</tr>",
        "</table>",

        "<p>Generalizing for n stages:</p>",

        "<table>",
            "<tr>",
                "<th>Equation</th>",
                "<th>Comment</th>",
            "</tr>",
            "<tr>",
                "<td>\\(a_{n+1}=(\\frac{L_1+L_2+L_3+...+L_n}{L_1})(-a_0)\\) </td>",
                "<td></td>",
            "</tr>",
        "</table>",

        "<p>If object 0 was replaced by a winch, find the Torque needed to move the elevator in terms of a_4 and other variables. Assume the winch has a constant spool radius r.</p>",

        "<table>",
            "<tr>",
                "<th>Equation</th>",
                "<th>Comment</th>",
            "</tr>",
            "<tr>",
                "<td>\\(T_3=m_4a_4+W_4=m_4a_4+m_4g\\)</td>}",
                "<td>Net force eq. for Obj. 4</td>",
            "</tr>",
            "<tr>",
                "<td>\\(T_3=m_4(a_4+g)\\)</td>",
                "<td></td>",
            "</tr>",
            "<tr>",
                "<td>\\(T_2=m_3(a_3+g)+2T_3\\)</td>",
                "<td>Similar to finding a in static equilibrium </td>",
            "</tr>",
            "<tr>",        
                "<td>\\(T_1=m_2(a_2+g)+2T_2\\)</td>",
                "<td></td>",
            "</tr>",
            "<tr>",
                "<td>\\(F=T_1\\)</td>",
                "<td></td>",
            "</tr>",
            "<tr>",
                "<td>\\(F=m_2(a_2+g)+2T_3\\)</td>",
                "<td></td>",
            "</tr>",
            "<tr>",
                "<td>\\(F=m_2(a_2+g)+2m_3(a_3+g)+4T_3\\)</td>",
                "<td></td>",
            "</tr>",
            "<tr>",
                "<td>\\(F=m_2(a_2+g)+2m_3(a_3+g)+4m_4(a_4+g)\\)</td>",
                "<td></td>",
            "</tr>",
            "<tr>",
                "<td>\\(a_4=(\\frac{L_1+L_2+L_3}{L_1})(-a_0)\\)</td>",
                "<td>Answer from previous section</td>",
            "</tr>",
            "<tr>",
                "<td>\\(a_0=\\frac{-a_4L_1}{L_1+L_2+L_3}\\)\\)</td>",
                "<td></td>",
            "</tr>",
            "<tr>",
                "<td>\\(a_2=-a_0\\)</td>",
                "<td></td>",
            "</tr>",
            "<tr>",
                "<td>\\(a_2=\\frac{a_4L_1}{L_1+L_2+L_3}\\)</td>",
                "<td>Substitution</td>",
            "</tr>",
            "<tr>",
                "<td>\\(a_3=(\\frac{L_1+L_2}{L_1})(\\frac{a_4L_1}{L_1+L_2+L_3})\\)</td>",
                "<td></td>",
            "</tr>",
            "<tr>",
                "<td>\\(a_3=(\\frac{L_1+L_2}{L_1+L_2+L_3})a_4\\)</td>",
                "<td>Simplification</td>",
            "</tr>",
            "<tr>",
                "<td>\\(\\tau=Fr=m_2r(a_4(\\frac{L_1}{L_1+L_2+L_3})+g)+2m_3r(a_4(\\frac{L_1+L_2}{L_1+L_2+L_3})+g)+4m_4r(a_4+g)\\)</td>",
                "<td></td>",
            "</tr>",
        "</table>",
            
        "<p>Generalizing for n stages:</p>",
        "\\[\\tau=m_2r(a_{n+1}(\\frac{L_1}{L_1+L_2+...+L_n})+g)+2m_3r(a_{n+1}(\\frac{L_1+L_2}{L_1+L_2+...+L_n})+g)+...+2^{n-1}m_{n+1}r(a_{n+1}(\\frac{L_1+L_2+...+L_m}{L_1+L_2+...+L_n})+g)\\]"
    ],
    projectiles: [
        "<h2>Intro</h2>",
        
        "In FRC, robots are often tasked with launching projectiles. Understanding how a projectile travels through air is key to designing mechanisms known as 'shooters'.</p>",
        
        "<h2>Concepts</h2>",
        
        "<ul>",
        "<li><a href='#vacuum'>Vacuum</a></li>",
        "<li><a href='#drag'>Drag</a></li>",
        "<li><a href='#magnus-effect'>Magnus Effect</a></li>",
        "<li><a href='#precession'>Precession</a></li>",
        "<li><a href='#nutation'>Nutation</a></li>",
        "</ul>",
        
        "<h3 id='vacuum'>Vacuum</h3>",
        
        "<p><b>Relevance:</b> Objects moving at low speeds can often be approximated by ignoring drag which may be favorable as computing drag is complex.</p>",
        
        "<p>In a vacuum, gravity is the only force acting on the projectile, although the projectile may have some initial horizontal and vertical velocities.</p>",
        
        "<img class='image' src='/imgs/CAD/ProjectileMotionDiagram.gif' alt='Projectile Motion Diagram'>",
        
        "<p>Net force equations:</p>",
        "<p>\\[F_x=0\\]</p>",
        "<p>\\[F_y=-g\\]</p>",
        
        "<p>The net force equations can be converted into equations of motion by integrating with respect to time twice to yield the parametric equations:</p>",
        
        "<p>\\[x=v_{x0}t+x_0\\]</p>",
        "<p>\\[y=-\\frac{1}{2}gt^2+v_{y0}t+y_0\\]</p>",
        
        "<p>In words, the horizontal displacement is equal to the initial horizontal velocity multiplied by time and added to the initial horizontal displacement. At the same time, the vertical displacement is equal to the negative acceleration of gravity divided by 2 multiplied by time squared and summed with the velocity term, the product of the initial vertical velocity and time, and the displacement term, the initial vertical displacement.</p>",
        
        "<p>These equations are for the forward calculation of projectile motion in a vacuum. The reverse calculation is often needed and is described below. The reverse calculation takes the ending point and calculates suggested launch velocities.</p>",
        
        "<p><b>Reverse Calculation:</b>",
        
        "<p>To calculate the reverse calculation we need to know what we know. We know the ending position and angle that we want the ball to approach the target at but we do not know the starting velocity.</p>",
        
        "<p>Since we know the ending angle, we can derive a relation by forcing our equations of motion to have a certain ending angle/slope.</p>",
        
        "<p>Assuming that the projectile launches from the origin:</p>",
        "<p>\\[x=v_{x0}t\\]</p>",
        "<p>\\[y=-\\frac{1}{2}gt^2+v_{y0}t\\]</p>",
        
        "<p>The x equation can be solved for t and substituted into the y equation to yield the equation of motion in terms of x and y.</p>",
        "<p>\\[t=\\frac{x}{v_{x0}}\\]</p>",
        "<p>\\[y=\\frac{-g}{2}(\\frac{x}{v_{x0}})^2+v_{y0}(\\frac{x}{v_{x0}})\\]</p>",
        
        "<p>In standard form:</p>",
        "<p>\\[y=\\frac{-g}{2v_{x0}^2}x^2+\\frac{v_{y0}}{v_{x0}}x\\]</p>",
        
        "<p>Taking the derivative with respect to x:</p>",
        "<p>\\[y'=\\frac{-g}{v_{x0}^2}x+\\frac{v_{y0}}{v_{x0}}\\]</p>",
        
        "<p>Let 'l' equal the distance to the target and 'h' the height of the target.</p>",
        
        "<p>From our constraint:</p>",
        "<p>\\[y'|_{x=l}=tan(\\theta_f)\\]</p>",
        
        "<p>Solving for v_{y0}:</p>",
        "<p>\\[v_{y0}=tan(\\theta_f)v_{x0}+\\frac{gl}{v_{x0}}\\]</p>",
        
        "<p>Using the ending position:</p>",
        "<p>\\[y(l)=h\\]</p>",
        "<p>\\[y(l)=\\frac{-g}{2v_{x0}^2}l^2+\\frac{v_{y0}}{v_{x0}}l=h\\]</p>",
        
        "<p>Now we can eliminate \\(v_{y0}\\):</p>",
        "<p>\\[\\frac{-gl^2}{2v_{x0}^2}+\\frac{tan(\\theta_f)v_{x0}+\\frac{gl}{v_{x0}}}{v_{x0}}l=h\\]</p>",
        
        "<p>Solving for \\(v_{x0}\\) gives:</p>",
        "<p>\\[v_{x0}=\\sqrt{\\frac{gl^2/2}{h-tan(\\theta_f)l}}\\]</p>",
        
        "<h3 id='drag'>Drag</h3>",
        
        "<p><b>Relevance:</b> Drag can have a noticeable effect on the motion of projectiles altering launching distance and time.</p>",
        
        "<p>Drag is an approximation of a very complex phenomenon. It is often simplified to two forms:</p>",
        
        "<p>Linear drag: \\(F_D=kv\\)",
        
        "<p>Quadratic drag: \\(F_D=kv^2\\)",
        
        "<p>k is basically a fudge factor that needs to be determined experimentally or found using the formula \\(\\frac{1}{2}\\rho C_DA\\).</p>",
        
        "<p>The density of air: 1.225 kg/m^3",
        
        "<p>CD:</p>",
        "<img class='image' src='/imgs/CAD/DragCoefficientTable.png' alt='Drag Coefficient Table'>",
        
        "<h3 id='magnus-effect'>Magnus Effect</h3>",
        
        "<p><b>Relevance:</b> A projectile spinning in the air can alter its trajectory.</p>",
        
        "<table>",
            "<tr>",
                "<th>Spin</th>",
                "<th>Trajectory</th>",
            "</tr>",
            "<tr>",
                "<td>Forward</td>",
                "<td>Downward</td>",
            "</tr>",
            "<tr>",
                "<td>Backward</td>",
                "<td>Upward</td>",
            "</tr>",
            "<tr>",
                "<td>CCW</td>",
                "<td>Leftward</td>",
            "</tr>",
            "<tr>",
                "<td>CW</td>",
                "<td>Rightward</td>",
            "</tr>",
        "</table>",

        "<p>Some reference images:</p>",
        
        "<img class='image' src='/imgs/CAD/MagnusEffectStationaryDiagram.png' alt='Magnus Effect Static Diagram'>",
        "<img class='image' src='/imgs/CAD/MagnusEffectAnimatedDiagram.gif' alt='Magnus Effect Animated Diagram'>",
        
        "<h3 id='precession'>Precession</h3>",
        
        "<p><b>Relevance:</b> When a torque acts perpendicular to the axis of rotation, the body will start to orbit around that axis. When this orbiting becomes too extreme, the rotating body becomes unstable which may be undesirable for projectiles.</p>",
        
        "<img class='image' src='/imgs/CAD/PrecessionDiagram.png' alt='Precession Diagram'>",
        
        "<h3 id='nutation'>Nutation</h3>",
        
        "<p><b>Relevance:</b> Nutation is another factor that plays into the motion of a projectile.</p>",
    ],
    partial_derivatives: [        
        "<h2>Intro</h2>",
        
        "<p>Partial derivatives are a simple yet powerful technique for evaluating how multivariate function change with respect to a certain variable.</p>",
        
        "<h2>Concepts</h2>",
        
        "<ul>",
        "<li><a href='#partial-derivatives'>Partial Derivatives</a></li>",
        "<li><a href='#chain-rule'>Chain Rule</a></li>",
        "</ul>",
        
        "<h3 id='partial-derivatives'>Partial Derivatives</h3>",
        
        "<p><b>Relevance:</b> This section reveals how to take simple partial derivatives and some applications in FRC.</p>",
        
        "<p>For a function, y(x), standard derivatives are notated as:</p>",
        
        "<p>\\[y'=\\frac{dy}{dx}=\\frac{d}{dx}y\\]</p>",
        
        "<p>For a function, f(x, y), partial derivatives are notated as:</p>",
        
        "<p>\\[f_x=\\frac{\\partial f}{\\partial x}=\\frac{\\partial}{\\partial x}f\\]</p>",
        
        "<p>\\(f_x\\) and variations are pronounced as \"the partial derivative of f with respect to x.\" Since f was a function of x and y, f has two first order partials: \\(f_x\\) and \\(f_y\\).</p>",
        
        "<p>Partials are computed by holding all variables constant and only treating the variable we are taking the derivative of as a variable.</p>",
        
        "<p>Let's do an example:</p>",
        
        "<p>For the function \\(f(x, y) = x^2 + y^3\\), find all first order partials.</p>",
        
        "<p>\\[f_x = 2x\\]</p>",
        
        "<p>When we take the derivative of \\(x^2 + y^3\\), y is a constant and the derivative of a constant is 0 so that term disappears.</p>",
        
        "<p>\\[f_y = 3y^2\\]</p>",
        
        "<p>An example relevant to FRC would be to find out wether changing the size of the base sprocket or the wrist sprocket of a weighted four bar would be more effective at increasing the angle the wrist makes with the arm.</p>",
        
        "<p>The formula for a weighted four bar is:</p>",
        
        "<p>\\[\\Delta \\theta_\\frac{wrist}{arm}=\\frac{r_{base}}{r_{wrist}}\\Delta \\theta_{base}\\]</p>",
        
        "<p>Rewritten in an easier to manipulate format:</p>",
        
        "<p>\\[f=\\frac{r_1}{r_2}\\theta\\]</p>",
        
        "<p>Finding the relevant partials:</p>",
        
        "<p>\\[f_{r_1}=\\frac{\\theta}{r_2}\\]</p>",
        
        "<p>\\[f_{r_2}=-\\frac{r_1\\theta}{r_2^2}\\]</p>",
        
        "<p>So what does this tell us?",
        
        "<p>\\(f_{r_1}\\) tells us that increasing the base sprocket will increase the wrist to arm angle by a factor of \\(\\frac{\\theta}{r_2}\\).</p>",
        
        "<p>\\(f_{r_2}\\) tells us that decreasing the wrist sprocket will increase the wrist to arm angle by a factor of \\(\\frac{r_1\\theta}{r_2^2}\\).</p>",
        
        "<p>Changing the base sprocket will increase the wrist to arm angle more than decreasing the wrist sprocket if \\(f_{r_1} > -f_{r_2}\\).</p>",
        
        "<p>\\[\\frac{\\theta}{r_2} > \\frac{r_1\\theta}{r_2^2}\\]</p>",
        
        "<p>\\[r_2>r_1\\]</p>",
        
        "<p>Finally, we can conclude that increasing the base sprocket will increase the wrist to arm angle faster if the wrist sprocket is larger than the base sprocket. Otherwise, when the wrist sprocket is smaller than the base sprocket, decreasing the wrist sprocket will increase the wrist to arm angle faster.</p>",
        
        "<h3 id='chain-rule'>Chain Rule</h3>",
        
        "<p><b>Relevance:</b> The multivariate chain rule allows one to find the rate of change of nested functions much like the univariate chain rule.</p>",
        
        "<p>So, a function z that is a function of x and y which are both functions of s and t: \\(z=f(x(s, t), y(s, t))\\).</p>",
        
        "<p>An example:</p>",
        
        "<p>\\[z=x^2+y^2\\]</p>",
        
        "<p>\\[x=s^2\\]</p>",
        
        "<p>\\[y=2st\\]</p>",
        
        "<p>Finding the partials:</p>",
        
        "<p>Finding \\(z_s\\) :</p>",
        
        "<p>\\[z_s=\\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial s} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial s}\\]</p>",
        
        "<p>\\[z_s=(2x)(2s)+(2y)(2t)\\]</p>",
        
        "<p>\\[z_s=4xs+4yt\\]</p>",
        
        "<p>Finding \\(z_t\\):</p>",
        
        "<p>\\[z_t=\\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial t} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial t}\\]</p>",
        
        "<p>\\[z_t=(2x)(0)+(2y)(2s)\\]</p>",
        
        "<p>\\[z_t=4ys\\]</p>",
        
        "<p>Continuing off of our previous FRC example, we have our weighted four bar but let's say we want to determine if changing the size of the wrist or base sprocket will increase the wrist to ground angle.</p>",
        
        "<p>The formula for a weighted four bar is:</p>",
        
        "<p>\\[\\Delta \\theta_\\frac{wrist}{arm}=\\frac{r_{base}}{r_{wrist}}\\Delta \\theta_{base}\\]</p>",
        
        "<p>\\[\\Delta \\theta_\\frac{wrist}{ground}=\\Delta \\theta_{base}-\\Delta \\theta_\\frac{wrist}{arm}\\]</p>",
        
        "<p>Rewritten in an easier to manipulate format:</p>",
        
        "<p>\\[\\theta_2=\\frac{r_1}{r_2}\\theta_1\\]</p>",
        
        "<p>\\[\\theta_3=\\theta_1-\\theta_2\\]</p>",
        
        "<p>Finding the relevant partials:</p>",
        
        "<p>\\[\\theta_{3_{r_1}}=\\frac{\\partial \\theta_3}{\\partial \\theta_2}\\frac{\\partial \\theta_2}{\\partial r_1}\\]</p>",
        
        "<p>\\[\\theta_{3_{r_2}}=\\frac{\\partial \\theta_3}{\\partial \\theta_2}\\frac{\\partial \\theta_2}{\\partial r_2}\\]</p>",
        
        "<p>\\[\\frac{\\partial \\theta_3}{\\partial \\theta_2}=-1\\]</p>",
        
        "<p>The other partials that are needed to find \\(\\theta_{3_{r_1}}\\) and \\(\\theta_{3_{r_2}}\\) were found in the previous section with different variable names. It is reproduced below with the corresponding variables names.</p>",
        
        "<p>\\[\\frac{\\partial \\theta_2}{\\partial r_1}=\\frac{\\theta_1}{r_2}\\]</p>",
        
        "<p>\\[\\frac{\\partial \\theta_2}{\\partial r_2}=-\\frac{r_1\\theta_1}{r_2^2}\\]</p>",
        
        "<p>Thus,",
        
        "<p>\\[\\theta_{3_{r_1}}=-\\frac{\\theta_1}{r_2}\\]</p>",
        
        "<p>\\[\\theta_{3_{r_2}}=\\frac{r_1\\theta_1}{r_2^2}\\]</p>",
        
        "<p>Following very similar steps to the previous section's FRC example:</p>",
        
        "<p>\\[-\\frac{\\theta_1}{r_2}>-\\frac{r_1\\theta_1}{r_2^2}\\]</p>",
        
        "<p>\\[r_2 < r_1\\]</p>",
        
        "<p>We can conclude that increasing the base sprocket will increase the wrist to ground angle faster if the wrist sprocket is smaller than the base sprocket. Otherwise, when the wrist sprocket is larger than the base sprocket, decreasing the wrist sprocket will increase the wrist to ground angle faster.</p>",
    ]    
};