import React from "react";
import Typewriter from "typewriter-effect";

export default function TypingEffect() {
    return (
        <div>
            <Typewriter
                options={{
                    strings: ["Hello World!"],
                    autoStart: true,
                    pauseFor: 4500,
                    loop: true,
                }}
            />
        </div>
    );
}
