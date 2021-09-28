import React from "react";
import { motion } from 'framer-motion';
import "./Confidants.css";

class Temperance extends React.Component{
    render(){
        return(
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className="ConfidantItems">
                <h1 className="conf-header">Temperance</h1>
                <motion.div initial={{scaleY: 0, originY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 1}}>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 1</h2>
                <table>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Yeah, I get it. (♪♪♪)</td>
                        <td>I will if you will. (♪♪)</td>
                        <td>Please stop talking like that. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 2</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>It does. (♪♪)</td>
                        <td>I feel nothing.</td>
                        <td>I’ll tell your boss.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>I can’t say I wasn’t...</td>
                        <td style={{border: "2px solid red"}}>Absolutely not! (♪♪)</td>
                        <td>What kind of weird things?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>You need money?</td>
                        <td>What’s it for?</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>Are you scolding me?</td>
                        <td>This is all for you.</td>
                        <td>I requested you.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>You have the wrong number.</td>
                        <td>Uh, what the hell?</td>
                        <td style={{border: "2px solid red"}}>Is this the hard sell? (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 3</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>Yeah, they do. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Do some real cooking. (♪♪)</td>
                        <td>Can I have a different maid.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>I was curious.</td>
                        <td>So I could slack off in class.</td>
                        <td>I wanted to see you.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Your sister’s bills, right?</td>
                        <td style={{border: "2px solid red"}}>I’ll request you more often. (♪♪♪)</td>
                        <td>You’re really blunt.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>You have it rough.</td>
                        <td>Are they expensive?</td>
                        <td>Don’t overdo it.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Thanks. (♪♪)</td>
                        <td>I’ll work hard at it.</td>
                        <td>You’re not in character.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 4</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>That would be great.</td>
                        <td>What are you scheming?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>How rude. (♪♪)</td>
                        <td>No surprise there.</td>
                        <td>How old ARE you?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Yes, you do. (♪♪)</td>
                        <td>You’re pushing it.</td>
                        <td style={{border: "2px solid red"}}>You need to love yourself. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>I already knew that.</td>
                        <td>Why did you lie to me?</td>
                        <td>You’re a bad teacher.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 5</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>It's fun. (♪♪)</td>
                        <td>I want to know more.</td>
                        <td style={{border: "2px solid red"}}>Who’s the Master here? (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>How Terrible... (♪♪)</td>
                        <td>It was inevitable.</td>
                        <td style={{border: "2px solid red"}}>So, did you stop? (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>It’s not your fault.</td>
                        <td>It was bad luck.</td>
                        <td>It’s no one’s fault.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>You OK with that?</td>
                        <td>Guardians, huh...</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>It’s too late now.</td>
                        <td>What about our deal?</td>
                        <td>I want see you again.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>Curry is all I eat.</td>
                        <td>You get bored of the taste.</td>
                        <td style={{border: "2px solid red"}}>You want some? (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 6</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>You just got here.</td>
                        <td style={{border: "2px solid red"}}>Want to rest a bit? (♪♪)</td>
                        <td>Give me back my money.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>Are you all right? (♪♪♪)</td>
                        <td>Have you see a doctor? (♪♪)</td>
                        <td style={{border: "2px solid red"}}>You should go home. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Are you OK?</td>
                        <td>Don’t overdo it.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>I’ll be fine.</td>
                        <td>Nah, too lazy.</td>
                        <td style={{border: "2px solid red"}}>How are you feeling, though? (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 7</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Don’t strain yourself. (♪♪)</td>
                        <td>Don’t lie.</td>
                        <td style={{border: "2px solid red"}}>Don’t pay them. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Sister company?</td>
                        <td>Can you make a lot there?</td>
                        <td style={{border: "2px solid red"}}>Think this through more. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>That’s the wrong choice.</td>
                        <td>Isn’t there another way?</td>
                        <td>Just rest for now.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 8</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>That’s the wrong decision.</td>
                        <td>Please reconsider.</td>
                        <td style={{border: "2px solid red"}}>Is this really what you want? (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>You’re running away. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>If that’s what you decided. (♪♪♪)</td>
                        <td>I need my teacher.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Try to remember.</td>
                        <td>That’s your answer.</td>
                        <td>Take a look at yourself.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>Are you going to give up?</td>
                        <td>Mistakes can be fixed.</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>Be confident in your answer. (♪♪♪)</td>
                        <td>That’s the right choice. (♪♪♪)</td>
                        <td>ou’re asking a student? (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td>I want to protect you. (♪♪♪)</td>
                        <td>That’s reassuring. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>You’re welcome. (♪♪)</td>
                        <td>So much for being a maid. (♪♪)</td>
                        <td>I’ll do anything for you. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 8.5</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>We’re talking here.</td>
                        <td>You know it, lady.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>You can’t give up.</td>
                        <td>But you were so determined.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>What are their names again?</td>
                        <td>I need their names.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 9</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>Nonsense. (♪♪♪)</td>
                        <td>You may be right.</td>
                        <td>Aren’t you old already...?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>What a bummer. (♪♪♪)</td>
                        <td>Thank you for your service. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Not really. (♪♪)</td>
                        <td>I want to keep seeing you. (♪♪) (Romance)</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>Got it. (♪♪)</td>
                        <td>I mean what I say. (Romance)</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>I’m a master; you’re a maid.</td>
                        <td>I’m a man; you’re a woman. (Romance)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank MAX</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>...Really?</td>
                        <td>I see.</td>
                        <td>That’s too bad...</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>It doesn’t matter.</td>
                        <td>That’s the best part.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>We won’t get caught.</td>
                        <td>Don’t worry about it.</td>
                        <td>You’re so responsible.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>What are you talking about?</td>
                        <td>When did you realize?</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>You got me.</td>
                        <td>You have no proof.</td>
                        <td>...So what if I am?</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td>That sounds promising. (♪♪♪)</td>
                        <td>I’ll make sure of it. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 7</th>
                        <td>I want to rely on you. (♪♪♪)</td>
                        <td>I want you to rely on me. (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                </motion.div>
            </div>
            </motion.div>
        )
    }
}

export default Temperance