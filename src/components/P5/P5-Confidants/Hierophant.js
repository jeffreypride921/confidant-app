import React from "react";
import { motion } from 'framer-motion';
import "./Confidants.css"

class Hierophant extends React.Component {
    render() {
        return(
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className="ConfidantItems">
                <h1 className="conf-header">Hierophant</h1>
                <motion.div initial={{scaleY: 0, originY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 1}}>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 1</h2>
                <table>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Got it. (♪♪♪)</td>
                        <td>That was our deal. (♪♪)</td>
                        <td>It’s the least I can do. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 2</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>Making coffee. (♪♪)</td>
                        <td>Hitting on girls.</td>
                        <td>No idea.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Who was he?</td>
                        <td style={{border: "2px solid red"}}>That guy seemed suspicious. (♪♪)</td>
                        <td>Who’s the “her” he mentioned?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td style={{border: "2px solid red"}}>I want the ladies to love me. (♪♪)</td>
                        <td>I don’t care about that stuff.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Got it. (♪♪)</td>
                        <td>Give me a break.</td>
                        <td>Why’d you call my cell?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 3</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>Medium-fine. (♪♪)</td>
                        <td>Coarse.</td>
                        <td>Anything goes.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Is it a date?</td>
                        <td style={{border: "2px solid red"}}>Is it trouble?? (♪♪)</td>
                        <td>You don’t want my help anymore?</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>I’m ready to work. (♪♪)</td>
                        <td>Go easy on me.</td>
                        <td style={{border: "2px solid red"}}>Thank you in advance. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 4</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>Tell me more. (♪♪♪)</td>
                        <td>That sounds tough...</td>
                        <td>It all tastes the same to me.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Run for help.</td>
                        <td style={{border: "2px solid red"}}>Call Sojiro’s phone. (♪♪♪)</td>
                        <td>Kick the man out</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Understood. (♪♪)</td>
                        <td>I’m kind of nervous...</td>
                        <td>I’ll kick him out.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 5</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>It wasn’t bad. (♪♪)</td>
                        <td>Nothing special.</td>
                        <td style={{border: "2px solid red"}}>I think I’m addicted! (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>She was like Futaba? (♪♪)</td>
                        <td style={{border: "2px solid red"}}>She wasn’t normal, huh? (♪♪♪)</td>
                        <td>So that’s why you’re a bachelor?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td style={{border: "2px solid red"}}>It really paid off in the end. (♪♪)</td>
                        <td>Almost brings a tear to my eye.</td>
                        <td>So much history...</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>Sounds good to me.</td>
                        <td style={{border: "2px solid red"}}>She needs a balanced diet. (♪♪)</td>
                        <td>There’s always instant noodles.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 6</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>I admire it.</td>
                        <td>I’m not impressed.</td>
                        <td style={{border: "2px solid red"}}>To each his own. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>You’re wrong. (♪♪)</td>
                        <td>I’m sorry.</td>
                        <td style={{border: "2px solid red"}}>Shut your mouth. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td style={{border: "2px solid red"}} >Saving Futaba was no mistake. (♪♪)</td>
                        <td>Just cut your ties with him.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>Is she okay?</td>
                        <td>Try to relax.</td>
                        <td style={{border: "2px solid red"}}>If I can help somehow... (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 7</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>You might be right. (♪♪♪)</td>
                        <td>That’s not true.</td>
                        <td>They’re still delicious.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Are you alright?</td>
                        <td>Have you calmed down?</td>
                        <td>Do you want to talk?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Let’s talk to him.</td>
                        <td>You should tell him that.</td>
                        <td>You guys are one awkward duo.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>I’m truly glad.</td>
                        <td>You’re welcome.</td>
                        <td style={{border: "2px solid red"}}>Feel like a real dad now? (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 8</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>You want my suggestion? (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Something with curry. (♪♪♪)</td>
                        <td>I can’t decide!</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>I didn’t do anything wrong.</td>
                        <td style={{border: "2px solid red"}}>I was just protecting Futaba. (♪♪♪)</td>
                        <td>Sorry.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 9</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>It’s great. (♪♪♪)</td>
                        <td>He’s a bit of a nag. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Are you crying?</td>
                        <td style={{border: "2px solid red"}}>You have a great daughter. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>Congrats. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>You did great. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>Futaba did great. (♪♪♪)</td>
                        <td>You two were already family. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank MAX</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>For what?</td>
                        <td>You guys are religious?</td>
                        <td>I’m not interested.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Good for you. (♪♪♪)</td>
                        <td>Thank you. (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                </motion.div>
            </div>
            </motion.div>
        )
    }
}

export default Hierophant