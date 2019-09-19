var botui = new BotUI('botui-app'); // give it the id of container

botui.message.bot({ // show first message
  delay: 200,
  loading: true,
  content: "Awesome! Ok, let's get started"
}).then(function () {
  return botui.message.bot({ // second one
    delay: 2000, // wait 1 sec.
    loading: true,
    content: 'how are you feeling today?'
  });
}).then(function () {
  return botui.action.button({ // let user do something
    delay: 1000,
    action: [
      {
        text: 'Explorer',
        value: 'explorer'
      },
      {
        text: 'Chilly',
        value: 'chilly'
      },
      {
        text: 'Party! Party!',
        value: 'party party'
      }
    ]
  });
}).then(function (res) {
  return botui.message.bot({
    delay: 2000,
    loading: true,
    content: 'Great! Your mood is ' + res.value + '!'
  });
}).then(function (res) {
  return botui.message.bot({
    delay: 2000,
    loading: true,
    content: 'And what is your budget for today?'
  });
}).then(function () {
  return botui.action.button({ // let user do something
    delay: 1000,
    action: [
      {
        text: '$',
        value: '$'
      },
      {
        text: '$$',
        value: '$$'
      },
      {
        text: '$$$',
        value: '$$$'
      }
    ]
  });
}).then(function (res) {
  return botui.message.bot({
    delay: 2000,
    loading: true,
    content: 'Nice! Your budget is ' + res.text
  });
}).then(function (res) {
  return botui.message.bot({
    delay: 2000,
    loading: true,
    content: "A few ideas started to pop here! I'm feeling sharp :)"
  });
}).then(function (res) {
  return botui.message.bot({
    delay: 2000,
    loading: true,
    content: "One last question and I'll feel comfortable to suggest you something, who are you travelling with?"
  });
}).then(function () {
  return botui.action.button({ // let user do something
    delay: 1000,
    action: [
      {
        text: 'On my own',
        value: 'on your own'
      },
      {
        text: 'With gang',
        value: 'with gang'
      },
      {
        text: 'Significant one',
        value: 'significant one'
      },
      {
        text: 'Family + Kids',
        value: 'family + kids'
      }
    ]
  });
}).then(function (res) {
  return botui.message.bot({
    delay: 2000,
    loading: true,
    content: "Great! We have some places to suggest for your travel with " + res.value + ", I hope you have a wonderful journey :D"
  });
})


  .then(function () {

    return botui.action.button({ // let user do something
      delay: 1000,
      action: [
        {
          text: 'Click me for next page',
          value: 'Click me for next page'
        }
      ]
    });
  }).then(function (res) {
    document.getElementById('loader').style.display = 'block';
    document.getElementById('botui-app').style.display = 'none';

    $(document).ready(function () {
      $("#div3").fadeIn(2000);
    });

    setTimeout(
      function () {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('div3').style.display = 'block';
      }, 100);
  });