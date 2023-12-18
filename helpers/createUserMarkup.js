const createUserMarkup = function (email, password) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="preconnect" href="https://fonts.macpaw.com" crossorigin />
    <link
      rel="stylesheet"
      href="https://fonts.macpaw.com/css?family=FixelText:400;500"
    />
    <title>Create user</title>
    <style>
      div {
        display: flex;
        flex-direction: column;
        font-family: "FixelText";
        min-width: 800px;
        overflow: auto;
        line-height: 1.5;
        margin: 10px auto;
        padding: 20px;
      }
      h1 {
        font-weight: 500;
        font-size: 1.5em;
      }
      p {
        font-weight: 400;
      }
      hr {
        border: none;
        border-top: 1px solid #eee;
      }
    </style>
  </head>
  <body>
    <div>
      <h1>Pomyślnie zarejestrowałeś się w Kosmotek!</h1>
      <p>
       Witamy w świecie smakoszy piękna! Twój login i hasło 
      </p>
      <p>
        Login: ${email} Hasło: KAoRte1pIryna 
      </p>
      <p>
        Hasło: ${password}
      <p style="font-weight: 500">WITAJ W KLUBIE PIĘKNOŚCI KOSMOTEK</p>
    </div>
    <hr />
  </body>
</html>`;
};

module.exports = createUserMarkup;
