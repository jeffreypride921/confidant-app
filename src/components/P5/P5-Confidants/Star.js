import React from "react";
import { motion } from 'framer-motion';
import "./Confidants.css";

class Star extends React.Component{
    render(){
        return(
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className="ConfidantItems">
                <h1 className="conf-header">Star</h1>
                <motion.div initial={{scaleY: 0, originY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 1}}>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 1</h2>
                <table>
                    <tr>
                        <th>Followup</th>
                        <td>Sure. (♪)</td>
                        <td>I guess we can. (♪)</td>
                        <td style={{border: "2px solid red"}}>Lucky me. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 2</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>That’s interesting. (♪♪)</td>
                        <td>I like that attitude change.</td>
                        <td>It’s a bit scary.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Have confidence in yourself.</td>
                        <td>Don’t worry about them.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>When is it coming out?</td>
                        <td>You’re, like, an idol.</td>
                        <td style={{border: "2px solid red"}}>But you don’t want to, right? (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 3</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>Describes you perfectly. (♪♪)</td>
                        <td>No, I didn’t.</td>
                        <td>That’s quite the headline.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>You don’t enjoy it?</td>
                        <td style={{border: "2px solid red"}}>Having a difficult time? (♪♪)</td>
                        <td>You should just decline.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Bring it on. (♪♪)</td>
                        <td>Don’t worry about it.</td>
                        <td>This is part of our deal too.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 4</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>I don’t mind. (♪♪)</td>
                        <td>She has a bad vibe.</td>
                        <td style={{border: "2px solid red"}}>Must’ve been the katsu curry. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>They’re ridiculous.</td>
                        <td style={{border: "2px solid red"}}>They’re cool. (♪♪)</td>
                        <td>Never heard of them.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>I'd love it. (♪♪)</td>
                        <td>If our schedules match up.</td>
                        <td style={{border: "2px solid red"}}>Where shall we go next? (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 5</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>You’re not allowed to date?</td>
                        <td style={{border: "2px solid red"}}>She’s scary. (♪♪)</td>
                        <td>Accomplish things?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>You don’t like the attention?</td>
                        <td style={{border: "2px solid red"}}>You should stop then. (♪♪)</td>
                        <td>Have you told your mother?</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>No worries.</td>
                        <td style={{border: "2px solid red"}}>You’ve got a lot to deal with... (♪♪)</td>
                        <td>Why do you have to apologize? </td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 6</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>You’ll be famous.</td>
                        <td style={{border: "2px solid red"}}>Is that frustrating? (♪♪)</td>
                        <td>The media is scary.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>Do you still like shogi? (♪♪)</td>
                        <td>Is that what you want to do?</td>
                        <td style={{border: "2px solid red"}}>Do what you love. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>You think so?</td>
                        <td style={{border: "2px solid red"}}>You’re imagining things. (♪♪)</td>
                        <td>Confess your sins, my child.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 7</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>That’s almost a relief. (♪♪)</td>
                        <td>Don’t let your guard down.</td>
                        <td style={{border: "2px solid red"}}>It may come down to luck. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Give it your all. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>I believe in you. (♪♪♪)</td>
                        <td>Idols are cool too.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 7.5</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>What do you mean?</td>
                        <td>I don’t understand.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>That won’t work. (♪♪)</td>
                        <td>That’s a great strategy.</td>
                        <td>Do you intend to lose?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Let’s make her reconsider.</td>
                        <td>Let’s do something about it.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>What’s your mother’s name?</td>
                        <td>Tell me her name.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 8</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Maybe... (♪♪)</td>
                        <td>You’re overthinking it.</td>
                        <td style={{border: "2px solid red"}}>I’m glad her heart changed. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Lose what?</td>
                        <td>What’re you talking about?</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>I support it. (♪♪)</td>
                        <td>You should really rethink this.</td>
                        <td>It’s certainly admirable.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 9</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>Give it all you go. (♪♪)</td>
                        <td>Do you feel confident?</td>
                        <td>You can do it.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>It was a good effort.</td>
                        <td>You’ll win next time.</td>
                        <td style={{border: "2px solid red"}}>A very queenly decision. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>I want to become stronger.</td>
                        <td>I want to stay by your side. (Romance)</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>I want us to date. (Romance)</td>
                        <td>We’ll be friends forever.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>Anything for you. (♪♪)</td>
                        <td>It was all a big coincidence. (♪♪)</td>
                        <td>It was love at first sight. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank MAX</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>That’s rough. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>You’ll triumph in the end. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>Just don’t lose. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>You can do it.</td>
                        <td>That’s reassuring.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>So you know.</td>
                        <td>What do you mean?</td>
                        <td>We do.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>Thank you.</td>
                        <td>That’s reassuring.</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>What’s wrong?</td>
                        <td>Are you nervous?</td>
                    </tr>
                </table>
                </div>
                </motion.div>
            </div>
            </motion.div>
        )
    }
}

export default Star