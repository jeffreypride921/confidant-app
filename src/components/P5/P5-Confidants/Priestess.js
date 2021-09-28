import React from "react";
import { motion } from 'framer-motion';
import "./Confidants.css";

class Priestess extends React.Component{
    render(){
        return(
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className="ConfidantItems">
                <h1 className="conf-header">Priestess</h1>
                <motion.div initial={{scaleY: 0, originY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 1}}>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 1</h2>
                <table>
                    <tr>
                        <th>Followup</th>
                        <td>Let’s go again sometime. (♪♪)</td>
                        <td>It’s a new you. (♪)</td>
                        <td style={{border: "2px solid red"}}>The red-light district next. (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 2</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>You’re very well informed. (♪♪)</td>
                        <td>Have you ever been here?</td>
                        <td>Stay close to me.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>You should have known better. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>That was dangerous. (♪♪♪)</td>
                        <td>You get flustered easily, huh?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Why is it called a salon?</td>
                        <td>What kind of place is that?</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Couldn’t agree more. (♪♪)</td>
                        <td>He just wouldn’t give up.</td>
                        <td>Let’s actually go in next time.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 3</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>You have the wrong idea. (♪♪)</td>
                        <td>So what if we were together?</td>
                        <td>It’s none of your business.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Don’t let it get to you. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>You can change. (♪♪♪)</td>
                        <td>Beep boop.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Sounds like you two get along. (♪♪)</td>
                        <td>Buchimaru-kun?</td>
                        <td>Okay, calm down.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 4</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>That’s unlike you. (♪♪)</td>
                        <td>Is Thieves work distracting you?</td>
                        <td>I’m sure you did better than me.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Eiko?</td>
                        <td>... Who?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Don’t you have goals?</td>
                        <td>What about college?</td>
                        <td>What do you mean?</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td style={{border: "2px solid red"}}>Why do you use it? (♪♪♪)</td>
                        <td>That’s adorable. (♪♪)</td>
                        <td>You’re not very ladylike...</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>Do you still want to pursue it?</td>
                        <td>I like a woman in uniform. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>It’s an amazing goal. (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 5</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Are you jealous of them?</td>
                        <td>That’s annoying. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>He sounds suspicious. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>I got this. (♪♪♪)</td>
                        <td>Why do I have to do it?</td>
                        <td>Only if I can take it seriously. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>Fist! Of! Justice!</td>
                        <td>Report him to the police.</td>
                        <td style={{border: "2px solid red"}}>Try to reach out to her. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 6</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>We just started. (♪♪)</td>
                        <td>We’re fighting right now.</td>
                        <td style={{border: "2px solid red"}}>Love comes in many forms. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Don’t be so pushy.</td>
                        <td>Back off.</td>
                        <td>Here, have my number instead.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>No, you’re being considerate.</td>
                        <td>You worry too much.</td>
                        <td>Probably a little.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Tell him you’re  on a date. (♪♪)</td>
                        <td>You’re allowed to ignore him.</td>
                        <td>Fire the same thing back.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 7</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Do you think he likes you?</td>
                        <td>Does Eiko know about this?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Probably a little.</td>
                        <td>You watch too many soap operas.</td>
                        <td>He’s definitely suspicious.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Who was their leader?</td>
                        <td>What gang was it?</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td style={{border: "2px solid red"}}>That’s a horrible story. (♪♪♪)</td>
                        <td>Was it tough without him? (♪♪)</td>
                        <td style={{border: "2px solid red"}}>He was a noble man. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>That’s admirable. (♪♪♪)</td>
                        <td>I’m sure he was happy. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td>Do you have an answer? (♪♪)</td>
                        <td>You can figure that out now. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 7</th>
                        <td style={{border: "2px solid red"}}>I’m game if you are. (♪♪)</td>
                        <td>What are you going to say?</td>
                        <td style={{border: "2px solid red"}}>Refuse her, please. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Of course... (♪♪)</td>
                        <td>I guess so.</td>
                        <td style={{border: "2px solid red"}}>It’s the role I always hoped for. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 8</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>He says that to all his girls. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>That’s how he ropes you in. (♪♪)</td>
                        <td>I’m not sure.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>Absolutely. (♪♪♪)</td>
                        <td>What are we going to do? (♪♪)</td>
                        <td>Eh, she deserves him. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 9</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Get away from her! (♪♪♪)</td>
                        <td>Your fight’s with me. (♪♪♪)</td>
                        <td>I’m calling the cops. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>We should get out of here. (♪♪)</td>
                        <td>Follow me. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>It looked like it hurt.</td>
                        <td style={{border: "2px solid red"}}>That was the right move. (♪♪)</td>
                        <td>You really smacked her.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td style={{border: "2px solid red"}}>I’m a regular here. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>It’s a popular meeting spot. (♪♪♪)</td>
                        <td>Not as much as you. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>You’ll find someone someday. (♪♪♪)</td>
                        <td>I’ll be your study partner. (Romance)</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td>I do. (♪♪♪) (Romance)</td>
                        <td>That’s not what I meant.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>I’d do anything for you. (♪♪)</td>
                        <td>Were you scared?</td>
                        <td style={{border: "2px solid red"}}>No big deal. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank MAX</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>That’s incredible. (♪♪)</td>
                        <td>Your slap worked wonders.</td>
                        <td>I’m so relieved.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>Are you stressing over exams? (♪♪)</td>
                        <td>Back to studying?</td>
                        <td>For your sister?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Police commissioner?</td>
                        <td style={{border: "2px solid red"}}>That sounds difficult. (♪♪)</td>
                        <td>Why did you choose that?</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td style={{border: "2px solid red"}}>What an admirable goal. (♪♪♪)</td>
                        <td>That’s an amazing dream. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Your father would be proud. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>Haha, yea.</td>
                        <td>It’s not funny at all.</td>
                        <td style={{border: "2px solid red"}}>Just be careful, OK? (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td>What’s wrong?</td>
                        <td>Do you want to study?</td>
                    </tr>
                </table>
                </div>
                </motion.div>
            </div>
            </motion.div>
        )
    }
}

export default Priestess