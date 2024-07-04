export const contactFormEmailTemplate = ({
  name,
  email,
  phone,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}) => {
  const template = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!DOCTYPE html>
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
  </head>
  <div
    style="
      display: none;
      overflow: hidden;
      line-height: 1px;
      opacity: 0;
      max-height: 0;
      max-width: 0;
    "
  ></div>
  <body
    style="
      background-color: #f6f9fc;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        'Helvetica Neue', Ubuntu, sans-serif;
    "
  >
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="
        max-width: 37.5em;
        background-color: #ffffff;
        margin: 0 auto;
        padding: 20px 0 48px;
        margin-bottom: 64px;
      "
    >
      <tbody>
        <tr style="width: 100%">
          <td>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="padding: 0 24px"
            >
              <tbody>
                <tr>
                  <td>
                    <center>
                     
                    </center>
                    <hr
                      style="
                        width: 100%;
                        border: none;
                        border-top: 1px solid #eaeaea;
                        border-color: #e6ebf1;
                        margin: 20px 0;
                      "
                    />
                    <h1
                      style="
                        font-size: 24px;
                        line-height: 48px;
                        margin: 16px 0;
                        color: #161616;
                        text-align: left;
                      "
                    >
                      Contact Form
                    </h1>

                    <div style="margin-top: 24px">
                      <p
                        style="
                          font-size: 16px;
                          line-height: 24px;
                          margin: 16px 0;
                          color: #525f7f;
                          text-align: left;
                        "
                      >
                        <strong>Full Name</strong>: ${name}
                      </p>
                      <p
                        style="
                          font-size: 16px;
                          line-height: 24px;
                          margin: 16px 0;
                          color: #525f7f;
                          text-align: left;
                        "
                      >
                        <strong>Email</strong>: ${email}
                      </p>
                       <p
                        style="
                          font-size: 16px;
                          line-height: 24px;
                          margin: 16px 0;
                          color: #525f7f;
                          text-align: left;
                        "
                      >
                        <strong>Phone</strong>: ${phone}
                      </p>
                      <p
                        style="
                          font-size: 16px;
                          line-height: 24px;
                          margin: 16px 0;
                          color: #525f7f;
                          text-align: left;
                        "
                      >
                        <strong>Subject</strong>: ${subject}
                      </p>

                      <p
                        style="
                          font-size: 16px;
                          line-height: 24px;
                          margin: 16px 0;
                          color: #525f7f;
                          text-align: left;
                        "
                      >
                        <strong>Message</strong>: ${message}
                      </p>

                    <hr
                      style="
                        width: 100%;
                        border: none;
                        border-top: 1px solid #eaeaea;
                        border-color: #e6ebf1;
                        margin: 20px 0;
                      "
                    />
                    <p
                      style="
                        font-size: 12px;
                        line-height: 16px;
                        margin: 16px 0;
                        color: #8898aa;
                        text-align: center;
                      "
                    >
                      Copyright © 2024 Vibe IT Solutions
                      All rights reserved.<!-- -->
                    </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
`;

  return template;
};

export const careerFormEmailTemplate = ({
  name,
  email,
  phone,
  positionApplied,
  message,
}: {
  name: string;
  email: string;
  positionApplied: string;
  phone: string;
  message: string;
}) => {
  const template = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!DOCTYPE html>
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
  </head>
  <div
    style="
      display: none;
      overflow: hidden;
      line-height: 1px;
      opacity: 0;
      max-height: 0;
      max-width: 0;
    "
  ></div>
  <body
    style="
      background-color: #f6f9fc;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        'Helvetica Neue', Ubuntu, sans-serif;
    "
  >
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="
        max-width: 37.5em;
        background-color: #ffffff;
        margin: 0 auto;
        padding: 20px 0 48px;
        margin-bottom: 64px;
      "
    >
      <tbody>
        <tr style="width: 100%">
          <td>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="padding: 0 24px"
            >
              <tbody>
                <tr>
                  <td>
                    <center>
                     
                    </center>
                    <hr
                      style="
                        width: 100%;
                        border: none;
                        border-top: 1px solid #eaeaea;
                        border-color: #e6ebf1;
                        margin: 20px 0;
                      "
                    />
                    <h1
                      style="
                        font-size: 24px;
                        line-height: 48px;
                        margin: 16px 0;
                        color: #161616;
                        text-align: left;
                      "
                    >
                      Career Request
                    </h1>

                    <div style="margin-top: 24px">
                      <p
                        style="
                          font-size: 16px;
                          line-height: 24px;
                          margin: 16px 0;
                          color: #525f7f;
                          text-align: left;
                        "
                      >
                        <strong>Full Name</strong>: ${name}
                      </p>
                      <p
                        style="
                          font-size: 16px;
                          line-height: 24px;
                          margin: 16px 0;
                          color: #525f7f;
                          text-align: left;
                        "
                      >
                        <strong>Email</strong>: ${email}
                      </p>
                       <p
                        style="
                          font-size: 16px;
                          line-height: 24px;
                          margin: 16px 0;
                          color: #525f7f;
                          text-align: left;
                        "
                      >
                        <strong>Phone</strong>: ${phone}
                      </p>
                      <p
                        style="
                          font-size: 16px;
                          line-height: 24px;
                          margin: 16px 0;
                          color: #525f7f;
                          text-align: left;
                        "
                      >
                        <strong>Subject</strong>: ${positionApplied}
                      </p>

                      <p
                        style="
                          font-size: 16px;
                          line-height: 24px;
                          margin: 16px 0;
                          color: #525f7f;
                          text-align: left;
                        "
                      >
                        <strong>Message</strong>: ${message}
                      </p>

                    <hr
                      style="
                        width: 100%;
                        border: none;
                        border-top: 1px solid #eaeaea;
                        border-color: #e6ebf1;
                        margin: 20px 0;
                      "
                    />
                    <p
                      style="
                        font-size: 12px;
                        line-height: 16px;
                        margin: 16px 0;
                        color: #8898aa;
                        text-align: center;
                      "
                    >
                      Copyright © 2024 Vibe IT Solutions
                      All rights reserved.<!-- -->
                    </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
`;

  return template;
};
