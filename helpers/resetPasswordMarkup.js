const resetPasswordMarkup = function (link) {
  return `<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Your reset link:</title>
</head>
<body>
<!-- partial:index.partial.html -->
<div style="font-family: Helvetica,Arial,sans-serif;min-width:800px;overflow:auto;line-height:2">
  <div style="margin:10px auto;width:70%;padding:20px 0">
    <p style="font-size:1.1em">Hi,</p>
    <p>Use the following link to complete your Password Recovery Procedure. Link is valid for 5 minutes</p>
    <a href="${link}" target="_blank" style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">RESET PASSWORD LINK</a>
    <hr style="border:none;border-top:1px solid #eee" />
  </div>
</div>
<!-- partial -->
  
</body>
</html>`;
};

module.exports = resetPasswordMarkup;
