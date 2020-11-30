exports.handler = async event => {
  try {
    console.log("Payment Success Details", JSON.stringify(event.body))
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Calling Webhook func" }),

    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
