import React from "react";
import { motion } from 'framer-motion';
import './Confidants.css'

class Death extends React.Component {
    render() {
        return(
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className="ConfidantItems">
                <h1 className="conf-header">Death</h1>
                <motion.div initial={{scaleY: 0, originY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 1}}>
                <div className="conf-rank">
                    <h2 className="conf-rank-header">Rank 1</h2>
                    <table>
                        <tr>
                            <th>Followup</th>
                            <td>Fine by me. (♪)</td>
                            <td style={{border: "2px solid red"}}>Please go easy on me. (♪♪♪)</td>
                            <td>So many pretty lights... (♪)</td>
                        </tr>
                    </table>
                </div>
                <div className="conf-rank">
                    <h2 className="conf-rank-header">Rank 2</h2>
                    <table>
                        <tr>
                            <th>Response 1</th>
                            <td style={{border: "2px solid red"}} >I have a bad heart. (♪♪)</td>
                            <td>We're on a date.</td>
                            <td>I know my rights.</td>
                        </tr>
                        <tr>
                            <th>Response 2</th>
                            <td style={{border: "2px solid red"}}>I agree. (♪♪)</td>
                            <td>Harassment?</td>
                            <td>The plague?</td>
                        </tr>
                        <tr>
                            <th>Followup</th>
                            <td style={{border: "2px solid red"}}>I'm totally fine. (♪♪)</td>
                            <td>I feel lightheaded.</td>
                            <td style={{border: "2px solid red"}}>I think I have superpowers. (♪♪)</td>
                        </tr>
                    </table>
                </div>
                <div className="conf-rank">
                    <h2 className="conf-rank-header">Rank 3</h2>
                    <table>
                        <tr>
                            <th>Response 1</th>
                            <td>What was that about?</td>
                            <td>Was that an emergency?</td>
                        </tr>
                        <tr>
                            <th>Response 2</th>
                            <td>A medical error?</td>
                            <td>What do you mean?</td>
                        </tr>
                        <tr>
                            <th>Response 3</th>
                            <td style={{border: "2px solid red"}}>I don't mind. (♪♪)</td>
                            <td>Is it true?</td>
                            <td style={{border: "2px solid red"}}>I need medicine. (♪♪)</td>
                        </tr>
                        <tr>
                            <th>Followup</th>
                            <td style={{border: "2px solid red"}}>Of course not. (♪♪)</td>
                            <td>I don't think I did...</td>
                            <td>Have you?</td>
                        </tr>
                    </table>
                </div>
                <div className="conf-rank">
                    <h2 className="conf-rank-header">Rank4</h2>
                    <table>
                        <tr>
                            <th>Response 1</th>
                            <td>You'll be okay.</td>
                            <td style={{border: "2px solid red"}}>Dr. Takemi will help. (♪♪)</td>
                        </tr>
                        <tr>
                            <th>Response 2</th>
                            <td style={{border: "2px solid red"}}>You seem happy. (♪♪♪)</td>
                            <td>You're so kind. (♪♪)</td>
                            <td>Why free? (♪♪)</td>
                        </tr>
                        <tr>
                            <th>Followup</th>
                            <td style={{border: "2px solid red"}}>I'll reflect on my mistakes. (♪♪)</td>
                            <td>But she ended up okay.</td>
                            <td>Punish me more.</td>
                        </tr>
                    </table>
                </div>
                <div className="conf-rank">
                    <h2 className="conf-rank-header">Rank 5</h2>
                    <table>
                        <tr>
                            <th>Response 1</th>
                            <td>They trust you.</td>
                            <td>Was it really your fault?</td>
                        </tr>
                        <tr>
                            <th>Response 2</th>
                            <td>I had no idea.</td>
                            <td>It's not too late.</td>
                        </tr>
                        <tr>
                            <th>Response 3</th>
                            <td style={{border: "2px solid red"}}>That's good. (♪♪♪)</td>
                            <td>When will it be done? (♪♪)</td>
                            <td>... "Probably"?</td>
                        </tr>
                        <tr>
                            <th>Followup</th>
                            <td style={{border: "2px solid red"}}>About Miwa-chan? (♪♪)</td>
                            <td>About Oyamada?</td>
                            <td>About Crawford-Ende's?</td>
                        </tr>
                    </table>
                </div>
                <div className="conf-rank">
                    <h2 className="conf-rank-header">Rank 6</h2>
                    <table>
                        <tr>
                            <th>Response 1</th>
                            <td>Well, someone's popular.</td>
                            <td>You seem annoyed.</td>
                            <td>Did something happen?</td>
                        </tr>
                        <tr>
                            <th>Response 2</th>
                            <td>Having fun?</td>
                            <td>You ARE a genius.</td>
                        </tr>
                        <tr>
                            <th>Response 3</th>
                            <td>You're a masochist.</td>
                            <td style={{border: "2px solid red"}}>It suits you. (♪♪♪)</td>
                            <td>You're not honest. (♪♪)</td>
                        </tr>
                        <tr>
                            <th>Followup</th>
                            <td style={{border: "2px solid red"}}>You can count on me. (♪♪)</td>
                            <td>I think I'm at my limit...</td>
                            <td style={{border: "2px solid red"}}>Anything for you. (♪♪)</td>
                        </tr>
                    </table>
                </div>
                <div className="conf-rank">
                    <h2 className="conf-rank-header">Rank 7</h2>
                    <table>
                        <tr>
                            <th>Response 1</th>
                            <td>This is harassment. (♪♪)</td>
                            <td>She's a great doctor. (♪♪)</td>
                            <td>Please be quiet. (♪♪)</td>
                        </tr>
                        <tr>
                            <th>Response 2</th>
                            <td>Don't lose hope.</td>
                            <td>Let's ask for details.</td>
                            <td>...</td>
                        </tr>
                        <tr>
                            <th>Response 3</th>
                            <td style={{border: "2px solid red"}}>Just rest for today. (♪♪)</td>
                            <td style={{border: "2px solid red"}}>Anything I can do? (♪♪)</td>
                            <td>Let's retaliate.</td>
                        </tr>
                        <tr>
                            <th>Response 4</th>
                            <td>It was inevitable.</td>
                            <td style={{border: "2px solid red"}}>We all do sometimes. (♪♪♪)</td>
                            <td>I'm glad you did. (♪♪)</td>
                        </tr>
                    </table>
                </div>
                <div className="conf-rank">
                    <h2 className="conf-rank-header">Rank 7.5</h2>
                    <table>
                        <tr>
                            <th>Response 1</th>
                            <td>What about Miwa-chan?</td>
                            <td>You OK with this?</td>
                        </tr>
                        <tr>
                            <th>Response 2</th>
                            <td>Don't give up.</td>
                            <td>Anything you can do?</td>
                            <td style={{border: "2px solid red"}}>I'm your ally. (♪♪)</td>
                        </tr>
                        <tr>
                            <th>Response 3</th>
                            <td>You gonna run away?</td>
                            <td>And your patients?</td>
                        </tr>
                        <tr>
                            <th>Response 4</th>
                            <td>What's his full name?</td>
                            <td>Tell me about him.</td>
                        </tr>
                        <tr>
                            <th>Response 5</th>
                            <td>I won't do anything.</td>
                            <td>It's for my research.</td>
                        </tr>
                    </table>
                </div>
                <div className="conf-rank">
                    <h2 className="conf-rank-header">Rank 8</h2>
                    <table>
                        <tr>
                            <th>Response 1</th>
                            <td>Miwa-chan is still alive.</td>
                            <td>Oyamada lied to you.</td>
                        </tr>
                        <tr>
                            <th>Response 2</th>
                            <td>You should hurry. (♪♪)</td>
                            <td style={{border: "2px solid red"}}>Let's get to work, doctor. (♪♪♪)</td>
                            <td style={{border: "2px solid red"}}>It's not over yet. (♪♪♪)</td>
                        </tr>
                        <tr>
                            <th>Response 3</th>
                            <td style={{border: "2px solid red"}}>It's for Miwa-chan. (♪♪♪)</td>
                            <td>It's for my exams. (♪♪)</td>
                            <td style={{border: "2px solid red"}}>It's for you. (♪♪♪)</td>
                        </tr>
                        <tr>
                            <th>Followup</th>
                            <td style={{border: "2px solid red"}}>I'll be cheering for you. (♪♪)</td>
                            <td>Don't burn yourself out.</td>
                            <td style={{border: "2px solid red"}}>Anything else I can do. (♪♪)</td>
                        </tr>
                    </table>
                </div>
                <div className="conf-rank">
                    <h2 className="conf-rank-header">Rank 9</h2>
                    <table>
                        <tr>
                            <th>Response 1</th>
                            <td>Don't worry about it.</td>
                            <td>It was for my exams. (♪♪)</td>
                            <td style={{border: "2px solid red"}}>It was rough. (♪♪♪)</td>
                        </tr>
                        <tr>
                            <th>Response 2</th>
                            <td>That's troubling.</td>
                            <td>And your patients?</td>
                        </tr>
                        <tr>
                            <th>Response 3</th>
                            <td>I wanted to see you. (Romance)</td>
                            <td>It was for my exams.</td>
                        </tr>
                        <tr>
                            <th>Response 4</th>
                            <td>I love you. (♪♪) (Romance)</td>
                            <td>What do you think?</td>
                        </tr>
                        <tr>
                            <th>Response 5</th>
                            <td>It isn't a joke. (♪♪♪) (Romance)</td>
                            <td>That sounds good.</td>
                        </tr>
                        <tr>
                            <th>Followup</th>
                            <td>It's true love.</td>
                            <td style={{border: "2px solid red"}}>So did you. (♪♪)</td>
                            <td>I've always loved you.</td>
                        </tr>
                    </table>
                </div>
                <div className="conf-rank">
                    <h2 className="conf-rank-header">Rank MAX</h2>
                    <table>
                        <tr>
                            <th>Response 1</th>
                            <td>Uh, what?</td>
                            <td>Is that a joke?</td>
                        </tr>
                        <tr>
                            <th>Response 2</th>
                            <td>It's a coincidence.</td>
                            <td style={{border: "2px solid red"}}>I wonder... (♪♪)</td>
                            <td>So what if it's true?</td>
                        </tr>
                        <tr>
                            <th>Response 3</th>
                            <td>What kind? (♪♪)</td>
                            <td style={{border: "2px solid red"}}>Yes, please. (♪♪♪)</td>
                        </tr>
                    </table>
                </div>
                </motion.div>
            </div>
            </motion.div>
        )
    }
}

export default Death