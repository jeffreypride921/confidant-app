import React from "react";
import { motion } from 'framer-motion';

class Justice extends React.Component{
    render(){
        return(
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className="ConfidantItems">
                <h1 className="conf-header">Justice</h1>
                <motion.div initial={{scaleY: 0, originY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 1}}>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 2</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>You always seem so busy. (♪♪)</td>
                        <td>Do you have no friends?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Is that your win?</td>
                        <td>Not bad.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Shoot very carefully. (♪♪)</td>
                        <td>I’ll go for a power shot. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>You used your right hand.</td>
                        <td>...Aren’t you left-handed?</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>Maybe i’ll be a detective. (♪♪)</td>
                        <td>No holding back next time. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>I see a lot of things. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>Sure.</td>
                        <td>I’ll think about it.</td>
                        <td style={{border: "2px solid red"}}>As rivals? (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 3</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Got a sweet tooth, huh?</td>
                        <td>Come here often?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>Should’ve figured. (♪♪♪)</td>
                        <td>Your life must be so hard. (♪♪)</td>
                        <td>I can shoo them away...</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>You’ve done nothing wrong.</td>
                        <td>Why the rush?</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>How about we find out?</td>
                        <td>Come here a sec.</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>You looked great.</td>
                        <td>It was a necessary evil.</td>
                        <td>I should’ve taken a picture.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>That was careless, huh?</td>
                        <td style={{border: "2px solid red"}}>Wasn’t it fun? (♪♪)</td>
                        <td>I can always dress you up again.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 4</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>What kind of place is this?</td>
                        <td>This looks shady...</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Do they have coffee? (♪♪)</td>
                        <td>But I’m underage.</td>
                        <td style={{border: "2px solid red"}}>Now this is my kind of club. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td style={{border: "2px solid red"}}>Any recommendations? (♪♪♪)</td>
                        <td>Anything’s fine by me. (♪♪)</td>
                        <td>An ice-cold beer for me.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td style={{border: "2px solid red"}}>It’s a great place. (♪♪)</td>
                        <td>I feel a bit nervous.</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>A run-down cafe.</td>
                        <td>A shop with great coffee.</td>
                        <td>I live there, actually.</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td style={{border: "2px solid red"}}>Pretty frequently. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>I can use a microwave. (♪♪♪)</td>
                        <td>All I need is curry. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>What are you talking about?</td>
                        <td style={{border: "2px solid red"}}>I kinda get it. (♪♪)</td>
                        <td>You really are having fun.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 5</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>All the time.</td>
                        <td>I’m not great at them.</td>
                        <td>Have you played any?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>Are you used to gunplay? (♪♪)</td>
                        <td>You took that seriously, huh.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td style={{border: "2px solid red"}}>You wanted to be a hero? (♪♪♪)</td>
                        <td>Very interesting. (♪♪)</td>
                        <td>Hard to imagine.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>Sticking to your justice.</td>
                        <td>Doing what people want.</td>
                        <td>Neither, really.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>You did fine. (♪♪)</td>
                        <td>You’ve got a long way to go. (♪♪)</td>
                        <td>You were getting cocky. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 6</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>So relaxing... (♪♪)</td>
                        <td>Seeing you here is weird.</td>
                        <td style={{border: "2px solid red"}}>A while, huh? (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>That was horrible of her.</td>
                        <td style={{border: "2px solid red"}}>You’ve been through a lot. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td style={{border: "2px solid red"}}>This is nothing. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>I’ll stay until you’re ready. (♪♪♪)</td>
                        <td>Are YOU okay? (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td style={{border: "2px solid red"}}>Same. (♪♪♪)</td>
                        <td>I’m just fine.</td>
                        <td>Guess I win. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>Because we get along. (♪♪)</td>
                        <td>Because we’re similar. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td style={{border: "2px solid red"}}>I think you’re right. (♪♪♪)</td>
                        <td>I don’t know about that.</td>
                        <td>Can I put my clothes on? (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>True.</td>
                        <td>They’d probably love it.</td>
                        <td style={{border: "2px solid red"}}>My bad, I guess. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 7</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Yeah, it’s convoluted. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>That’s why it’s so fun. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>The psychotic breakdowns.</td>
                        <td>What’re you getting at?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>I’ve made up my mind.</td>
                        <td>I won’t miss my shot.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>It’s thanks to you. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>I couldn’t let myself lose. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>But we’re teammates now. </td>
                        <td>Want to join us?</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td>I’ll think about it.</td>
                        <td>I’m not doing that.</td>
                        <td>You’re my rival.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>Do I?</td>
                        <td>I don’t know.</td>
                        <td style={{border: "2px solid red"}}>We’re rivals, aren’t we? (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 8</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>What’d you want to discuss?</td>
                        <td>Why are we in Mementos?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>I thought you meant in pool.</td>
                        <td>You want to fight?</td>
                        <td>But why, though?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>All right.</td>
                        <td>Let’s do this.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>Are you satisfied?</td>
                        <td>Was that all you got?</td>
                        <td>Do you want to keep going?</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>I’d say the same for you.</td>
                        <td>The feeling mutual.</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td style={{border: "2px solid red"}}>I definitely wouldn’t lose. (♪♪♪)</td>
                        <td>I don’t know.</td>
                        <td>Probably.</td>
                    </tr>
                    <tr>
                        <th>Response 7</th>
                        <td>Same here.</td>
                        <td style={{border: "2px solid red"}}>Really hate losing, don’t you. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 8</th>
                        <td>I accept.</td>
                        <td>Let me think about it.</td>
                    </tr>
                </table>
                </div>
                </motion.div>
            </div>
            </motion.div>
        )
    }
}

export default Justice