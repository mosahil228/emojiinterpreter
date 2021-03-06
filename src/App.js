import React, { useState } from "react";
import todo from "./todo.png"
import PulseLoader from "react-spinners/PulseLoader";
const App = () => {
  const [name, setName] = useState("Translation will come here!");
  const [input, setInput] = useState("")
  const [menu, setMenu] = useState(true);
  const [btnName, setBtnName] = useState("Show More")
  const [len, setLen] = useState(50);
  const [loading, setLoading] = useState(false);


  var emojiDictionary = {
    "ð": "Grinning Face with Big Eyes",
    "ð": "Grinning Face",
    "ð": "Grinning Face with Smiling Eyes",
    "ð": "Beaming Face with Smiling Eyes",
    "ð": "Grinning Squinting Face",
    "ð": "Grinning Face with Sweat",
    "ðĪĢ": "Rolling on the Floor Laughing",
    "ð": "Face with Tears of Joy",
    "ð": "Slightly Smiling Face",
    "ð": "Upside-Down Face",
    "ð": "Winking Face",
    "ð": "Smiling Face with Smiling Eyes",
    "ð": "Smiling Face with Halo",
    "ðĨ°": "Smiling Face with Hearts",
    "ð": "Smiling Face with Heart-Eyes",
    "ðĪĐ": "Star-Struck",
    "ð": "Face Blowing a Kiss",
    "ð": "Kissing Face",
    "ð": "Skull",
    "â ïļ": "Skull and Crossbones",
    "ðĐ": "Pile of Poo",
    "ðĪĄ": "Clown Face",
    "ðđ": "Ogre",
    "ðš": "Goblin",
    "ðŧ": "Ghost",
    "ð―": "Alien",
    "ðū": "Alien Monster",
    "ðĪ": "Robot",
    "ðĨĄ": "takeout box",
    "âĪïļ": "love",
    "ð": "Speak-No-Evil Monkey",
    "ðĨ": "Collision",
    "ðŦ": "Dizzy",
    "ðĶ": "Sweat Droplets",
    "ðĻ": "Dashing Away",
    "ðĩ": "Monkey Face",
    "ð": "Monkey",
    "ðĶ": "Gorilla",
    "ðĶ§": "Orangutan",
    "ðķ": "Dog Face",
    "ð": "Kissing Face with Closed Eyes",
    "ð": "Kissing Face with Smiling Eyes",
    "ðĨē": "Smiling Face with Tear",
    "ð": "Face Savoring Food",
    "ð": "Face with Tongue",
    "ð": "Winking Face with Tongue",
    "ðĪŠ": "Zany Face",
    "ð": "Squinting Face with Tongue",
    "ðĪ": "Money-Mouth Face",
    "ðĪ": "Smiling Face with Open Hands",
    "ðĪ­": "Face with Hand Over Mouth",
    "ðĪŦ": "Shushing Face",
    "ðĪ": "Thinking Face",
    "ðĪ": "Zipper-Mouth Face",
    "ðĪĻ": "Face with Raised Eyebrow",
    "ð": "Neutral Face",
    "ð": "Expressionless Face",
    "ðķ": "Face Without Mouth",
    "ð": "Smirking Face",
    "ð": "Unamused Face",
    "ð": "Face with Rolling Eyes",
    "ðŽ": "Grimacing Face",
    "ðŪâðĻ": "Face Exhaling",
    "ðĪĨ": "Lying Face",
    "ð": "Relieved Face",
    "ð": "Pensive Face",
    "ðŠ": "Sleepy Face",
    "ðĪĪ": "Drooling Face",
    "ðī": "Sleeping Face",
    "ð·": "Face with Medical Mask",
    "ðĪ": "Face with Thermometer",
    "ðĪ": "Face with Head-Bandage",
    "ðĪĒ": "Nauseated Face",
    "ðĪŪ": "Face Vomiting",
    "ðĪ§": "Sneezing Face",
    "ðĨĩ": "Hot Face",
    "ðĨķ": "Cold Face",
    "ðĨī": "Woozy Face",
    "ðĩ": "Face with Crossed-Out Eyes",
    "ðĩâðŦ": "Face with Spiral Eyes",
    "ðĪŊ": "Exploding Head",
    "ðĪ ": "Cowboy Hat Face",
    "ðĨģ": "Partying Face",
    "ðĨļ": "Disguised Face",
    "ð": "Smiling Face with Sunglasses",
    "ðĪ": "Nerd Face",
    "ð§": "Face with Monocle",
    "ð": "Confused Face",
    "ð": "Worried Face",
    "ð": "Slightly Frowning Face",
    "âđïļ": "Frowning Face",
    "ðŪ": "Face with Open Mouth",
    "ðŊ": "Hushed Face",
    "ðē": "Astonished Face",
    "ðģ": "Flushed Face",
    "ðĨš": "Pleading Face",
    "ðĶ": "Frowning Face with Open Mouth",
    "ð§": "Anguished Face",
    "ðĻ": "Fearful Face",
    "ð°": "Anxious Face with Sweat",
    "ðĨ": "Sad but Relieved Face",
    "ðĒ": "Crying Face",
    "ð­": "Loudly Crying Face",
    "ðą": "Face Screaming in Fear",
    "ð": "Confounded Face",
    "ðĢ": "Persevering Face",
    "ð": "Disappointed Face",
    "ð": "Downcast Face with Sweat",
    "ðĐ": "Weary Face",
    "ðŦ": "Tired Face",
    "ðĨą": "Yawning Face",
    "ðĪ": "Face with Steam From Nose",
    "ðĄ": "Enraged Face",
    "ð ": "Angry Face",
    "ðĪŽ": "Face with Symbols on Mouth",
    "ð": "Smiling Face with Horns",
    "ðŋ": "Angry Face with Horns",
    "ð": "Dog",
    "ðĶŪ": "Guide Dog",
    "ðâðĶš": "Service Dog",
    "ðĐ": "Poodle",
    "ðš": "Wolf",
    "ðĶ": "Fox",
    "ðĶ": "Raccoon",
    "ðą": "Cat Face",
    "ð­": "Mouse Face",
    "ð": "Cat",
    "ðââŽ": "Black Cat",
    "ðĶ": "Lion",
    "ðŊ": "Tiger Face",
    "ð": "Tiger",
    "ð": "Boar",
    "ð": "Grapes",
    "ð": "Melon",
    "ð": "Watermelon",
    "ð": "Tangerine",
    "ð": "Lemon",
    "ð": "Banana",
    "ð": "Pineapple",
    "ðĨ­": "Mango",
    "ð": "Red Apple",
    "ð": "Green Apple",
    "ð": "Pear",
    "ð": "Peach",
    "ð": "Cherries",
    "ð": "Strawberry",
    "ðŦ": "Blueberries",
    "ðĨ": "Kiwi Fruit",
    "ð": "Tomato",
    "ðŦ": "Olive",
    "ðĨĨ": "Coconut",
    "ðĨ": "Avocado",
    "ð": "Eggplant",
    "ðĨ": "Potato",
    "ðĨ": "Carrot",
    "ð―": "Ear of Corn",
    "ðķïļ": "Hot Pepper",
    "ðŦ": "Bell Pepper",
    "ðĨ": "Cucumber",
    "ðĨŽ": "Leafy Green",
    "ðĨĶ": "Broccoli",
    "ð§": "Garlic",
    "ð§": "Onion",
    "ð": "Birthday Cake",
    "ð°": "Shortcake",
    "ð": "Balloon",
    "ð": "Party Popper",
    "ð": "Wrapped Gift",
    "ðŊïļ": "Candle",
    "ðĨ": "Peanuts",
    "ð": "Waving Hand",
    "ðĪ": "Raised Back of Hand",
    "ðïļ": "Hand with Fingers Splayed",
    "â": "Raised Hand",
    "ð": "Vulcan Salute",
    "ð": "OK Hand",
    "ðĪ": "Pinched Fingers",
    "ðĪ": "Pinching Hand",
    "âïļ": "Victory Hand",
    "ðĪ": "Crossed Fingers",
    "ðĪ": "Love-You Gesture",
    "ðĪ": "Sign of the Horns",
    "ðĪ": "Call Me Hand",
    "ð": "Backhand Index Pointing Left",
    "ð": "Backhand Index Pointing Right",
    "ð": "Backhand Index Pointing Up",
    "ð": "Middle Finger",
    "ð": "Backhand Index Pointing Down",
    "âïļ": "Index Pointing Up",
    "ð": "Thumbs Up",
    "ð": "Thumbs Down",
    "â": "Raised Fist",
    "ð": "Oncoming Fist",
    "ðĪ": "Left-Facing Fist",
    "ðĪ": "Right-Facing Fist",
    "ð": "Clapping Hands",
    "ð": "Raising Hands",
    "ð": "Open Hands",
    "ðĪē": "Palms Up Together",
    "ðĪ": "Handshake",
    "ðŠē": "Beetle",

  };
  var length = Object.keys(emojiDictionary).length;

  // console.log(length);

  const toggleMode = () => {
    if (!menu) {
      setMenu(true)
    } else {
      setMenu(false)
    }

  }
  const btnToggle = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

      if (btnName === "Show More" && len === 50) {
        setLen(len + 50);
        setBtnName("Show More")
      }
      if (btnName === "Show More" && len === 100) {
        setLen(len + 50);
        setBtnName("Show More")
      }
      if (btnName === "Show More" && len === 150) {
        setLen(len + (length - len));
        setBtnName("Show Less")

      }
     
      if (btnName === "Show Less") {
        setLen(50);
        setBtnName("Show More")
      }

    }, 800);

  }


  const [transform, settransform] = useState(false);
  const changeColor = () => {
    if (!transform) {
      settransform(true);
    } else {
      settransform(false);
    }
  }
  const clickEmoji = (elem) => {
    var emoji = emojiDictionary[elem];
    setName(emoji)
  }

  const changeInput = (e) => {
    var icon = e.target.value;

    var res = emojiDictionary[icon];
    if (res === undefined) {
      setName("Sorry! We don't have this emoji in our database.")
    } else {
      setName(res)
    }
    if (icon === "") {
      setName("Translation will come here!")
    }

    setInput(icon)
  }
  return (
    <>
      <div className={menu ? "main-div bg1" : "main-div bg2"}>
        <div className="child-div">
          <figure>
            <img src={todo} alt="todologo" />
            <figcaption className={menu ? "b" : "w"}>Emoji Interpreter â</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="&#9787; Emoji here..."
              className="form-control"
              value={input}
              onChange={changeInput}
            />
            <div className="tMain">
              <div className='tDiv' onClick={() => { toggleMode(); changeColor(); }}>
                <div className={transform ? "tBox tBoxX" : "tBox"}></div>
              </div>
            </div>
          </div>
          {/* show our items  */}
          <div className="showItems">
            <div className="eachItem">
              <div className={menu ? "bg4 box1" : "bg3 box1"}>
                {name}
              </div>
              <h1>Emoji's We know</h1>
              <div className="emoji">
                {Object.keys(emojiDictionary).filter((elem, index) => index < len).map((elem, id) => {
                  return <div className="emojiBox" key={id}><span onClick={() => clickEmoji(elem)}>{elem}</span></div>
                })}
              </div>
              <button className="btn" onClick={btnToggle}>{loading ? <PulseLoader
                color={"#fff"} size={8} /> : btnName}</button>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};
export default App;

