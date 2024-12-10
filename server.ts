import { transporter } from "./config/transporter";
import { LoginCodeEmail } from "./templates/login-code";

async function sendMail() {
  const options = {
    from: "rui.marcos@gennius.ao",
    to: "mateusagiar@gmail.com",
    subject: "Seu código secreto chegou!",
    html: LoginCodeEmail({ code: "123456" }),
  };

  await transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
}

sendMail();
