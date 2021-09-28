import React from 'react';
import { motion } from 'framer-motion';
import './Confidants.css';

class Chariot extends React.Component {
    render() {
        return(
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className="ConfidantItems">
                <h1 className="conf-header">Chariot</h1>
                <motion.div initial={{scaleY: 0, originY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 1}}>
                <div className="conf-rank">
                    <h2 className="conf-rank-header">Rank 2</h2>
                    <table>
                        <tr>
                            <th>Response 1</th>
                            <td style={{border: "2px solid red"}}>I'm counting on you. (♪♪♪)</td>
                            <td style={{border: "2px solid red"}}>You seem pretty excited. (♪♪♪)</td>
                            <td>...Help with what? (♪♪)</td>
                        </tr>
                        <tr>
                            <th>Response 2</th>
                            <td>What about them?</td>
                            <td>And then you punched him?</td>
                        </tr>
                        <tr>
                            <th>Response 3</th>
                            <td style={{border: "2px solid red"}}>Do you want to go back? (♪♪)</td>
                            <td style={{border: "2px solid red"}}>Do you regret it? (♪♪)</td>
                        </tr>
                        <tr>
                            <th>Followup</th>
                            <td>You're already fast enough. (♪♪)</td>
                            <td>Are your legs okay? (♪♪)</td>
                            <td>It's never too late, man. (♪♪)</td>
                        </tr>
                    </table>
                </div>
                <div className="conf-rank">
                    <h3 className="conf-rank-header">Rank 3</h3>
                    <table>
                        <tr>
                            <th>Response 1</th>
                            <td style={{border: "2px solid red"}}>Let's not fight. (♪♪)</td>
                            <td>Want to train with us?</td>
                            <td>It's nice to meet you.</td>
                        </tr>
                        <tr>
                            <th>Response 2</th>
                            <td style={{border: "2px solid red"}}>Calm down, Ryuji. (♪♪♪)</td>
                            <td>Just endure it. (♪♪)</td>
                            <td>I'll shut them up.</td>
                        </tr>
                        <tr>
                            <th>Followup</th>
                            <td style={{border: "2px solid red"}}>I can't exactly blame you. (♪♪)</td>
                            <td>Violence is not the answer.</td>
                            <td>Yeah, that'd be best.</td>
                        </tr>
                </table>
                </div>
                <div className="conf-rank">
                    <h3 className="conf-rank-header">Rank 4</h3>
                    <table>
                        <tr>
                            <th>Response 1</th>
                            <td>Nakaoka?</td>
                            <td style={{border: "2px solid red"}}>Are you worried about him? (♪♪)</td>
                            <td>Just leave him be.</td>
                        </tr>
                        <tr>
                            <th>Response 2</th>
                            <td style={{border: "2px solid red"}}>But you're doing great. (♪♪♪)</td>
                            <td>It's not so bad. (♪♪)</td>
                            <td style={{border: "2px solid red"}}>I know how you feel. (♪♪♪)</td>
                        </tr>
                    </table>
                </div>
                <div className="conf-rank">
                    <h3 className="conf-rank-header">Rank 5</h3>
                    <table>
                        <tr>
                            <th>Response 1</th>
                            <td>A towel? (♪♪)</td>
                            <td style={{border: "2px solid red"}}>Protein powder? (♪♪♪)</td>
                        </tr>
                        <tr>
                            <th>Response 2</th>
                            <td style={{border: "2px solid red"}}>You seem conflicted. (♪♪)</td>
                            <td style={{border: "2px solid red"}}>Do you want to rejoin? (♪♪)</td>
                            <td>You're done with them, right?</td>
                        </tr>
                        <tr>
                            <th>Response 3</th>
                            <td>So he's short? (♪♪)</td>
                            <td style={{border: "2px solid red"}}>So he's an asshole? (♪♪♪)</td>
                        </tr>
                        <tr>
                            <th>Followup</th>
                            <td style={{border: "2px solid red"}}>Don't worry, I gotcha. (♪♪)</td>
                            <td>I haven't agreed to anything.</td>
                            <td>Fine, but you're buying ramen.</td>
                        </tr>
                    </table>
                </div>
                <div className="conf-rank">
                    <h3 className="conf-rank-header">Rank 6</h3>
                    <table>
                        <tr>
                            <th>Response 1</th>
                            <td>Let's stay here. (♪♪)</td>
                            <td>How about Protein Lovers? (♪♪)</td>
                            <td style={{border: "2px solid red"}}>We can train at my place. (♪♪♪)</td>
                        </tr>
                        <tr>
                            <th>Response 2</th>
                            <td>You guys should trust Nakaoka. (♪♪♪)</td>
                            <td>This is no time for arguing. (♪♪♪)</td>
                        </tr>
                        <tr>
                            <th>Response 3</th>
                            <td style={{border: "2px solid red"}}>Absolutely. (♪♪♪)</td>
                            <td style={{border: "2px solid red"}}>More or less. (♪♪♪)</td>
                            <td>Not in the slightest.</td>
                        </tr>
                        <tr>
                            <th>Response 4</th>
                            <td>I don't get it.</td>
                            <td>Can you explain that?</td>
                        </tr>
                        <tr>
                            <th>Response 5</th>
                            <td>...Huh?</td>
                            <td>I don't really understand.</td>
                        </tr>
                        <tr>
                            <th>Followup</th>
                            <td>Sounds like you two were close.</td>
                            <td>Just like you.</td>
                            <td style={{border: "2px solid red"}}>So he should've punched back? (♪♪)</td>
                        </tr>
                    </table>
                </div>
                <div className="conf-rank">
                    <h3 className="conf-rank-header">Rank 7</h3>
                    <table>
                        <tr>
                            <th>Response 1</th>
                            <td>Should we change his heart?</td>
                            <td style={{border: "2px solid red"}}>Let's talk to Takeishi. (♪♪♪)</td>
                        </tr>
                        <tr>
                            <th>Response 2</th>
                            <td style={{border: "2px solid red"}}>I think it's cool, Ryuji. (♪♪♪)</td>
                            <td>Wait, what? (♪♪)</td>
                        </tr>
                        <tr>
                            <th>Followup</th>
                            <td style={{border: "2px solid red"}}>Never know until you try. (♪♪)</td>
                            <td>It's out of our hands.</td>
                            <td>We'll use force if we have to.</td>
                        </tr>
                    </table>
                </div>
                <div className="conf-rank">
                    <h3 className="conf-rank-header">Rank 8</h3>
                    <table>
                        <tr>
                            <th>Response 1</th>
                            <td>What if they start fighting?</td>
                            <td> I doubt they'll believe you.</td>
                        </tr>
                        <tr>
                            <th>Response 2</th>
                            <td>Things turned out for the best. (♪♪♪)</td>
                            <td>You deserved it. (♪♪♪)</td>
                        </tr>
                        <tr>
                            <th>Response 3</th>
                            <td style={{border: "2px solid red"}}>All I did was watch. (♪♪♪)</td>
                            <td>Are you gonna pay me back? (♪♪)</td>
                        </tr>
                        <tr>
                            <th>Response 4</th>
                            <td>But I was just standing here... (♪♪)</td>
                            <td style={{border: "2px solid red"}}>You weren't cool though. (♪♪♪)</td>
                        </tr>
                        <tr>
                            <th>Followup</th>
                            <td>You did a great job.</td>
                            <td style={{border: "2px solid red"}}>So. Closed case? (♪♪)</td>
                            <td>We make a good team too.</td>
                        </tr>
                    </table>
                </div>
                    <div className="conf-rank">
                        <h3 className="conf-rank-header">Rank 9</h3>
                        <table>
                            <tr>
                                <th>Response 1</th>
                                <td style={{border: "2px solid red"}}>Are you satisfied now? (♪♪♪)</td>
                                <td>Not running? (♪♪)</td>
                            </tr>
                            <tr>
                                <th>Response 2</th>
                                <td>What did you say? (♪♪)</td>
                                <td>Do you have any time for that? (♪♪)</td>
                                <td style={{border: "2px solid red"}}>Don't do it? (♪♪♪)</td>
                            </tr>
                            <tr>
                                <th>Response 3</th>
                                <td>You're right. (♪♪♪)</td>
                                <td>I never realized that. (♪♪♪)</td>
                            </tr>
                            <tr>
                                <th>Response 4</th>
                                <td style={{border: "2px solid red"}}>I agree. (♪♪)</td>
                                <td>Be more specific.</td>
                                <td>And where is this place?</td>
                            </tr>
                            <tr>
                                <th>Followup</th>
                                <td style={{border: "2px solid red"}}>Congratulations. (♪♪)</td>
                                <td>Got him under control, how?</td>
                                <td style={{border: "2px solid red"}}>Better watch out for them. (♪♪)</td>
                            </tr>
                        </table>
                    </div>
                    <div className="conf-rank">
                    <h3 className="conf-rank-header">Rank MAX</h3>
                    <table>
                        <tr>
                            <th>Response 1</th>
                            <td>I'm looking forward to it. (♪♪♪)</td>
                            <td>We can't lose either. (♪♪♪)</td>
                        </tr>
                        <tr>
                            <th>Response 2</th>
                            <td>You're welcome.</td>
                            <td>It's all because of you.</td>
                        </tr>
                    </table>
                </div>
                </motion.div>
            </div>
            </motion.div>
        )
    }
}

export default Chariot