// pages/api/generateEmail.js
/*export default async function handler(req, res) {
    const { candidateName, jobTitle, companyName } = req.body;
  
    try {
      const response = await fetch('https://gemini.googleapis.com/v1beta/generateText', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.GEMINI_API_KEY}`, // Store in environment variable
        },
        body: JSON.stringify({
          model: "gemini-1",
          prompt: {
            messages: [
              {
                role: "system",
                content: "You are an assistant generating professional job opportunity emails.",
              },
              {
                role: "user",
                content: `Write an email inviting ${candidateName} to apply for the ${jobTitle} position at ${companyName}. Include a friendly tone and basic details.`,
              },
            ],
          },
          max_output_tokens: 200,
        }),
      });
  
      const data = await response.json();
      const emailBody = data.candidates[0]?.output || "Email generation failed";
  
      res.status(200).json({ emailBody });
    } catch (error) {
      console.error("Error generating email:", error);
      res.status(500).json({ error: "Failed to generate email" });
    }
  }*/
 // pages/api/generateEmail.js

/*export default async function handler(req, res) {
    const { candidateName, jobTitle, companyName } = req.body;
  
    try {
      const response = await fetch('https://gemini.googleapis.com/v1beta/generateText', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `AIzaSyD4E-kNFBZD-VIi_j5h-wEs3KqAH9DelKU`, // Embed the API key directly
        },
        body: JSON.stringify({
          model: "gemini-1",
          prompt: {
            messages: [
              {
                role: "system",
                content: "You are an assistant generating professional job opportunity emails.",
              },
              {
                role: "user",
                content: `Write an email inviting ${candidateName} to apply for the ${jobTitle} position at ${companyName}. Include a friendly tone and basic details.`,
              },
            ],
          },
          max_output_tokens: 200,
        }),
      });
  
      const data = await response.json();
      const emailBody = data.candidates[0]?.output || "Email generation failed";
  
      res.status(200).json({ emailBody });
    } catch (error) {
      console.error("Error generating email:", error);
      res.status(500).json({ error: "Failed to generate email" });
    }
  }*/
 // pages/api/generateEmail.js
export default async function handler(req, res) {
    const { candidateName, jobTitle, companyName } = req.body;
    console.log("Backend is working",candidateName)
    try {
        const response = await fetch('https://gemini.googleapis.com/v1beta/generateText', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:  'AIzaSyD4E-kNFBZD-VIi_j5h-wEs3KqAH9DelKU', // Directly embedding the API key
            },
            body: JSON.stringify({
                model: "gemini-1",
                prompt: {
                    messages: [
                        {
                            role: "system",
                            content: "You are an assistant generating professional job opportunity emails.",
                        },
                        {
                            role: "user",
                            content: `Write an email inviting ${candidateName} to apply for the ${jobTitle} position at ${companyName}. Include a friendly tone and basic details.`,
                        },
                    ],
                },
                max_output_tokens: 200,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const emailBody = data.candidates[0]?.output || "Email generation failed";

        res.status(200).json({ emailBody });
    } catch (error) {
        console.error("Error generating email:", error);
        res.status(500).json({ error: "Failed to generate email" });
    }
}

  
  