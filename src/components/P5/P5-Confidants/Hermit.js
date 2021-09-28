import React from "react";
import { motion } from 'framer-motion';
import "./Confidants.css";

class Hermit extends React.Component{
    render() {
        return(
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className="ConfidantItems">
                <h1 className="conf-header">Hermit</h1>
                <motion.div initial={{scaleY: 0, originY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 1}}>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 2</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>That wouldn’t solve anything.</td>
                        <td style={{border: "2px solid red"}}>That’s a great idea. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>If we work together. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>Want me to help? (♪♪)</td>
                        <td>I don’t know.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Sounds good to me.</td>
                        <td>Can you tell me again? (Repeat)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>I bet it will. (♪♪)</td>
                        <td>I’m not sure.</td>
                        <td>Why not ask him directly?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 3</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>I what?</td>
                        <td>So you’re OK?</td>
                        <td style={{border: "2px solid red"}}>I was about to come find you. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>Good to see you again. (♪♪♪)</td>
                        <td>You’re the one who appeared. (♪♪)</td>
                        <td>You need to be more careful.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>It’ll only get tougher.</td>
                        <td>You will.</td>
                        <td style={{border: "2px solid red"}}>We’ll both do our best. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 4</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Nope. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Let’s do this together. (♪♪♪)</td>
                        <td>If you want.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>No, you’re talented.</td>
                        <td>I bet they were just surprised.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Not at all. (♪♪)</td>
                        <td>Everyone does it. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>I think it’s cute. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>We’ll take it slow. (♪♪)</td>
                        <td>You need more training.</td>
                        <td style={{border: "2px solid red"}}>I’ll help you anytime. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 5</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>He’s in my class.</td>
                        <td>Friend might be a bit much.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>I think you’re right. (♪♪♪)</td>
                        <td>No.</td>
                        <td>Your... what? (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>What’s an NPC? (♪♪)</td>
                        <td>Savage.</td>
                        <td style={{border: "2px solid red"}}>He’s the protagonist. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>You did great. (♪♪)</td>
                        <td>That’s nothing special.</td>
                        <td>Ding! Level up!</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 6</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Were you happy? (♪♪)</td>
                        <td style={{border: "2px solid red"}}>That must have been a shock. (♪♪♪)</td>
                        <td>How did you react?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>You didn’t know any better. (♪♪)</td>
                        <td>Did you apologize to her?</td>
                        <td>Sounds like it was her fault.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Understood.</td>
                        <td>Someone’s pushy today.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Are you running away again? (♪♪)</td>
                        <td>Let’s calm down first.</td>
                        <td>I’m right here with you.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 7</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>What horrible parents. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>We have to put a stop to this. (♪♪)</td>
                        <td>Strange... how?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>I’ll do it, for you. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>We’ll show them the truth. (♪♪♪)</td>
                        <td>Give me some time. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 8</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>That’s incredible. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>I’m glad to hear that. (♪♪♪)</td>
                        <td>Did you stutter at all? (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>You worked really hard too. (♪♪♪)</td>
                        <td>You’re making me blush... (♪♪)</td>
                        <td>Do I get a reward?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Fine by me.</td>
                        <td>That’s all?</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Congrats. (♪♪)</td>
                        <td>You’ve still got more.</td>
                        <td style={{border: "2px solid red"}}>Want more pats? (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 9 </h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>You’ve really matured. (♪♪♪)</td>
                        <td>What if you get bullied again? (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>That doesn’t sound healthy...</td>
                        <td style={{border: "2px solid red"}}>Are you OK, Futaba? (♪♪♪)</td>
                        <td>You’re imagining things. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td style={{border: "2px solid red"}}>If you want. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>No way. (♪♪)</td>
                        <td>You’re giving up?</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>Because we’re teammates.</td>
                        <td>Because I love you. (Romance)</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>I would like that.</td>
                        <td>If thats ok with you.</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td>Um, hello?</td>
                        <td>Is something wrong?</td>
                    </tr>
                    <tr>
                        <th>Response 7</th>
                        <td>Earth to Futaba?</td>
                        <td>Are you still alive?</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>Instant yakisoba.</td>
                        <td>Morgana.</td>
                        <td style={{border: "2px solid red"}}>Do I really have to say it? (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank MAX</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>What are you talking about?</td>
                        <td>Don’t worry about it.</td>
                        <td>...Pardoned?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Mission complete.</td>
                        <td>Nice job, Futaba.</td>
                        <td>You did great.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>I know.</td>
                        <td>I don’t mind.</td>
                        <td>I like being close.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>What’s wrong.</td>
                        <td>Come closer.</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>Take your time. (♪♪♪)</td>
                        <td>You can do this. (♪♪♪)</td>
                        <td>We’ll do it together. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td style={{border: "2px solid red"}}>You can’t lose to her. (♪♪♪)</td>
                        <td>Do you want a job too? (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 7</th>
                        <td>I honor my promises.</td>
                        <td>Just keep it cheap.</td>
                        <td>You remember that?</td>
                    </tr>
                    <tr>
                        <th>Response 8</th>
                        <td>I’m counting on you.</td>
                        <td>That’s a lot of pressure.</td>
                    </tr>
                    <tr>
                        <th>Response 9</th>
                        <td>You already have that right. (♪♪♪)</td>
                        <td>Took you long enough to ask. (♪♪♪)</td>
                        <td>I want that right too. (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                </motion.div>
            </div>
            </motion.div>
        )
    }
}

export default Hermit