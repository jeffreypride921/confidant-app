import React from "react";
import { motion } from 'framer-motion';
import "./Confidants.css";

class Emperor extends React.Component{
    render() {
        return(
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className="ConfidantItems">
                <h1 className="conf-header">Emperor</h1>
                <motion.div initial={{scaleY: 0, originY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 1}}>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 1</h2>
                <table>
                    <tr>
                        <th>Followup</th>
                        <td>Thanks. (♪♪)</td>
                        <td>I'll try not to. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>I'll be asking a lot. (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 2</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>It's novel. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>It's enigmatic. (♪♪)</td>
                        <td>... What is it?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>I can't wait. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>I hope you're right. (♪♪♪)</td>
                        <td>Will people like it?</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>You're already doing enough. (♪♪)</td>
                        <td>I'm looking forward to it.</td>
                        <td>Will you really?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 3</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>That was harsh.</td>
                        <td>What a dick.</td>
                        <td style={{border: "2px solid red"}}>Don't let it bother you. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Stop exaggerating.</td>
                        <td>This is just the beginning.</td>
                        <td>Stand up.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>You're really giving up? (♪♪)</td>
                        <td style={{border: "2px solid red"}}>This isn’t like you. (♪♪♪)</td>
                        <td>Stand up, Yusuke.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>How exactly? (♪♪)</td>
                        <td>That’s the spirit. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>That’s the spirit. (♪♪)</td>
                        <td>You’re taking this too far.</td>
                        <td>That's all?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 4</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>What are we doing here?</td>
                        <td style={{border: "2px solid red"}}>Why are we in a boat? (♪♪)</td>
                        <td style={{border: "2px solid red"}}>I should bring a girl here. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>Love comes in all forms. (♪♪♪)</td>
                        <td>Maybe you should train more. (♪♪)</td>
                        <td>You have a wild imagination.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Don’t get discouraged. (♪♪)</td>
                        <td>Just keep drawing.</td>
                        <td>You lack love yourself.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 5</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Make me beautiful.</td>
                        <td>I dunno if I can do it... (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Do you want me to strip? (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>I’m sure you will. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}} >It doesn’t look like it. (♪♪♪)</td>
                        <td>Do you want to give up? (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>Don’t overthink it.</td>
                        <td>You have to keep drawing.</td>
                        <td style={{border: "2px solid red"}}>There’s still hope. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 6</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>It feels nostalgic. (♪♪)</td>
                        <td>Why are we here again?</td>
                        <td>Are you going in?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>We should get it fixed.</td>
                        <td>Let’s force it open.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Are you OK?</td>
                        <td>You’re not looking so good.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td style={{border: "2px solid red"}}>Maybe he was sympathetic. (♪♪♪)</td>
                        <td>He somehow knew you had skill. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>I couldn’t possibly tell you. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>He had a certain dignity. (♪♪)</td>
                        <td>He seems reliable.</td>
                        <td>I’m not sure.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 7</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>That’s a great name.</td>
                        <td style={{border: "2px solid red"}}>What do you mean? (♪♪)</td>
                        <td>Handsome...?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>The truth is within you. (♪♪♪)</td>
                        <td>Money is important.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Calm down. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>It’s not a crime to enjoy sushi. (♪♪)</td>
                        <td>Let’s go again sometime.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 8</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Scenery is always nice.</td>
                        <td>I’d say Morgana.</td>
                        <td style={{border: "2px solid red"}}>It has to be Ann. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>What’s wrong with that? (♪♪)</td>
                        <td>The same applies to everyone.</td>
                        <td style={{border: "2px solid red"}}>You’ve really grown, Yusuke. (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 9</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>Her love for her son. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>The pain of separation. (♪♪♪)</td>
                        <td>I don’t know. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>You’ve really changed, Yusuke. (♪♪♪)</td>
                        <td>That’s a great idea. (♪♪)</td>
                        <td>It won’t be easy.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank MAX</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>It turned out well.</td>
                        <td>So you added hope?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>You provoked Yusuke on purpose?</td>
                        <td>Are you scheming something?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>"He"?</td>
                        <td>Do you mean Madarame?</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>He was a good man deep down. (♪♪♪)</td>
                        <td>That was another aspect of him. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>Yeah...</td>
                        <td>You’re stranger, Yusuke.</td>
                        <td>Are you sure about this?</td>
                    </tr>
                </table>
                </div>
                </motion.div>
            </div>
            </motion.div>
        )
    }
}

export default Emperor