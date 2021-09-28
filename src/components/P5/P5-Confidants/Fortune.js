import React from "react";
import { motion } from 'framer-motion';
import "./Confidants.css"

class Fortune extends React.Component{
    render() {
        return(
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className="ConfidantItems">
                <h1 className="conf-header">Fortune</h1>
                <motion.div initial={{scaleY: 0, originY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 1}}>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 1</h2>
                <table>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>I’ll be there. (♪♪♪)</td>
                        <td>Such a hassle. (♪)</td>
                        <td>You’re pretty extreme... (♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 2</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Suggest she gives up.</td>
                        <td>Change her boss's heart.</td>
                        <td>Encourage her.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Hrahhh!</td>
                        <td>Overturn your fate!</td>
                        <td>Fight the power!</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>You’re so stubborn.</td>
                        <td style={{border: "2px solid red"}}>Open your mind to change. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Of course I am. (♪♪)</td>
                        <td>And if I am?</td>
                        <td>Are you stalking me?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 3</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Go for the money.</td>
                        <td>Follow his heart.</td>
                        <td>Chase a promotion.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Thieves may steal her away.</td>
                        <td>Marriage kills individuality.</td>
                        <td>She'll be sad if you break it off.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>I'm not, sorry.</td>
                        <td>Who knows...?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 4</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>You’re only realizing that now?</td>
                        <td>Do you want to test it again?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Strengthen your will. (♪♪)</td>
                        <td>I don’t know.</td>
                        <td style={{border: "2px solid red"}}>Trust in yourself. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Tell me more.</td>
                        <td>That sounds so peaceful.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>... The chairman?</td>
                        <td>I’m not sure I follow.</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>I think it’ll work.</td>
                        <td>It all depends on you.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>I’m glad to hear that.</td>
                        <td style={{border: "2px solid red"}}>I didn’t do much. (♪♪)</td>
                        <td>Tell me more about your home.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 5</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>You’re such a hard worker. (♪♪♪)</td>
                        <td>What about divine power?</td>
                        <td>You must have lots of free time. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>But what?</td>
                        <td>Did you spend it all?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Who was he?</td>
                        <td>Maiden?</td>
                        <td>Are you in trouble?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 6</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>I like fortune-telling.</td>
                        <td>She’s really cool.</td>
                        <td>I’m doing research for school.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>... Maiden of Relief?</td>
                        <td>This has to be a joke.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>This guy’s sketchy.</td>
                        <td>Leave her alone.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>What’s a Maiden of Relief?</td>
                        <td>Who thinks you’re a monster?</td>
                        <td style={{border: "2px solid red"}}>You’re just Chihaya to me. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>No need to strain yourself.</td>
                        <td style={{border: "2px solid red"}}>Be honest with yourself. (♪♪)</td>
                        <td>We’ll work on it together.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 7</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>You’re not wrong about that.</td>
                        <td>You shouldn’t have tricked them. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>I don’t think so. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Are you gonna be okay? (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Be careful. (♪♪)</td>
                        <td>So the Maiden’s taking action.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 7.5</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>How so?</td>
                        <td>What have you found?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Tell me his name.</td>
                        <td>What’s Fukurai’s first name?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>I can’t tell you.</td>
                        <td>Don’t worry about it.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 8</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>I had no idea. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>I know. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>I’m glad to hear that. (♪♪♪)</td>
                        <td>That’s some good luck. (♪♪♪)</td>
                        <td>It’s because you’re strong. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Why do you ask?</td>
                        <td style={{border: "2px solid red"}}>Hell yeah I am. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>You give me too much credit.</td>
                        <td style={{border: "2px solid red"}}>It was all your own will. (♪♪)</td>
                        <td>I knew it would happen.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 9</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>You really don’t understand.</td>
                        <td>Listen to what Chihaya’s saying.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Do you regret what you did?</td>
                        <td style={{border: "2px solid red"}}>Well, fate can be changed. (♪♪♪)</td>
                        <td>That’s all in the past now. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>I like having my fortune read.</td>
                        <td>So I can be with you. (Romance)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>I wanted to hear your voice too. (♪♪)</td>
                        <td>Oh, you didn’t mean it...?</td>
                        <td>...</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank MAX</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>You’ve never been here?</td>
                        <td>It wasn’t that far away.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>I support you. (♪♪♪)</td>
                        <td>You have strong convictions. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>I wonder if you’re right...</td>
                        <td>So what if I am the Trickster?</td>
                        <td>You’re pretty sharp.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>It’s not a problem.</td>
                        <td>Are you worried about me?</td>
                        <td>What does it mean?</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>Thank you.</td>
                        <td>That’s really reassuring.</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td>I don’t care about that. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>It’s actually pretty cute. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 7</th>
                        <td>I was hoping you’d say that.</td>
                        <td>I don’t want to go home.</td>
                    </tr>
                </table>
                </div>
                </motion.div>
            </div>
            </motion.div>
        )
    }
}

export default Fortune