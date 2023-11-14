const resetPasswordMarkup = function (firstname, link) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="preconnect" href="https://fonts.macpaw.com" crossorigin />
    <link
      rel="stylesheet"
      href="https://fonts.macpaw.com/css?family=FixelText:400;500"
    />
    <title>Your reset link:</title>
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
      a {
        display: flex;
        font-weight: 500;
        font-size: 1.5em;
        background-color: #00466a;
        margin: 10px auto;
        width: max-content;
        padding: 10px ;
        color: #fff;
        border-radius: 4px;
        text-decoration: none;
      }

      a:hover {
        color: rgb(253, 193, 193);
      }
      hr {
        border: none;
        border-top: 1px solid #eee;
      }
    </style>
  </head>
  <body>
    <div>
      <h1>Witaj, ${firstname}</h1>
      <p>
        Otrzymaliśmy prośbę o zresetowanie hasła do Twojego konta Kosmotek. Użyj
        tego linku w ciągu 5 minut, aby odzyskać hasło.
      </p>
      <a href="${link}" target="_blank">RESET PASSWORD</a>
      <p>
        Jeśli nie prosiłeś o zresetowanie hasła, po prostu zignoruj tę wiadomość.
      </p>
      <p style="font-weight: 500">Z poważaniem, Kosmotek</p>
    </div>
    <hr />
  </body>
</html>`;
};

module.exports = resetPasswordMarkup;
