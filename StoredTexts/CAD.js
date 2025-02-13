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
        "<img src='/static/imgs/CAD/ThreadDiagram.gif' alt='Thread Diagram'>",
        
        "<p>Finding the diameter of a gear from dp:</p>",
        "<p>dp = teeth / diameter</p>",
        "<p>dp = T / D</p>",
        "<p>dpD = T</p>",
        "<p>D = T / dp</p>",
        "<p>The recommended distance (rd) between gears is the center distance (cd) plus 0.008 inches.</p>",
        "<p>cd = (T1 + T2) / (2dp)</p>",
        "<p>rd = (T1 + T2) / (2dp) + 0.008</p>",

        "<h3 id='reductions'>Reductions</h3>",
        "<p><b>Relevance:</b> Gears can alter the speed, direction, and torque of an input. Understanding reductions provides insight on how well a system can perform a task.</p>",
        "<h5>Rotational Velocity</h5>",
        "<p>Gears are typically arranged in two ways: side by side, or stacked.</p>",
        "<img src='/static/imgs/CAD/GearArrangementDiagram.gif' alt='Gear Arrangement Diagram'>",

        "<p>When gears are stacked, they have the same rotational velocity ω. When gears are side by side, they have the same tangential speed |v|.</p>",
        "<p>A reduction occurs when a small gear 'drives' a bigger gear aka. a small gear is next to a bigger gear.</p>",
        "<p>An upduction is the opposite of a reduction, a larger gear driving a smaller gear. This is inefficient and is typically something we want to avoid.</p>",

        "<p>Deriving the relation between side-by-side gears:</p>",
        "<p>Assume: T1 is the smaller gear</p>",
        "<p>r = radius</p>",
        "<p>v = rω</p>",
        "<p>r = T / 2dp</p>",
        "<p>since: v1 = -v2</p>",
        "<p>r1ω1 = -r2ω2</p>",
        "<p>T1 / 2dp ω1 = -T2 / 2dp ω2</p>",
        "<p>T1ω1 = -T2ω2</p>",
        "<p>ω1 = -T2 / T1 ω2</p>",

        "<h3 id='torque'>Torque</h3>",
        "<p>The benefit of using gears to reduce the speed of a motor rather than using less electrical power is that a gearbox will increase the torque of the output in exchange for the lower speed.</p>",

        "<p>EX: Deriving the relationship between gears and Torque:</p>",
        "<p>Let: τ0 = motor torque</p>",
        "<p>Vector notation will be omitted to improve readability</p>",
        "<p>The following example continues off the previous one</p>",
        "<p>τ = r × F</p>",
        "<p>τ0 = τ1</p>",
        "<p>Since adjacent gears are touching at a point: F1 = F2 = F12</p>",
        "<img src='/static/imgs/CAD/GearTorqueDiagram.png' alt='Gear Torque Diagram'>",
        "<p>F12 = τ1 / r1</p>",
        "<p>τ2 = -F12r2</p>",
        "<p>τ2 = -r2 / r1 τ1</p>",

        "<h3 id='inertia'>Inertia</h3>",
        "<p><b>Relevance:</b> When a gear spins, it will have a tendency to stay in its current state. This continued spinning, or lack thereof, affects the motion of a gear.</p>",

        "<h4>Moment of Inertia</h4>",
        "<p>The moment of inertia is defined as:</p>",
        "<p>I = ∫ r^2 dm</p>",
        "<p>The closer mass is located to the axis of rotation, the lower the moment of inertia, and the easier it is for the object to spin.</p>",
        "<p>The following formula assumes that the gear has constant density and can be approximated as a cylinder.</p>",
        "<p>Igear = 1/2 mr^2</p>",

        "<p>Most Vex gears are half an inch wide and are made of 7075-T6 Aluminum. We can use this to find the mass of the gear in terms of the tooth count of the gear. Using the formula above in the 'positioning' section, we can also find the radius of the gear in terms of tooth count.</p>",

        "<h4>Inertia in Reductions</h4>",
        "<p>From before we have:</p>",
        "<p>ω1 = -T2 / T1 ω2</p>",
        "<p>τ2 = -r2 / r1 τ1</p>",
        "<p>Derivative with respect to time:</p>",
        "<p>α1 = -T2 / T1 α2</p>",
        "<p>By definition:</p>",
        "<p>τ = Iα</p>",
        "<p>r = T / 2dp</p>",
        "<p>Substituting:</p>",
        "<p>τ1 = I1α1</p>",
        "<p>τ2 = I2α2</p>",
        "<p>I2α2 = -r2 / r1 I1α1</p>",
        "<p>I2α2 = -T2 / T1 I1α1</p>",
        "<p>I2α2 = -T2 / T1 I1 (-T2 / T1 α2)</p>",
        "<p>I2α2 = (T2 / T1)^2 I1 α2</p>",
        "<p>I2 = (T2 / T1)^2 I1</p>",
        "<p>I1 = (T1 / T2)^2 I2</p>",

        "<p>Since the apparent moment of inertia is directly proportional to the square of the reduction, this derivation shows us that gear reductions allow inputs to drive systems with much larger moments as if they were small moments. In other words, reductions can help move a large flywheel with ease.</p>"
    ],
    ropes: [
        "<h3>Concepts</h3>",

        "<ul>",
        "<li>[Tension](#tension)</li>",
        "<li>[Capstan Equation](#capstan-equation)</li>",
        "<li>[Fleet Angle](#fleet-angle)</li>",
        "</ul>",
        "<h3>Tension</h3>",

        "<h4>Relevance:</h4>", 
        
        "<p>In FRC, ropes are commonly used to lift an elevator, help a robot climb, or carry an alliance robot.</p>",

        "<p>Tension is a force associated with stretching things. To determine if a rope is strong enough to lift something, the tensile strength of the rope will need to be examined.</p>",

        "<p>At Torque, we often use Dyneema rope which is comparable to Spectra cord both of which are stronger than steel.</p>",
        
        "<h5>7x7 Strand Stainless Steel Cable Tensile Strength</h5>",

        "<p>| Diameter (in) | Tensile Strength (lbf) |</p>",
        "<p>| ------------- | ---------------------- |</p>",
        "<p>| 3/64          | 270                    |</p>",
        "<p>| 1/16          | 480                    |</p>",
        "<p>| 3/32          | 920                    |</p>",
        "<p>| 1/8           | 1700                   |</p>",
        "<p>| 5/32          | 2400                   |</p>",
        "<p>| 3/16          | 3700                   |</p>",
        "<p>| 1/4           | 6100                   |</p>",

        "<h5>12 Strand Spectra Tensile Strength</h5>",

        "<p>| Diameter (in) | Tensile Strength (lbf) |",
        "<p>| ------------- | ---------------------- |</p>",
        "<p>| 1/8           | 1800                   |</p>",
        "<p>| 3/16          | 3600                   |</p>",
        "<p>| 1/4           | 6000                   |</p>",
        
        "<p>$\text{Tensile Strength}=F_{tu}$</p>",
        
        "<p>**EX:** What is the maximum mass that can be hung off of a 1/16 in diameter 7x7 steel cable?</p>",
        "<p>$$F_{tu}=F_g$$</p>",
        "<p>$$480\text{ lbf}=mg$$</p>",
        "<p>$$m=480\text{ lb}$$</p",
        
        "<p>Note: lbf is a measure of force while lb is a measure of mass.</p>",
        "<p>Despite the fiber's impressive tensile strength, it is susceptible to stretching and thus methods to tension the string over repeated use should be considered.</p>",

        "<h4>Capstan Equation</h4>",

        "<p>**Relevance:** The Euler-Eytelwein Equation aka. the Capstan Equation relates the tension of two sides of a rope wrapped around a tube. This had potential uses in Steamworks when robots needed to climb a rope and has uses on elevators and winches.</p>",

        "<p>Its derivation is quite elegant and can be found here: <https://www.youtube.com/watch?v=hsbNusf2N8Y></p>",

        "<p>The formula is:</p>",
        "<p>$$T_{load}=T_{in}e^{\mu \theta}$$</p>",

        "<p>where *T* is tension, $\mu$ is the coefficient of friction, and $\theta$ is how much the rope is wrapped around the pipe in radians.</p>",
        "<p>The number of wraps **exponentially** increases the amount of load an input force can hold.</p>",
        
        "<h4>Fleet Angle</h4>",

        "<p>**Relevance:** The angle at which a rope is spooled can affect the evenness of the wrapping. Uneven wrapping is more likely to tangle and is unpredictable.</p>",

        "<p>To understand how a rope will wrap around a pipe, this section will take a kinematic approach rather than a dynamic one as the differential equations become unwieldy.</p>",

        "<p>Let's start off with the parametric equation of a circle as we know that the pipe has a circular shape of radius _r_.</p>",

        "<p>Let's start off with the parametric equation of a circle as we know that the pipe has a circular shape of radius *r*.</p>",
        
        "<p>$$x=rcos(t),\;\;y=rsin(t)$$</p>",

        "<p>As a vector, this is:</p>",
        "<p>$$[rcos(t),\;rsin(t)]$$</p>",

        "<p>To bring our rope into 3D space, we need to define the z component which for now we can define as some function *z(t)*. Let's call our postion function *R(t)*.</p>",

        "<p>$$R(t)=[rcos(t),\;rsin(t),\;z(t)]$$</p>",

        "<p>\*_Let: z(t)=t_</p>",

        "<p>From geometry, we know that there are 360 degrees or 2$\pi$ radians in a circle. Thus, on the interval $t=[0, 2\pi)$ *R(t)* makes one full circle. If $z(t)=t,$ then the rope will travel $2\pi$ units per wrap which is known as pitch *p*.</p>",

        "<p>$$p=2\pi\frac{z(t)}{t}$$</p>",

        "<p>![Helix Diagram](/static/imgs/CAD/HelixDiagram.jpg)</p>",

        "<p>So far, we have a helix but we still need to find a relation between _R(t)_ and the fleet angle.</p>",

        "<p>![Fleet Angle Diagram](/static/imgs/CAD/FleetAngleDiagram.png)</p>",

        "<p>Using trigonometry, we can write:</p>",
        "<p>$$\tan\theta=\frac{pitch}{2*diameter}$$</p>",

        "<p>Note: the '2' is because the rope spans one diameter on the front side plus an additional diameter on the backside.</p>",

        "<p>Solving for *pitch*:</p>",

        "<p>$$p=\tan(\theta)(2*diameter)$$</p>",
        "<p>$$p=4r\tan(\theta)$$</p>",

        "<p>From before:</p>",
        "<p>$$p=2\pi\frac{z(t)}{t}$$</p>",
        "<p>$$z(t)=\frac{p}{2\pi}t$$</p>",
        "<p>$$z(t)=\frac{4r\tan(\theta)}{2\pi}t$$</p>>",
        "<p>$$z(t)=\frac{2r\tan(\theta)}{\pi}t$$</p>",
        "<p>$$R(t)=[rcos(t),\;rsin(t),\;z(t)]$$</p>",
        "<p>$$R(t)=[rcos(t),\;rsin(t),\;\frac{2r\tan(\theta)}{\pi}t]$$</p>",
        
        "<p>Note: $\theta$ can be a function of t.</p>",
    ],
};