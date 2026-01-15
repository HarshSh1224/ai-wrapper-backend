const generateAIReply = async (req, res) => {
    const { message } = req.body

    // GENAI API INTEGRATION HERE

    await new Promise(resolve => setTimeout(resolve, 5000))

    const aiResponse = "Hello I am AI";

    res.status(500).json({"responseMessage" : aiResponse})
}

module.exports = {
    generateAIReply
}