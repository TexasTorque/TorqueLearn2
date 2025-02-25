const controlLoops = {
    bang_bang: [
        "<p>Too lazy to make a PID? Bang-bang is perfect for you.",

        "<p>Basically, the idea is to keep doing something until you're there, stop when you're there, and then repeat.</p>",

        "<p>Imagine you have a variable `pos` that is the current position of something.</p>",

        "<pre>",
        "<p>public void bang_bang(pos: int) {</p>",
        "<p>    if pos != 100 {</p>",
        "<p>        // Move to position</p>",
        "<p>    } else {</p>",
        "<p>        // stop</p>",
        "<p>    }</p>",
        "<p>}</p>",
        "</pre>",
    ],
    feed_forward: [
        "<h3>Feed Forward versus Feedback</h3>",

        "<p>In, we learned about a <i>feedback</i> controller. Feedback in this case refers to how the control system responds to error. This works most of the time, however, this is <i>reactive</i>, not <i>proactive</i>. For a PID to work, your system must have error to begin with; which isn't ideal.</p>",

        "<p>In contrast, a <i>feed forward</i> controller uses model information to instantly set the approximate desired state. This reduces error time, and it can help minimize oscillations by reducing the PID's importance in the system.</p>",

        "<h3>Why is in a Feed Forward Controller?</h3>",

        "<p>A normal feed forward controller takes in two to three values for the model: \\(k_s\\) for static application, \\(k_v\\) for velocity application, and (optionally for the most part) \\(k_a\\) for acceleration application.</p>",

        "<h4>What is a \\(k_s\\) term needed?</h4>",

        "<p>It is important for those implementing control systems to have a healthy understanding of physics. As such, this will not go in depth for the reason.</p>",

        "<p>In a nutshell, however, two connecting objects that contain a normal force exert a frictional force. There are two types of frictional forces, static and kinetic. Each type has its own coefficient of friction, μ. Static friction exists until a slipping point is reached, at which point kinetic friction takes over. This is due to intermolecular forces soft-binding objects at the subatomic level.</p>",

        "<p>For many applications of PID, you may have witnessed the error term existing but nothing happening. This is due to static friction: despite putting in energy, the static friction is preventing movement. The \\(k_s\\) term overcomes this by always keeping the model near or at the slipping point to provide fast changes in velocity.</p>",

        "<h3>Calculating feed forward values</h3>",

        "<p>Feed forward values should <b>not</b> be calculated emperically. Proper characterization is needed. Additionally, dimensional analysis must be used to insure proper unit conversion, as output values are unit dependent.</p>",
    ],
    pid: [
        "<p>PID <i>(Proportional-Integral-Derivative)</i> is a continuous feedback loop that attempts to reach a certain real-life encoder value.</p>",
        
        "<h3>Vocabulary</h3>",
        
        "<ul>",
        "<li><b>Error (e)</b> - The error of a system is the amount that the system is off of the requested value. For example, if we wish to be at 500m but are at 100m, then we have an error of 400m.</li>",
        "<li><b>Encoder value</b> - An encoder value is a measurement recorded using a real-life recording device. For example, an encoder on a wheel can record how many times it has revolved.</li>",
        "<li><b>Zero</b> - A zero error / zeroed value means that the system is exactly where we requested. While possible in theory, you will almost never hit this in the real world.</li>",
        "</ul>",

        "<h3>Proportional</h3>",
        
        "<p>The Proportional part of the PID controller influences the output of the controller by a proportion of the error.</p>",
        
        "<p>\\[p = k_p*e\\]<p>",
        
        "<p>For example, let's say we have an error value of 10. If we have a proportional value of 5 (often stylized `Kp`), then it will output 50 (10\*5). Note that this often causes a system to <i>overshoot</i> by far exceeding the requested point, and then conversely <i>undershoot</i> on the way back down.</p>",
        
        "<h3>Integral</h3>",
        
        "<p>The Integral part of the PID controller increases the force applied as time passes without reaching zero error. It behaves like an integral in calculus.</p>",
        
        "<p>\\[i = \\int_{0}^{t} e*k_idt\\]</p>",
        
        "<h3>Derivative</h3>",
        
        "<p>The Derivative part of the PID controller is linked to the rate of change of the error. It behaves like the derivative of a continuous function in calculus.</p>",
        
        "<p>\\[d = \\frac{de}{dt}*k_d\\]</p>",
        
        "<h3>Output</h3>",
        
        "<p>The output of a PID is the summation of the p, i, and d terms.</p>",
        
        "<p>\\[output = p + i + d\\]</p>",
    ]
}