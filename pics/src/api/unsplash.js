import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            "Client-ID 78uxrCw82bFXEL1O603RFNrrEHQUZtG7fq1dRfGZ6z4",
    }
});