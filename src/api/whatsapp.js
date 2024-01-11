import axios from "axios";

const URL = "https://api.wali.chat/v1/messages";
const TOKEN =
  "835ac4f7ad92f19861c62080e5ba5ca55bd25ab587282ad13d0340963812928b13eee3960ef12ceb";

export const sendMessage = async (message, phonNumber) => {
  const formatedNumber =
    phonNumber.length === 9 ? `+51${phonNumber}` : phonNumber;

  const body = {
    message,
    phone_number: phonNumber,
  };

  //   const headers = {
  //     "Content-Type": "application/json",
  //     Token: TOKEN,
  //   };
  const headers = [
    {
      key: "Content-Type",
      value: "application/json",
    },
    {
      key: "Token",
      value: TOKEN,
    },
  ];

  const options = {
    method: "POST",
    url: URL,
    headers,
    body: JSON.stringify(body),
    data: {
      phone: formatedNumber,
      message,
    },
  };

  try {
    const response = await axios(options);
    return response;
  } catch (error) {
    return error;
  }
};
