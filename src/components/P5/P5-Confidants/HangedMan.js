import React from "react";
import { motion } from 'framer-motion';
import "./Confidants.css";

class HangedMan extends React.Component{
    render() {
        return(
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className="ConfidantItems">
                <h1 className="conf-header">Hanged Man</h1>
                <motion.div initial={{scaleY: 0, originY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 1}}>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 1</h2>
                <table>
                    <tr>
                        <th>Followup</th>
                        <td>Leave it to me. (♪)</td>
                        <td>As long as it’s safe... (♪)</td>
                        <td style={{border: "2px solid red"}}>So what’s my first job? (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 2</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Maybe I should call him.</td>
                        <td>... Iwai seems sick.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Nothing in particular.</td>
                        <td>I was daydreaming, sorry.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Who was that guy?</td>
                        <td style={{border: "2px solid red"}}>What should I do now? (♪♪)</td>
                        <td style={{border: "2px solid red"}}>How’s your cold? (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 3</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>I know how it feels.</td>
                        <td>Is it seriously that hard?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>I always knew you were a thug. (♪♪♪)</td>
                        <td>Oh. I, uh… have to go.</td>
                        <td>Y-Yakuza!? (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Not really.</td>
                        <td>No, I like that stuff.</td>
                        <td style={{border: "2px solid red"}}>We made a deal, didn’t we? (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>Is that one of your customers?</td>
                        <td>Why are you being so mean?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 4</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Iwai.</td>
                        <td>I can't tell you.</td>
                        <td>It’s none of your business.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>What was that about?</td>
                        <td>So that was Tsuda?</td>
                        <td>What did he mean, “sell” him?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Hong Kong mafia.</td>
                        <td>A 100 million yen deal.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>Give it your all.</td>
                        <td>You two should play nice. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Where’s my reward. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>I agree. (♪♪)</td>
                        <td>Is that a threat?</td>
                        <td>What’s the issue?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 5</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Why not?</td>
                        <td>You shouldn’t lie to your son.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>You’re so kind, Iwai.</td>
                        <td style={{border: "2px solid red"}}>You’re pathetic. (♪♪♪)</td>
                        <td>You should call the cops.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>That’s right. (♪♪)</td>
                        <td>Don’t make assumptions.</td>
                        <td style={{border: "2px solid red"}}>I’ll stick around for the guns. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>You’re right. (♪♪)</td>
                        <td>Is it really all for Kaoru?</td>
                        <td>Well, you got this.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 6</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Why would he say that?</td>
                        <td>No, nothing even close.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>He definitely does.</td>
                        <td>You should ask him.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Our futures. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Girls. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>That’s a secret. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>Right. (♪♪)</td>
                        <td>You should tell him, Iwai.</td>
                        <td style={{border: "2px solid red"}}>You should buy us something. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>He’s my age, so it comes easier. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>All I did was listen to him. (♪♪)</td>
                        <td>It’s part of the job.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 7</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Not at all.</td>
                        <td style={{border: "2px solid red"}}>Absolutely. (♪♪♪)</td>
                        <td>I guess he likes guns? (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>That’s horrible.</td>
                        <td style={{border: "2px solid red"}}>He’s clever. (♪♪♪)</td>
                        <td>What a crafty bastard. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Is Tsuda seriously dangerous?</td>
                        <td>Are you going alone?</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Bring it on. (♪♪)</td>
                        <td>I’m worried...</td>
                        <td>So what’s our first move?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 7.5</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>It most definitely was. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>I did it all for Iwai. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>I will. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>I want to help you. (♪♪)</td>
                        <td>I can't</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>What’s his full name?</td>
                        <td>Tell me his name.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 8</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>It’s not impossible.</td>
                        <td style={{border: "2px solid red"}}>I dunno. (♪♪)</td>
                        <td>He’s matured.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>I’m back, baby. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>I guess I could consider it. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>If you pay me well. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Understood. (♪♪)</td>
                        <td>You worry too much.</td>
                        <td>Now let’s catch him off-guard.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 9</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>That’s great news. (♪♪)</td>
                        <td>I feel bad for him.</td>
                        <td style={{border: "2px solid red"}}>Are you sure he’s alive? (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Who’s Masa?</td>
                        <td>Will Karou be OK?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>We should hurry.</td>
                        <td>Let’s close up shop.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>What’s your goal here, Masa?</td>
                        <td>Cut the bullshit.</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>Tell him the truth. (♪♪♪)</td>
                        <td>You need to trust your son. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td style={{border: "2px solid red"}}>Karou is really strong-willed. (♪♪♪)</td>
                        <td>He gets that maturity from you. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>He’s a cool kid, huh? (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Like father, like son. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Gecko bonds go beyond blood. (♪♪)</td>
                        <td>Why not newts?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank MAX</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>It’s up to you now, Iwai. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>Kaoru won’t lose. (♪♪♪)</td>
                        <td>Iwai’s kind of slow.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>I couldn’t leave him.</td>
                        <td>It was for the special menu.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>It’s a coincidence.</td>
                        <td>Should we close up?</td>
                        <td style={{border: "2px solid red"}}>What if you’re right? (♪♪)</td>
                    </tr>
                </table>
                </div>
                </motion.div>
            </div>
            </motion.div>
        )
    }
}

export default HangedMan