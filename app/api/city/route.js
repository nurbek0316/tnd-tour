export default async (req, res) => {
    const { name } = req.query;

    const apiKey = process.env.NINJA_API_KEY;

    const response = await fetch(`https://api.api-ninjas.com/v1/city?name=${name}`, {
        headers: {
            'X-Api-Key': apiKey,
        },
    });

    if (!response.ok) {
        const errorData = await response.json();
        res.status(response.status).json(errorData);
        return;
    }

    const data = await response.json();
    res.status(200).json(data);
};
