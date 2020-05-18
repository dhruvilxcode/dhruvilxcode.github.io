loadEmoji();

function loadEmoji() {
    var emojis = ['🙄','🤔','🚀','😎','🔥','❄','💻','😍','😀','😊','🖐','🤷‍♀️','👩🏻‍💻','👨🏻‍💻','🚴🏻‍♀️','🚴🏻‍♂️'];

    emojis = shuffle(emojis)
    document.getElementById("title").innerHTML = "Hi Coder<br>" + emojis[Math.floor(Math.random() * emojis.length)]
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}