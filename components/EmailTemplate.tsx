interface EmailTemplateProps {
  url: string;
  host: string;
}

export function EmailHtmlTemplate({ url, host }: EmailTemplateProps) {
  return `
    <body style="background: #f9f9f9;">
      <table width="100%" border="0" cellspacing="20" cellpadding="0"
        style="background: #fff; max-width: 600px; margin: auto; border-radius: 10px;">
        <tr>
          <td align="center"
            style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: #444;">
            Вход на сайт <strong>${host.replace(/\./g, "&#8203;.")}</strong>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding: 20px 0;">
            <table border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" style="border-radius: 5px;" bgcolor="#346df1">
                  <a href="${url}" target="_blank"
                    style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: #fff; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid #346df1; display: inline-block; font-weight: bold;">
                    Войти
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td align="center"
            style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: #444;">
            Если вы не запрашивали вход на сайт, просто проигнорируйте это письмо.
          </td>
        </tr>
      </table>
    </body>
  `;
}

export function EmailTextTemplate({ url, host }: EmailTemplateProps) {
  return `Вход на сайт ${host}\n${url}\n\nЕсли вы не запрашивали вход на сайт, просто проигнорируйте это письмо.`;
}
