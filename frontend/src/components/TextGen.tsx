import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown"; // Import the react-markdown library

const TextGen = () => {
    const [input, setInput] = useState(""); 
    const [chat, setChat] = useState<{ question: string; response: string }[]>([]); // For storing conversation
    const [loading, setLoading] = useState(false); 

    const handleSend = async () => {
        if (!input.trim()) return; // Prevent sending empty messages

        // Add question to the chat
        const newMessage = { question: input, response: "" };
        setChat((prev) => [...prev, newMessage]);

        setLoading(true);

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/models/text`, {
                question: input,
            });

            const reply = response.data.content || "No response available."; // Replace with the actual response field
            setChat((prev) => {
                const updatedChat = [...prev];
                updatedChat[updatedChat.length - 1].response = reply;
                return updatedChat;
            });
        } catch (error) {
            console.error(error);
            setChat((prev) => {
                const updatedChat = [...prev];
                updatedChat[updatedChat.length - 1].response =
                    "Error fetching response. Please try again.";
                return updatedChat;
            });
        }

        setInput(""); // Clear input
        setLoading(false); // Stop loading
    };

    return (
        <div className="flex flex-col bg-gray-900 p-6 h-96 rounded-xl shadow-lg">
            {/* Chatbox */}
            <div className="flex-1 overflow-y-auto mb-4 p-4 bg-gray-800 rounded-lg">
                {chat.length === 0 && (
                    <p className="text-gray-400 text-center">
                        Start a conversation by asking a question!
                    </p>
                )}
                {chat.map((message, index) => (
                    <div key={index} className="mb-4">
                        {/* Question */}
                        <div className="text-right">
                            <p className="inline-block bg-blue-500 text-white p-3 rounded-lg shadow-sm max-w-xs">
                                {message.question}
                            </p>
                        </div>
                        {/* Response */}
                        {message.response && (
                            <div className="text-left mt-2">
                                <p className="inline-block bg-gray-700 text-white p-3 rounded-lg shadow-sm max-w-xs">
                                    <ReactMarkdown>{message.response}</ReactMarkdown>
                                </p>
                            </div>
                        )}
                    </div>
                ))}
                {loading && (
                    <div className="text-left mt-2">
                        <p className="inline-block bg-gray-700 text-white p-3 rounded-lg shadow-sm max-w-xs">
                            Generating response...
                        </p>
                    </div>
                )}
            </div>

            {/* Input Box */}
            <div className="flex items-center gap-3">
                <input
                    type="text"
                    className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Type your question here..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button
                    className={`px-4 py-2 rounded-lg ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500"
                        } text-white`}
                    onClick={handleSend}
                    disabled={loading}
                >
                    {loading ? "Sending..." : "Send"}
                </button>
            </div>
        </div>
    );
};

export default TextGen;
