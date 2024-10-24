import { useRouter } from 'next/router';

const Candidates = () => {
    const router = useRouter();
    const { Slug } = router.query;
    const candidatesList = [
        { name: "Dipesh", contact: "8938338383383", linkedinprofile: "abc@linkedin", gmail: "dipesh@gmail.com", jobprofile: "google" },
        { name: "Shyam", contact: "839938499494", linkedinprofile: "abc@linkedin", gmail: "shyam@gmail.com", jobprofile: "google" },
        { name: "Mohan", contact: "78677727273", linkedinprofile: "abc@linkedin", gmail: "mohan@gmail.com", jobprofile: "google" },
        { name: "Jai", contact: "909383838388", linkedinprofile: "abc@linkedin", gmail: "jai@gmail.com", jobprofile: "Samsung" },
        { name: "Fareen", contact: "83737444494", linkedinprofile: "fareen@linkedin", gmail: "fareen@gmail.com", jobprofile: "Amdocs" },
        { name: "Ishita", contact: "868585855894", linkedinprofile: "abc@linkedin", gmail: "ishita@gmail.com", jobprofile: "Amdocs" },
        { name: "Ishita", contact: "868585855894", linkedinprofile: "abc@linkedin", gmail: "ishita@gmail.com", jobprofile: "Flipkart" },
        { name: "Lakshita", contact: "868585855894", linkedinprofile: "abc@linkedin", gmail: "ishita@gmail.com", jobprofile: "Xiomi" },
        { name: "Pooja", contact: "868585855894", linkedinprofile: "abc@linkedin", gmail: "ishita@gmail.com", jobprofile: "Accenture" },
    ];

    
    const candidates = response 
        ? candidatesList.filter(candidate => candidate.jobprofile.toLowerCase() === response.toLowerCase()) 
        : [];

    return (
        <div>
            <h1>Candidates List for: {response}</h1>
            <ul>
                {candidates.length > 0 ? (
                    candidates.map((candidate, index) => (
                        <li key={index}>{candidate.name}</li>
                    ))
                ) : (
                    <li>No candidates available for this job profile.</li>
                )}
            </ul>
        </div>
    );
};

export default Candidates;
