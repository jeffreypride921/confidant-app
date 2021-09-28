import React from "react";
import { motion } from 'framer-motion';
import "./Confidants.css";

class Tower extends React.Component{
    render(){
        return(
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className="ConfidantItems">
                <h1 className="conf-header">Tower</h1>
                <motion.div initial={{scaleY: 0, originY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 1}}>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 1</h2>
                <table>
                    <tr>
                        <th>Followup</th>
                        <td>Sure. (♪)</td>
                        <td>Do we have to? (♪)</td>
                        <td style={{border: "2px solid red"}}>Call me when it’s game time. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 2</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Sorry... (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Don’t compare me to you. (♪♪♪)</td>
                        <td>Praise would be encouraging.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Let’s go.</td>
                        <td style={{border: "2px solid red"}}>What a rude employee. (♪♪)</td>
                        <td>Something bothering you?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Are they strong?</td>
                        <td style={{border: "2px solid red"}}>Do you admire them? (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td style={{border: "2px solid red"}}>So do I. (♪♪♪)</td>
                        <td>They’re more than strong.</td>
                        <td style={{border: "2px solid red"}}>I’ll let them know. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>I’ll work hard. (♪♪)</td>
                        <td>If I feel like it.</td>
                        <td style={{border: "2px solid red"}}>So then I can beat you? (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 3</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Did something happen?</td>
                        <td>Let’s go eat.</td>
                        <td>Are you fasting?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>OK.</td>
                        <td>I’m not down with that.</td>
                        <td>Let me think about it.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Are they bullying you?</td>
                        <td>Sounds like fun?</td>
                        <td>You shouldn’t waste food.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td style={{border: "2px solid red"}}>That’s the spirit. (♪♪)</td>
                        <td>Want to learn martial arts?</td>
                        <td>You really love your mom.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Sure. (♪♪)</td>
                        <td>If our schedules line up.</td>
                        <td>Any food requests?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 4</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Calm down.</td>
                        <td>You’re being a sore loser.</td>
                        <td style={{border: "2px solid red"}}>Yeah, you tell him! (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Don’t get so worked up.</td>
                        <td style={{border: "2px solid red"}}>Get your revenge. (♪♪)</td>
                        <td>Pros are amazing, huh?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 5</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>It was pretty weird. (♪♪♪)</td>
                        <td>It happens.</td>
                        <td style={{border: "2px solid red"}}>He must’ve rigged it. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>You think you have a chance?</td>
                        <td style={{border: "2px solid red"}}>I’m sure you can do it. (♪♪)</td>
                        <td>Don’t get so worked up.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Are you going to give up? (♪♪)</td>
                        <td style={{border: "2px solid red"}}>You need a new strategy. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>I’ll be cheering you on. (♪♪)</td>
                        <td>You’re a sharp kid.</td>
                        <td style={{border: "2px solid red"}}>Think you can take him? (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 6</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>I can pay for myself.</td>
                        <td>If you insist.</td>
                        <td>Do you have enough?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>You should return the money.</td>
                        <td>You’re acting like one.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>That’s good. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>I believe in you. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>A little bit.</td>
                        <td style={{border: "2px solid red"}}>Not at all. (♪♪♪)</td>
                        <td>I’m worried about you.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Of course I won’t. (♪♪)</td>
                        <td>That’s up to you.</td>
                        <td>I’m your big brother, right?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 7</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>I haven’t done anything.</td>
                        <td>Calm down.</td>
                        <td>Bad influence?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Take it easy on him.</td>
                        <td>Think about his feelings.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Bring it on, lady.</td>
                        <td>I haven’t done anything.</td>
                        <td>That wouldn’t be good.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>What’s your mom’s name?</td>
                        <td>Tell me about your mom.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 8</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>She’s out to control.</td>
                        <td style={{border: "2px solid red"}}>No, she’s not. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Is that what you think? (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>It’ll all work out. (♪♪)</td>
                        <td>I can’t guarantee it.</td>
                        <td style={{border: "2px solid red"}}>Believe in them. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Is that too much for you?</td>
                        <td>Way to step up.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>Let’s save her. (♪♪♪)</td>
                        <td>That’s admirable. (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 9</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>I’m glad to hear that. (♪♪♪)</td>
                        <td>That’s hard to believe.</td>
                        <td>Thank the Phantom Thieves. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>A little bit, yea. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>No, that makes sense. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>It means you’ve matured. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td style={{border: "2px solid red"}}>He wants to win at all costs. (♪♪)</td>
                        <td>He’s too lazy to practice.</td>
                        <td>I wouldn’t know...</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>Your wish came true. (♪♪)</td>
                        <td>You really think It was them? (♪♪)</td>
                        <td>You did a great job too. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank MAX</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Thanks to my hard work. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Thanks to my teacher. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>You got your revenge.</td>
                        <td style={{border: "2px solid red"}}>You made things right. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>You made new friends. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>I’ll let you in.</td>
                        <td>Ask them yourself.</td>
                    </tr>
                </table>
                </div>
                </motion.div>
            </div>
            </motion.div>
        )
    }
}

export default Tower