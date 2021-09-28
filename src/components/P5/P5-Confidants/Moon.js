import React from "react";
import { motion } from 'framer-motion';
import "./Confidants.css";

class Moon extends React.Component {
    render() {
        return (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className="ConfidantsItems">
                <h1 className="conf-header">Moon</h1>
                <motion.div initial={{scaleY: 0, originY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 1}}>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 2</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>I don’t understand.</td>
                        <td>... Phan-Site?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>You’ve done good, kid. (♪♪♪)</td>
                        <td>That sounds pretty tough.</td>
                        <td>Is this really necessary?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Uh, strategic... what?</td>
                        <td style={{border: "2px solid red"}}>Sounds cool. (♪♪♪)</td>
                        <td>You’re really hyped for this. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Nice hustle, image manager. (♪♪)</td>
                        <td>Calm down.</td>
                        <td>All-nighters can mess you up.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 3</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>I’ve never heard that before.</td>
                        <td style={{border: "2px solid red"}}>Great idea. (♪♪♪)</td>
                        <td>I’m already taken. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>I’m worried about this...</td>
                        <td style={{border: "2px solid red"}}>We’re part of... The Phandom? (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Let’s tell them the truth. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td style={{border: "2px solid red"}}>It’s not your fault. (♪♪)</td>
                        <td>Don’t overwork yourself.</td>
                        <td>I can’t trust anyone anymore...</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>Of course. (♪♪)</td>
                        <td>Really? (♪♪)</td>
                        <td>You’ll get it right next time. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 4</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>Steak sounds good. (♪♪♪)</td>
                        <td>Some nice organic veggies.</td>
                        <td>I love desserts. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>You’re amazing. (♪♪)</td>
                        <td>That sounds like a scam.</td>
                        <td>Stop this at once.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>You’re right.</td>
                        <td>Of course it would.</td>
                        <td>Maybe we can keep it.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Yup. (♪♪)</td>
                        <td>That’s one way to view it.</td>
                        <td style={{border: "2px solid red"}}>You’ll get better ideas. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 5</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Why was it so expensive? (♪♪)</td>
                        <td>It looks almost real.</td>
                        <td style={{border: "2px solid red"}}>Is it for me? (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>That’s a good idea. (♪♪)</td>
                        <td>Are you sure that’s necessary?</td>
                        <td>Don’t do anything stupid.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>All right. (♪♪)</td>
                        <td>I expect great things.</td>
                        <td>...Did something happen.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 6</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>Just tell me already. (♪♪)</td>
                        <td>I’m not interested.</td>
                        <td style={{border: "2px solid red"}}>You sure are fired up... (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Calm yourself.</td>
                        <td style={{border: "2px solid red"}}>Rumors are wrong all the time... (♪♪)</td>
                        <td>It’s none of your business.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Why?</td>
                        <td>I didn’t ask for that.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>Is that right...?</td>
                        <td style={{border: "2px solid red"}}>Absolutely. Nice job. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 6.5</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>And what exactly will we win? (♪♪)</td>
                        <td style={{border: "2px solid red"}}>You’re so reliable. (♪♪♪)</td>
                        <td>Chill out, dude.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>Sounds pretty twisted. (♪♪)</td>
                        <td>By changing their hearts?</td>
                        <td style={{border: "2px solid red"}}>You really need to chill. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Fun...?</td>
                        <td>This isn’t like you.</td>
                        <td>You’re worrying me.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>We very well might.</td>
                        <td>Are you feeling guilty?</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>Let’s go.</td>
                        <td>This is the only way...</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td>You’re riding our coattails.</td>
                        <td>Would that really satisfy you?</td>
                    </tr>
                    <tr>
                        <th>Response 7</th>
                        <td>Do it yourself.</td>
                        <td>We’re leaving.</td>
                        <td>There’s no need.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 7</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>I don’t wanna change his heart.</td>
                        <td>Let’s cancel the request.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Stop worrying about fame.</td>
                        <td>You still care about fame?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>I’m sure there is. (♪♪)</td>
                        <td>I hope so.</td>
                        <td style={{border: "2px solid red"}}>Maybe the Phan-Site? (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Kind of worrying... (♪♪)</td>
                        <td>Be careful.</td>
                        <td style={{border: "2px solid red"}}>It’s your time to shine. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 8</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>I’m not leaving. (♪♪♪)</td>
                        <td>You should run too. (♪♪)</td>
                        <td>What are you going to do?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>You’re just gonna take that? (♪♪)</td>
                        <td>Believe in yourself. (♪♪)</td>
                        <td>They’re the real losers. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Totally. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>You were super cool. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>Wait, that was all an act? (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>You’ll be fine. (♪♪)</td>
                        <td>Calm down.</td>
                        <td style={{border: "2px solid red"}}>You’ve got this, man. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 9</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>You, dead as a doornail.</td>
                        <td style={{border: "2px solid red"}}>You showed some real courage. (♪♪♪)</td>
                        <td>I’m glad you’re still alive. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Something like that.</td>
                        <td>Exactly.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Don’t use our real names.</td>
                        <td>This came out of nowhere.</td>
                        <td>I can’t wait to watch it.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>Meh.</td>
                        <td>What about a parfait instead?</td>
                        <td>I’m feeling steak, actually.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>The sparkle in your eye. (♪♪)</td>
                        <td>...</td>
                        <td>Your hair?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank MAX</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Did you find your answer?</td>
                        <td>Were you scared stiff?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>That was courageous. (♪♪♪)</td>
                        <td>But you were afraid. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>I didn’t do anything.</td>
                        <td>Nobody stole your heart.</td>
                        <td>You changed yourself.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>I’m sure you will.</td>
                        <td>Make it a bestseller.</td>
                        <td>You have to write it first.</td>
                    </tr>
                </table>
                </div>
                </motion.div>
            </div>
            </motion.div>
        )
    }
}

export default Moon;