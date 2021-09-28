import React from "react";
import { motion } from 'framer-motion';
import "./Confidants.css";

class Lovers extends React.Component{
    render(){
        return(
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className="ConfidantsItems">
                <h1 className="conf-header">Lovers</h1>
                <motion.div initial={{scaleY: 0, originY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 1}}>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 2</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>Are you feeling better now? (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>She’s so strong. (♪♪♪)</td>
                        <td>So are you friends again? (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>You can’t blame yourself. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>You might be right. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>It was no big deal. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>I couldn’t just ignore you. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>I’ll help. (♪♪♪)</td>
                        <td>Let’s find it together. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>Of course, You’re my teammate. (♪♪)</td>
                        <td>Leave it to me. (♪♪)</td>
                        <td>The no-refills thing again? (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 3</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>How’s that?</td>
                        <td>You’re amazing.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>What kind of stuff...?</td>
                        <td>That’s your training...?</td>
                        <td>I don’t get it.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>You’re stupid.</td>
                        <td>You’re an airhead.</td>
                        <td>You’re... unique.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>You’re a hard worker.</td>
                        <td>That response was annoying.</td>
                        <td>Can we stop yet?</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>I like you. (♪♪)</td>
                        <td>I love you. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Can we stop yet? (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td>Listen to me.</td>
                        <td>This won’t help your heart.</td>
                        <td>You’re a genius...</td>
                    </tr>
                    <tr>
                        <th>Response 7</th>
                        <td>You’re right.</td>
                        <td>You finally get it.</td>
                    </tr>
                    <tr>
                        <th>Response 8</th>
                        <td>That’s odd. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Has that happened to you? (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 9</th>
                        <td>Are you lonely?</td>
                        <td style={{border: "2px solid red"}}>That freedom sounds nice. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Could be. (♪♪)</td>
                        <td>You’re so self-conscious.</td>
                        <td>Was she a child model?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 4</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>I know what you mean. (♪♪♪)</td>
                        <td>I’m not sure I follow.</td>
                        <td>That comes down to you. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>That was mean of her. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>That’s hilarious. (♪♪♪)</td>
                        <td>Was she right?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td style={{border: "2px solid red"}}>Tell me. (♪♪♪)</td>
                        <td>I’m afraid to know. (♪♪)</td>
                        <td>... Who?</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td style={{border: "2px solid red"}}>Good idea. (♪♪♪)</td>
                        <td>How exactly? (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>That’s not going to work.</td>
                        <td>You haven’t learned anything.</td>
                        <td style={{border: "2px solid red"}}>Good luck with that. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>I train everyday. (♪♪)</td>
                        <td>Not really.</td>
                        <td style={{border: "2px solid red"}}>I carry Morgana in my bag. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 5</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Maybe.</td>
                        <td style={{border: "2px solid red"}}>Give it up. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>You’re outmatched.</td>
                        <td style={{border: "2px solid red"}}>She’s amazing, huh... (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td style={{border: "2px solid red"}}>It had grace. (♪♪)</td>
                        <td>She’d be a great Phantom Thief.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>So how do you do it?</td>
                        <td>Tell me more.</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>I figured that much.</td>
                        <td>I mean, that’s why it’s “fake.”</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 6</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>It seems that way. (♪♪♪)</td>
                        <td>That’s such a simple solution.</td>
                        <td>If it’s a friend, yeah. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>How so?</td>
                        <td>Was she working hard?</td>
                        <td>Was she in pain?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>You’re not weak.</td>
                        <td>It’s because you’re kind.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td style={{border: "2px solid red"}}>Comfort her. (♪♪♪)</td>
                        <td>Listen to what she has to say. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Show her your own strength. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Someone’s motivated. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>I’ll cheer you on. (♪♪)</td>
                        <td>You gonna be okay?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 7</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>It’s a trap!</td>
                        <td style={{border: "2px solid red"}}>She admires you. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>So she could show you up.</td>
                        <td>Because you’re a natural beauty.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Cheer up.</td>
                        <td>Please don’t cry.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>You already are one.</td>
                        <td style={{border: "2px solid red"}}>Go get ‘em, tiger. (♪♪)</td>
                        <td>What about your action movies...?</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>You got this. (♪♪)</td>
                        <td>Don’t strain yourself.</td>
                        <td>Trying to be like Mika?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 8</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>That’s a lot of work...</td>
                        <td style={{border: "2px solid red"}}>You have some real guts. (♪♪♪)</td>
                        <td>You’re beautiful as is. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>There’s no doubt in my mind. (♪♪♪)</td>
                        <td>I hope so. (♪♪♪)</td>
                        <td>Good luck finding it. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Good advice.</td>
                        <td>You’re so dumb, Ryuji...</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>She’ll be happy to hear that. (♪♪♪)</td>
                        <td>I’m sure she already knows. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>That’s probably it. (♪♪)</td>
                        <td>I wonder.</td>
                        <td style={{border: "2px solid red"}}>You can ask her yourself. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 9</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>It’s dangerous up here.</td>
                        <td>Step away from the ledge.</td>
                        <td>Why did you want to come here?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>And?</td>
                        <td>She’s gone, isn’t she?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Hang in there. (♪♪♪)</td>
                        <td>I believe in you, Ann. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>You have me. (Romance)</td>
                        <td>You have the others.</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>You said “I love you.”</td>
                        <td>I didn’t hear you.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Of course. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>I’m yours forever. (♪♪)</td>
                        <td>That’s up to you.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank MAX</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>You really gave it your all. (♪♪♪)</td>
                        <td>You still have a ways to go. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Everyone was complimenting you. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>That’s so embarrassing. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>I’ll be there with you. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>You can do it, Ann. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>What’s wrong?</td>
                        <td>It’s just the two of us.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>Of course. (♪♪♪)</td>
                        <td>Anything for you. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>I will.</td>
                        <td>I already am.</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td>Of course.</td>
                        <td>I should be asking you that.</td>
                    </tr>
                    <tr>
                        <th>Response 7</th>
                        <td>Couples?</td>
                        <td>Just Once?</td>
                    </tr>
                </table>
                </div>
                </motion.div>
            </div>
            </motion.div>
        )
    }
}

export default Lovers