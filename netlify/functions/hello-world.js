exports.handler = async () => {
  return {
    statusCode: 200,
    body: 'hello world!',
  };
};

// exports.handler = async function (event, context) {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ message: "Hello World" }),
//   };
// };