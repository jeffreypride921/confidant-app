import React from "react";
import { motion } from 'framer-motion';
import "./Confidants.css";

class Sun extends React.Component{
    render(){
        return(
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className="ConfidantItems">
                <h1 className="conf-header">Sun</h1>
                <motion.div initial={{scaleY: 0, originY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 1}}>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 1</h2>
                <table>
                    <tr>
                        <th>Followup</th>
                        <td>Of course. (♪)</td>
                        <td>If I must.</td>
                        <td style={{border: "2px solid red"}}>Let me write this down. (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 2</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>I want to change the world.</td>
                        <td style={{border: "2px solid red"}}>I want to improve my speech. (♪♪)</td>
                        <td>I’m not sure...</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>One with conviction. (♪♪)</td>
                        <td>A popular one.</td>
                        <td style={{border: "2px solid red"}}>I don’t know yet. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td style={{border: "2px solid red"}}>That was helpful. (♪♪)</td>
                        <td>I knew that already.</td>
                        <td>What I want to accomplish?</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>It was helpful. (♪♪)</td>
                        <td>Somewhat.</td>
                        <td style={{border: "2px solid red"}}>It changed my whole outlook. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 3</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Yes, Mr. Yoshida told me.</td>
                        <td>No, and I don’t care.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>His message. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>No His speaking skills. (♪♪)</td>
                        <td>It’s hard to say.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>I will.</td>
                        <td>I’m not sure I get it.</td>
                        <td style={{border: "2px solid red"}}>You think I’ll ever find it? (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 4</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Stop interrupting him.</td>
                        <td>You’re annoying the audience.</td>
                        <td>Just shut up and listen.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Yep.</td>
                        <td>What do you think?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>The ex-convict has a point.</td>
                        <td>Listen to what he has to say.</td>
                        <td>So what if he’s No-Good Tora?</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td style={{border: "2px solid red"}}>I couldn’t help myself. (♪♪)</td>
                        <td>I just spoke the truth.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>I will. (♪♪)</td>
                        <td>I’m not sure I can.</td>
                        <td style={{border: "2px solid red"}}>Can’t forget your roots. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 5</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>I think so. (♪♪)</td>
                        <td>Don’t let your guard down.</td>
                        <td style={{border: "2px solid red"}}>The media doesn’t matter. (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 6</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>I’m for them. (♪♪)</td>
                        <td>I’m against them.</td>
                        <td style={{border: "2px solid red"}}>I don’t really care. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>I’d decline. (♪♪♪)</td>
                        <td>I’d take the offer.</td>
                        <td>’d leave it to chance. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>I’ll keep this in mind. (♪♪)</td>
                        <td>Lose sight of who I am?</td>
                        <td style={{border: "2px solid red"}}>You make quite a case. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 7</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>You should decline. (♪♪)</td>
                        <td>That’s a sweet deal.</td>
                        <td>I wasn’t paying attention.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>He’s not No-Good Tora.</td>
                        <td>Call him Mr. Yoshida.</td>
                        <td>He’ll get elected this time.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>That’s not for you to decide.</td>
                        <td>Maybe...</td>
                        <td>I still believe in him.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 8</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Are you going to do it?</td>
                        <td>Don’t do it.</td>
                        <td style={{border: "2px solid red"}}>That’s a difficult decision. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>Stick to your beliefs. (♪♪♪)</td>
                        <td>Clear your name.</td>
                        <td>Get elected.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>What good would that do?</td>
                        <td>So what if you’re right?</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>I’ll never foget that. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>It’s tougher than it seems. (♪♪)</td>
                        <td>...</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 9</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>Do your best. (♪♪♪)</td>
                        <td>Break a leg.</td>
                        <td>I’m getting nervous. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>What are you talking about?</td>
                        <td style={{border: "2px solid red"}}>You had a change of heart. (♪♪)</td>
                        <td>...</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank MAX</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>Your true self was revealed. (♪♪♪)</td>
                        <td>You’re going to be popular. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Don’t let your guard down. (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                </motion.div>
            </div>
            </motion.div>
        )
    }
}

export default Sun