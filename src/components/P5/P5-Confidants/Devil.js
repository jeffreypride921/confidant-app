import React from "react";
import { motion } from 'framer-motion';
import './Confidants.css';

class Devil extends React.Component {
    render(){
        return(
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className = "ConfidantItems">
                <h1 className="conf-header">Devil</h1>
                <motion.div initial={{scaleY: 0, originY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 1}}>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 1</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Thanks.</td>
                        <td>Sounds like a good time.</td>
                        <td>Doing what?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 2</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Why do you ask?</td>
                        <td>I don't.</td>
                        <td style={{border: "2px solid red"}}>Mishima might... (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Worth...?</td>
                        <td>What about their justice?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>I like the atmosphere.</td>
                        <td style={{border: "2px solid red"}}>It's for the article. (♪♪)</td>
                        <td>Tell me about the incident.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 3</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Minors couldn't do that stuff.</td>
                        <td>You might be right.</td>
                        <td style={{border: "2px solid red"}}>You shouldn't make assumptions. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>What's the difference?</td>
                        <td>I'm sure you are.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Why not change careers?</td>
                        <td>Maybe you should quit.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>What was she accused of?</td>
                        <td>What happened?</td>
                        <td style={{border: "2px solid red"}}>She was falsely accused? (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 4</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>What's this about?</td>
                        <td>She hasn't done anything wrong.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Of course we are. (♪♪)</td>
                        <td>Don't tell anybody. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Our movie is about to start.</td>
                        <td>That's enough.</td>
                        <td>We're dating. Seriously.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Leave it to me. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>That was our deal. (♪♪)</td>
                        <td>Anything for my girlfriend.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 5</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Because of your investigation?</td>
                        <td>Because of your incident?</td>
                        <td>Are you sure we're the same?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>I'm curious.</td>
                        <td>You can trust me.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>What was the cause of death?</td>
                        <td>Who killed him?</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>That sounds like defamation. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>That's unforgivable. (♪♪♪)</td>
                        <td>How's the search going?</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>I don't mind. (♪♪)</td>
                        <td>As long as I'm compensated.</td>
                        <td>I did the same to you.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 6</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Did something happen?</td>
                        <td>Having trouble at work?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>He must not like you. (♪♪)</td>
                        <td>Did he find out?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Do you have evidence of that?</td>
                        <td style={{border: "2px solid red"}}>You should trust in her. (♪♪)</td>
                        <td>You might be right.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td style={{border: "2px solid red"}}>That's the spirit. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>You're a great journalist. (♪♪)</td>
                        <td>What about your quota?</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>Glad to hear that.</td>
                        <td>Don't work yourself to death.</td>
                        <td style={{border: "2px solid red"}}>I'll dig up some more for you. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 7</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>What was that about?</td>
                        <td>Could it be...?</td>
                    </tr>
                    <tr>
                        <th>Response 2 </th>
                        <td>Calm down. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Don't let him provoke you. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>Let's think of another way. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>You should work on that. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>You're charming as you are. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>That's the spirit. (♪♪)</td>
                        <td>Sounds tough.</td>
                        <td>Don't strain yourself.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 7.5</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Like what?</td>
                        <td style={{border: "2px solid red"}}>You seem tired. (♪♪)</td>
                        <td>So... I have a pet cat...</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>What's the chief's name?</td>
                        <td>Tell me more about him.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 8</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>He reflected on his actions.</td>
                        <td>Aren't you happy.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Did I? Can't remember.</td>
                        <td>Uh, nope.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>I'm glad to hear that.</td>
                        <td>Thank god.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>That's not like you. (♪♪♪)</td>
                        <td>You need pursue the truth. (♪♪♪)</td>
                        <td>I'll go with you. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Good luck. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Be careful. (♪♪)</td>
                        <td>Grab a souvenir for me.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 9</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Are you OK?</td>
                        <td>Did you learn the truth?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>What are you going to do?</td>
                        <td style={{border: "2px solid red"}}>You're not giving up, are you? (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td style={{border: "2px solid red"}}>I can't leave you. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>I want to help. (♪♪♪)</td>
                        <td>I need those articles.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>Of course not.</td>
                        <td>No way.</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>I took it seriously. (Romance)</td>
                        <td>I didn't take it seriously.</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td>I love you, Ichiko. (Romance)</td>
                        <td>I'm just kidding.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>I wanted to hear your voice. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Please don't dump me. (♪♪)</td>
                        <td>Iloveyou.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank MAX</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>You're really earnest. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Is that entertainment. (♪♪♪)</td>
                        <td>You don't need my info?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>I'm glad to hear that. (♪♪♪)</td>
                        <td>I'll read the next issue. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>So you knew all along.</td>
                        <td>It's just a coincidence.</td>
                        <td>Lala's the real phantom thief.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>It's up to you. (♪♪♪)</td>
                        <td>I want to go to your place. (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                </motion.div>
            </div>
            </motion.div>
        )
    }
}

export default Devil